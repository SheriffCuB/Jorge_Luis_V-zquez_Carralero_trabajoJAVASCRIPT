let noticias = [];
let currentIndex = 0;

// Función para cargar el archivo JSON externo
function cargarNoticias() {
    fetch('/assets/Style/noticias.json')
        .then(response => response.json())
        .then(data => {
            noticias = data.noticias; // Guardar las noticias en el array
            mostrarNoticia(); // Mostrar la primera noticia
        })
        .catch(error => console.error('Error al cargar las noticias:', error));
} 
// Función para mostrar la noticia actual
function mostrarNoticia() {
    if (noticias.length > 0) {
        const noticiaActual = noticias[currentIndex];
        document.getElementById('titulo').innerHTML = noticiaActual.titulo;
        document.getElementById('contenido').innerHTML = noticiaActual.contenido;

// Cambiar al siguiente índice (volver al inicio si se llega al final)
currentIndex = (currentIndex + 1) % noticias.length;
}
}

// Cargar las noticias inicialmente
cargarNoticias();

// Actualizar las noticias cada 5 segundos
setInterval(mostrarNoticia, 5000);