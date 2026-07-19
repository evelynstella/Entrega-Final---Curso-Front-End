// recuperar los datos
const campoNombre  = document.getElementById('Nombre');
const campoCorreo  = document.getElementById('email');
const campoMensaje = document.getElementById('Mensaje');
const formulario   = document.querySelector('.Formulario-details form');

// Cargar datos guardados
document.addEventListener('DOMContentLoaded', () => {
    campoNombre.value  = localStorage.getItem('contacto_nombre') || '';
    campoCorreo.value  = localStorage.getItem('contacto_correo') || '';
    campoMensaje.value = sessionStorage.getItem('contacto_mensaje') || '';
});

// Guardar mientras escribe
campoNombre.addEventListener('input', () => {
    localStorage.setItem('contacto_nombre', campoNombre.value);
});

campoCorreo.addEventListener('input', () => {
    localStorage.setItem('contacto_correo', campoCorreo.value);
});

campoMensaje.addEventListener('input', () => {
    sessionStorage.setItem('contacto_mensaje', campoMensaje.value);
});

// Enviar formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // evita que se vaya a Formspree

    sessionStorage.removeItem('contacto_mensaje');

    const boton = formulario.querySelector('button');
    boton.textContent = 'Enviado ✓';
    boton.disabled = true;
});
