<?php
/**
 * The template for displaying all single posts
 *
 * @package crossafrica
 */
get_header(); ?>
<?php global $wp;
$current_url = home_url($_SERVER['REQUEST_URI']);?>
<div class="container col-2 page-section">
    <div class="destination">
        <div class="location-panel">
            <div class="map-block">
                <div class="map-block__map" data-current="<?= basename($current_url);?>">
                    <?php get_template_part('inc/img/africa-map');?>
                    <script>
                    jQuery(document).ready(function($) {
                        var selectedCountry = '#' + $('.map-block__map').attr("data-current");
                        $(selectedCountry).addClass('current-country');
                        console.log(selectedCountry);
                    });
                    </script>
                </div>
            </div>
            <!-- <p><span>Full name</span><?php the_field('full_name');?></p>
			<p><span>Full name</span><?php the_field('population');?></p>
			<p><span>Full name</span><?php the_field('capital');?></p>
			<p><span>Full name</span><?php the_field('area');?></p>
			<p><span>Full name</span><?php the_field('major_languages');?></p> -->
            <?php get_template_part('template-parts/map-block-menu');?>
        </div>
        <div class="body">
            <h2 class="heading heading__5 heading__accent"><?php the_field('introduction_heading');?></h2>
            <p><?php the_field('copy');?></p>
        </div>
        <div class="cta">
            <a href="/contact">
                <div class="cta__item">
                    <i class="fas fa-phone"></i>
                    <i class="fas fa-desktop"></i>

                    <p>Speak To Us<br />Now About A<br />Trip To <?php the_title();?></p>
                </div>
            </a>
        </div>
    </div>
</div>
<div class="container col-2 page-section">
    <?php get_template_part('template-parts/gallery');?>
</div>

<?php get_template_part('template-parts/small-leaders');?>

<?php get_footer(); ?>