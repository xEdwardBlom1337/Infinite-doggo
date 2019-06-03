window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.onload = function() {
    document.getElementById("infini-p").innerHTML = "            /)-_-(\\\r\n             (o o) \r\n     .-----__/\\o/  \r\n    /  __      /   \r\n\\__/\\ /  \\_\\\ |/    \r\n     \\\\     ||     \r\n     |/     ||     \r\n     ||     ||     \r\n     ||     ||     ";
}

window.onscroll = function() {
    let body = document.body;
    let height = body.offsetHeight;
    console.log(height - window.innerHeight);
    console.log(window.pageYOffset);
    console.log("");
    

    if (height - window.innerHeight <= window.pageYOffset) {
        document.getElementById("infini-p").innerHTML += "\r\n     ||     ||     "
        body.style.height = height + 25 + "px";
    }
}