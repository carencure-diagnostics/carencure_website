const products = [
  {
    name: "COVID-19 Rapid Test Kit",
    image: "https://via.placeholder.com/300x200?text=COVID+Test",
    description: "Fast and accurate COVID-19 test kit for clinical use.",
    count: 12
  },
  {
    name: "Blood Pressure Monitor",
    image: "https://via.placeholder.com/300x200?text=BP+Monitor",
    description: "Digital monitor with accurate blood pressure readings.",
    count: 8
  },
  {
    name: "Glucose Meter",
    image: "https://via.placeholder.com/300x200?text=Glucose+Meter",
    description: "Reliable device for measuring blood glucose levels.",
    count: 20
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
    <div class="product-available">Available: ${product.count}</div>
  `;
  productList.appendChild(card);
});
