<?php
$con = mysql_connect("localhost","root","123456");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

// Create table in db1 database
mysql_select_db("db1", $con);

$sql = "CREATE TABLE user 
(
	username varchar(15),
	password varchar(15),
	score varchar(15)
)";
if (!mysql_query($sql,$con))
  {
 die('Error: ' . mysql_error());
  }
  else
  {
	  echo"成功创建";
  }

$sql1="INSERT INTO user (username, password) VALUES ('1', '1')";
if (!mysql_query($sql1,$con))
  {
  die('Error: ' . mysql_error());
  }



mysql_close($con);
?>