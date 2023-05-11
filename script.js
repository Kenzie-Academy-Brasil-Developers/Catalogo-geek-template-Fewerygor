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

  let listPaintings = document.createElement('li');
  ulPaintings.appendChild(listPaintings);

  const cardPaintings = document.createElement('div');
  cardPaintings.className = 'card';
  listPaintings.appendChild(cardPaintings);

  const imagePaintings = document.createElement('img');
  imagePaintings.src = paintings.image;
  cardPaintings.appendChild(imagePaintings);

  const namePaintings = document.createElement('name');
  namePaintings.innerHTML = paintings.name;
  cardPaintings.appendChild(namePaintings);

  const pricePaintings = document.createElement('price');
  pricePaintings.innerHTML = paintings.price;
  cardPaintings.appendChild(pricePaintings);
  }
  
}
paintingsRendering();

function figuresRendering(){
const sectionFigures = document.querySelector('.figures-Section');
let ulFigures = document.createElement('ul');
sectionFigures.appendChild(ulFigures);

for(let i = 0; i < figuresArray.length; i++){
  const figures = figuresArray[i];
  
  let listFigures = document.createElement('li');
  ulFigures.appendChild(listFigures);
  
  const cardFigures = document.createElement('div');
  cardFigures.className = 'card';
  listFigures.appendChild(cardFigures);
  
  const imageFigures = document.createElement('img');
  imageFigures.src = figures.image;
  cardFigures.appendChild(imageFigures);
  
  const nameFigures = document.createElement('name');
  nameFigures.innerHTML = figures.name;
  cardFigures.appendChild(nameFigures);
  
  const priceFigures = document.createElement('price');
  priceFigures.innerHTML = figures.price;
  cardFigures.appendChild(priceFigures);
  }
    
}
figuresRendering();