<?php
$cookie_name = 'first_name';
unset($_COOKIE[$cookie_name]);
// empty value and expiration one hour before
$res = setcookie($cookie_name, '', time() - 3600, '/');
header('Location:show.php');