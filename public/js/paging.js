
function paging (toTalData, currentPage) {
    const dataPerPage = 10;
    const PageCount = 5;

    //총페이지 수 ;
    const tatalPage =Math.ceil(totalData / dataPerPage);
    ///페이지 그룹 ;
    const PageGroup = Math.ceil(currentPage / pageCount);
    //화면에 보여지게 되는 마지막 페이지의 번호 ;
    let lastPage =pageGroup * pageCount;

    if (last > totalPage)
        last =totalPage;

    let firstPage = lastPage = (pageCount  = 1) ;     //화면에 보여지는 첫번째 페이지 번호;

    const next = lastPage + 1 ; 
    const prev = firstPage - 1 ; 
    
    if (totalPage < 1) {
        firstPage  -  lastPage ; 
    }
    const pages = $("#pages"); 
    pages.empty(); 
    if (firstPage > 5) {
        pages.append("<li class=\" pagination-item\">" +  "<a onclick= \ GetTarget(" + (prev) + ");\" style= 'margin-left : 2px'>prev</a></li>");
    }""
    for (let j = firstPage; j <= lastPage; j++) {
        if(currentPage  === (j)) {
            pages,append("<li class \"pagination-item\">" + ''<a class= "active" onclick= \GetTarget(" + (j) + ");\" style ='margin-left: 2px'>" + (j) + "</a></li>"); 
        } else if (j > 0) {
            pages.append("<li class = \"pagination-item\">" +  "<a onclick=\GetTarget(" + (j) + ");\" style='margin-left: 2px; '>"+ (j) + "</a></li>");
        }
    } 
    if ( next > 5 && next < totalPage) {
        pages.append("<li class= \"GetTarget(" + (next) + ");\" style = 'margin-left: 2px'>next</a></li>");
    }
}