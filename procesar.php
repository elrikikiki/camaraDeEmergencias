<?php
$nombre = $_GET['nombre'];
$mail = $_GET['mail'];
$telefono = $_GET['telefono'];
$msj = $_GET['msj'];

$mensajePhp= "Nombre: ". $nombre ." \r\n";
$mensajePhp.= "Mail: ". $mail ." \r\n";
$mensajePhp.= "Telefono: ". $telefono ." \r\n";
$mensajePhp.= "msj: ". $msj ." \r\n";
$mensajePhp.= "Este mensaje fue enviado el " . date('d/m/Y', time());

$para = 'santizanini1@gmail.com';
$asunto = 'Este mail fue enviado desde el sitio web de la Cámara de empresas de emergencias';

mail($para,$asunto,utf8_decode($mensajePhp,$header));
$header('Location:exito.html')
?>