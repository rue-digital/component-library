var modal = document.getElementsByClassName("modal");
var modalContainer = document.getElementsByClassName("modal-container");
var closeBtn = document.getElementsByClassName("close");
var cells = document.querySelectorAll(".child-cell");

const componentFiles = {
    "base document structure": "components/base-document.html",
    "navigation": "components/navigation.html",
    "button": "components/button.html"
}


span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal){
        modal.style.display = "none";
    }
}