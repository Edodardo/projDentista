const btnAbrir = document.getElementById("contato")
const btnFechar = document.getElementById("fecharBox")
const contatoBox = document.getElementById("contatoBox")

btnAbrir.addEventListener("click", () => {
    contatoBox.classList.add("open");
})

btnFechar.addEventListener("click", () => {
    contatoBox.classList.remove("open");
})