// variables
let listaDeAmigos = [];
let nuevoli = "";
const ul = document.getElementById("listaAmigos");


//funciones
function agregarAmigo (){
    let amigo = document.getElementById("amigo").value;
    //verificacion en consola
    console.log("tipeo:" + amigo);
    if (amigo == ""){
        alert("Porfavor inserte un nombre");
    }else {
        listaDeAmigos.push(amigo);
    }
    document.getElementById("amigo").value="";
    console.log(listaDeAmigos);
}



