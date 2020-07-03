<div class="container col-2 page-section">
    <div class="itinerary-leaders">
    <?php
    $currentID = get_the_ID();
    $crossAfricaPosts = new WP_Query(array(
        'post_type'=>'itineraries',
        'post_status'=>'publish',
        'posts_per_page'=>-1,
        'post__not_in' => array($currentID)
    ));
    if ( $crossAfricaPosts->have_posts() ) :
    while ( $crossAfricaPosts->have_posts() ) :
    $crossAfricaPosts->the_post();
    $postImage = get_field('background_image');
    ?>
        <div class="itinerary-leaders__item">
            <div class="image">
                <a href="<?php the_permalink();?>">
                    <div class="background-image">
                        <img <?php $thisImage = $postImage;
                        $largeImage = $thisImage['sizes']['large'];?>
                        src="<?php echo $largeImage;?>"
                        title="<?php echo $thisImage['title'];?>"
                        alt="<?php echo $thisImage['alt'];?>"
                        />
                    </div>
                </a>
            </div>
            <p class="itinerary-nights"><?php the_field('number_of_nights'); ?> Nights</p>
            <p class="itinerary-location"><?php the_field('safari_location'); ?></p>
            <h2 class="heading heading__5"><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
            <p class="entry-excerpt">
                <?php $itineraryCopy = get_field('introduction');
                $itineraryExcerpt = substr($itineraryCopy['copy'], 0, 150);
                echo $itineraryExcerpt . '...';
                ?>
            </p>
            <a href="<?php the_permalink();?>" class="button">See This Itinerary</a>
        </div>
    <?php endwhile; wp_reset_postdata();endif; ?>
    </div>
</div>
