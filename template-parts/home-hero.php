<?php $heroImage = get_field('background_image');?>

<div class="container hero-wrapper">
    <div class="hero home-hero">
        <div class="content">
            <!--<?php get_template_part('inc/img/logo-mark');?>-->
            <?php get_template_part('inc/img/logo-text');?>
        </div>
        <?php if( have_rows('images') ):
        while( have_rows('images') ): the_row();
            $frontImg = get_sub_field('front_image');
            $rearImg = get_sub_field('rear_image');
        endwhile;
        endif;
        ?>
        <div class="image rear-image" style="background-image: url(<?php echo $rearImg['url']; ?>);"></div>
        <div class="image front-image" style="background-image: url(<?php echo $frontImg['url']; ?>);"></div>

    </div>
</div>
