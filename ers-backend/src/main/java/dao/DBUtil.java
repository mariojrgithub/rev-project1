package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBUtil {
	
	// use static keyword to make sure there is only one connection made
	
	static Connection conn;
	
	static {
//		step 1
		try {
			Class.forName("org.postgresql.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}

	static Connection obtainConnection() {
		
		// design pattern - singleton design pattern
		
//		step 2
		String connectionUrl = "jdbc:postgresql://ip-172-31-39-229.us-east-2.compute.internal:5432/ers";
		String userName = "postgres";
		String password = "mysecretpassword";
		
		if(conn == null) {
			try {
				conn = DriverManager.getConnection(connectionUrl, userName, password);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		return conn;
	}
	
	static void closeConnection() {
		try {
			conn.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}

