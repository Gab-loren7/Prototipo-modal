/* 
    -> OBS:
    - O document.queryselector() chama o ID usado no 'CSS'

    - O addEventListener() método anexa um manipulador de eventos a um elemento.

    - O forEach() é um método onde pega todos os elementos da array e resume em "el" e adiciona o evento de click
*/

// -> Puxando os elementos em variaveis
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

// -> Cria uma função para método toggle(Se a classe está ela é removida, se não está ela é criada)
const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

// -> Faz o efeito de click nessas classes para abrir e fechar
[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});
// OBS: Todos os elementos dentro da array tem efeito de click