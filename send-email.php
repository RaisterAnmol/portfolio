<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'raistaranmol0123@gmail.com';   // YOUR GMAIL
        $mail->Password = 'vktbdvqshwwdistq';     // APP PASSWORD
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        // Email settings
        $mail->setFrom('raistaranmol0123@gmail.com', 'Website Contact');
        $mail->addAddress('raistaranmol0123@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "
            <b>Name:</b> $name <br>
            <b>Email:</b> $email <br><br>
            <b>Message:</b><br>$message
        ";

       

        // Redirect after success
        if ( $mail->send()) {
            header("Location: sent.php?status=success");
        } else {
            header("Location: sent.php?status=error");
        }
        exit();

    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
}
?>