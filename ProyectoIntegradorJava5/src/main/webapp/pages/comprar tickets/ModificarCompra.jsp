<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
	
<%--IMPORTAMOS EL PAQUETE CON LA CLASE "MySQLConexion" para poder usar la libreria en este archivo .JSP --%>	
<%@ page import = "ProyectoIntegradorJava5Conexion.MySQLConexion" %> 

<%@ page import = "java.sql.*" %>    
    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Conferencia Bs As | MODIFICAR COMPRA</title>
</head>
<body>







	<%
	int id = Integer.parseInt(request.getParameter("id")); 
	String nombre = request.getParameter("nombre");
	String apellido = request.getParameter("apellido");
	String mail = request.getParameter("mail");
	String cantidad = request.getParameter("cantidad");
	String categoria = request.getParameter("categoria");
	
	System.out.println(id);
	System.out.println(nombre);
	System.out.println(apellido);
	System.out.println(mail);
	System.out.println(cantidad);
	System.out.println(categoria);
	
	MySQLConexion conexion = new MySQLConexion();
	Connection cn = conexion.conectar();
	
	
	
	
	//LOS DATOS CARGADOS EN "comprarticket.html" SE CARGAN EN ESTE ARCHIVO "CargaFormularioTickets.jsp" Y DE ACA LO ENVIAMOS A LA BASE DE DATOS
	
	//out.println(nombre + apellido + mail + cantidad + categoria);
	
	

	
	try{
		Statement stm = cn.createStatement();
		ResultSet rsId = stm.executeQuery("SELECT id FROM tickets WHERE id= "+id+"");
	    //Muestra ID que estamos enviando
		System.out.println(rsId);
	    
		while(rsId.next() ){
			//estamos diciendo que queremos traer el valor de la primer columna de la base de datos "ticket" 
			int idNum = rsId.getInt(1);
			//Muestra ID que estamos enviando
			System.out.println(idNum);
			
			String query = "UPDATE tickets SET `nombre`='"+nombre+"',`apellido`='"+apellido+"',`mail`='"+mail+"',`cantidad`='"+cantidad+"',`categoria`='"+categoria+"' WHERE id="+idNum+" ";
			stm.executeUpdate(query);
		}
		System.out.println("Se cargaron los datos correctamente ARCHIVO: ModificarCompra.jsp");
	}
	catch(Exception e){
		e.printStackTrace();
		System.out.println("ERROR al cargar los datos ARCHIVO: ModificarCompra.jsp");
	}
	
	
	%>
	
	<jsp:include page="MostrarCompra.jsp"></jsp:include>

</body>
</html>