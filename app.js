
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
    document.getElementById("amigo").value="";
    
}
function actualizarLista(nombre){
    if(listaDeAmigos.includes(nombre)){
        alert("Ese amigo ya esta en la lista");
    }else{
        let nuevoNombre = document.createElement("li");
        nuevoNombre.textContent = nombre
        lista.appendChild(nuevoNombre);
        listaDeAmigos.push(nombre);
    }
}
function sortearAmigo(){
    if (listaDeAmigos.length == 0){
        alert("no agregaste a ningun amigo");
    } else{
        let numAleatori = Math.floor(Math.random()*listaDeAmigos.length);
        document.getElementById("amigo").value = "";                             
        lista.innerHTML = '';
        resultado.innerHTML = `El amigo sorteado es ${listaDeAmigos[numAleatori]}`;
    }
}

