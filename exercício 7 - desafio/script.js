// criando as variáveis que "guardam" as informações dos elementos html
let ol = document.createElement('ol');
let addItem = document.getElementById("addItem");

// array que armazena os itens da lista colocados pelo usuário
let lista = [];

// evento de click no botão html para o usuário adicionar o produto
addItem.addEventListener("click", function(){
    let item = [prompt("Qual item deseja adicionar?")];
    lista.push(item);

    console.log(lista)

    document.getElementById('renderList').appendChild(ol);
    item.forEach(renderlista);
})



// função chgamada para criar os elementos de lista numerada dentro do container html
function renderlista(element) {
    let li = document.createElement('li');
    li.setAttribute('class','item');

    ol.appendChild(li);

    li.innerHTML += element;
}