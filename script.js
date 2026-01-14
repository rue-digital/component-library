var modal = document.querySelector(".modal");
var modalContent = document.querySelector(".modal-content");
var closeBtn = document.querySelector(".close");
var cells = document.querySelectorAll(".child-cell");
let lastFocusCell = null;

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

cells.forEach(cell => {

    // event is fired when cell is clicked. mouse access
    cell.addEventListener('click', async() => {

        // fetches componentFile for corresponding cell
        const componentName = cell.innerHTML;
        const componentFile = componentFiles[componentName];

        try{
            const htmlContent = await (await fetch(componentFile)).text();
            modalContent.innerHTML = componentFile ? htmlContent : `<div>cannot find file</div>`;
        }catch(err){
            modalContent.innerHTML = `<div>Error loading file</div>`;
        }

        modal.showModal();
        closeBtn.focus();
    });

    // event is fired when 'Enter' key is pressed. keyboard access
    cell.addEventListener('keydown', (e) => {
        if (e.key === 'Enter'){ 
            setFocus(cell);
            cell.click();
        }
    });
});

function setFocus(cell){
    lastFocusCell = cell;
}

// on modal close, hide modal and add activate pointer and keyboard interaction
function closeModal() {
    modal.close();

    if(lastFocusCell){
        lastFocusCell.focus();
    }
}