<?php
	$path = 'projects/';
	$folders = scandir($path);
	$html = '';
	for ( $i = 2 ; $i < count($folders) ; $i++ ){
		if ( $folders[$i] !== 'index.php' )
			$html .= '<a href="' . $path . $folders[$i] . '/" class="project">'. $folders[$i] .'</a>';
	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Playground</title>
	<link href="assets/development.ico" rel="shortcut icon" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
	<div id="container">
		<div class="morph">
			<img src="assets/img/development.png">
		</div>
		<h1>Playground</h1>
		<p>My playground for testing new things! Wohooo!!!</p>
		<div>
			<h4>Projects</h4>
			<?php echo $html; ?> 
		</div>
		<div class="break"></div>
		<small>Powered by <a href="https://twitter.com/juancarlosqr">juancarlosqr</a></small>
	</div>
</body>
</html>