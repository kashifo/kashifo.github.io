<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}

$field_name = $_POST['cf_name']; 
$field_email = $_POST['cf_email'];
$field_phone = $_POST['cf_phone'];
$field_message = $_POST['cf_message'];


//Validate first
if( empty($field_email) ) 
{
    echo "email is mandatory!";
    exit;
}

if(IsInjected($field_email))
{
    echo "fill form with correct values";
    exit;
}


$mail_to = 'mail@kashif.cf';
$subject = 'Mail from contact page of website '.$field_email;

$body_message = 'From: '.$field_name."\n"; 
$body_message .= 'Phone: '.$field_phone."\n";
$body_message .= 'E-mail: '.$field_email."\n\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thanks for sending message.  \n I\'ll get back to you as soon as possible. ');
		
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert(' Sorry, Message sending failed.');
		
	</script>
<?php
}




// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

?>