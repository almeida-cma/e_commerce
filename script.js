// Adicionando produtos fictícios
const products = [
  {
    name: "Product 1",
    image: "product1.jpg",
    price: "$19.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Product 2",
    image: "product2.jpg",
    price: "$29.99",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Product 3",
    image: "product3.jpg",
    price: "$39.99",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

const productsContainer = document.querySelector('.products');

products.forEach(product => {
  const productElement = document.createElement('div');
  productElement.classList.add('product');

  productElement.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <p>${product.description}</p>
  `;

  productsContainer.appendChild(productElement);
});

// Atualizando o número de itens no carrinho (apenas simulação)
let cartItems = 0;
const cartItemsElement = document.querySelector('.cart-items');

function updateCartItems(count) {
  cartItems = count;
  cartItemsElement.textContent = count;
}

// Simulação de adição de itens ao carrinho
updateCartItems(3);

// JS para o popup de aceitação de cookies
const acceptBtn = document.querySelector('.accept-btn');
const cookiePopup = document.querySelector('.cookie-popup');

acceptBtn.addEventListener('click', () => {
  cookiePopup.style.display = 'none';
});

// Lógica do Carrossel
const carousel = document.querySelector('.carousel');
const carouselContent = document.querySelector('.carousel-content');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
let currentIndex = 0;

// Função para mover o carrossel
function moveCarousel(direction) {
  if (direction === 'next') {
    currentIndex++;
    if (currentIndex === totalItems) {
      currentIndex = 0;
    }
  } else {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalItems - 1;
    }
  }

  const translateXValue = -currentIndex * 100 + '%';
  carouselContent.style.transform = `translateX(${translateXValue})`;
}

// Autoplay do carrossel
setInterval(() => {
  moveCarousel('next');
}, 3000);

// Adicionando botões de navegação para o carrossel
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

prevBtn.addEventListener('click', () => {
  moveCarousel('prev');
});

nextBtn.addEventListener('click', () => {
  moveCarousel('next');
});

document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('#search-input');
  const searchButton = document.querySelector('#search-button');
  const featuredProducts = document.querySelector('.featured-products'); // Seleciona a seção de produtos em destaque

  searchButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const searchTerm = searchInput.value.trim().toLowerCase();

    // Remove os destaques anteriores
    const highlightedElements = featuredProducts.querySelectorAll('.highlighted');
    highlightedElements.forEach(element => {
      element.classList.remove('highlighted');
    });

    // Percorre todos os elementos dentro da seção de produtos em destaque
    featuredProducts.childNodes.forEach(node => {
      if (node.nodeType === 1) { // Verifica se é um nó de elemento
        searchNode(node, searchTerm);
      }
    });
  });

  function searchNode(node, term) {
    // Verifica se o texto do nó contém o termo de pesquisa
    if (node.nodeType === 3 && node.textContent.toLowerCase().includes(term)) {
      // Destaca o elemento pai do nó de texto encontrado
      const parentElement = node.parentElement;
      parentElement.classList.add('highlighted');
    } else {
      // Se não for um nó de texto, continua a pesquisa nos filhos do nó
      node.childNodes.forEach(child => {
        searchNode(child, term);
      });
    }
  }
});
