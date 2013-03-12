<?php

/*
 * Do the registration...
 * Require the necessary libraries, both from /vendor, from /library, and from /data
 */
require_once 'data/article.php';
require 'vendor/Slim/Slim.php';
\Slim\Slim::registerAutoloader();

/*
 * Do the routes...
 * Spawn a new instance of the slim app,
 * Require the correct routes from the routes folder,
 * And set it to run.
 */
$app = new \Slim\Slim();
require_once 'routes/misc.php';
require_once 'routes/paragraph.php';
$app->run();
