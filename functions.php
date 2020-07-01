<?php
/**
 * crossafrica functions and definitions
 *
 * @package crossafrica
 */

/****************************************************/
/*                       Hooks                       /
/****************************************************/

/* Enqueue scripts and styles */
add_action('wp_enqueue_scripts', 'crossafrica_scripts');

/* Add Menus */
add_action('init', 'crossafrica_custom_menu');

/* Dashboard Config */
add_action('wp_dashboard_setup', 'crossafrica_dashboard_widget');

/* Dashboard Style */
add_action('admin_head', 'crossafrica_custom_fonts');

/* Remove Default Menu Items */
add_action('admin_menu', 'crossafrica_remove_menus');

/* Change Posts Columns */
add_filter('manage_posts_columns', 'crossafrica_manage_columns');

/* Reorder Admin Menu */
add_filter('custom_menu_order', 'crossafrica_reorder_menu');
add_filter('menu_order', 'crossafrica_reorder_menu');

/* Remove Comments Link */
add_action('wp_before_admin_bar_render', 'crossafrica_manage_admin_bar');

/* Remove Admin Bar */
add_action('after_setup_theme', 'crossafrica_remove_admin_bar');

/**= Add Custom Post Types and Taxonomies =**/

require_once ('custom-post-types.php');

/****************************************************/
/*                     Functions                     /
/****************************************************/

function crossafrica_scripts() {
	wp_enqueue_style( 'crossafrica-style', get_stylesheet_uri() );
	wp_enqueue_script( 'crossafrica-core-js', get_template_directory_uri() . '/inc/js/compiled.js', array('jquery'), true);
	wp_enqueue_script( 'crossafrica-owl-js', get_template_directory_uri() . '/inc/js/owl.carousel.min.js', array('jquery'), true);
}

function crossafrica_custom_menu() {
	register_nav_menus(array(
		'main-menu' => __( 'Main Menu' ),
		'footer-menu' => __( 'Footer Menu' ),
		'destinations-menu' => __( 'Destinations Menu' )
	));
}

function crossafrica_dashboard_widget() {
	global $wp_meta_boxes;
	wp_add_dashboard_widget('custom_help_widget', 'crossafrica Support', 'crossafrica_dashboard_help');
}

function crossafrica_dashboard_help() {
	echo file_get_contents(__DIR__ . "/admin-settings/dashboard.html");
}

function crossafrica_custom_fonts() {
	echo '<style type="text/css">' . file_get_contents(__DIR__ . "/admin-settings/style-admin.css") . '</style>';

	if(function_exists('acf_add_options_page')) {
		acf_add_options_page(array(
			'page_title' 	=> 'Theme Settings',
			'menu_title'	=> 'Theme Settings',
			'menu_slug' 	=> 'site-general-settings',
			'capability'	=> 'edit_posts',
			'redirect'		=> false
		));
	}
}

function crossafrica_remove_menus(){
	remove_menu_page( 'edit-comments.php' ); //Comments
}

function crossafrica_manage_columns($columns) {
	unset($columns["comments"]);
	return $columns;
}

function crossafrica_reorder_menu() {
    return array(
		'index.php',                        // Dashboard
		'separator1',                       // --Space--
		'edit.php',                         // Posts
		'edit.php?post_type=page',          // Pages
		'upload.php',                       // Media
		'separator2',                       // --Space--
		'themes.php',                       // Appearance
		'plugins.php',                      // Plugins
		'users.php',                        // Users
		'tools.php',                        // Tools
		'options-general.php',              // Settings
		'wpcf7',                            // Contact Form 7
   );
}

function crossafrica_manage_admin_bar(){
	global $wp_admin_bar;
	$wp_admin_bar->remove_menu('comments');
}


if(function_exists('acf_add_options_page')) {
	acf_add_options_page(array(
		'page_title' 	=> 'Theme Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'site-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
}

function crossafrica_remove_admin_bar() {
	show_admin_bar(false);
}

function post_leader_excerpt() {
	global $post;
    $text = get_field('main_copy');
    if ( '' != $text ) {
      $text = strip_shortcodes( $text );
      $text = apply_filters('the_content', $text);
      $text = str_replace(']]>', ']]>>', $text);
      $text_length = strlen($text); // Get text length (characters)
      $excerpt_length = 150;  // 50 desired characters
      $excerpt_more = '...';
      $text = substr($text, 0, $excerpt_length);// Shorten the text
      // If the text is more than 50 characters, append $excerpt_more
      if ($text_length > $excerpt_length) {
        $text .= $excerpt_more;
      }

    }
	return apply_filters('the_excerpt', $text);
}
