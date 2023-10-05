document.addEventListener('DOMContentLoaded', () => {
  const citasDiv = document.getElementById('citas');
  const formulario = document.getElementById('formulario');
  const nombreInput = document.getElementById('nombre');
  const fechaHoraInput = document.getElementById('fechaHora');
  const duracionCita = 5000; 

  formulario.addEventListener('submit', (event) => {
      event.preventDefault();

      // Obtiene datos del formulario
      const nombre = nombreInput.value;
      const fechaHora = fechaHoraInput.value;

      // Verificación de ingreso de datos
      if (nombre && fechaHora) {
          // Creación de la cita
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
          nombre: 'Nuevo Usuario',
          fechaHora: '2023-10-05T14:00'
      };
      cambiarUsuario(nuevoUsuario);
  }, 5000);
});