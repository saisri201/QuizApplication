package registration;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
@WebServlet("/register")
public class RegisterServlet extends HttpServlet
{
	protected void doPost(HttpServletRequest  req,HttpServletResponse res)throws ServletException,IOException
	{
		UserBean ub=new UserBean();
		ub.setUsername(req.getParameter("username"));
		ub.setPassword(req.getParameter("password"));
		int k=new RegisterDAO().register(ub);
		if(k>0)
		{
			req.setAttribute("msg","user Registered successfully!!!!!!!!!!!!!!!!!!!!!!!!!!!<br>");
			RequestDispatcher rd=req.getRequestDispatcher("register.jsp");
			rd.forward(req, res);
		}
		else
		{
			req.setAttribute("msg", "User already regsitered ...please Login....<br>");
			RequestDispatcher rd=req.getRequestDispatcher("register.jsp");
			rd.forward(req, res);
		}

	}
	

}
