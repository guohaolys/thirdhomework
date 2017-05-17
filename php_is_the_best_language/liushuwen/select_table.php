<?php
$con = mysql_connect("localhost","root","123456");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }


mysql_select_db("db1", $con);


$result = mysql_query("SELECT * FROM user");

while($row = mysql_fetch_array($result))
  {
  echo $row['username'] . " " . $row['password'] . " " . $row['score'];
  echo "<br />";
  }
mysql_close($con);
?>