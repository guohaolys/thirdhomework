
<?php
    $con = mysql_connect("localhost","root","123456");
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error());
	  }

	mysql_select_db("db1", $con);

	  $username = $_COOKIE["username"];
	  $sql="SELECT score  FROM user WHERE username = '$username'";
	  //$sql="SELECT * FROM user";
	  $result = mysql_query($sql,$con);
      if (!$result)
        {
            die('Error: ' . mysql_error());
        }else{
			while($row = mysql_fetch_array($result))
              {
                echo $row['score'];
              }
		}

	mysql_close($con);
?>
