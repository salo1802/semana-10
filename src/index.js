var db = firebase.firestore();
var votantes = [];
var votos1 = 0;
var votos2 = 0;
var votos3 = 0;



 



$(document).ready(function(){
    db.collection("votantes").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            let v = JSON.stringify(doc.data());
            let pa = JSON.parse(v)
       votantes.push(pa.id);
        });
      });

      db.collection("candidato1").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          votos1++;
        });
      }); 

      
      db.collection("candidato2").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          votos2++;
        });
      }); 

      
      db.collection("candidato3").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          votos3++;
        });
      }); 
});

console.log(votantes);


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
    if(votantes.some(votante =>  votante == idNew)){
      alert("ese id ya esta en uso");
      return;  
    }
    let jsonvoto = JSON.stringify(objetoVotante);
    console.log(jsonvoto);
    //+objetoVotante.idNew
  // database.ref('votates/alfa').set(objetoVotante);
   
  db.collection("votantes/").add(objetoVotante)
  .then(function(docRef){
    console.log("document writen id", docRef.id);
  })
  .catch(function(error){
    console.log("fucking error", error);
  });
  
}


verVotos = () => {
alert("candidato1:  "+votos1+"\n"+"candidato2:  "+votos2+"\n"+"candidato3:  "+votos3+"\n");
}

verCandidatos = () => {
  alert("candidato1 ID:  "+ 1 +"\n"+"candidato2 ID:  "+ 2+"\n"+"candidato3 ID:  "+  3 +"\n");
}

votar = () => {
    if(nombre.value ==  ""){ 
        alert("rellene todos los campos para votar");
         return;}
         if(idVotante.value ==  ""){ 
            alert("rellene todos los campos para votar");
             return;}
    let newVoto = idCandidato.value;
    let name = nombre.value;
    let idNew = idVotante.value;
    let objetoVotante = {
        nombre: name,
        id: idNew
    };
    console.log(newVoto);
    let jsonvoto = JSON.stringify(objetoVotante);

    if(newVoto == "1"){
     

    db.collection("candidato1").add(objetoVotante)
    .then(function(docRef){
      console.log("document writen id", docRef.id);
    })
    .catch(function(error){
      console.log("fucking error", error);
    });
    }


    if(newVoto == 2){
      console.log("entro el metodo 2"+objetoVotante);
     
    db.collection("candidato2").add(objetoVotante)
    .then(function(docRef){
      console.log("document writen id", docRef.id);
    })
    .catch(function(error){
      console.log("fucking error", error);
    });
    }
  
    


    if(newVoto== "3"){
      console.log("entro el metodo 3"+objetoVotante);
    db.collection("candidato3").add(objetoVotante)
    .then(function(docRef){
      console.log("document writen id", docRef.id);
    })
    .catch(function(error){
      console.log("fucking error", error);
    });
    }
}




registroBtn.addEventListener('click',registrar);
votacionesBtn.addEventListener('click', verVotos);
votarBtn.addEventListener('click',votar);
candidatosBtn.addEventListener('click',verCandidatos);
   

    
    