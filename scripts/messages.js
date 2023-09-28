function limpiarLista(messageList){
    while (messageList.firstChild) {
        messageList.removeChild(messageList.firstChild);
    }
}

function obtenerMensajes(nombreCanal) {
    const messageList = document.getElementById('message-list');

    // Construir la URL para obtener los mensajes del canal específico
    const url = `http://127.0.0.1:5000/messages?nombre_canal=${nombreCanal}`;

    // Realizar una solicitud fetch para obtener el JSON de mensajes
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Limpiar la lista de mensajes antes de agregar nuevos elementos
            // messageList.innerHTML = '';
            limpiarLista(messageList);

            // Recorrer los datos y crear elementos <li> para cada mensaje
            data.forEach(message => {
                const listItem = document.createElement('li');
                listItem.textContent = `Usuario: ${message.id_usuario}, Contenido: ${message.contenido}, Fecha: ${message.fecha_hora}`;
                messageList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error al obtener los mensajes:', error);
        });
}