package registration;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import static registration.DBInfo.*;

public class DBConnection {
    private static Connection con = null;

    private DBConnection() {}  // private constructor to prevent instantiation

    static {
        try {
            // Load Oracle JDBC Driver
            Class.forName("oracle.jdbc.driver.OracleDriver");

            // Establish the connection to the database
            con = DriverManager.getConnection(dbUrl, username, password);
            System.out.println("Database connection established.");
        } 
        catch (ClassNotFoundException e) 
        {
            System.out.println("Error: Oracle JDBC Driver not found.");
            e.printStackTrace();
        } 
        catch (SQLException e)
        {
            System.out.println("Error: Unable to establish a database connection.");
            e.printStackTrace();
        }
    }

    
    public static Connection getCon() {
        return con;
    }
}
