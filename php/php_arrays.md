# PHP Arrays

__Defining__

```php
$months = [];
$months[] = 'January';
$months[] = 'February';
$months[] = 'March';
```

__Function__

```php
// 1
$months = array('January', 'February', 'March', 'April');

// 2 - Different data types
$data = array(
	'foo' => 'bar',
	12 => true,
);
```

__Printing__

```php
print_r($array);
```

__Associative Arrays__

```php
$books = [];
$books['Comic Books'] = 'Superman';
$books['Science Fiction'] = 'Dune';
$books['Fantasy'] = 'The Hobbit';

$books = array(
	'Comic' => 'Superman',
	'Science Fiction' => 'Dune',
	'Fantasy' => 'The Hobbit',
	'Horror' => 'Carrie',
);
```

__Is It An Array?__

```php
$baseballTeams = array('Cardinals', 'Tigers', 'Astros');

if (is_array($baseballTeams)) {
	echo 'Baseball!';
}
else {
	echo 'No Baseball';
}
```

__Looping Through Arrays__

```php
// 1 - Associative
$books = array(
	'Comic' => 'Superman',
	'Science Fiction' => 'Dune',
	'Fantasy' => 'The Hobbit',
	'Horror' => 'Carrie',
);

foreach($books as $key => $book) {
	echo "$book is an example of a $key book" . PHP_EOL;
}

// 2 - Not Associative
$array = array('uno', 'dos', 'tres');

foreach ($array as $value) {
	echo "value: $value" . PHP_EOL;
}
```

__Sorting Arrays__

```php
$baseballTeams = array('Cardinals', 'Tigers', 'Astros');

sort($baseballTeams);

foreach ($baseballTeams as $team) {
	echo $team . PHP_EOL;
}
```

__Check is a value exist__

```php
$os = array('Mac' , 'NT' , 'Irix' , 'Linux');

echo in_array('Irix' , $os) ? 'Yes' : 'No'; // return true

echo in_array('mac', $os) ? 'Yes' : 'No'; // return false
```

__Check is a key exist__

```php
$search = array(
	'first' => null,
	'second' => 4,
);

echo array_key_exists('first' , $search) ? 'Yes' : 'No'; // returns true

/*
 * isset() does not return TRUE for array keys
 * that correspond to a NULL value, while array_key_exists() does.
 **/
echo isset($search['first']) ? 'Yes' : 'No'; // returns false

```

__Check is a key exist and is not null__

```php
$os = array('Mac', 'NT', 'Irix', 'Linux');

if (isset($os[3])) {
  echo 'Linux exists';
}
```

__Get the key of a value__

```php
$array = array(
	0 => 'blue', 
	1 => 'red', 
	2 => 'green', 
	3 => 'red'
);

echo array_search('green', $array); // returns 2

// array_search returns first occurrence
echo array_search('red', $array); // returns 1
```

__Get all the values__

```php
$array = array(
	'size' => 'XL', 
	'color' => 'gold',
);

print_r(array_values($array));
/*
Array
(
	[0] => XL
	[1] => gold
)
*/
```

__Get all the keys__

```php
$array = array(
	0 => 100,
	'color' => 'red',
);

print_r(array_keys($array));
/*
Array
(
	[0] => 0
	[1] => color
)
*/

// Given a value
$array = array('blue', 'red', 'green', 'blue', 'blue');

print_r(array_keys($array, 'blue'));
/*
Array
(
	[0] => 0
	[1] => 3
	[2] => 4
)
*/

// Array of arrays
$array = array(
	'color' => array('blue', 'red', 'green'),
	'size'  => array('small', 'medium', 'large'),
);

print_r(array_keys($array));
/*
Array
(
	[0] => color
	[1] => size
)
*/
```
