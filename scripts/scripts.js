// URL de la API que deseas consultar
const apiUrl = 'http://127.0.0.1:5000/get_messages/1';

const CampoMensaje = document.getElementById('centro_mensajes');

// Hacer una solicitud GET a la API utilizando fetch
fetch(apiUrl)
  .then(response => {
    // Comprobar si la solicitud fue exitosa (código de estado HTTP 200)
    if (!response.ok) {
      throw new Error('Error en la solicitud a la API');
    }
    // Parsear la respuesta JSON
    return response.json();
  })
  .then(data => {
    // Aquí puedes trabajar con los datos obtenidos de la API
    CampoMensaje.textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error:', error);
  });
