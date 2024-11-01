// criando as variáveis que "guardam" as informações dos elementos html
let text = document.getElementById("text")
let mt = document.getElementById("mt")

// função que identifica quando o usuário clica no botão mostrado no html, ele modifica de acordo com um promp do usuário o texto da tag "p" presente também no html.
mt.addEventListener("click", function(){
    let textAlterado = prompt("Digite a seguir um texto para substituir o presente na página")
    text.innerText = textAlterado
})