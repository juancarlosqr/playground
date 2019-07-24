<?php

include_once('./ShippingInputError.php');

function logger($data = '')
{
  echo print_r($data, true) . PHP_EOL;
}

logger('Hi exceptions!');

$var = 1;
try {
  $var->method(); // Throws an Error object in PHP 7.
} catch (Error $e) {
  logger($e);
}

function add(int $left, int $right)
{
  return $left + $right;
}
try {
  $value = add('left', 'right');
} catch (TypeError $e) {
  logger($e);
}

function getShippingDate(string $type): \DateTime
{
  
  if ($type === 'departure') {
    throw new ShippingInputError();
  }
  if ($type === 'earliest') {
    throw new ShippingInputError('Type not supported');
  }

  return new \DateTime();
}

try {
  getShippingDate('departure');
} catch (Error $e) {
  logger($e);
}

try {
  getShippingDate('earliest');
} catch (Error $e) {
  logger($e);
}

getShippingDate('earliest');
