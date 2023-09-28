// URL de la API que deseas consultar
// const apiUrl = 'http://127.0.0.1:5000/get_messages/1';

// const CampoMensaje = document.getElementById('centro_mensajes');

// // Hacer una solicitud GET a la API utilizando fetch
// fetch(apiUrl)
//   .then(response => {
//     // Comprobar si la solicitud fue exitosa (código de estado HTTP 200)
//     if (!response.ok) {
//       throw new Error('Error en la solicitud a la API');
//     }
//     // Parsear la respuesta JSON
//     return response.json();
//   })
//   .then(data => {
//     // Aquí puedes trabajar con los datos obtenidos de la API
//     CampoMensaje.textContent = JSON.stringify(data, null, 2);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


// Se trata de que se obtengan los mensajes luego de presionar el canal que se obtuvo presionando el servidor previamente
// Función para obtener y mostrar los datos de la API
// function obtenerServidores() {
//   const serverList = document.getElementById('server-list');
//   const additionalDataList = document.getElementById('additional-data-list');
//   const messageList = document.getElementById('message-list');

//   // Variable para almacenar el canal actualmente seleccionado
//   let canalActual = null;

//   // Función para limpiar una lista
//   function limpiarLista(lista) {
//       while (lista.firstChild) {
//           lista.removeChild(lista.firstChild);
//       }
//   }

// Función para obtener y mostrar los datos de la API
// function obtenerServidores() {
//     const serverList = document.getElementById('server-list');
//     const additionalDataList = document.getElementById('channels-list');
//     const messageList = document.getElementById('message-list');

//     // Variable para almacenar el canal actualmente seleccionado
//     let canalActual = null;

//     // Función para limpiar una lista
//     function limpiarLista(lista) {
//         while (lista.firstChild) {
//             lista.removeChild(lista.firstChild);
//         }
//     }

//     // Función para cargar datos adicionales y mensajes
//     function cargarDatosYMensajes(serverName) {
//         // Verifica si se ha seleccionado un canal diferente
//         if (serverName !== canalActual) {
//             // Actualiza el canal actualmente seleccionado
//             canalActual = serverName;
            
//             // Limpia las listas de datos adicionales y mensajes antes de agregar nuevos datos
//             limpiarLista(additionalDataList);
//             limpiarLista(messageList);

//             // Construye la URL para obtener los datos adicionales
//             const additionalDataURL = `http://127.0.0.1:5000/channels?server_name=${serverName}`;

//             // Realiza una nueva solicitud fetch para obtener los datos adicionales
//             fetch(additionalDataURL)
//                 .then(response => response.json())
//                 .then(additionalData => {
//                     // Agrega los datos adicionales a la lista de datos adicionales
//                     additionalData.forEach(dataItem => {
//                         const additionalListItem = document.createElement('li');
//                         additionalListItem.textContent = dataItem[0];
//                         additionalDataList.appendChild(additionalListItem);

//                         // Agrega un event listener a cada elemento de la lista de datos adicionales
//                         additionalListItem.addEventListener('click', function() {
//                             const additionalItemText = additionalListItem.textContent;

//                             // Limpia la lista de mensajes antes de agregar nuevos mensajes
//                             limpiarLista(messageList);

//                             // Construye la URL para obtener los mensajes
                            // const messageDataURL = `http://127.0.0.1:5000/messages/${additionalItemText}`;

//                             // Realiza una nueva solicitud fetch para obtener los mensajes
//                             fetch(messageDataURL)
//                                 .then(response => response.json())
//                                 .then(messages => {
//                                     // Agrega los mensajes a la lista de mensajes
//                                     messages.forEach(message => {
//                                         const messageListItem = document.createElement('li');
//                                         messageListItem.textContent = `Usuario: ${message.id_usuario}, Contenido: ${message.contenido}, Fecha: ${message.fecha}, Hora: ${message.hora}`;
//                                         messageList.appendChild(messageListItem);
//                                     });
//                                 })
//                                 .catch(error => {
//                                     console.error('Error al obtener mensajes desde la API:', error);
//                                 });
//                         });
//                     });
//                 })
//                 .catch(error => {
//                     console.error('Error al obtener datos adicionales desde la API:', error);
//                 });
//         }
//     }

//     fetch('http://127.0.0.1:5000/server/sinid')
//         .then(response => response.json())
//         .then(data => {
//             // Recorre los datos y crea elementos LI en la lista de servidores
//             data.forEach(server => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = server.servidor;
//                 serverList.appendChild(listItem);

//                 // Agrega un event listener a cada elemento de la lista de servidores
//                 listItem.addEventListener('click', function() {
//                     const itemName = server.servidor;
//                     console.log(`clicked: ${itemName}`);
                    
//                     // Carga datos adicionales y mensajes
//                     cargarDatosYMensajes(itemName);
//                 });
//             });
//         })
//         .catch(error => {
//             console.error('Error al obtener datos desde la API:', error);
//         });
// }

// // Llama a la función para cargar los datos cuando se cargue la página
// window.addEventListener('load', obtenerServidores);



// // Llama a la función para cargar los datos cuando se cargue la página
// window.addEventListener('load', obtenerServidores);

// // Función para enviar un mensaje a la API

// document.getElementById("login-form").addEventListener("submit", function(event) {
//     event.preventDefault();

//     // Obtener los valores de los campos de entrada
//     const email = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     // Crear un objeto JSON con los datos
//     const data = {
//         "email": email, 
//         "password": password
//     };

//     function imprimir_dict(data) {
//         console.log(data);
//     }

    

//     // // Enviar el objeto JSON a la URL usando fetch
//     // fetch("http://127.0.0.1:5000/login" ,{
//     //     method: "GET",
//     //     headers: {
//     //         "Content-Type": "application/json"
//     //     },
//     //     body: JSON.stringify(data)
//     // })
//     // .then(response => {
//     //     // Manejar la respuesta del servidor aquí
//     //     console.log(response);
//     // })
//     // .catch(error => {
//     //     // Manejar errores aquí
//     //     console.error(error);
//     // });
// });

// Función para cargar y mostrar los servidores
// function login() {
//     // const data = {
//     //     email: document.getElementById("email").value,
//     //     password: document.getElementById("password").value,
//     // };
//     fetch('http://127.0.0.1:5000/server/', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//         },
//         body: JSON.stringify(data),
//         credentials: 'include'
//     })
//     .then(response => {
//         if (response.status == 200) {
//             return response.json().then(data => {
//                 console.log(data);
//                 localStorage.setItem("user", JSON.stringify(data));
//                 window.location.href = "prueba.html";
//             });
//         } else {
//             return response.json().then(data => {
//                 document.getElementById("message").innerHTML = data.message;
//             });
//         }
//     })
//     .catch((error) => {
//         document.getElementById("message").innerHTML = "Ocurrio un error";
//     });
// }


// FUNCIONA PARA OBTENER LOS CANALES A TRAVES DEL NOMBRE DEL SERVIDOR PASADO COMO PARAMETRO
function obtenerCanales(nombreServidor) {
    const channelsList = document.getElementById('channels-list');
    
    // Construir la URL para obtener los canales del servidor específico
    const url = `http://127.0.0.1:5000/channels?nombre_servidor=${nombreServidor}`;
    
    // Realizar una solicitud fetch para obtener el JSON de canales
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Limpiar la lista de canales antes de agregar nuevos elementos
            channelsList.innerHTML = '';

            // Recorrer los datos y crear elementos <li> para cada canal
            data.forEach(channelItem => {
                const listItem = document.createElement('li');
                listItem.textContent = channelItem[0]; // Acceder al primer elemento de la lista interna
                channelsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error al obtener los canales:', error);
        });
}




// FUNCIONA OBTENER SERVIDORES E IMPRIMIRLOS EN LISTA "SERVER-LIST
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

// Llamar a la función para obtener y mostrar los servidores cuando se carga la página
// window.addEventListener('load', obtenerServidores);



