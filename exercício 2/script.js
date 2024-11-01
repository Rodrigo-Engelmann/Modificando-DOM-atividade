// criando as variáveis que "guardam" as informações dos elementos html
let text = document.getElementById("text");
let cc = document.getElementById("cc");
let rt = document.getElementById("rt");
let i = 0;

// eventos para resetar (rt) e somar a contagem de cliques (cc)
cc.addEventListener("click", function(){
    i++
    text.innerText = `Cliques totais: ${i}`
})

rt.addEventListener("click", function(){
    i = 0
    text.innerText = `Cliques totais: ${i}`
})