const cards = document.querySelectorAll(".card-projeto");

// ABRIR CARDS
cards.forEach(card => {
    card.addEventListener("click", e => {
        let elemento_clicado = e.target;

        while (elemento_clicado.classList.contains("card-projeto") == false) {
            elemento_clicado = elemento_clicado.parentNode;
        }

        const diretorio = elemento_clicado.getAttribute("data-dir");
        const area_modal = document.querySelector("#projetos .area-modal-projetos");

        const image_element = area_modal.querySelector("img");
        image_element.src = diretorio;

        area_modal.classList.add("show")
    })
});

// FECHAR CARDS
const btns_fechar = document.querySelectorAll(".btn-close-modal-projetos");

btns_fechar.forEach(button => {
    button.addEventListener("click", e => {
        const area_modal = document.querySelector("#projetos .area-modal-projetos");

        if(area_modal.classList.contains("show")){
            area_modal.classList.remove("show");
        }
    })
})