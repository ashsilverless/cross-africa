<?php /** Header @package crossafrica */ ?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title><?php $blog_title = get_bloginfo(); ?></title>

<link rel="stylesheet" href="https://use.typekit.net/wox5jbn.css"><!--TYPEKIT INJECT-->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" type="image/x-icon" />

<script src="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css" rel="stylesheet" />

<?php wp_head(); ?>
</head>
<body <?php body_class('light-mode'); ?>>
	<div id="page" class="site-wrapper">
		<!--<div class="busy-panel active">
			<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" stroke="#fff">
			<g fill="none" fill-rule="evenodd">
			<g transform="translate(1 1)" stroke-width="2">
			<circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
			<path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(343.388 18 18)">
			<animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
			</path>
			</g>
			</g>
			</svg>
		</div>-->
		<header>
			<nav>
				<div class="offscreen-nav">
					<div class="menu-wrapper">
						<a href="<?php echo get_home_url(); ?>">
							<div class="menu-wrapper__item">
								<i class="fas fa-home"></i>
							</div>
						</a>
						<?php
						if( have_rows('main_menu_items', 'options') ):
						while ( have_rows('main_menu_items', 'options') ) : the_row();?>
							<a href="<?php the_sub_field('button_target');?>">
								<div class="menu-wrapper__item">
									<p><?php the_sub_field('main_text');?>
									<?php if(get_sub_field('supporting_text')):?>
										<span><?php the_sub_field('supporting_text');?></span>
									<?php endif;?></p>
								</div>
							</a>
						<?php endwhile;?>
						<?php endif; //main menu loop?>
					</div>
				</div>
				<div class="container">
					<div class="logo">
						<a href="<?php echo get_home_url(); ?>" alt="Cross Africa Logo" title="Cross Africa Logo">
							<?php get_template_part('inc/img/logo');?>
						</a>
					</div>
					<div class="menu-trigger">
						<div class="menu-trigger__icon"><span></span></div>
						<div class="menu-trigger__text">Menu</div>
					</div>
					<div class="switch-wrapper">
						<span class="switch-wrapper__label">Light</span>
						<span class="switch-wrapper__switch"></span>
						<span class="switch-wrapper__label">Dark</span>
					</div>
				</div>
			</nav>
		</header>
		<main>
			<?php if ( is_page_template( 'page-templates/home.php' ) ) {
			    get_template_part('template-parts/home-hero');
				get_template_part('template-parts/introduction');
			} elseif ( is_page_template( array( 'page-templates/gallery.php', 'page-templates/contact.php', 'page-templates/news.php' )) ){
				get_template_part('template-parts/no-hero');
			} elseif ( is_singular('post') ){
				get_template_part('template-parts/hero');
			} elseif ( is_singular('destinations') ){
				get_template_part('template-parts/hero');
			} else {
			    get_template_part('template-parts/hero');
				get_template_part('template-parts/introduction');
			}?>
