<?php
 
$para      = 'valdcolra@gmail.com';  
//

$nombre   = $_POST['nombre'];
$email    =  $_POST['email'];
$mensaje   = $_POST['mensaje'];
$telefono   = $_POST['telefono'];
$cabeceras = 'From: oasispucallpa@riva.com' . "\r\n" .
    'Reply-To: oasispucallpa@riva.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
 
    // ."Content-type: text/html; charset=utf-8"


	mail($para, 'Cliente Web ', $body."\r\n" .$nombre."\r\n" .$email."\r\n" .$telefono."\r\n" .$mensaje, $cabeceras); 
	
	echo json_encode($data);
	 
 
?>



