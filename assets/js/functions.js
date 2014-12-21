jQuery(document).ready(function($){


	$( '#inner>.container' ).attr( 'class', 'container-fluid' );


	var clockworkAjax = function( toDo, data, custom ){
		var command 	= toDo;
		var passedVal 	= data;
		$.ajax({
		  	type: "POST",
		  	url: cfx_ajax.ajaxurl,
		  	data: { 
					"action" 		: cfx_ajax.ajax_action
				, 	"do" 			: command
				, 	"data" 			: passedVal
				, 	"_ajax_nonce" 	: cfx_ajax._ajax_nonce
		    },
		    success: function(result){
		    	// console.log( result.result );
		    	return custom( result );
		    },
		   	dataType : "json"
		});
	};

	/*	Example of usage
	  clockworkAjax( 'first-ajax', { 
						data1: 'data1 content'
					, 	data2: 'data2 content' 
				}, 	
				function( ajx ){ 
					// 	use var 'ajx' as the result
					$( '#ajax-test' ).text( ajx.result.data2 );
				}
		);*/


	var clockworkClass = function(){
		var cwrk = this;
			cwrk.repo = {};
			cwrk.save = function( args ){
			//_\\	This should merge the args and the repo. Not rewritting it.
			$.extend( true, cwrk.repo, args );
		};
			cwrk.inject = function( target, key ){
			$( ''+target+'' ).addClass( save.key );
		};
			cwrk.swap = function( target, saveKey, swapKey){
			var temp = $( ''+target+'' ).attr( 'class' );
			//_\\	Read all classes and save them as said in afforementioned saveKey
			var temp_saveKey = saveKey;
			//_\\	SaveKey should cover all classes. If not, the latter and uncovered class will be deleted.
			$.each( saveKey, function( index, val ) {

			} );

		}
	};


	var control = function(){

		var ctr = this;
			ctr.light
		, 	ctr.renderer
		, 	ctr.camera
		, 	ctr.scene;

		/*
		(-)	LIGHT POSITION
		 */	ctr.lightPosition = {
					xPos : -7
				,	yPos : 14
				,	zPos : 10
			};

		/*
		(-)	camera POSITION
		 */	ctr.cameraPosition = {
					xPos : -36
				,	yPos : 15
				,	zPos : 36
			};





		/*
		(+)	LIGHT REFRESH
		 */ ctr.lightRefresh = function( args ){
		 		ctr.lightPosition = $.extend( ctr.lightPosition, args );
		 		ctr.light.position.set( ctr.lightPosition.xPos, ctr.lightPosition.yPos, ctr.lightPosition.zPos );
		 		ctr.camera.position.set( ctr.cameraPosition.xPos, ctr.cameraPosition.yPos, ctr.cameraPosition.zPos );
		 		ctr.renderer.render( ctr.scene, ctr.camera );
		 	}
		/*
		(+)	LIGHT UI
		 */ ctr.lightUI = function(){
		 		ctr.lightPosition.xPos = $( '#lightUI #lightX' ).val();
		 		ctr.lightPosition.yPos = $( '#lightUI #lightY' ).val();
		 		ctr.lightPosition.zPos = $( '#lightUI #lightZ' ).val();
		 		ctr.lightRefresh( ctr.lightPosition );
		 	}
		/*
		(+)	camera REFRESH
		 */ ctr.cameraRefresh = function( args ){
		 		ctr.cameraPosition = $.extend( ctr.cameraPosition, args );
		 		ctr.light.position.set( ctr.lightPosition.xPos, ctr.lightPosition.yPos, ctr.lightPosition.zPos );
		 		ctr.camera.position.set( ctr.cameraPosition.xPos, ctr.cameraPosition.yPos, ctr.cameraPosition.zPos );
		 		ctr.renderer.render( ctr.scene, ctr.camera );
		 	}
		/*
		(+)	camera UI
		 */ ctr.cameraUI = function(){
		 		ctr.cameraPosition.xPos = $( '#cameraUI #cameraX' ).val();
		 		ctr.cameraPosition.yPos = $( '#cameraUI #cameraY' ).val();
		 		ctr.cameraPosition.zPos = $( '#cameraUI #cameraZ' ).val();
		 		ctr.cameraRefresh( ctr.cameraPosition );
		 	}







		/*
		(!)	SCRIPT BINDER
		 */ ctr.scriptBinder = function( cmd ){
		 		switch( cmd ){
		 			case "lightUI":
		 				$( '#lightUI #lightX' ).val( ctr.lightPosition.xPos );
				 		$( '#lightUI #lightY' ).val( ctr.lightPosition.yPos );
				 		$( '#lightUI #lightZ' ).val( ctr.lightPosition.zPos );
		 				$( '#lightUI input' ).on( 'click change keyup', ctr.lightUI );
		 				break;
		 			case "cameraUI":
		 				$( '#cameraUI #cameraX' ).val( ctr.cameraPosition.xPos );
				 		$( '#cameraUI #cameraY' ).val( ctr.cameraPosition.yPos );
				 		$( '#cameraUI #cameraZ' ).val( ctr.cameraPosition.zPos );
		 				$( '#cameraUI input' ).on( 'click change keyup', ctr.cameraUI );
		 				break;

		 		}
		 	};
		/*
		(!)	INITIALIZATION
		 */ ctr.init = function(){
				ctr.renderer = new THREE.WebGLRenderer();
		        ctr.renderer.setSize( 800, 600 );
		        $( '#scene' ).append( ctr.renderer.domElement );

		        ctr.scene = new THREE.Scene();

		        ctr.camera = new THREE.PerspectiveCamera(
		            35,             // Field of view
		            800 / 600,      // Aspect ratio
		            0.1,            // Near plane
		            10000           // Far plane
		        );
		        ctr.camera.position.set( ctr.cameraPosition.xPos, ctr.cameraPosition.yPos, ctr.cameraPosition.zPos );
		        ctr.camera.lookAt( ctr.scene.position );

		        var geometry 	= new THREE.CubeGeometry( 5, 5, 5 );
		        var material 	= new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
		        var mesh 		= new THREE.Mesh( geometry, material );
		        ctr.scene.add( mesh );

		        ctr.light = new THREE.PointLight( 0xFFFF00 );
		        ctr.light.position.set( ctr.lightPosition.xPos, ctr.lightPosition.yPos, ctr.lightPosition.zPos );
		        ctr.scene.add( ctr.light );

		        ctr.renderer.render( ctr.scene, ctr.camera );



		        ctr.scriptBinder( 'lightUI' );
		        ctr.scriptBinder( 'cameraUI' );

			};
	};

	window.startCanvas = new control;
	window.startCanvas.init();

});

function check_focus(elm,val){
    if(elm.value.toLowerCase() == val.toLowerCase()){
        elm.value = '';    
    }
}

function check_blur(elm,val){
    if(elm.value.toLowerCase() == ''){
        elm.value = val;    
    }
}