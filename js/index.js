document.addEventListener('DOMContentLoaded', () => {

  const formulario = document.getElementById('formulario');

  const citasDiv = document.getElementById('citas');

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

      formulario.reset();

    } else {

      alert('Por favor, complete todos los campos.');

    }

  });

});
