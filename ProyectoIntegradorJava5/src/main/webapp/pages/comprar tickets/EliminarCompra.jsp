<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
	
<%--IMPORTAMOS EL PAQUETE CON LA CLASE "MySQLConexion" para poder usar la libreria en este archivo .JSP --%>	
<%@ page import = "ProyectoIntegradorJava5Conexion.MySQLConexion" %> 

<%@ page import = "java.sql.*" %>    
    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Conferencia Bs As | ELIMINAR COMPRA</title>
</head>
<body>







	<%
	int id = Integer.parseInt(request.getParameter("id")); 

	
	System.out.println(id);

	
	
	MySQLConexion conexion = new MySQLConexion();
	Connection cn = conexion.conectar();
	
	
	
	
	//LOS DATOS CARGADOS EN "comprarticket.html" SE CARGAN EN ESTE ARCHIVO "CargaFormularioTickets.jsp" Y DE ACA LO ENVIAMOS A LA BASE DE DATOS
	
	//out.println(nombre + apellido + mail + cantidad + categoria);
	
	

	
	try{
		Statement stm = cn.createStatement();
		ResultSet rsId = stm.executeQuery("SELECT id FROM tickets WHERE id= "+id+"");
		
	   
		
		//out.print(rsId);
	    
		while(rsId.next() ){
			//estamos diciendo que queremos traer el valor de la primer columna de la base de datos "ticket" 
			int idNum = rsId.getInt(1);
			String query = "DELETE FROM tickets WHERE id = "+idNum+" ";
			stm.executeUpdate(query);
			response.setContentType("text/html");
			response.getWriter().println("<script>window.open('SeEliminoCorrectamente.html', '_blank');</script>");
		}
		System.out.println("Se cargaron los datos correctamente ARCHIVO: EliminarCompra.jsp");
	}
	catch(Exception e){
		e.printStackTrace();
		System.out.println("ERROR al cargar los datos ARCHIVO: EliminarCompra.jsp");
	}
	
	
	%>
	<jsp:include page="ModificarCompra.jsp"></jsp:include>
	

</body>
</html>