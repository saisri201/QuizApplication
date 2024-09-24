package registration;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@SuppressWarnings("serial")
@WebServlet("/login")
public class LoginServlet extends HttpServlet
{
	  protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException
	  {
	        String username = req.getParameter("username");
	        String password = req.getParameter("password");
	       UserBean ub=new LoginDAO().login(username,password);
	       if(ub!=null)
	       {
	    	 ServletContext sct=req.getServletContext();
	    	   sct.setAttribute("ubean", ub);
	    	   Cookie ck=new Cookie("username",ub.getUsername());
	    	   res.addCookie(ck);
//	    	   req.setAttribute("msg", "Login success...Take Quiz <br>");
	    	   RequestDispatcher rd=req.getRequestDispatcher("LoginSuccess.jsp");
	    	   rd.forward(req, res);
	       }
	       else
	       {
	    	   
	    	  
	    	   req.setAttribute("msg", "Invalid User Login....check the password and username or please register again!!!!!!!<br>");
	    	   RequestDispatcher rd=req.getRequestDispatcher("LoginFail.jsp");
	    	   rd.forward(req, res);
	       }
	        
		  
	  }

}
