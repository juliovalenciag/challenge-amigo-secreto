// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres

let amigos = [];

//Implementa la función para agregar amigos

function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if(nombre === ""){
        alert("Debes ingresar un nombre");
        return;
    }

    amigos.push(nombre);

    inputAmigo.value = "";

    mostrarLista();
}

//Implementa la función para actualizar la lista de amigos

function mostrarLista(){
    const listaAmigos = document.getElementById("lista-amigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

//Implementa la función para sortear los amigos