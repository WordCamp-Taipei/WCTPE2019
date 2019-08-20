<?php
add_action( 'wp_enqueue_scripts', function() {
	$time = get_theme_file_path( '/dest/style.min.css' );
	wp_enqueue_style( 'twentyseventeen-style', get_template_directory_uri() . '/style.css' );
  wp_enqueue_style( 'twentyseventeen-block-style', get_template_directory_uri( '/assets/css/blocks.css' ), array( 'twentyseventeen-style' ) );
	wp_enqueue_style( 'wctpe2019', get_theme_file_uri( '/dest/style.min.css' ), [ 'twentyseventeen-style', 'twentyseventeen-block-style' ], $time );
} );
