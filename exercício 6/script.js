let votar = document.getElementById("votar")
let imagem = document.getElementById("imagem");
let nomeCandidato = document.getElementById("nomeCandidato")
let numCandidato = undefined;

let countFufa = 0;
let countGustavo = 0;
let countRaizer = 0;

votar.addEventListener("click", function(){
    console.log(`A quantidade d evotos em Fufa: ${countFufa}`)
    console.log(`A quantidade d evotos em Gustavo Finck: ${countGustavo}`)
    console.log(`A quantidade d evotos em Raizer Ferreira: ${countRaizer}`)

    if (numCandidato == undefined) {
        numCandidato = Number(prompt("Qual o número de seu candidato?\n13 - Fufa\n11 - Gustavo Finck\n45 - Raizer Ferreira\nNúmero indisponível - Nulo"))
        switch (numCandidato){
            case 13:
                imagem.src = "./Assets/fufa.jpeg";
                imagem.style.display = "inline"
                imagem.style.visibility = "visible";
                nomeCandidato.innerText = "Nome do candidato: Fufa"
                votar.innerHTML="CONFIRMAR VOTO";
                countFufa++;
                break;

            case 11:
                imagem.src = "./Assets/gustavo finck.jpg";
                imagem.style.display = "inline"
                imagem.style.visibility = "visible";
                nomeCandidato.innerText = "Nome do candidato: Gustavo Finck"
                votar.innerHTML="CONFIRMAR VOTO";
                countGustavo++;
                break;

            case 45:
                imagem.src = "./Assets/Raizer Ferreira.jpg";
                imagem.style.display = "inline"
                imagem.style.visibility = "visible";
                nomeCandidato.innerText = "Nome do candidato: Raizer Ferreira"
                votar.innerHTML="CONFIRMAR VOTO";
                countRaizer++;
                break;

            default:
                nomeCandidato.innerText = "VOTO NULO"
                votar.innerHTML="CONFIRMAR VOTO";
                break;
        }
    } else {
        alert("voto confirmado... Agradecemos pelo voto!")
        numCandidato = undefined;
        votar.innerHTML="Votar";
        imagem.style.display = "none";
        nomeCandidato.innerText = "";
    }
})


