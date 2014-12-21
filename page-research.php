<?php
/**
* Template Name: Research and Development
*
* clockwork
*
* clockwork Theme by Calibrefx Team
*
* @package          CalibreFx
* @author          	Calibrefx Team
* @copyright   		Copyright (c) 2013, CalibreFx. (http://www.calibrefx.com/)
* @link          	http://www.calibrefx.com
* @since          	Version 1.2
* @filesource
*
*
* @package CalibreFx
*/

remove_action('calibrefx_loop', 'calibrefx_do_loop');

add_action('calibrefx_loop', 'childfx_do_loop');

function childfx_do_loop(){
?>
	<h1>Page for Research and Development</h1>
	<!-- <h2 id="ajax-test"></h2> -->
	<div id="scene" class="col-md-8">
	</div>
	<div id="lightUI" class="col-md-2">
		<div id="lightUI" class="col-md-12">
			<h4><strong>LIGHT</strong></h4>
			<div class="">
				<col-md-12>X :&nbsp <input id="lightX" type="number" style="width: 80%;"></col-md-12>
			</div>
			<div class="">
				<col-md-12>Y :&nbsp <input id="lightY" type="number" style="width: 80%;"></col-md-12>
			</div>
			<div class="">
				<col-md-12>Z :&nbsp <input id="lightZ" type="number" style="width: 80%;"></col-md-12>
			</div>
		</div>
		<div id="cameraUI" class="col-md-12">
			<h4><strong>CAMERA POSITION</strong></h4>
			<div class="">
				<col-md-12>X :&nbsp <input id="cameraX" type="number" style="width: 80%;"></col-md-12>
			</div>
			<div class="">
				<col-md-12>Y :&nbsp <input id="cameraY" type="number" style="width: 80%;"></col-md-12>
			</div>
			<div class="">
				<col-md-12>Z :&nbsp <input id="cameraZ" type="number" style="width: 80%;"></col-md-12>
			</div>
		</div>
	</div>
<?php
}

calibrefx();
