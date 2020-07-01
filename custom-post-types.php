<?php
/*
// ========= Custom Post Types - Case Studies ============
*/
add_action( 'init', 'custom_post_type_itineraries', 0 );
add_action( 'init', 'custom_post_type_destinations', 0 );

function custom_post_type_itineraries() {
    $labels = array(
        'name'                => _x( 'Itineraries', 'Post Type General Name',  'rossross' ),
        'singular_name'       => _x( 'Itinerary',  'Post Type Singular Name', 'rossross' ),
        'menu_name'           => __( 'Itineraries',         'rossross' ),
        'parent_item_colon'   => __( 'Parent Itinerary',  'rossross' ),
        'all_items'           => __( 'All Itineraries',   'rossross' ),
        'view_item'           => __( 'View Itinerary',    'rossross' ),
        'add_new_item'        => __( 'Add New Itinerary', 'rossross' ),
        'add_new'             => __( 'Add Itinerary',     'rossross' ),
        'edit_item'           => __( 'Edit Itinerary',    'rossross' ),
        'update_item'         => __( 'Update Itinerary',  'rossross' ),
        'search_items'        => __( 'Search Itineraries',  'rossross' ),
        'not_found'           => __( 'Not Found',          'rossross' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'rossross' )
    );
    $args = array(
        'label'               => __( 'itineraries', 'crossafrica' ),
        'description'         => __( 'Itineraries', 'crossafrica' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'thumbnail' ),
        'menu_icon'           => 'dashicons-index-card',
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'can_export'          => true,
        'has_archive'         => false,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'page'
    );
    register_post_type( 'itineraries', $args );
}

function custom_post_type_destinations() {
    $labels = array(
        'name'                => _x( 'Destinations', 'Post Type General Name',  'rossross' ),
        'singular_name'       => _x( 'Destination',  'Post Type Singular Name', 'rossross' ),
        'menu_name'           => __( 'Destinations',         'rossross' ),
        'parent_item_colon'   => __( 'Parent Destination',  'rossross' ),
        'all_items'           => __( 'All Destinations',   'rossross' ),
        'view_item'           => __( 'View Destination',    'rossross' ),
        'add_new_item'        => __( 'Add New Destination', 'rossross' ),
        'add_new'             => __( 'Add Destination',     'rossross' ),
        'edit_item'           => __( 'Edit Destination',    'rossross' ),
        'update_item'         => __( 'Update Destination',  'rossross' ),
        'search_items'        => __( 'Search Destinations',  'rossross' ),
        'not_found'           => __( 'Not Found',          'rossross' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'rossross' )
    );

    $args = array(
        'label'               => __( 'destinations', 'crossafrica' ),
        'description'         => __( 'Destinations', 'crossafrica' ),
        'labels'              => $labels,
        'hierarchical' => false,
                'public' => true,
                'rewrite' => array(
                    'slug'       => 'destinations',
                    'with_front' => false,
                ),
                'supports' => array(
                    'page-attributes',
                    'title',
                    'editor',
                ),
    );

    register_post_type( 'destinations', $args );






}
