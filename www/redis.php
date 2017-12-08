<?php

$redis = new Redis();

$redis->connect('redis');

$info = $redis->info();

echo "<pre>";

print_r($info);