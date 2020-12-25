  
<?php



if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) ){
    $to = 'admin@madeindreams.ca'; // Your email
    $subject = 'Message from '.$_POST['name'];
    $txt = $_POST['message'];
    
    $headers .= 'Return-Path: admin@madeindreams.ca' . "\r\n";    // The email account from your provider
    $headers .= 'From: Sender <admin@madeindreams.ca>' . "\r\n"; // The email account from your provider
    
    $headers = 'From: '.$_POST['email'];
    
    mail($to,$subject,$txt,$headers,'-f admin@madeindreams.ca');

}


?>