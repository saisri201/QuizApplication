package registration;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class RegisterDAO 
{
	public int k=0;
	public int register(UserBean ub)
	{
		Connection con=DBConnection.getCon();
		try {	
			PreparedStatement ps=con.prepareStatement("INSERT INTO users (username,password) values(?,?)");
			ps.setString(1,ub.getUsername());
			ps.setString(2,ub.getPassword());
			k=ps.executeUpdate();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return k;
	}

}
