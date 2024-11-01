// criando as variáveis que "guardam" as informações dos elementos html
let mo = document.getElementById("mo")
let text = document.getElementById("text")

// evento que identifica cliques com o intuito de mostrar e também de ocultar o texto. 
mo.addEventListener("click", function(){
    if (text.style.visibility === "visible") {
        text.style.visibility = "hidden";
    } else{
        text.style.visibility = "visible"
    }
})