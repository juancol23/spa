<?php
// Multiple recipients
$to = 'valdcolra@gmail.com'; // note the comma

// Subject
$subject = 'Spa OASIS ';
$nombre   = $_POST['nombre'];
$email    =  $_POST['email'];
$mensaje   = $_POST['mensaje'];
$telefono   = $_POST['telefono'];
// Message
$message = '
<html>
<head>
  <title>Title Spa</title>
</head>
<body>
  <p>El cliente ha solicitado por medio del sitio web una cita al '.$subject.'</p>
  <table>
    <tr>
     <th>Nombre</th> <th>'.$nombre.'</th> 
    </tr>
    <tr>
      <th>Email</th> <td>'.$email.'</td> 
    </tr>
    <tr>
      <th>Mensaje</th> <td>'.$mensaje.'</td> 
    </tr>
    <tr>
      <th>Telefono</th> <td>'.$telefono.'</td> 
    </tr>
    <p>Comunicarse Pronto</p>
  </table>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers
$headers[] = 'To: Mary <mary@example.com>, Kelly <kelly@example.com>';
$headers[] = 'From: OASIS <oasis@example.com>';
$headers[] = 'Cc: birthdayarchive@example.com';
$headers[] = 'Bcc: birthdaycheck@example.com';

// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));
 
 
header('Location: http://oasispucallpa.com');
?>