<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    import="registration.UserBean" %>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
    <title>Welcome Page</title>
    <style>
        .welcome-message 
        {
    margin-top: 0; 
    padding-right: 20px; 
     font-weight: bold;
     
}
       
    </style>
</head>
<body>
<%

UserBean ub = (UserBean) application.getAttribute("ubean");

%>
<div class="welcome-message">
Welcome: <%= ub.getUsername() %>
</div>

  <%@ include file="quiz.html" %>

</body>
</html>