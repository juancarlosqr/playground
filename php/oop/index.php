<?php
include_once('class.php');

$main = new Main;
$main->set_greet('Hi Main');
echo $main->get_greet();

$cool = new Cool;
$cool->set_greet('Hi Cool');
echo $cool->get_greet();

$cooler = new Cool;
echo $cooler->get_greet();

$chuck = new Cool('chuck');
echo $chuck->get_greet();
try {
    echo $chuck->destroy_greet();
} catch (Exception $e) {
    echo $e->getMessage() . "\n";
}
$chuck->log_result();

echo Main::$year . "\n";

$great = new Great('Hello');
echo $great->get_greet();

$papa = new Papa();
$kiddo = new Kiddo();
$method = 'newMessage';
$kiddo->$method();
