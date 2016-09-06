<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="tsofen.jsp.DBManager" %>

<%

	DBManager um = DBManager.getInstance();

	if(request.getParameter("func").equals("getAllUsers"))
		out.write(um.getUsersListAsHTML());
	else if(request.getParameter("func").equals("getCampaigns"))
		out.write(um.getCampaigns());

	
	// Closing Connection To Database
	um.closeConToDB();


	
	
	
	

/*response.expires=-1;
sql="SELECT * FROM CUSTOMERS WHERE CUSTOMERID=";
sql=sql & "'" & request.querystring("q") & "'";

set conn=Server.CreateObject("ADODB.Connection");
conn.Provider="Microsoft.Jet.OLEDB.4.0";
conn.Open(Server.Mappath("/datafolder/northwind.mdb"));
set rs=Server.CreateObject("ADODB.recordset");
rs.Open sql,conn;

String returnStr = "";

returnStr = "<table border='1'>" +
			"<thead>" +
			"<tr>" +
			"<th>Name</th>" +
			"<th>Email</th>" +
			"<th>Password</th>" +
			"</tr>" +
			"</thead>" +	
			"<tbody>" ;

rs = st.executeQuery("SELECT * FROM Users");
while(rs.next())
	returnStr += "<tr><td>" + rs.getString(1) + "</td>" +
			 "<td>" + rs.getString(3) + "</td>" +
			 "<td>" + rs.getString(2) + "</td></tr>";

returnStr += "</tbody>" + 
		     "</table>";
return returnStr;*/
/*
do until rs.EOF
  for each x in rs.Fields
    response.write("<tr><td><b>" & x.name & "</b></td>")
    response.write("<td>" & x.value & "</td></tr>")
  next
  rs.MoveNext
loop
response.write("</table>")*/
%>
