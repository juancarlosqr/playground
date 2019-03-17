<?php

interface MainInterface {
    function set_greet($greet);
    function get_greet();
    function destroy_greet();
}

abstract class MainAbstract {
    var $path = '/var/log/';
    function get_path() {
        return $this->path;
    }
    abstract function log_result();
}

class Main extends MainAbstract implements MainInterface {
    const CHUCK = 'chuck';
    static $year = 2017;
    protected $greet;
    function set_greet($greet) {
        $this->greet = "$greet\n";
    }
    function get_greet() {
        return $this->greet;
    }
    function destroy_greet() {
        throw new Exception('Not implemented yet');
    }
    function log_result() {
        echo 'Logging results to ' . $this->get_path() . "php.log\n";
    }
}

class Cool extends Main {
    function __construct($greet = 'Hi guest') {
        $this->set_greet($greet);
    }

    function set_greet($greet) {
        if ($greet == Cool::CHUCK) {
            parent::set_greet('Hi great master ' . strtoupper($greet) . '!');
        } else {
            parent::set_greet($greet);
        }
    }
}

final class Great extends Cool {
    function __construct($greet) {
        parent::__construct('Hello ' . $greet);
    }
}

// class NotGreat extends Great {} // PHP Fatal error:  Class NotGreat may not inherit from final class (Great)

// source: http://stackoverflow.com/questions/1557608/how-do-i-get-a-php-class-constructor-to-call-its-parents-parents-constructor
class Grandpa 
{
    public function __construct()
    {
        echo "Grandpa's constructor called\n";
    }
}

class Papa extends Grandpa
{
    public function __construct()
    {
        echo "Papa's constructor called\n";

        // call Grandpa's constructor
        parent::__construct();
    }
}

class Kiddo extends Papa
{
    public function __construct()
    {
        echo "Kiddo's constructor called\n";

        $reflectionMethod = new ReflectionMethod(get_parent_class(get_parent_class()), '__construct');
        $reflectionMethod->invoke($this);
    }
    public function newMessage()
    {
        echo "Kiddo's newMessage method called\n";
    }
}
