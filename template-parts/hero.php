<?php $heroImage = get_field('background_image');?>

<div class="container">
    <div class="hero <?php if( get_field('light_text')){
        echo 'light-text';
    }?>">
        <div class="hero__background background-image <?php the_field('image_overlay');?>">
            <img <?php $thisImage = $heroImage;?> src="<?php echo $thisImage['url'];?>"
                title="<?php echo $thisImage['title'];?>" alt="<?php echo $thisImage['alt'];?>" />
        </div>
        <!--<?php get_template_part('inc/img/logo-mark');?>-->
        <h1 class="heading heading__2"><?php the_field('headline');?></h1>
        <h2 class="heading heading__5 heading__alt-font"><?php the_field('sub_headline');?></h2>
    </div>
</div>
