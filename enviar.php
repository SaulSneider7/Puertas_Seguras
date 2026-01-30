<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Bloqueo acceso directo
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.php');
    exit;
}

// Sanitización básica
$nombre   = trim($_POST['nombre'] ?? '');
$email    = trim($_POST['email'] ?? '');
$telefono = trim($_POST['telefono'] ?? '');
$mensaje  = trim($_POST['mensaje'] ?? '');

// Validación mínima
if ($nombre === '' || $email === '' || $telefono === '' || $mensaje === '') {
    header('Location: index.php?estado=error');
    exit;
}

$mail = new PHPMailer(true);

try {
    // SMTP
    $mail->isSMTP();
    $mail->Host       = 'mail.tu-sitioweb.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'contacto@tu-sitioweb.com';
    $mail->Password   = 'ynYMcr=_(XAo';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Correos
    $mail->setFrom('contacto@tu-sitioweb.com', 'Formulario Web');
    $mail->addAddress('contacto@tu-sitioweb.com');
    $mail->addReplyTo($email, $nombre);

    // Contenido
    $mail->isHTML(true);
    $mail->Subject = 'Nuevo contacto desde la web';
    $mail->Body = "
        <h2>Nuevo mensaje desde el sitio web</h2>
        <p><strong>Nombre:</strong> {$nombre}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Teléfono:</strong> {$telefono}</p>
        <p><strong>Mensaje:</strong><br>{$mensaje}</p>
    ";

    $mail->send();

    // ÉXITO
    header('Location: index.php?estado=ok');
    exit;

} catch (Exception $e) {

    // ERROR
    header('Location: index.php?estado=error');
    exit;
}
