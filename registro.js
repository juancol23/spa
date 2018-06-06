 //configuración personal de Firebase
     






      firebase.initializeApp({
          apiKey: "AIzaSyCE-n4QOuKmPQGnpLdT1svm5z5C1lobZs4",
          authDomain: "camaleonjuridico-92ad6.firebaseapp.com",

          projectId: "camaleonjuridico-92ad6"
      });  
             
      // Initialize Cloud Firestore through Firebase
      var db = firebase.firestore();

 
      function guardar(){

           var titulo = document.getElementById('titulo').value;
           var sumilla = document.getElementById('sumilla').value;
           // var descripcion = document.getElementById('descripcion').value;
           var urlImagen = document.getElementById('urlImagen').value;
           // var autor = document.getElementById('autor').value;


           var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth()+1; //January is 0!

          var yyyy = today.getFullYear();
          if(dd<10){
              dd='0'+dd;
          } 
          if(mm<10){
              mm='0'+mm;
          } 
          var fecha = dd+'/'+mm+'/'+yyyy;

         
 
          db.collection("spaoasis").add({ 

              titulo : titulo,
              sumilla : sumilla,
              // descripcion: descripcion,
              urlImagen : urlImagen,
              // autor : autor,
              fecha : fecha
          })
         
          .then(function(docRef) {
              console.log("Fuente publicada: ", docRef.id); 

               document.getElementById('titulo').value = "";
               document.getElementById('sumilla').value = "";
               // document.getElementById('descripcion').value = "";
               document.getElementById('urlImagen').value = "";
               // document.getElementById('autor').value = "El camaleón juridico";

          })

          .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode);
              console.log(errorMessage);
              // ...
            });

        
      }

//Leer documentos
var tabla_ = document.getElementById('tabla');
db.collection("spaoasis").onSnapshot((querySnapshot) => {
    tabla_.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().titulo}`);
        tabla_.innerHTML += `
        <tr>
      
        <td>${doc.data().titulo}</td>
        <td>${doc.data().sumilla}</td>
 
        <td> <img src="${doc.data().urlImagen}" width="100px" class="img-fluid" alt=""></td>

        <td>${doc.data().fecha}</td>


        <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
        <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().sumilla}','${doc.data().urlImagen}')">Editar</button></td>
 
        
        </tr>
        `
    });
});


//borrar documentos
function eliminar(id){
    db.collection("spaoasis").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}


    function editar(id, titulo, sumilla, urlImagen){

        document.getElementById('titulo').value = titulo;
        document.getElementById('sumilla').value = sumilla;
        // document.getElementById('descripcion').value = descripcion;
        document.getElementById('urlImagen').value = urlImagen;
        // document.getElementById('autor').value = autor;
       
 

        var boton = document.getElementById('boton');
        boton.innerHTML = 'Editar';

        boton.onclick = function(){
            var washingtonRef = db.collection("spaoasis").doc(id);
            // Set the "capital" field of the city 'DC'

            var titulo = document.getElementById('titulo').value;
            var sumilla = document.getElementById('sumilla').value;
            // var descripcion = document.getElementById('descripcion').value;
            var urlImagen = document.getElementById('urlImagen').value;
            // var autor = document.getElementById('autor').value;
            

            return washingtonRef.update({
              titulo : titulo,
              sumilla : sumilla,
              // descripcion: descripcion,
              urlImagen : urlImagen,
              // autor : autor
            })
            .then(function() {
                console.log("Document successfully updated!");
                boton.innerHTML = 'REGISTRAR';
                  document.getElementById('titulo').value = "";
                  document.getElementById('sumilla').value = "";
                  // document.getElementById('descripcion').value = "";
                  document.getElementById('urlImagen').value = "";
                  // document.getElementById('autor').value = "El camaleón juridico";
            
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        }


        
 var url_redi_local = 'http://localhost/spa/publicar.html';
 var url_redi_remote = 'http://oasispucallpa.com/publicar.html';





        function cerrar_(){
            firebase.auth().signOut()
            .then(function(){
                console.log('Saliendo...')
                if(url_condition == "http://localhost/"){
                  console.log("Test"); 
                  location.href= url_redi_local;
                }else{
                 console.log("Producción")
                 location.href= url_redi_remote;
                }
            })
            .catch(function(error){
                console.log(error)
            })
        }

        
        
}