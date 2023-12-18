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









//////////////////BOTON CANCELAR REFRESCA LA PAGINA ADEMAS DE BORRAR///////////////////////////////////////////////////////////////////
const botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener("click", function(){
    window.location.reload();
})




////////////////////////BOTON RESUMEN E IMPRIMIR TICKET////////////////////////////////////////////////////////////////////////////
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
                            <p id="texto-ticket" class="card-text"><strong>Ticket nro:</strong> </p>
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













         
    });
   
});
});







