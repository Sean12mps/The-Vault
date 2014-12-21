<?php

/**
 * This function loads the admin script files
 */
add_action('admin_init', 'childthemes_load_admin_scripts');
function childthemes_load_admin_scripts() {
    wp_enqueue_style('childthemes-admin', CHILD_CSS_URL . '/admin.style.css');
    wp_enqueue_script('childthemes-admin', CHILD_JS_URL . '/admin.functions.js', array('jquery'));
}


/**
 * This function register our style and script files
 */
add_action('init', 'childthemes_register_scripts');
function childthemes_register_scripts(){   
    wp_register_script('childthemes-underscore', CHILD_JS_URL . '/underscore.js', array('jquery'));
    wp_register_script('childthemes-backbone', CHILD_JS_URL . '/backbone.js', array('jquery'));
    wp_register_script('childthemes-three', CHILD_JS_URL . '/three.js', array('jquery'));
    wp_register_script('childthemes-functions', CHILD_JS_URL . '/functions.js', array('jquery'));
}

/**
 * This function load our style and script files
 */
add_action('calibrefx_meta', 'childthemes_load_script');
function childthemes_load_script(){   
	wp_enqueue_script('childthemes-underscore');
	wp_enqueue_script('childthemes-backbone');
	wp_enqueue_script('childthemes-three');
	wp_enqueue_script('childthemes-functions');
}