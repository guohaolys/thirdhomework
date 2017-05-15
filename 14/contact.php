<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!--========== The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags ==========-->
<title>Contact</title>

<!--==========Dependency============-->
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="vendors/owl-carousel/assets/owl.carousel.css">
<link rel="stylesheet" href="vendors/magnific-popup/magnific-popup.css">

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kanit:500">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Josefin+Sans:600,700italic">
<link href='https://fonts.googleapis.com/css?family=Dosis:400,200,300,500,600,800,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:400,300,300italic,400italic">
<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500italic,500,700italic,700,900,900italic' rel='stylesheet' type='text/css'>

<!--==========Theme Styles==========-->
<link href="css/style.css" rel="stylesheet">
<link href="css/theme/green.css" rel="stylesheet">

<!--========== HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries ==========-->
<!--========== WARNING: Respond.js doesn't work if you view the page via file:// ==========-->
<!--==========[if lt IE 9]>
    <script src="js/html5shiv.min.js"></script>
    <script src="js/respond.min.js"></script>
<![endif]==========-->
</head>

<?php
$name = $email = $gender = $comment = $website = "";
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$bingo_recording=0;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

     @$name = test_input($_POST['name']);   
     @$email = test_input($_POST["email"]);
     @$website = test_input($_POST["website"]);
     @$comment = test_input($_POST["comment"]);
     @$gender = test_input($_POST["gender"]);
   
 		$link = mysql_connect ( 'localhost', 'root', '123' ) or die ( 'Could not connect: ' . mysql_error () );
		if (mysql_query("CREATE DATABASE IF NOT EXISTS contact CHARACTER SET utf8 COLLATE utf8_general_ci",$link))
		  {
			  //echo"Create database contact successed!";
		  }
		else
		  {
			  echo "Error creating database: " . mysql_error();
			  $bingo_recording++;
		  }

		 mysql_select_db("contact",$link);
		 $sql_table="CREATE TABLE IF NOT EXISTS `visitor` (";
		 $sql_table.="`id`  int NOT NULL AUTO_INCREMENT ,";
		 $sql_table.="`name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,";
		 $sql_table.="`email`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,";
		 $sql_table.="`comment`  varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,";
		 $sql_table.="`website`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,";
		 $sql_table.="`sex`  varchar(255) NULL ,";
		 $sql_table.="PRIMARY KEY (`id`))";
		 $sql_table.="ENGINE=MyISAM DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci CHECKSUM=0 DELAY_KEY_WRITE=0;";
		 
		 if (mysql_query($sql_table,$link))
		  {
			  //echo"create tables successed!";
		  }
		else
		  {
		  echo "Error creating tables: " . mysql_error();
		  $bingo_recording++;
		  }
		  
		  $sql_record="INSERT INTO `visitor` (`name`, `email`, `comment`, `website`, `sex`) VALUES ('$name','$email','$comment','$website','$gender')";
		if (mysql_query($sql_record,$link))
		  {
			  //echo"create record successed!";
		  }
		else
		  {
		  echo "Error creating record: " . mysql_error();
		  $bingo_recording++;
		  }
		mysql_close ( $link );
  
}


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
   
?>

<body class="home">

<header class="row transparent white" data-spy="affix" data-offset-top="300" id="header">
    <div class="container">
        <div class="row top-header">
            <div class="col-sm-4 search-form-col">
                <form action="#" method="get" class="search-form">
                    <div class="input-group">
                        <span class="input-group-addon"><img src="images/search-icon-dark.png" alt=""></span>
                        <input type="search" class="form-control" placeholder="search">
                    </div>
                </form>
            </div>
            <div class="col-sm-4 logo-col text-center">
                <a href="index.html"><img src="images/2.png" alt=""></a>
            </div>
            <div class="col-sm-4 menu-trigger-col">
                <button class="menu-trigger black pull-right">
                    <span class="active-page">Contact</span>
                    <img src="images/menu-align-dark.png" alt="" class="icon-burger">
                    <img src="images/menu-close-dark.png" alt="" class="icon-cross">
                </button>
            </div>
        </div>        
    </div>
    <div class="row menu-section">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 menu-col">
                    <div class="row">
                        <ul class="nav column-menu white-bg">
                            <li><a href="index.html" >Home</a></li>
							<li><a href="yuanyu3.html">儿童经典读物</a></li>
                            <li><a href="../final_wxr.html">三毛&echo </a></li>
                        </ul>
                        <ul class="nav column-menu white-bg">
                            <li><a href="ZHANGY/zy.html">进口图书</a></li>
                            <li><a href="xingchang.html">心理学图书</a></li>                                                    
                            <li class="active"><a href="contact.php">contact</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
	
</header>


<section class="row page-content-wrap">
    <div class="container">
        <h2 class="page-title text-center">contact</h2>
        <div class="row">
            <div class="col-md-8 page-contents">
                <div class="row page-content">
                    <div class="contents row">
                        <h4></h4>
                    
                        <!--<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>-->
                        <br>
						<div style="margin-top:10px;" id="formarea">
						
						<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 

                            <div class="form-group col-sm-6">
                                <label for="name">full name*</label>
								<input type="text" name="name" class="form-control" placeholder="Your name" required>
								<span class="error"><?php echo $nameErr;?></span>
                            </div>
                            <div class="form-group col-sm-6">
                                <label for="email">Email*</label>
								<input type="email" name="email" class="form-control" placeholder="Your email address here" required>
								<span class="error"><?php echo $emailErr;?></span>
                            </div>
                            <div class="form-group col-sm-6">
                                <label for="gender">gender</label>
                                <input type="text" name="gender" class="form-control" placeholder="Your gender">
								<span class="error"><?php echo $genderErr;?></span>
                            </div>
                            <div class="form-group col-sm-6">
                                <label for="website">website</label>
                                <input type="url" name="website" class="form-control" placeholder="Your website url">
								
                            </div>
                            <div class="form-group col-sm-12">
                                <label for="comment">comment</label>
                                <textarea name="comment" class="form-control" placeholder="Write comment here" required></textarea>
                            </div>
                            <div class="col-sm-12">
                                <button type="submit" class="btn-primary"><span>send</span></button>
                                <h5 class="pull-right">*required fields</h5>
                            </div>
                        </form>
						</br>
						</br>
						 <div>
						<?php
						if($_SERVER["REQUEST_METHOD"] == "POST"&&$bingo_recording==0)
							echo "<h4>很高兴能够收到您的留言!</h4>";
				        ?>
						</div>
						</div>
                    </div>                    
                </div>
            </div>
            <div class="col-md-4 sidebar">              
                <!--Author Widget-->
                <aside class="row m0 widget-author widget has-pt">
                    <div class="widget-author-inner row">
                        <div class="author-avatar row"><img src="images/bear41.png" alt="" class="img-circle"></div>
                        <a href="#"><h2 class="author-name">Join Us</h2></a>
                        <h5 class="author-title">14**</h5>
                        <p>SHARE &nbsp THE &nbsp BOOK &nbsp YOU &nbsp LIKE &nbsp WITH &nbsp US</p>
                        <p class="know-more">more</p>
                    </div>
                    <ul class="nav social-nav">
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-facebook-official"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-envelope"></i></a></li>
                    </ul>
                </aside>
            </div>
        </div>
    </div>
	
<div class="container">
       <h2 class="page-title text-center">history</h2>		
		<?php
		$link = mysql_connect ( 'localhost', 'root', '123' ) or die ( 'Could not connect: ' . mysql_error () );///////////////////////////////////////
		//echo 'Connected successfully';
		if (mysql_query("CREATE DATABASE IF NOT EXISTS contact CHARACTER SET utf8 COLLATE utf8_general_ci",$link))
		  {
		  }
		else
		  {
		  echo "Error creating database: " . mysql_error();
		  }

		mysql_select_db("contact",$link);
		$sql_table="CREATE TABLE IF NOT EXISTS `visitor` (";
		$sql_table.="`id`  int NOT NULL AUTO_INCREMENT ,";
		$sql_table.="`name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,";
		$sql_table.="`email`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,";
		$sql_table.="`comment`  varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,";
		$sql_table.="`website`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,";
		$sql_table.="`sex`  varchar(255) NULL ,";
		$sql_table.="PRIMARY KEY (`id`))";
		$sql_table.="ENGINE=MyISAM DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci CHECKSUM=0 DELAY_KEY_WRITE=0;";
		if (mysql_query($sql_table,$link))
		  {
		 // echo "table visitor created sentence run smoothly";
		  }
		else
		  {
		  echo "Error creating tables: " . mysql_error();
		  }
		  $history_records=mysql_query("SELECT * FROM visitor");
		echo "<div id=\"history_records\">";
		echo "<table id=\"history_records_table\" border='1'>
		<tr>
		<th><h4>ID</h4></th>
		<th>姓名</th>
		<th>邮箱</th>
		<th>评论</th>
		<th>网址</th>
		<th>性别</th>
		</tr>";

		while($row = mysql_fetch_array($history_records))
		  {
		  echo "<tr>";
		  echo "<td>" . $row['id'] . "</td>";
		  echo "<td>" . $row['name'] . "</td>";
		  echo "<td>" . $row['email'] . "</td>";
		  echo "<td>" . $row['comment'] . "</td>";
		  echo "<td>" . $row['website'] . "</td>";
		  echo "<td>" . $row['sex'] . "</td>";
		  echo "</tr>";
		  }
		echo "</table>";
		echo "</div>";
		?>

</div>
<script src="js/sharedfunctions.js" type="text/javascript" ></script>
	
</section>

<!--Footer-->
<footer class="row" id="footer">
    <div class="container">
        <div class="row top-footer">
            <div class="widget col-sm-3 widget-about">
                <div class="row m0"><a href="index.html"><img src="images/2.png" alt=""></a></div>
            </div>
            <div class="widget col-sm-5 widget-menu">
                <div class="row">
                    <ul class="nav column-menu white-bg">
                        <li><a href="index.html" >Home</a></li>
							<li><a href="yuanyu3.html">儿童经典读物</a></li>
                            <li><a href="../final_wxr.html">三毛&echo </a></li>
                        </ul>
                        <ul class="nav column-menu white-bg">
                            <li><a href="ZHANGY/zy.html">进口图书</a></li>
                            <li><a href="xingchang.html">心理学图书</a></li>
                            <li class="active"><a href="contact.html">contact</a></li>
                    </ul>
                </div>
            </div>

        </div>
        <h5 class="copyright">Copyright &copy; 2017. 14** All rights reserved.</h5>
    </div>
</footer>

<!--========== jQuery (necessary for Bootstrap's JavaScript plugins) ==========-->
<script src="js/jquery-2.2.0.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="vendors/owl-carousel/owl.carousel.min.js"></script>
<script src="vendors/magnific-popup/jquery.magnific-popup.min.js"></script>
<script src="vendors/instafeed/instafeed.min.js"></script>
<script src="vendors/imagesLoaded/imagesloaded.pkgd.min.js"></script>
<script src="vendors/isotope/isotope.pkgd.min.js"></script>
<script src="js/theme.js"></script>
</body>
</html>