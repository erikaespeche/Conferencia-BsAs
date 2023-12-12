<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
	
<%--IMPORTAMOS EL PAQUETE CON LA CLASE "MySQLConexion" para poder usar la libreria en este archivo .JSP --%>	
<%@ page import = "ProyectoIntegradorJava5Conexion.MySQLConexion" %> 

<%@ page import = "java.sql.*" %>


	
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Conferencia Bs As | Comprar Tickets</title>
<link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
</head>
<body>

	<%
	String nombre = request.getParameter("nombre");
	String apellido = request.getParameter("apellido");
	String mail = request.getParameter("mail");
	String cantidad = request.getParameter("cantidad");
	String categoria = request.getParameter("categoria");
	//LOS DATOS CARGADOS EN "comprarticket.html" SE CARGAN EN ESTE ARCHIVO "CargaFormularioTickets.jsp" Y DE ACA LO ENVIAMOS A LA BASE DE DATOS
	String query = "INSERT INTO tickets (nombre,apellido,mail,cantidad,categoria) VALUES('"+nombre+"','"+apellido+"','"+mail+"','"+cantidad+"','"+categoria+"')";

	//out.println(nombre + apellido + mail + cantidad + categoria);
	
	
	MySQLConexion conexion = new MySQLConexion();
	Connection cn = conexion.conectar();
	
	
	try{
		Statement stm = cn.createStatement();
		stm.executeUpdate(query);
		System.out.println("Se cargaron los datos correctamente ARCHIVO: CargaDatosFormualario.jsp");
	}
	catch(Exception e){
		e.printStackTrace();
		System.out.println("ERROR al cargar los datos ARCHIVO: CargaDatosFormualario.jsp");
	}
	
	
	
	
	%>
	
	<jsp:include page="compratickets.html"></jsp:include>
	
	
	


</body>
</html>

