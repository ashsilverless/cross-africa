<?php
/**
 * ============== Template Name: News Template
 *
 * @package crossafrica
 */
get_header();?>

<div class="container col-2 page-section">
    <div class="news-leaders">
    <?php $crossAfricaPosts = new WP_Query(array(
        'post_type'=>'post',
        'post_status'=>'publish',
        'posts_per_page'=>9
    ));
    if ( $crossAfricaPosts->have_posts() ) :
    while ( $crossAfricaPosts->have_posts() ) :
    $crossAfricaPosts->the_post();
    $postImage = get_field('background_image');
    ?>
        <div class="news-leaders__item">
            <div class="image">
                <a href="<?php the_permalink();?>">
                    <div class="background-image">
                        <img <?php $thisImage = $postImage;?>
                        src="<?php echo $thisImage['url'];?>"
                        title="<?php echo $thisImage['title'];?>"
                        alt="<?php echo $thisImage['alt'];?>"
                        />
                    </div>
                </a>
            </div>
            <p class="entry-date"><?php echo get_the_date(); ?></p>
            <h2 class="heading heading__5"><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
            <p class="entry-excerpt"><?php echo post_leader_excerpt(); ?></p>
            <a href="<?php the_permalink();?>" class="button">Read More</a>
        </div>
    <?php endwhile; wp_reset_postdata();endif; ?>
    </div>
</div>

<?php get_footer();?>
