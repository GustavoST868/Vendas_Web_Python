const products = [
  { name: "Produto 1", image: "static/img/caixa.png" },
  { name: "Produto 2", image: "static/img/caixa.png" },
  { name: "Produto 3", image: "static/img/caixa.png" },
  { name: "Produto 4", image: "static/img/caixa.png" },
  { name: "Produto 5", image: "static/img/caixa.png" },
  { name: "Produto 6", image: "static/img/caixa.png" },
  { name: "Produto 7", image: "static/img/caixa.png" },
  { name: "Produto 8", image: "static/img/caixa.png" },
  { name: "Produto 9", image: "static/img/caixa.png" },
];

function createProductElement(product) {
  const productItem = document.createElement("div");
  productItem.classList.add("product-item");

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = product.name;

  const productName = document.createElement("span");
  productName.textContent = product.name;

  productItem.appendChild(productImage);
  productItem.appendChild(productName);

  return productItem;
}

function displayProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach(product => {
      const productItem = createProductElement(product);
      productList.appendChild(productItem);
  });
}

function filterProducts() {
  const searchInput = document.getElementById("searchInput");
  const filter = searchInput.value.toLowerCase();
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(filter));

  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  filteredProducts.forEach(product => {
      const productItem = createProductElement(product);
      productList.appendChild(productItem);
  });
}

window.onload = function () {
  displayProducts();
};
