// Arreglo de productos
const products = [
    {
        id: 1,
        name: "Premium Dog Food",
        description: "Alimento premium para perros adultos, rico en proteínas",
        price: 899,
        category: "perros",
        image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        name: "Interactive Toy Set",
        description: "Set de juguetes interactivos para estimular a tu mascota",
        price: 449,
        category: "perros",
        image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        name: "Scratching Post",
        description: "Rascador de sisal para gatos, altura regulable",
        price: 699,
        category: "gatos",
        image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        name: "Cat Tower",
        description: "Torre de juego para gatos con múltiples niveles",
        price: 1299,
        category: "gatos",
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        name: "Aquarium Starter Kit",
        description: "Kit completo para acuario de 20 galones",
        price: 1899,
        category: "peces",
        image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        name: "Fish Tank Filter",
        description: "Filtro silencioso para acuarios hasta 50 galones",
        price: 599,
        category: "peces",
        image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        name: "Parrot Cage",
        description: "Jaula espaciosa para loros y aves medianas",
        price: 1499,
        category: "aves",
        image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        name: "Bird Seed Mix",
        description: "Mezcla premium de semillas para aves silvestres",
        price: 249,
        category: "aves",
        image: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        name: "Dog Leash Pro",
        description: "Correa resistente de nylon con hebilla reforzada",
        price: 349,
        category: "perros",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        name: "Pet Bed Comfort",
        description: "Cama ortopédica para mascotas, tela suave",
        price: 799,
        category: "perros",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop"
    },
    {
        id: 11,
        name: "Cat Food Premium",
        description: "Alimento especial para gatos adultos sabor pollo",
        price: 549,
        category: "gatos",
        image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop"
    },
    {
        id: 12,
        name: "LED Aquarium Light",
        description: "Iluminación LED para peceras, RGB programable",
        price: 899,
        category: "peces",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    }
];

// Carrito de compras
let cart = [];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupFilters();
    setupSearch();
    setupScrollEffects();
    setupBackToTop();
    setupFormValidation();
});

// Renderizar productos
function renderProducts(productsToRender) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    if (productsToRender.length === 0) {
        productGrid.innerHTML = '<div class="col-12 text-center py-5"><h4>No se encontraron productos</h4></div>';
        return;
    }

    productsToRender.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-3 fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="card product-card h-100 position-relative">
                <span class="badge-category">${product.category}</span>
                <img src="${product.image}" class="card-img-top" alt="${product.name}" loading="lazy">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <button class="btn btn-primary mt-auto" onclick="addToCart(${product.id})">
                        <i class="bi bi-cart-plus me-2"></i>Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Filtros de categoría
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;

            if (category === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === category);
                renderProducts(filtered);
            }
        });
    });
}

// Buscador
function setupSearch() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        if (searchTerm === '') {
            renderProducts(products);
            return;
        }

        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm)
        );

        renderProducts(filtered);
    });
}

// Agregar al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartCount();
    showToast();
    updateCartModal();
}

// Eliminar del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartModal();
}

// Actualizar cantidad
function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            updateCartModal();
        }
    }
}

// Actualizar contador del carrito
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Actualizar modal del carrito
function updateCartModal() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center text-muted py-4">Tu carrito está vacío</p>';
        cartSummary.classList.add('d-none');
        return;
    }

    cartSummary.classList.remove('d-none');

    let total = 0;
    cartItems.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h6>${item.name}</h6>
                    <p>$${item.price.toFixed(2)}</p>
                    <div class="d-flex align-items-center gap-2">
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <button class="btn-remove" onclick="removeFromCart(${item.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Vaciar carrito
function clearCart() {
    cart = [];
    updateCartCount();
    updateCartModal();
}

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    modal.hide();

    const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
    confirmModal.show();

    clearCart();
}

// Botón de checkout
document.getElementById('checkoutBtn').addEventListener('click', checkout);

// Mostrar toast
function showToast() {
    const toast = document.getElementById('productToast');
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
}

// Efectos de scroll
function setupScrollEffects() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Botón volver arriba
function setupBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Validación del formulario
function setupFormValidation() {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        if (password.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres');
            return;
        }

        const formData = {
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value
        };

        alert('¡Registro exitoso! Bienvenido a Mascotas Felices.');
        form.reset();
    });
}

// Smooth scroll para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Actualizar enlaces activos en el navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});