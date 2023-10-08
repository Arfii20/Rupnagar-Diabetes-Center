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
            $mail->Host = 'mail.rupnagar-diabetes-center.com';                                // SMTP php
            $mail->SMTPAuth = true;                                                           // Enable SMTP authentication
            $mail->Username = 'automaticemail@rupnagar-diabetes-center.com';                  // SMTP username
            $mail->Password = 'Arefin121@';                                                   // SMTP password
            $mail->SMTPSecure = 'ssl';                                                        // Enable TLS encryption
            $mail->Port = 465;                                                                // TCP port to connect to

            //Recipients
            $mail->setFrom('automaticemail@rupnagar-diabetes-center.com', 'RDC Website');
            $mail->addAddress("rdcqueries@outlook.com");                              // Add a recipient

            // Content
            $mail->isHTML(false);
            $mail->Subject = $data["subject"];
            $mail->Body = $data["description"];

            $mail->send();
            header('Content-Type: application/json');
            echo json_encode("Email sent successfully!");
        } catch (Exception $e) {
            header('Content-Type: application/json');
            echo json_encode('Caught exception: ' . $e->getMessage() . "\n");
        }
    }

    function sendAppointmentEmail($data): void
    {
        $mail = new PHPMailer(true);
        try {
            //Server settings
            $mail->isSMTP();                                                                  // Send using SMTP
            $mail->Host = 'mail.rupnagar-diabetes-center.com';                                // SMTP php
            $mail->SMTPAuth = true;                                                           // Enable SMTP authentication
            $mail->Username = 'automaticemail@rupnagar-diabetes-center.com';                  // SMTP username
            $mail->Password = 'Arefin121@';                                                   // SMTP password
            $mail->SMTPSecure = 'ssl';                                                        // Enable TLS encryption
            $mail->Port = 465;                                                                // TCP port to connect to

            //Recipients
            $mail->setFrom("automaticemail@rupnagar-diabetes-center.com", 'RDC Website');
            $mail->addAddress("rdcappointments@outlook.com");                         // Add a recipient

            // Content
            $mail->isHTML(false);
            $mail->Subject = $data["subject"];
            $mail->Body = $data["description"];

            $mail->send();
            header('Content-Type: application/json');
            echo json_encode("Email sent successfully!");
        } catch (Exception $e) {
            header('Content-Type: application/json');
            echo json_encode('Caught exception: ' . $e->getMessage() . "\n");
        }
    }
