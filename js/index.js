document.addEventListener('DOMContentLoaded', () => {

  const formulario = document.getElementById('formulario');

  const citasDiv = document.getElementById('citas');

  const agregarCitaBtn = document.getElementById('agregarCitaBtn');


  agregarCitaBtn.addEventListener('click', () => {

    const nombre = document.getElementById('nombre').value;

    const fechaHora = document.getElementById('fechaHora').value;

    if (nombre && fechaHora) {

      const hora = new Date(fechaHora).toLocaleTimeString()
      const fecha = new Date(fechaHora).toLocaleDateString()
      const citaDiv = document.createElement('div');

      citaDiv.className = 'cita';

      citaDiv.innerHTML = `

              <h2>Nombre: ${nombre}</h2>
              <ul>
              <li>Fecha: ${fecha}</li>
              <li>Hora: ${hora}</li>
              </ul>
              
          `;

      citasDiv.appendChild(citaDiv);

      formulario.reset();

    } else {

      alert('Por favor, complete todos los campos.');

    }

  });

});
