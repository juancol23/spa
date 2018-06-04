 //configuración personal de Firebase
     
      firebase.initializeApp({
          apiKey: "AIzaSyCE-n4QOuKmPQGnpLdT1svm5z5C1lobZs4",
          authDomain: "camaleonjuridico-92ad6.firebaseapp.com",

          projectId: "camaleonjuridico-92ad6"
      });  
             
      // Initialize Cloud Firestore through Firebase
      var db = firebase.firestore();

      //Leer documentos
      var contenido = document.getElementById('contenido');
 
      db.collection("spaoasis").orderBy('fecha', 'desc')
      .onSnapshot((querySnapshot) => {
          contenido.innerHTML = '';
          querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data().titulo}`);
              contenido.innerHTML += ` 

                <div class="col-md-4">
                    <div class="card card-member" >
                        <div class="content medida">
                            <div class="  ">
                                <img alt="..." class="img- " src="${doc.data().urlImagen}"/>
                            </div>
                            <div class="description">
                              <br>
                                <h3 class="title"> ${doc.data().titulo}</h3>
                                                                                    <br>
                                <p class="description" style="text-align: justify;">
                                   ${doc.data().sumilla}
                                </p>
                              
                             
                                   <a href="#" class="btn btn-danger btn-fill" data-toggle="modal" data-target="#exampleModal"  >¡Pidelo ya!</a>
                            </div>
                        </div>
                    </div>
                </div>

	             

              `
          });
      });

  // function redireccionar(id, titulo, sumilla, urlImagen, autor){


  //     let post = {
  //         titulo: titulo,
  //         sumilla: sumilla,
  //         // descripcion: descripcion,
  //         urlImagen: urlImagen,
  //         autor: autor
         
  //     }

  //     localStorage.setItem("post", JSON.stringify(post));

  //     console.log("post ---- .-.- -- -- - ----" + JSON.parse(localStorage.getItem('post')));


  //     var URLactual = window.location.href;
  //     let url_condition = URLactual.substr(0,17);

  //     var url_redi_local = 'http://localhost/derechohermano/post.html';
                            
  //     var url_redi_remote = 'https://juanvaldemar.github.io/derechohermano/post.html';

  //      if(url_condition == "http://localhost/"){
  //         console.log("Test"); 
  //         location.href= url_redi_local;
  //       }else{
  //        console.log("Producción")
  //        location.href= url_redi_remote;
  //       }

   
  //     // window.location.href = "http://localhost/derechohermano/post.html";

  //     //let order = JSON.parse(localStorage.getItem('order'));
 
  //   }


      function registrar(){
         
 
          db.collection("spaoasis").add({ 

              titulo : "CALIDAD REACREDITADA EN CHILE Y ESTADOS UNIDOS",
              sumilla : "Los problemas se ven muy pequeños desde 150 millas de altura",
              urlImagen : "https://www.umayor.cl/um/bundles/carreras/images/carreras/santiago/derecho.jpg",
              autor : "Camaleón Jurídico",
              fecha : "04/sep/2018"
          })
         
          .then(function(docRef) {
              console.log("Fuente publicada: ", docRef.id); 
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

 