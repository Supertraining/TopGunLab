document.addEventListener('DOMContentLoaded', () => {
  const citasDiv = document.getElementById('citas');
  const formulario = document.getElementById('formulario');
  const nombreInput = document.getElementById('nombre');
  const fechaHoraInput = document.getElementById('fechaHora');

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = nombreInput.value;
    const fechaHora = fechaHoraInput.value;

    if (nombre && fechaHora) {

      const citaDiv = document.createElement('div');
      citaDiv.className = 'cita';
      citaDiv.innerHTML = `
              <h2>Nombre: ${nombre}</h2>
              <p>Fecha y Hora: ${fechaHora}</p>
          `;
      citasDiv.appendChild(citaDiv);

      formulario.reset();

    } else {
      alert('Por favor, complete todos los campos.');
    }
  });

});