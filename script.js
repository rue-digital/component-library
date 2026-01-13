var modal = document.querySelector(".modal");
var modalContent = document.querySelector(".modal-content");
var closeBtn = document.querySelector(".close");
var cells = document.querySelectorAll(".child-cell");

const componentFiles = {
    "base document structure": "components/base-document.html",
    "navigation": "components/navigation.html",
    "button": "components/button.html",
    "blockquote": "components/blockquote.html",
    "tabs": "components/tabs.html",
    "color picker": "components/color-picker.html",
    "skip link": "components/skip-link.html",
    "forms": "components/forms.html",
    "&lt;a&gt; (anchor)": "components/anchor.html",
    "details": "components/details.html"
};

cells.forEach(c => {
    c.addEventListener('click', async() => {

        // removes hover effect onces a cell is clicked
        cells.forEach(cell => {cell.style.pointerEvents='none';});

        const componentName = c.innerHTML;
        const componentFile = componentFiles[componentName];
        // console.log(componentName);
        // console.log(componentFile);

        if(componentFile){
            try{
                const htmlContent = await (await fetch(componentFile)).text();
                modalContent.innerHTML = htmlContent;
                modal.style.display = 'flex';

            }catch(err){
                modalContent.innerHTML = `<div>Error loading file</div>`;
                modal.style.display = 'flex';
            }
        }else{
            modalContent.innerHTML = `<div>cannot find file</div>`;
        }
        modal.style.display = 'flex';
    });
});

// on button close, hide modal and allow grid hover effects.
closeBtn.onclick = function() {
    modal.style.display = "none";
    cells.forEach(cell => {cell.style.pointerEvents='auto';});
}
