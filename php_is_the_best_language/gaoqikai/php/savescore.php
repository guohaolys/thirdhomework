
<?php
    $con = mysql_connect("localhost","root","123456");
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error());
	  }

	mysql_select_db("db1", $con);
/*
	$result = mysql_query("SELECT * FROM user");

	while($row = mysql_fetch_array($result))
	  {
	  echo $row['username'];
	  echo "<br />";
	  }
*/
	  $username = $_COOKIE["username"];
	  $score = $_GET["score"];
	  $sql="UPDATE user SET score = $score
           WHERE username = '$username'";
      if (!mysql_query($sql,$con))
        {
            die('Error: ' . mysql_error());
        }

	mysql_close($con);
?>
