
// variables
let listaDeAmigos = [];
let lista = document.getElementById('listaAmigos');

//funciones
function agregarAmigo (){
    let nombre = document.getElementById("amigo").value.trim();
    if (nombre === ""){
        alert("Porfavor inserte un nombre");
    }else {
        actualizarLista(nombre);
    }
    document.getElementById("amigo").value="";        //limpia el campo de entrada
    
}
function actualizarLista(nombre){
    if(listaDeAmigos.includes(nombre)){              //si el nombre se repita
        alert("Ese amigo ya esta en la lista");
    }else{
        let nuevoNombre = document.createElement("li");    //crea un elemento li en html
        nuevoNombre.textContent = nombre                  
        lista.appendChild(nuevoNombre);                    // en el nuevo elemento se agrega el nombre tipeado
        listaDeAmigos.push(nombre);                        // se agrega el nombre en el array
    }
}
function sortearAmigo(){
    if (listaDeAmigos.length == 0){                       // avisa que no hay ningun nombre tipeado
        alert("no agregaste a ningun amigo");
    } else{
        let numAleatori = Math.floor(Math.random()*listaDeAmigos.length);                   // genera un numero aleatorio entre 0 hasta la cantidad de elementos en el array
        document.getElementById("amigo").value = "";                                        // limpia el campo de entrada
        lista.innerHTML = '';                                                               // limpia la lista de nombres
        resultado.innerHTML = `El amigo sorteado es ${listaDeAmigos[numAleatori]}`;         // muestra al ganador del sorteo
    }
}

