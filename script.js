// script.js

// script.js

// Variables para el slider
let currentIndex = 0;
let images = [];

// Función para cargar el JSON externo
async function loadData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        // Asignar los datos a variables globales
        images = data.images;

        // Cargar título, subtítulo, precio y descripción
        document.getElementById("title").innerText = data.title;
        document.getElementById("subtitle").innerText = data.subtitle;
        document.getElementById("price").innerText = data.price;
        document.getElementById("description").innerText = data.description;

        // Cargar las imágenes del slider
        loadImage(currentIndex);

        // Cargar los features
        const featuresContainer = document.getElementById("features");
        data.features.forEach(feature => {
            const featureItem = document.createElement("div");
            featureItem.className = "feature-item";
            featureItem.innerHTML = `
                <i class="fas ${feature.icon}"></i>
                <p>${feature.label}: ${feature.value}</p>
            `;
            featuresContainer.appendChild(featureItem);
        });
    } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
    }
}

// Función para cargar la imagen del slider en función del índice
function loadImage(index) {
    const sliderImage = document.getElementById("slider-image");
    sliderImage.src = images[index].src;
    sliderImage.alt = images[index].alt;
}

// Inicializar slider
loadData();

// Manejadores de eventos para los botones del slider
document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    loadImage(currentIndex);
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    loadImage(currentIndex);
});



// Obtener elementos del DOM
const scheduleButton = document.getElementById('schedule-button');
const appointmentForm = document.querySelector('.appointment-form');

// Mostrar/Ocultar el formulario al hacer clic en "Agendar Cita"
scheduleButton.addEventListener('click', () => {
    // Alternar la visibilidad del formulario
    if (appointmentForm.style.display === 'block') {
        appointmentForm.style.display = 'none';
    } else {
        appointmentForm.style.display = 'block';
    }
});

// Ocultar el formulario si se hace clic fuera de él
window.addEventListener('click', (event) => {
    // Verificar si el clic no es en el formulario ni en el botón
    if (event.target !== appointmentForm && !appointmentForm.contains(event.target) && event.target !== scheduleButton) {
        appointmentForm.style.display = 'none';
    }
});


// Mostrar/Ocultar el menú en dispositivos móviles
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('navbar-links');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
});

// Mostrar/Ocultar el formulario al hacer clic en "Agendar Cita" (botón en el navbar móvil)
const scheduleButtonMobile = document.getElementById('schedule-button-mobile');
scheduleButtonMobile.addEventListener('click', () => {
    // Alternar la visibilidad del formulario
    if (appointmentForm.style.display === 'block') {
        appointmentForm.style.display = 'none';
    } else {
        appointmentForm.style.display = 'block';
    }

    // Ocultar el menú de navegación en dispositivos móviles después de hacer clic
    navbarLinks.classList.remove('show');
});





