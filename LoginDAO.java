package registration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class LoginDAO 
{
	public UserBean ub=null;
	public UserBean login(String username,String password)
	{
		try
		{
			Connection con=DBConnection.getCon();
			PreparedStatement ps=con.prepareStatement("select * from users where username=? and password=?");
			ps.setString(1, username);
			ps.setString(2,password);
			ResultSet rs=ps.executeQuery();
			if(rs.next())
			{
				ub=new UserBean();
				ub.setUsername(rs.getString(1));
				ub.setPassword(rs.getString(2));	
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return ub;
		
	}


}
