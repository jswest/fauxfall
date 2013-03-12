<?php
$app->get('/paragraph', function() use( $app, $article ) {
	$id = $app->request()->params( 'id' );
	header("Content-Type: application/json");
	echo json_encode( array( $article[$id] ) );
	exit;
});
?>