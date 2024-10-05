// Coordenadas de la ubicación del negocio
var negocioLatLng = [40.416775, -3.703790];

var map = L.map('map').setView(negocioLatLng, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Mi_Empresa'
}).addTo(map);

// Marcador para la ubicación del negocio
var negocioMarker = L.marker(negocioLatLng).addTo(map)
  .bindPopup('Mi Empresa<br>Calle Principal 123, Madrid, España').openPopup();

// Solicitar la ubicación del cliente (geolocalización)
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var clienteLatLng = [position.coords.latitude, position.coords.longitude];

    // Marcador de la ubicación del cliente
    var clienteMarker = L.marker(clienteLatLng).addTo(map)
      .bindPopup('Tu Ubicación').openPopup();

    // Calcular y mostrar la ruta desde el cliente hasta el negocio
    L.Routing.control({
      waypoints: [
        L.latLng(clienteLatLng), // Ubicación del cliente
        L.latLng(negocioLatLng)  // Ubicación del negocio
      ],
      routeWhileDragging: true
    }).addTo(map);

  }, function() {
    alert('No se pudo obtener tu ubicación.');
  });
} else {
  alert('La geolocalización no está soportada por este navegador.');
}