// criando as variáveis que "guardam" as informações dos quadrados
let q1 = document.getElementById("quadrado1");
let q2 = document.getElementById("quadrado2");
let q3 = document.getElementById("quadrado3");

// cada um dos eventos a seguir serve para cada um dos quadrados mudarem de cor quando clicados
q1.addEventListener("click", function(){
    if (q1.style.backgroundColor === "red") {
        q1.style.backgroundColor = "blue"
    } else {
        q1.style.backgroundColor = "red"
    }
})

q2.addEventListener("click", function(){
    if (q2.style.backgroundColor === "red") {
        q2.style.backgroundColor = "rgb(255, 0, 217)"
    } else {
        q2.style.backgroundColor = "red"
    }
})

q3.addEventListener("click", function(){
    if (q3.style.backgroundColor === "red") {
        q3.style.backgroundColor = "rgb(122, 0, 51)"
    } else {
        q3.style.backgroundColor = "red"
    }
})