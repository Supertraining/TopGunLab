document.addEventListener('DOMContentLoaded', () => {
  const citasDiv = document.getElementById('citas');
  const formulario = document.getElementById('formulario');

  const agregarCitaBtn = document.getElementById('agregarCitaBtn');


  agregarCitaBtn.addEventListener('click', () => {

    const nombre = document.getElementById('nombre').value;

    const fechaHora = document.getElementById('fechaHora').value;

    if (nombre && fechaHora) {

      // Crear una tarjeta de cita y agregarla al div de citas

      const citaDiv = document.createElement('div');

      citaDiv.className = 'cita';

      citaDiv.innerHTML = `

              <h2>Nombre: ${nombre}</h2>

              <p>Fecha y Hora: ${fechaHora}</p>

          `;
          citasDiv.appendChild(citaDiv);

          // Limpia el formulario
          formulario.reset();

          
          setTimeout(() => {
              citasDiv.removeChild(citaDiv);
          }, duracionCita);
      } else {
          alert('Por favor, complete todos los campos.');
      }
  });

  function cambiarUsuario(nuevoUsuario) {
      nombreInput.value = nuevoUsuario.nombre;
      fechaHoraInput.value = nuevoUsuario.fechaHora;
  }

  setTimeout(() => {
      const nuevoUsuario = {
          nombre: '',
          fechaHora: '2023-10-05T14:00'
      };
      cambiarUsuario(nuevoUsuario);
  }, 5000);
});