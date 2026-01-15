var modal = document.querySelector(".modal");
var modalContent = document.querySelector(".modal-content");


async function openModal(cellFileName){
    const componentFile = "components/" + cellFileName + '.html';

    try{
        const htmlContent = await (await fetch(componentFile)).text();
        modalContent.innerHTML = componentFile ? htmlContent : `<div>cannot find file</div>`;
    }catch(err){
        modalContent.innerHTML = `<div>Error loading file</div>`;
    }

    modal.showModal();
}


// on modal close, hide modal
function closeModal() {
    modal.close();
}