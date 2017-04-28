<?php
$con = mysql_connect("localhost","root","123456");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }


mysql_select_db("db1", $con);

$sql = "DROP TABLE user";
if (!mysql_query($sql,$con))
  {
 die('Error: ' . mysql_error());
  }
else
  {
	  echo"成功删除";
  }



mysql_close($con);
?>