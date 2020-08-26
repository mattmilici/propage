<?php

if(isset($_POST['submit'])) {
    
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];
    
    $mailTo = "milici.m915@gmai.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;



    mail($mailTo, $txt, $headers, $message);
    header("Location: index.php?mailsend")
}