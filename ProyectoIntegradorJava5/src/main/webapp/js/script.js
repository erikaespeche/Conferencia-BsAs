//FUNCION TOTAL A PAGAR
function calcularTotal(){
    //LLAMADO DE ELEMENTOS DEL HTML
    const $cantidad = document.getElementById('cantidad');
    const $categoria = document.getElementById('categoria');
    const $totalPagar = document.getElementById('totalPagar');
    const $nombre = document.getElementById('nombre');
    const $apellido = document.getElementById('apellido');
    const $mail = document.getElementById('mail');
    
 

    validacionNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    validacionApellido = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    validacionEmail = /^\w+@(\w+\.)+\w{2,4}$/;


    if ((!$nombre.value || !validacionNombre.exec($nombre.value)) || (!$apellido.value || !validacionApellido.exec($apellido.value)) || (!$mail.value || !validacionEmail.exec($mail.value)) || ($cantidad.value === "") || ($categoria.value === "") ){
        $nombre.classList.add("error-input");
        $apellido.classList.add("error-input");
        $mail.classList.add("error-input");
        $cantidad.classList.add("error-input");
        $categoria.classList.add("error-input");

        
        alert("Complete todos los campos antes de calcular el Total.");
        
        return;
        
    }
    else{
        $nombre.classList.remove("error-input");
        $apellido.classList.remove("error-input");
        $mail.classList.remove("error-input");
        $cantidad.classList.remove("error-input");
        $categoria.classList.remove("error-input");
        //CALCULO DEL RESUMEN TOTAL A PAGAR
        if($categoria.value == ""){
           resumenTotal = "-";
    }
        if($categoria.value == "Sin Categoria"){
             resumenTotal = 200 * $cantidad.value;
             $totalPagar.innerText = ` $${resumenTotal} `;
     }
         if($categoria.value == "Estudiante"){
            descuento = 200 * 0.8;
            valorConDescuento = 200 - descuento;
            resumenTotal = valorConDescuento * $cantidad.value;
            $totalPagar.innerText = ` $${resumenTotal}` ;  
    } 
         if($categoria.value == "Trainee"){
            descuento = 200 * 0.5;
           valorConDescuento = 200 - descuento;
           resumenTotal = valorConDescuento * $cantidad.   value;
           $totalPagar.innerText = ` $${resumenTotal}` ;
        
    }
        if($categoria.value == "Junior"){
           descuento = 200 * 0.15;
           valorConDescuento = 200 - descuento;
           resumenTotal = valorConDescuento * $cantidad.   value; 
           $totalPagar.innerText = ` $${resumenTotal}`;
    }
    }


    // $totalPagar.innerText = ` $${resumenTotal}`
}

//EVENTO TOTAL A PAGAR
const $botonTotal = document.getElementById('botonTotal');
$botonTotal.addEventListener('click', calcularTotal);





//////////////////////////////////////////////////////////////

//RESUMEN IMPRIMIR
//const $botonResumen = document.getElementById("botonResumen");

//FUNCION VALIDAR ANTES DE IMPRIMIR RESUMEN
// function validarCampos() {
//     const nombre = document.getElementById("nombre").value;
//     const apellido = document.getElementById("apellido").value;
//     const email = document.getElementById("mail").value;
//     const cantidad = document.getElementById("cantidad").value;
//     const categoria = document.getElementById("categoria").value;
    
//     // Aquí debes implementar la lógica para validar los campos
//     // Por ejemplo, puedes verificar si no están vacíos o si cumplen con ciertos criterios
    
//     const camposCompletos = nombre !== "" && apellido !== "" && email !== "" && cantidad !== "" && categoria !== "";
    
//     if (camposCompletos) {
//         $botonResumen.removeAttribute("disabled");
//     } else {
//         $botonResumen.setAttribute("disabled", "true");
//     }
// }

// // Agrega un event listener para escuchar cambios en los campos
// document.getElementById("nombre").addEventListener("input", validarCampos);
// document.getElementById("apellido").addEventListener("input", validarCampos);
// document.getElementById("mail").addEventListener("input", validarCampos);
// document.getElementById("cantidad").addEventListener("input", validarCampos);
// document.getElementById("categoria").addEventListener("input", validarCampos);




///////////////////////////////////////////
//FUNCION IMPRIMIR RESUMEN
// $botonResumen.addEventListener("click", function() {
    
//     if(resumenTotal > 0){
//          const nombre = document.getElementById("nombre").value;
//          const apellido = document.getElementById("apellido").value;
//          const email = document.getElementById("mail").value;
//          const cantidad = document.getElementById("cantidad").value;
//          const categoria = document.getElementById("categoria").value;
       
//          const ticketText = `
//                Nombre: ${nombre}
//                Apellido: ${apellido}
//                Email: ${email}
//                Cantidad: ${cantidad}
//                Categoría: ${categoria}
//                Total a pagar: $${resumenTotal}
//               `;

//          const ticketWindow = window.open("", "Ticket" ,"width=500, height=700", "target=_blank");
//          ticketWindow.document.write(`<pre>${ticketText}</pre>`);
//          ticketWindow.document.write("<button onclick='window.print()'>Imprimir</button>"); 
//     }
//     else if(resumenTotal == 0 || resumenTotal == "" || resumenTotal == null || resumenTotal == NaN){
//         alert('Calcule el TOTAL antes de ver el Resumen');
        
//     }




// });    


// const $datosTicket = document.getElementById('datosTicket');

// $botonResumen.addEventListener("click", function() {

//     if(resumenTotal > 0){
//         const nombre = document.getElementById("nombre").value;
//         const apellido = document.getElementById("apellido").value;
//         const mail = document.getElementById("mail").value;
//         const cantidad = document.getElementById("cantidad").value;
//         const categoria = document.getElementById("categoria").value;


//         $datosTicket.innerHTML +=`          
            
            
//               <h5 id="titulo-tarjeta" class="card-title" class="text-center" >Ticket</h5>
//               <p id="texto-ticket" class="card-text">Nombre: ${nombre}</p>
//               <p id="texto-ticket" class="card-text">Apellido: ${apellido}</p>
//               <p id="texto-ticket" class="card-text">Mail: ${mail}</p>
//               <p id="texto-ticket" class="card-text">Cantidad: ${cantidad}</p>
//               <p id="texto-ticket" class="card-text">Categoria: ${categoria}</p>
//               <p id="texto-ticket" class="card-text">Total: ${resumenTotal}</p>
//               <div id="div-botonimprimir">
//                 <button id="boton-imprimirTicket" type="button" class="btn btn-success" onclick='window.print()''> Imprimir </button>
//               </div>
//             </div>
    
          
    
//      `
//         const ticketWindow = window.open('imprimirTicket.html', "target=_blank");
//         ticketWindow.document.write(`${$datosTicket}`);



//     };

        
// });



///////////////////////FUNCION IMPRIMIR RESUMEN/////////////////////////


// const $botonResumen = document.getElementById("botonResumen");
// const $datosTicket = document.getElementById('datosTicket');

// $botonResumen.addEventListener("click", function() {
//     if(resumenTotal > 0){
//         const nombre = document.getElementById("nombre").value;
//         const apellido = document.getElementById("apellido").value;
//         const mail = document.getElementById("mail").value;
//         const cantidad = document.getElementById("cantidad").value;
//         const categoria = document.getElementById("categoria").value;

//         const ticketContenido = `
//             <div class="card" style="width: 18rem;">
//                 <div id="div-tildeverde">
//                     <img id="tildeverde" src="../../img/tildeverde.png" class="card-img-top" alt="...">
//                 </div>
//                 <div id="datosTicket" class="card-body">
//                     <h5 id="titulo-tarjeta" class="card-title text-center">Ticket</h5>
//                     <p class="card-text">Nombre: ${nombre}</p>
//                     <p class="card-text">Apellido: ${apellido}</p>
//                     <p class="card-text">Mail: ${mail}</p>
//                     <p class="card-text">Cantidad: ${cantidad}</p>
//                     <p class="card-text">Categoria: ${categoria}</p>
//                     <p class="card-text">Total: $${resumenTotal}</p>
//                     <div id="div-botonimprimir">
//                         <button id="boton-imprimirTicket" type="button" class="btn btn-success" onclick='window.print()'> Imprimir </button>
//                     </div>
//                 </div>
//             </div>
//         `;

//         const ticketWindow = window.open('', '_blank');
//         ticketWindow.document.write(`
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <title>Ticket</title>
//             <link rel="stylesheet" href="../../css/bootstrap.min.css">
//             <style>
//             #body-imprimirTicket{
//                 display: flex;
//                 align-content: center;
//                 justify-content: center;
//             }
            
//             #div-tildeverde{
//                 width: 100%;
//                 display: flex;
//                 justify-content: center;
                
//             }
            
//             #tildeverde{
//                 width: 50%;
//                 height: 94%;
//             }
            
//             #titulo-tarjeta{
//                 width: 100%;
//                 text-align: center;
//                 margin-bottom: 3rem;
//                 font-family: monospace;
//                 font-size: 1.5rem;
//             }
            
//             #texto-ticket{
//                 font-family: monospace;
//             }
            
//             #div-botonimprimir{
//                 width: 100%;
//                 display: flex;
//                 justify-content: center;
//             }
            
//             #boton-imprimirTicket{
//                 margin-top: 1rem;
//             }
            
//             #boton-imprimirTicket>a{
//                 font-family: monospace;
//                 text-decoration: none;
//                 color: #fff;
//             }
//             </style>
//         </head>
//         <body id="body-imprimirTicket">
//             ${ticketContenido}
//             <script src="../../js/bootstrap.min.js"></script>
//         </body>
//         </html>
//     `);
 



//         ticketWindow.document.close();
//     }
// });





//////////////////BOTON CANCELAR REFRESCA LA PAGINA ADEMAS DE BORRAR////////////////////////////
const botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener("click", function(){
    window.location.reload();
})









///////////////////////VENTANA EMERGENTE CONFIRMAR PEDIDO/////////////////////////

// document.addEventListener("DOMContentLoaded", function () {
//     // Accede al formulario
//     const form = document.getElementById("formulario");
  
//     // Agrega un evento al envío del formulario
//     form.addEventListener("submit", function (event) {
//       event.preventDefault(); // Evita el envío del formulario por defecto


//         // Obtiene los valores del formulario
//       const nombre = document.getElementById("nombre").value;
//       const apellido = document.getElementById("apellido").value;
//       const mail = document.getElementById("mail").value;
//       const cantidad = document.getElementById("cantidad").value;
//       const categoria = document.getElementById("categoria").value;


  
//       // Construye el resumen del pedido
//       const resumen = `
//         <p><strong>Nombre:</strong> ${nombre}</p>
//         <p><strong>Apellido:</strong> ${apellido}</p>
//         <p><strong>Mail:</strong> ${mail}</p>
//         <p><strong>Cantidad:</strong> ${cantidad}</p>
//         <p><strong>Categoría:</strong> ${categoria}</p>
//         <p><strong>Total:</strong> $${resumenTotal}</p>

//       `;
  
//       // Muestra el resumen en la ventana emergente
//       document.getElementById("resumenPedido").innerHTML = resumen;
  
//       // Muestra la ventana emergente
//       const myModal = new bootstrap.Modal(document.getElementById("resumenModal"));
//       myModal.show();
//     });
  
//     // Agrega un evento al botón "Confirmar pedido"
//     document.getElementById("confirmarPedido").addEventListener("click", function () {

//       const nombre = document.getElementById("nombre").value;
//       const apellido = document.getElementById("apellido").value;
//       const mail = document.getElementById("mail").value;
//       const cantidad = document.getElementById("cantidad").value;
//       const categoria = document.getElementById("categoria").value;
      
//       //CONTENIDO QUE VA A TENER EL TICKET
//         const ticketContenido = `
//             <div class="card" style="width: 18rem;">
//                 <div id="div-tildeverde">
//                     <img id="tildeverde" src="../../img/tildeverde.png" class="card-img-top" alt="...">
//                 </div>
//                 <div id="datosTicket" class="card-body">
//                     <h5 id="titulo-tarjeta" class="card-title text-center"><br>Conferencia</br> Buenos Aires</h5>
//                     <p id="texto-ticket" class="card-text"><strong>Ticket nro:</strong> </p>
//                     <p id="texto-ticket" class="card-text"><strong>Nombre:</strong> ${nombre}</p>
//                     <p id="texto-ticket" class="card-text"><strong>Apellido:</strong> ${apellido}</p>
//                     <p id="texto-ticket" class="card-text"><strong>Mail:</strong> ${mail}</p>
//                     <p id="texto-ticket" class="card-text"><strong>Cantidad:</strong> ${cantidad}</p>
//                     <p id="texto-ticket" class="card-text"><strong>Categoria:</strong> ${categoria}</p>
//                     <p id="texto-ticket" class="card-text"><strong>Total:</strong> $${resumenTotal}</p>
                    
//                 </div>
//                 <div id="div-botonimprimir">
//                         <button id="boton-imprimirTicket" type="button" class="btn btn-success" onclick='window.print()'> Imprimir </button>
//                 </div>
//             </div>
//         `;

       


//         //ABRIR VENTANA CON TICKET PARA IMPRIMIR
//         const ticketWindow = window.open('', '_blank');
//         ticketWindow.document.write(`
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <title>Ticket</title>
//             <link rel="stylesheet" href="../../css/bootstrap.min.css">
//             <style>
//             #body-imprimirTicket{
//                 display: flex;
//                 align-content: center;
//                 justify-content: center;
//                 height: 100vh;
//                 align-items: center;
//             }
            
//             #div-tildeverde{
//                 width: 100%;
//                 display: flex;
//                 justify-content: center;
                
//             }
            
//             #tildeverde{
//                 width: 20%;
//                 height: 90%;
//             }
            
//             #titulo-tarjeta{
//                 width: 100%;
//                 text-align: center;
//                 margin-bottom: 3rem;
//                 font-family: monospace;
//                 font-size: 1.5rem;
//             }
            
//             #texto-ticket{
//                 font-family: monospace;
//                 line-height: 20px;
//             }
            
//             #div-botonimprimir{
//                 width: 100%;
//                 display: flex;
//                 justify-content: center;
//             }
            
//             #boton-imprimirTicket{
//                 margin: 1rem;
//             }
            
//             #boton-imprimirTicket>a{
//                 font-family: monospace;
//                 text-decoration: none;
//                 color: #fff;
//             }
//             </style>
//         </head>
//         <body id="body-imprimirTicket">
//             ${ticketContenido}
//             <script src="../../js/bootstrap.min.js"></script>
//         </body>
//         </html>
//     `);
 


//       const myModal = new bootstrap.Modal(document.getElementById("resumenModal"));
//       myModal.hide();

//       //CODIGO PARA QUE CUANDO TOQUE COFIRMAR PEDIDO LA PAGINA "COMPRAR TICKET" SE ACTUALICE
//       window.location.reload()

//     });

    
//   });
  




// const $botonResumen = document.getElementById("botonResumen");



// function confirmacion(){
//     const nombre = document.getElementById("nombre").value;
//     const apellido = document.getElementById("apellido").value;
//     const mail = document.getElementById("mail").value;
//     const cantidad = document.getElementById("cantidad").value;
//     const categoria = document.getElementById("categoria").value;





//     let respuesta = confirm(`DATOS INGRESADOS
//         nombre: ${nombre}
//         apellido: ${apellido}
//         mail: ${mail}
//         cantidad: ${cantidad}
//         categoria: ${categoria}`)
    
//         if(respuesta == true){
//             return true;    
//         }
//         else{
//             return false;
//         }
// }


function pregunta(){

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const mail = document.getElementById("mail").value;
    const cantidad = document.getElementById("cantidad").value;
    const categoria = document.getElementById("categoria").value;




    // if (confirm(`¿CONFIRMA DATOS INGRESADOS?
    //         nombre: ${nombre}
    //         apellido: ${apellido}
    //         mail: ${mail}
    //         cantidad: ${cantidad}
    //         categoria: ${categoria}`))  {
    //     document.getElementById("formulario").submit();
    // }
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("botonResumen").addEventListener("click", function(e){
         e.preventDefault();
         const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const mail = document.getElementById("mail").value;
      const cantidad = document.getElementById("cantidad").value;
      const categoria = document.getElementById("categoria").value;


  
      // Construye el resumen del pedido
      const resumen = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellido:</strong> ${apellido}</p>
        <p><strong>Mail:</strong> ${mail}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
        <p><strong>Categoría:</strong> ${categoria}</p>
        <p><strong>Total:</strong> $${resumenTotal}</p>

      `;
  
      // Muestra el resumen en la ventana emergente
      document.getElementById("resumenPedido").innerHTML = resumen;
  
      // Muestra la ventana emergente
      const myModal = new bootstrap.Modal(document.getElementById("resumenModal"));
      myModal.show();


      document.getElementById("confirmarPedido").addEventListener("click", function () {

              const nombre = document.getElementById("nombre").value;
              const apellido = document.getElementById("apellido").value;
              const mail = document.getElementById("mail").value;
              const cantidad = document.getElementById("cantidad").value;
              const categoria = document.getElementById("categoria").value;
              
              //CONTENIDO QUE VA A TENER EL TICKET
                const ticketContenido = `
                    <div class="card" style="width: 18rem;">
                        <div id="div-tildeverde">
                            <img id="tildeverde" src="../../img/tildeverde.png" class="card-img-top" alt="...">
                        </div>
                        <div id="datosTicket" class="card-body">
                            <h5 id="titulo-tarjeta" class="card-title text-center"><br>Conferencia</br> Buenos Aires</h5>
                            <p id="texto-ticket" class="card-text"><strong>Nombre:</strong> ${nombre}</p>
                            <p id="texto-ticket" class="card-text"><strong>Apellido:</strong> ${apellido}</p>
                            <p id="texto-ticket" class="card-text"><strong>Mail:</strong> ${mail}</p>
                            <p id="texto-ticket" class="card-text"><strong>Cantidad:</strong> ${cantidad}</p>
                            <p id="texto-ticket" class="card-text"><strong>Categoria:</strong> ${categoria}</p>
                            <p id="texto-ticket" class="card-text"><strong>Total:</strong> $${resumenTotal}</p>
                            
                        </div>
                        <div id="div-botonimprimir">
                                <button id="boton-imprimirTicket" type="button" class="btn btn-success" onclick='window.print()'> Imprimir </button>
                        </div>
                    </div>
                `;
        
               
        
        
                //ABRIR VENTANA CON TICKET PARA IMPRIMIR
                const ticketWindow = window.open('', '_blank');
                ticketWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Ticket</title>
                    <link rel="stylesheet" href="../../css/bootstrap.min.css">
                    <style>
                    #body-imprimirTicket{
                        display: flex;
                        align-content: center;
                        justify-content: center;
                        height: 100vh;
                        align-items: center;
                    }
                    
                    #div-tildeverde{
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        
                    }
                    
                    #tildeverde{
                        width: 20%;
                        height: 90%;
                    }
                    
                    #titulo-tarjeta{
                        width: 100%;
                        text-align: center;
                        margin-bottom: 3rem;
                        font-family: monospace;
                        font-size: 1.5rem;
                    }
                    
                    #texto-ticket{
                        font-family: monospace;
                        line-height: 20px;
                    }
                    
                    #div-botonimprimir{
                        width: 100%;
                        display: flex;
                        justify-content: center;
                    }
                    
                    #boton-imprimirTicket{
                        margin: 1rem;
                    }
                    
                    #boton-imprimirTicket>a{
                        font-family: monospace;
                        text-decoration: none;
                        color: #fff;
                    }
                    </style>
                </head>
                <body id="body-imprimirTicket">
                    ${ticketContenido}
                    <script src="../../js/bootstrap.min.js"></script>
                </body>
                </html>
            `);
         
        
        
              const myModal = new bootstrap.Modal(document.getElementById("resumenModal"));
              myModal.hide();

              //CODIGO PARA QUE CUANDO TOQUE COFIRMAR PEDIDO LA PAGINA "COMPRAR TICKET" SE ACTUALICE
              window.location.reload()













         pregunta();
    });
   
});
});
