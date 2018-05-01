<?php
/*php script for gathering data from a form to an email address*/
/* subject and email variables */

	$emailSubject = 'Arrive in Style Online Quote';
	//$webMaster = 'oasis.spa.pucallpa@gmail.com';
	$webMaster = 'valdcolra@gmail.com';
	
/* gathering data variables */

	$name = $_POST['name'];
	$email = $_POST['email'];
	$telephone = $_POST['telephone'];
	$date = $_POST['date'];
	$time = $_POST['time'];
	$cars = $_POST['cars'];
	$passengers = $_POST['passengers'];
	$vehicle = $_POST['vehicle'];
	$pickup = $_POST['pickup'];
	$ceremony = $_POST['ceremony'];
	$reception = $_POST['reception'];
	$message = $_POST['message'];
	$search = $_POST['search'];
	
	$body = <<<EOD
    <br><hr><br>
Another quotation required from Arrive in Style Chauffeured Cars
<br><hr><br>
name: $name <br>
email: $email <br>
phone: $telephone <br>
Date: $date <br>
Time: $time <br>
Cars: $cars <br>
Passengers: $passengers <br>
Vehicle: $vehicle <br>
Pickup: $pickup <br>
Ceremony: $ceremony <br>
Reception: $reception <br>
Message: $message <br>
Search: $search <br>
EOD;

	$headers = "From: $email\r\n";
	$headers .= "Content-type: text/html\r\n";
	$success = mail($webMaster, $emailSubject, $body, $headers);
	
	/*results rendered as html */
	
	$theResults = <<<EOD
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Arrive in Style Chauffeured Cars</title>
<style type="text/css" media="screen">

.featurepic {
	margin-left:40px;
}

</style>
</head>

<body>
<table width="760" border="4px inset solid" bordercolor="#000000"  align="center" bgcolor="#FFFFFF">
  <tr>
    <td>
    <table width="770" border="0">
        <tr>
          <td  align="center" bgcolor="#FFFFFF" bordercolorlight="#999900" ><a href="http://www.arriveinstyleweddingcars.com" title="Arrive in Style Wedding Cars" target="_blank"><img src="http://www.arriveinstyleweddingcars.com/images/email_header.png" border="0"></a>
          </td>
        </tr>

      </table>

		<table width="770" border="0">
		  <tr>
		    <td align="left">
		      <font color="#000000">

			<p>&nbsp;</p><a href="http://www.arriveinstyleweddingcars.com/vintage.html">
			<img src="http://www.arriveinstyleweddingcars.com/images/vintage.png" width="200" height="165" class="featurepic" border="0"></a>

			</font><blockquote>
			 <blockquote>

			<font color="#000000"><!--text content starts here-->


				<p>Thank you for your enquiry with Arrive in Style Chauffeured Cars.</p></font>
				<font color="#000000"><br/>

				</font>
				<p>We aim to respond by email within 48 hours. </p>
<font color="#000000"><br/>
				
				<p>Meanwhile, if you would like to discuss the details of your event with us please telephone on</p>
                <p>01268 470643 or 07754 438581</p></font><font color="#000000"><br/>

				<p>Regards</p></font>

				

				<p><font color="#000000">Mr Davies</font></p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p align="center">To return to the Arrive in Style Website<a href="http://www.arriveinstyleweddingcars.com"><br/>
				<img src="http://www.arriveinstyleweddingcars.com/images-2/click-here.png"></a></p>
				
				<!--text content ends here-->
				

			 </font></blockquote>
			</blockquote>
		    </tr>
		</table>

	<table width="770" border="0">
         <tr>
          <td  align="center" bgcolor="#FFFFFF" bordercolorlight="#999900" ><a href="http://www.deldavies.co.uk/index.html" title="The Davies Group of Companies" target=""><img src="http://www.arriveinstyleweddingcars.com/images/email_footer.png" border="0"></a>
          </td>
         </tr>
      	</table>
	  </td>
	 </tr>
	</table>