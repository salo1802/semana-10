var db = firebase.firestore();
$(document).ready(function(){
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            let v = JSON.stringify(doc.data());
            let pa = JSON.parse(v)
         //   $( "#imprimir" ).append( "<tr><td>"+pa.id+"</td><td>"+pa.nombre+"</td></tr>" );
            //console.log(pa.id+pa.nombre);
        });
      });
});


const nombre = document.getElementById('nombre');
const candidatosBtn = document.getElementById('candidatos');
const votacionesBtn = document.getElementById('votaciones');
const idVotante = document.getElementById('id');
const idCandidato = document.getElementById('idCandidato');
const registroBtn = document.getElementById('registro');
const votarBtn = document.getElementById('votar');


registrar = () => {

    if(nombre.value ==  ""){ 
        alert("rellene todos los campos para registrarse");
         return;}
         if(idVotante.value ==  ""){ 
            alert("rellene todos los campos para registrarse");
             return;}
    let name = nombre.value;
    let idNew = idVotante.value;
    let objetoVotante = {
        nombre: name,
        id: idNew
    };

    let jsonvoto = JSON.stringify(objetoVotante);
    console.log(jsonvoto);
    //+objetoVotante.idNew
  // database.ref('votates/alfa').set(objetoVotante);
   
  db.collection("users/"+idNew).add(objetoVotante)
  .then(function(docRef){
    console.log("document writen id", docRef.id);
  })
  .catch(function(error){
    console.log("fucking error", error);
  });
  

    

}

registroBtn.addEventListener('click',registrar);
   

    
    