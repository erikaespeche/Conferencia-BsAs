<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ page import="ProyectoIntegradorJava5Conexion.MySQLConexion"%>
<%@ page import="java.sql.*"%>





<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conferencia Bs As | Mostrar Compras</title>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css'>
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="stylesheet" href="../../css/bootstrap.min.css">    

</head>

<body id="PaginaEliminacionDeCompra">

       <!-- CABECERA -->
       <header>
        <nav class="navbar navbar-expand-lg  bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="../../index.html">
                    <img src="../../img/codoacodo.png" alt="Logo" width="100" class="d-inline-block align-text-center">
                    Conf Bs As
                </a>
                <button id="boton-menu" class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="fi fi-br-menu-burger"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="menu-botones navbar-nav">
                        <a class="hover-botones-menu nav-link text-white active " aria-current="page"
                            href="../../index.html">La Conferencia</a>
                        <a class="hover-botones-menu nav-link text-white" href="../../index.html">Los oradores</a>
                        <a class="hover-botones-menu nav-link text-white" href="../../index.html">El lugar y la
                            fecha</a>
                        <a class="hover-botones-menu nav-link text-white" href="../../index.html">Conviertete en
                            orador</a>
                        <a id="hover-botones-comprartickets" class="nav-link text-white"
                            href="./compratickets.html">Comprar tickets</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>





   <%
MySQLConexion conexion = new MySQLConexion();
Connection cn = conexion.conectar();
PreparedStatement ps = cn.prepareStatement("SELECT * FROM tickets");
ResultSet rs = ps.executeQuery();
%>

    <!-- Tabla para mostrar los datos -->
    <table class="table table-hover table-dark" id="TablaMostrarCompras">
        <td colspan="8" class="table-active"><h2 class="text-center">Compras Realizadas</h2></td>
        <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Mail</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Categoria</th>
            <th scope="col">Modificar</th>
            <th scope="col">Eliminar</th>
        </tr>

        <% while(rs.next()){ %>
        <tr>
            <td><%= rs.getInt(1) %></td>
            <td><%= rs.getString(2) %></td>
            <td><%= rs.getString(3) %></td>
            <td><%= rs.getString(4) %></td>
            <td><%= rs.getString(5) %></td>
            <td><%= rs.getString(6) %></td>
            <td><button type="button" class="btn btn-primary btn-sm btn-modificar">Modificar</button></td>
            <td><button type="button" class="btn btn-danger btn-sm" onclick="eliminarCompra(<%= rs.getInt(1) %>)">Eliminar</button></td>
        </tr>
        <% } %>
    </table>

    <!-- Modal para modificar datos -->
    <div class="modal fade" id="resumenModal" tabindex="-1" aria-labelledby="resumenModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="resumenModalLabel">Modificar Compra</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                
                  <form class="modificarCompra" action="ModificarCompra.jsp"  method="post">
                    <!-- Campos para modificar -->
                    <div class="inputModificar">
                         <label for="modal-id" class="form-label">ID</label>
                        <input name="id" type="number" id="modal-id" value="<%= request.getParameter("id") %>" readonly>
                    </div>
                    
                    <div class="inputModificar">
                        <label for="modal-nombre" class="form-label">Nombre</label>
                        <input name="nombre" type="text" class="form-control" id="modal-nombre">
                    </div>
                    <div class="inputModificar">
                        <label for="modal-apellido" class="form-label">Apellido</label>
                        <input name="apellido" type="text" class="form-control" id="modal-apellido">
                    </div>
                    <div class="inputModificar">
                        <label for="modal-mail" class="form-label">Mail</label>
                        <input name="mail" type="email" class="form-control" id="modal-mail">
                    </div>
                    <div class="inputModificar">
                        <label for="modal-cantidad" class="form-label">Cantidad</label>
                        <input name="cantidad" type="number" class="form-control" id="modal-cantidad">
                    </div>
                    <div class="inputModificar">
                        <label for="modal-categoria" class="form-label">Categoría</label>                     
                    <select name="categoria" class="form-control" id="modal-categoria">
                        <option value="">Seleccione</option> 
                        <option value="Sin Categoria">Sin Categoria</option>
                        <option value="Estudiante">Estudiante</option>
                        <option value="Trainee">Trainee</option>
                        <option value="Junior">Junior</option>
                    </select>
                    </div>

                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" class="btn btn-primary" id="btn-modificar-compra" >Modificar Compra</button>

                </form>
              </div>
                
            </div>
        </div>
    </div>
    
    
    
    
    
    
       <!-- FOOTER -->
       <footer>
        <a class="footer uno">Preguntas frecuentes</a>
        <a class="footer dos">Contactanos</a>
        <a class="footer tres">Prensa</a>
        <a class="footer cuatro">Conferencias</a>
        <a class="footer cinco">Terminos y condiciones</a>
        <a class="footer seis">Privacidad</a>
        <a class="footer siete">Estudiantes</a>
    </footer>
    
    
    
    
    
    

    <!-- Scripts -->
    <script>
/////////////////////////////// Agrega un evento click a todos los botones "Modificar"//////////////////////////////////////////////////
    const buttons = document.querySelectorAll('.btn-modificar');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Obtén los datos de la fila actual
            const row = button.closest('tr');
            const id = row.cells[0].innerText;
            const nombre = row.cells[1].innerText;
            const apellido = row.cells[2].innerText;
            const mail = row.cells[3].innerText;
            const cantidad = row.cells[4].innerText;
            const categoria = row.cells[5].innerText;

            // Rellena la ventana emergente con los datos
            document.getElementById('modal-id').value = id;
            document.getElementById('modal-nombre').value = nombre;
            document.getElementById('modal-apellido').value = apellido;
            document.getElementById('modal-mail').value = mail;
            document.getElementById('modal-cantidad').value = cantidad;
            document.getElementById('modal-categoria').value = categoria;

            // Abre la ventana emergente (modal)
            const modal = new bootstrap.Modal(document.getElementById('resumenModal'));
            modal.show();
        });
    });

    
    ///////////FUNCION ELIMINAR COMPRA//////////////////////
    function eliminarCompra(id) {
        if (confirm("¿Estás seguro de que quieres eliminar esta compra?")) {
            window.location.href = 'EliminarCompra.jsp?id=' + id; // Envía el ID como parámetro en la URL
          
        }
    }
    
    
    
    
    
    
    
    
    
    </script>
  

    <script src="../../js/script.js"></script>
    <script src="../../js/bootstrap.min.js"></script>
    
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"  integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">
    </script>


</body>

</html>




















