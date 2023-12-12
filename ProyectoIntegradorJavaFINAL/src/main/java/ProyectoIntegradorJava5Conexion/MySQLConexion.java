package ProyectoIntegradorJava5Conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySQLConexion {

	private static final String CONTROLADOR = "com.mysql.cj.jdbc.Driver";
	private static final String URL = "jdbc:mysql://localhost:3306/conferencia";
	private static final String USSER = "root";
	private static final String PASS = "";
	

	//REALIZAMOS LA CONECCION CON EL CONTROLADOR JDBC ("com.mysql.cj.jdbc.Driver")
	static {
		try {
			Class.forName(CONTROLADOR);
			System.out.println("Se cargo el controlador correctamente");
		} 
	     catch (ClassNotFoundException e) {
			System.err.println("Error al cargar el controlador");
			e.printStackTrace();
		}
		
		 
	}
	
	

	//REALIZAMOS LA CONEXION CON LA BASE DE DATOS
	public Connection conectar() {

		Connection conexion = null;

		try {
			conexion = DriverManager.getConnection(URL, USSER, PASS);
			System.out.println("Se genero correctamente la conexion con la Base de Datos ARCHIVO: MySQLConexion.java");
		}	
		catch (SQLException e) {
			System.out.println("Error al establecer la conexion ARCHIVO: CargaDatosFormualario.jsp");
			e.printStackTrace();
		}
		return conexion;
	}

}

//1.Generamos nuestra clase "Conexion"
//2.Generamos el metodo "conectar"
//3.Dentro del "try" generamos la conexion del Drive (entramos dentro del "com.mysql.cj.jdbc.Driver") 
//4.Dentro del "try" agregamos la conexion









