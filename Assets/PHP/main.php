<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = 'rishitrajpara@gmail.com';
  $subject = 'New Contact Form Submission';
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=utf-8\r\n";
  
  $body = "<html><body>";
  $body .= "<h2>New Contact Form Submission</h2>";
  $body .= "<p><strong>Name:</strong> $name</p>";
  $body .= "<p><strong>Email:</strong> $email</p>";
  $body .= "<p><strong>Message:</strong> $message</p>";
  $body .= "</body></html>";
  
  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you for your message. We will get back to you soon.";
  } else {
    echo "Sorry, there was a problem sending your message. Please try again later.";
  }
}
?>
