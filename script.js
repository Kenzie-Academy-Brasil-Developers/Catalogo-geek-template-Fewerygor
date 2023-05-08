const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  }
];

const figuresArray = [];
const paintingsArray = [];

function separateItens(products){
  for (let i = 0; i < products.length; i++) {
    if(products[i].type === 'Paintings'){
      paintingsArray.push(productsArray[i]);
    }else{
      figuresArray.push(productsArray[i]);
    }
  } 
}
separateItens(productsArray);

function paintingsRendering(){
const sectionPaintings = document.querySelector('.paintings-Section');
let ulPaintings = document.createElement('ul');
sectionPaintings.appendChild(ulPaintings);

for(let i = 0; i < paintingsArray.length; i++){
  const paintings = paintingsArray[i];

  let li = document.createElement('li');
  ulPaintings.appendChild(li);

  const div = document.createElement('div');
  div.className = 'card';
  li.appendChild(div);

  const img = document.createElement('img');
  img.src = paintings.image;
  div.appendChild(img);

  const name = document.createElement('name');
  name.innerText = paintings.name;
  div.appendChild(name);

  const price = document.createElement('price');
  price.innerText = paintings.price;
  div.appendChild(price)
  }
  
}
paintingsRendering();

function figuresRendering(){
const sectionFigures = document.querySelector('.figures-Section');
let ulFigures = document.createElement('ul');
sectionFigures.appendChild(ulFigures);

for(let i = 0; i < figuresArray.length; i++){
  const figures = figuresArray[i];
  
  let li = document.createElement('li');
  ulFigures.appendChild(li);
  
  const div = document.createElement('div');
  div.className = 'card';
  li.appendChild(div);
  
  const img = document.createElement('img');
  img.src = figures.image;
  div.appendChild(img);
  
  const name = document.createElement('name');
  name.innerText = figures.name;
  div.appendChild(name);
  
  const price = document.createElement('price');
  price.innerText = figures.price;
  div.appendChild(price)
  }
    
}
figuresRendering();