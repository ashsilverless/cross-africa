<?php
/**
 * ============== Template Name: Live Template
 *
 * @package crossafrica
 */
get_header();?>

<div class="container container__narrow page-section">
    <?php if( have_rows('safari_summary') ):
    while( have_rows('safari_summary') ): the_row();
    $expandingImage = get_sub_field('background_image');?>
        <div class="expanding-section">
            <div class="expanding-section__head">
                <div class="background-image">
                    <img <?php $thisImage = $expandingImage;
                    $largeImage = $thisImage['sizes']['large'];
                    ?>
                    src="<?php echo $largeImage;?>"
                    title="<?php echo $thisImage['title'];?>"
                    alt="<?php echo $thisImage['alt'];?>"
                    />
                </div>
                <div class="content <?php if( get_sub_field('light_text')){
                    echo 'light-text';
                }?>">
                    <h2 class="heading heading__3"><?php the_sub_field('safari_title');?></h2>
                    <p class="button button__boxed expanding-section__trigger">Find Out More</p>
                </div>
            </div>
            <div class="expanding-section__body">
                <div class="expanding-section__close"></div>
                <div class="content">
                    <h2 class="heading heading__3"><?php the_sub_field('safari_title');?></h2>
                    <p><?php the_sub_field('copy');?></p>
                    <?php if(get_sub_field('read_more_copy')):?>
                    <div class="read-more-wrapper">
                    <p><?php the_sub_field('read_more_copy');?></p>
                    <a href="" class="button read-more-wrapper--close">Read Less</a>
                    </div>
                    <a href="" class="button read-more--open">Read More</a>
                <?php endif;?>
                </div>
            </div>
        </div>
    <?php endwhile; endif;?>
</div>

<?php get_template_part('template-parts/small-leaders');?>


<?php get_footer();?>
