function obtenerServidores() {
    // Obtener una referencia a la lista de servidores
    user = JSON.parse(localStorage.getItem("user"));
    id_usuario = user.id_usuario;

    console.log(id_usuario);

    const serverList = document.getElementById('server-list');
    // Realizar una solicitud fetch para obtener el JSON de servidores
    const url = `http://127.0.0.1:5000/server/${id_usuario}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Limpiar la lista de servidores antes de agregar nuevos elementos
            serverList.innerHTML = '';

            console.log(data);

            // Recorrer los datos y crear elementos <li> para cada servidor
            data.forEach(serverItem => {
                // localStorage.setItem("server", JSON.stringify(serverItem));
                const listItem = document.createElement('li');
                listItem.textContent = serverItem[0]; // Acceder al primer elemento de la lista interna
                serverList.appendChild(listItem);

                listItem.addEventListener('click', function() {
                    const serverName = serverItem[0];
                    console.log(serverName);
                    // Ahora puedes utilizar el nombre del servidor como desees
                    obtenerCanales(serverName)
                });
            });
        })
        .catch(error => {
            console.error('Error al obtener los servidores:', error);
        });
}