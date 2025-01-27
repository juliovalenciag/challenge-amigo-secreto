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

    if(amigos.includes(nombre)){
        alert("Este amigo ya fue agregado");
        return;
    }

    amigos.push(nombre);

    inputAmigo.value = "";

    mostrarLista();
}

//extra: Implementa la función para eliminar amigos

function eliminarAmigo(nombre) {
    amigos = amigos.filter(amigo => amigo !== nombre);

    mostrarLista();
}

//Implementa la función para actualizar la lista de amigos

function mostrarLista() {
    const listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const elemento = document.createElement("li");
        elemento.textContent = `${index + 1}. ${amigo}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarAmigo(amigo);

        elemento.appendChild(botonEliminar);
        listaAmigos.appendChild(elemento);
    });
}


//Implementa la función para sortear los amigos

function sortearAmigo(){
    if(amigos.length === 0){
        alert("Debes agregar al menos un amigo");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}


