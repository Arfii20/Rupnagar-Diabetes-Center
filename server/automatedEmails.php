<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $functionName = $data['function'];
    $dataBody = $data['data'];

    // Call the specified function with the data object
    if ($functionName === 'sendQueryEmail') {
        sendQueryEmail($dataBody);
    }
    else {
        sendAppointmentEmail($dataBody);
    }
}


function sendQueryEmail($data): void
{
    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();                                                                  // Send using SMTP
        $mail->Host = 'smtp.office365.com';                                               // SMTP server
        $mail->SMTPAuth = true;                                                           // Enable SMTP authentication
        $mail->Username = 'kishoreganjsender@outlook.com';                                // SMTP username
        $mail->Password = 'Arfi20 Narutoriri Enterokinase Vondo ChickenLegPiece@';        // SMTP password
        $mail->SMTPSecure = 'tls';                                                        // Enable TLS encryption
        $mail->Port = 587;                                                                // TCP port to connect to

        //Recipients
        $mail->setFrom('kishoreganjsender@outlook.com', 'RDC WbstSender');
        $mail->addAddress("kdcqueries@outlook.com");                              // Add a recipient

        // Content
        $mail->isHTML(false);
        $mail->Subject = $data["subject"];
        $mail->Body = $data["description"];

        $mail->send();
        echo json_encode("Email sent successfully!");
    } catch (Exception $e) {
        echo json_encode('Caught exception: ' . $e->getMessage() . "\n");
    }
}


function sendAppointmentEmail($data): void
{
    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();                                                                  // Send using SMTP
        $mail->Host = 'smtp.office365.com';                                               // SMTP server
        $mail->SMTPAuth = true;                                                           // Enable SMTP authentication
        $mail->Username = 'kishoreganjsender@outlook.com';                                // SMTP username
        $mail->Password = 'Arfi20 Narutoriri Enterokinase Vondo ChickenLegPiece@';        // SMTP password
        $mail->SMTPSecure = 'tls';                                                        // Enable TLS encryption
        $mail->Port = 587;                                                                // TCP port to connect to

        //Recipients
        $mail->setFrom("kishoreganjsender@outlook.com", 'RDC WbstSender');
        $mail->addAddress("kdcappointments@outlook.com");                         // Add a recipient

        // Content
        $mail->isHTML(false);
        $mail->Subject = $data["subject"];
        $mail->Body = $data["description"];

        $mail->send();
        echo json_encode("Email sent successfully!");
    } catch (Exception $e) {
        echo json_encode('Caught exception: ' . $e->getMessage() . "\n");
    }
}
