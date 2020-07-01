<?php
/**
 * ============== Template Name: Home Page
 *
 * @package crossafrica
 */
get_header();?>

<?php get_template_part('template-parts/small-leaders');?>

<div class="container col-2 page-section">
    <div>
        <h3 class="heading heading__4 heading__accent heading__lowercase">Gallery</h3>
    </div>
    <?php get_template_part('template-parts/gallery');?>
</div>

<?php get_template_part('template-parts/news-leaders');?>

<?php get_footer();?>
