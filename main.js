const backgroundContainer = document.querySelector(".background");
const botonSortPrice = document.querySelector(".btn-sort-price");
const botonSortStock = document.querySelector(".btn-sort-stock");
const botonContainer = document.querySelector(".btn-container");

let productArray = [
  {
    name: "IntelCore Proccesor i7-6700k",
    price: 2000,
    stock: 5,
  },
  {
    name: "AMD Proccesor Ryzen 5 3600XT",
    price: 1200,
    stock: 2,
  },
  {
    name: "IntelCore Proccesor i9-10700k",
    price: 800,
    stock: 8,
  },
  {
    name: "AMD Proccesor Ryzen 9 5950x",
    price: 1950,
    stock: 7,
  },
];

const mostrarTabla = () => {
  for (let i = 0; i < productArray.length; i++) {
    backgroundContainer.innerHTML += `
        <div class="list-container">
            <div class="product-name">${productArray[i].name}</div>
            <div class="product-price">${productArray[i].price}</div>
            <div class="product-stock">${productArray[i].stock}</div>
        </div>`;
  }
};

let flagPrice = false;
let flagStock = false;

const sortByPrice = () => {
  if (flagPrice) {
    productArray.sort((a, b) => {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
  } else {
    productArray.sort((a, b) => {
      if (a.price < b.price) return 1;
      if (a.price > b.price) return -1;
      return 0;
    });
  }
};

const sortByStock = () => {
  if (flagStock) {
    productArray.sort((a, b) => {
      if (a.stock > b.stock) return 1;
      if (a.stock < b.stock) return -1;
      return 0;
    });
  } else {
    productArray.sort((a, b) => {
      if (a.stock < b.stock) return 1;
      if (a.stock > b.stock) return -1;
      return 0;
    });
  }
};

const labelHTML = `      
<div class="background-labels">
    <div class="product-name name-text">Producto</div>
    <div class="product-price price-text">Precio [USD]</div>
    <div class="product-stock stock-text">Stock</div>
</div>`;

botonSortPrice.addEventListener("click", () => {
  flagPrice
    ? (botonSortPrice.innerHTML = `Menor precio primero`)
    : (botonSortPrice.innerHTML = `Mayor precio primero`);
  flagPrice = !flagPrice;
  sortByPrice();
  backgroundContainer.innerHTML = labelHTML;
  mostrarTabla();
});

botonSortStock.addEventListener("click", () => {
  flagStock
    ? (botonSortStock.innerHTML = `Menor stock primero`)
    : (botonSortStock.innerHTML = `Mayor stock primero`);
  flagStock = !flagStock;
  sortByStock();
  backgroundContainer.innerHTML = labelHTML;
  mostrarTabla();
});

window.addEventListener('load', mostrarTabla());

