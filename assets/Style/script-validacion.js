
const nombreRegex = /^[A-Za-z\s]+$/;
const telefonoRegex = /^\d{9}$/; // Ejemplo para un teléfono de 9 dígitos
const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

var form = document.getElementById('formulario');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var error = document.getElementById('error');
    var mensaje = [];
    var nombre = document.getElementById('name').value;
    var apellido = document.getElementById('lastname').value;
    var telefono = document.getElementById('phone').value;
    var correo = document.getElementById('email').value;

    // Validar nombre
    if (!nombre) {
        mensaje.push('El nombre no puede estar vacío.');
    } else if (!nombreRegex.test(nombre) || nombre.length > 15) {
        mensaje.push('El nombre solo puede contener letras y tener un máximo de 15 caracteres.');    
    } else {
        mensaje.push('Correcto');
    }
    //Validar apellido
    if(!apellido){
        mensaje.push('El Apellido no puede estar vacío.');
    }else if (!nombreRegex.test(apellido) || apellido.length > 40 ){
        mensaje.push('El Apellido solo puede contener letras y tener un máximo de 40 caracteres.');    
    }else{
        mensaje.push('Correcto');
    }
    //Validar telefono
    if(!telefono){
        mensaje.push('El telefono no puede estar vacío.');
    }else if (!telefonoRegex.test(telefono) || telefono.length > 10 ){
        mensaje.push('El telefono solo puede contener numeros y tener 9 caracteres.');    
    }else{
        mensaje.push('Correcto');
    }
    //Validar correo
    if(!correo){
        mensaje.push('El correo no puede estar vacío.');
    }else if (!correoRegex.test(correo)){
        mensaje.push('Ingrese un correo valido.');    
    }else{
        mensaje.push('Correcto');
    }
    // Mostrar mensajes
    error.innerHTML = mensaje.join('<br>');
});
function calcularPresupuesto() {
    // Obtener el producto seleccionado y su precio
    let producto = document.getElementById("producto");
    let precioProducto = parseFloat(producto.options[producto.selectedIndex].getAttribute('data-precio'));

    // Obtener el plazo (número de meses)
    let plazo = parseInt(document.getElementById("plazo").value) || 0;
    let descuento = 0;

    // Aplicar descuento por plazo (5% por cada 3 meses)
    if (plazo >= 3) {
        descuento = (plazo / 3) * 0.05 * precioProducto;
    }

    // Obtener los extras seleccionados y sumarlos
    let extras = document.querySelectorAll('input[name="extras"]:checked');
    let totalExtras = 0;
    extras.forEach((extra) => {
        totalExtras += parseFloat(extra.value);
    });

    // Calcular el presupuesto final
    let presupuestoFinal = (precioProducto + totalExtras) - descuento;

    // Mostrar el presupuesto actualizado
    document.getElementById("presupuestoFinal").innerText = "Presupuesto Final: " + presupuestoFinal.toFixed(2) + "€";
}
function validarFormulario() {
    const enviarBtn = document.getElementById('enviar');
    const condiciones = document.getElementById('condiciones');
    const mensaje = document.getElementById('mensaje');

    if (!condiciones.checked) {
        enviarBtn.disabled = true;
        mensaje.innerText = 'Debes aceptar las condiciones de privacidad.';
    } else {
        enviarBtn.disabled = false;
        mensaje.innerText = '';
    }
}

// Añadir evento para verificar condiciones al cambiar
document.getElementById('condiciones').addEventListener('change', validarFormulario);

        



