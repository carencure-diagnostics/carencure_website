const products = [
  {
    name: "COVID-19 Rapid Test Kit",
    image: "https://via.placeholder.com/300x200?text=COVID+Test",
    description: "Accurate and fast COVID-19 antigen testing kit for professional use."
  },
  {
    name: "Blood Glucose Monitor",
    image: "https://via.placeholder.com/300x200?text=Glucose+Monitor",
    description: "Digital monitor for checking blood sugar levels at home."
  }
];

const productList = document.getElementById('product-list');
const productCount = document.getElementById('product-count');

productCount.textContent = `Total Products: ${products.length}`;

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="product-name">${product.name}</div>
    <div class="product-description">${product.description}</div>
  `;
  productList.appendChild(card);
});

