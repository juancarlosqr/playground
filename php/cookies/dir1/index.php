<?php
// http://www.pontikis.net/blog/create-cookies-php-javascript
$first_name = 'Daenerys';
setcookie('first_name',$first_name,time() + (86400 * 7), '/');
header('Location:show.php');
?>