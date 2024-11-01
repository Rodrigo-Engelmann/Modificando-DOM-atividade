// criando as variáveis que "guardam" as informações dos quadrados
let text = document.getElementById("text")

// evento "onkeydown" que identifica quando alguma tecla for clicada pelo usuário par aem seguida intentificá-la e informá-la no texto html
onkeydown = (event) => {
    text.innerHTML = `Você pressionou: ${event.key}`
};

