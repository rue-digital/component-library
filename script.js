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

        // removes hover effect and tabbing onces a cell is clicked
        cells.forEach(cell => {
            cell.style.pointerEvents='none';
            // cell.removeAttribute('tabindex');
        });

        const componentName = c.innerHTML;
        const componentFile = componentFiles[componentName];

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

    c.addEventListener('keydown', (e) => {
        if (e.key === 'Enter'){ c.click();}
    });
});

// on modal close, hide modal and add activate pointer and keyboard interaction
function closeModal() {
    modal.style.display = "none";
    cells.forEach(cell => {
        cell.style.pointerEvents='auto';
        // cell.setAttribute('tabindex', '0');
    });
}

// when close button is clicked, call closeModal()
closeBtn.addEventListener('click', closeModal);

// when user presses Escape key, call closeModal()
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {closeModal();}
});
