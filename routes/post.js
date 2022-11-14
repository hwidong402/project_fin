var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var fs = require('fs')
var ejs = require('ejs')
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }))


router.get("/list",(req,res) => {
    
    fs.readFile('community.html', 'utf-8', function (error, data) {
        if (error) {
            console.log("ejs오류" + error);
            return
        }

        var queryString = 'select * from board';
        getConnection().query(queryString,  function (error, result) {
            if (error) {
                console.log("페이징 에러" + error);
                return
            }
            console.log(result);
            res.send(ejs.render(data, {data: result}));
    })})
});
router.get("/post",(req,res) => {
    
    fs.readFile('addcontents.html', 'utf-8', function (error, data) {
        res.send(data);
    })
});

router.get("/cal",(req,res) => {
    
    fs.readFile('Calorie.html', 'utf-8', function (error, data) {
        res.send(data);
    })
});

router.get("/bmi",(req,res) => {
    
    fs.readFile('BMI.html', 'utf-8', function (error, data) {
        res.send(data);
    })
});

router.get("/home",(req,res) => {
    
    fs.readFile('index.html', 'utf-8', function (error, data) {
        res.send(data);
    })
});

router.get("/exer",(req,res) => {
    
    fs.readFile('exercise.html', 'utf-8', function (error, data) {
        res.send(data);
    })
});

router.post("/insert",(req,res) => {
    console.log("삽입 포스트 데이터 진행")
    var body = req.body;
    console.log(body);
    getConnection().query('insert into board (author,postdate,title,context) values(?,now(),?,?)', [body.author, body.title, body.context], function () {
        //응답
        res.redirect('/list')
    })
});


//mysql db 연결 함수

var pool = mysql.createPool({
    connectionLimit: 2,
    host: 'wongyun-d-jobinfo.cqpgjoevtrma.ap-northeast-2.rds.amazonaws.com',
    user: 'jiwoo',
    database: 'project',
    password: 'jiwoo123'
})



//디비 연결 함수
function getConnection() {
    return pool
}


module.exports = router