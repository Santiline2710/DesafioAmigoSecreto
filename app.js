// variables
let listaDeAmigos = [];


//funciones
function agregarAmigo (){
    let amigo = document.getElementById("amigo").value;
    //verificacion en consola
    console.log("tipeo de usuario:" + amigo);
    console.log(listaDeAmigos);
    
    //verifica que el usuario tipea algun nombre
    if (amigo == ""){
        alert("Porfavor inserte un nombre");
    }else {
        listaDeAmigos.push(amigo);
    }
    document.getElementById("amigo").value="";
}


