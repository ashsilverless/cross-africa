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

<div class="container col-2 page-section">
    <div>
        <h3 class="heading heading__4 heading__accent heading__lowercase">Proud to partner with</h3>
    </div>
    <div class="owl-carousel partners-carousel">
        <?php if( have_rows('partner_logos', 'options') ):
        while( have_rows('partner_logos', 'options') ): the_row();
        $leaderImage = get_sub_field('image');?>
        <div class="partners-carousel__item">
            <img src="<?=$leaderImage['url'];?>" />
        </div>
        <?php endwhile; endif;?>
    </div>
</div>



<?php get_footer();?>