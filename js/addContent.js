
function commit() {
    var writer = document.getElementById("name"); 
    var title = document.getElementById("title");
    var content  = document.getElementById("content");
 
    var text = "" ; 
    text += "날짜 : " +  date.value + "\n작성자 : " +  writer.value + "\n제목 :" +title.value + "\n"; 

}
