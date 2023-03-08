document.onreadystatechange = function () {
    const lady = document.querySelectorAll('.lady');
    lady.forEach(e => e.addEventListener("click", function () {
        location.href = "2.html";
    }))
    const top = document.querySelectorAll('.leader-boarding > .top > .avatar > .avt');
    top.forEach(e => e.addEventListener("click", function () {
        location.href = "2.html";
    }))
    const iconSearch = document.querySelector('.icon-search');
    const inputSearch = document.querySelector('.search-bar .search');
    iconSearch.addEventListener("click", function () {
        inputSearch.style.opacity = 1;
        iconSearch.style.display = "none"
    })






}