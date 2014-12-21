<?php

add_action('calibrefx_do_ajax', 'childfx_ajax_handler');
function childfx_ajax_handler() {

	global $calibrefx;

	if(empty($_REQUEST['do'])) return;

	$do = $_REQUEST['do'];
	
	switch($do){

		case 'first-ajax':
			$data_1 = $_POST['data'];
			$response = array( 
					'success'		=> 	'successed ajax call'
				,	'result'		=> 	$data_1
			);
			break;
	}

	echo json_encode($response);
	exit;
}