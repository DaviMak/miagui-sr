let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

const itens_section = document.getElementById("itens_section")

for(let i = 0; i < ITENS_LOJA.length; i++) { //percorrer todos os itens
    const item = document.createElement('div') //criando atributo / tag
    item.setAttribute('class', 'conteudo') // nomeando

    const img = document.createElement("img") //criando img
    img.setAttribute('src', ITENS_LOJA[i].url_img); //pegango a img do array
    img.setAttribute('class', "imagem");   //nomeando
    item.appendChild(img) //é filho do item (div)

    const texto = document.createElement('h2')
    texto.textContent= ITENS_LOJA[i].nome
    texto.setAttribute('class', "titulo");
    item.appendChild(texto)

    const descrição = document.createElement('p')
    descrição.textContent = ITENS_LOJA[i].descricao
    descrição.setAttribute('class', "descricao");
    item.appendChild(descrição) 
    
    const preço = document.createElement('h4')
    preço.textContent = `Price: ${ITENS_LOJA[i].preco}`
    item.appendChild(preço)
    
    itens_section.appendChild(item) //todo o conteudo da div está dentro de section
}
const novasection = document.createElement("div")
novasection.setAttribute("class", "novasection")
itens_section.appendChild(novasection)

function cadastrar(){
    novasection.innerHTML += 
    `<div>
        <h2>
            ${nomeC.value}
        </h2>
    </div>`
}

const botaocadastrar = document.createElement("button")
botaocadastrar.textContent = "cadastrar item";
botaocadastrar.setAttribute("id", "botao");
botaocadastrar.addEventListener("click", cadastrar);
novasection.appendChild(botaocadastrar)

const nomeC = document.createElement("input")
nomeC.type = "text"
nomeC.placeholder = "nome"
novasection.appendChild(nomeC)

