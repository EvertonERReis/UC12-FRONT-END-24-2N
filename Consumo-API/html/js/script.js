
// 1) Pegando elementos do html

// botão para buscar novo pet ⬇️
const botao = document.getElementById("btnBuscar");

// local onde o pet aparecera ⬇️
const petBox = document.getElementById("petBox");

// div onde os pets favoritos aparecerao ⬇️
const divFavoritos = document.getElementById("favoritos");

// 2) sistema de favoritos com locastorege (que e uma especie de armazenamento do navegador)

// carrega os favoritos salvos ou cria uma array vazio caso não extistam

let favoritos = JSON.parse(localStorage.getItem("favortios")) || []

// exibe os favoritos na tela ao carregar a pagina
atualizarFavoritos()