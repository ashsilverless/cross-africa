<?php
/**
 * ============== Template Name: Love Template
 *
 * @package crossafrica
 */
get_header();?>



<div class="container page-section">
    <div class="map-block">
        <div class="map-block__menu">
            <?php if( have_rows('menu_items', 'options') ):
            while( have_rows('menu_items', 'options') ): the_row();?>
            <div class="map-block__menu--item">
                <?php $parentItem = get_sub_field('parent_item');
                $parentItem = $parentItem->post_title;
                $toLower = strtolower ($parentItem);
                $cleanString = str_replace(' ', '', $toLower);?>
                <div class="menu__item--trigger" data-target="<?php echo $cleanString;?>">
                    <?php echo $parentItem;?>
                </div>
                <div class="child-menu">
                    <?php //Begin child loop
                    if( have_rows('child_items') ):
                    while( have_rows('child_items') ): the_row();
                    $childItem = get_sub_field('child_item');
                    $childItem = $childItem->post_title;
                    $childLower = strtolower ($childItem);
                    $cleanChild = str_replace(' ', '', $childLower);?>
                    <div class="child" data-target="<?php echo $cleanChild;?>">
                        <?=$childItem;?>
                    </div>
                    <?php endwhile; endif;
                    //End child loop?>
                </div>
            </div>
            <?php endwhile; endif;?>
        </div>
        <div class="map-block__map">
            <?php get_template_part('inc/img/africa-map');?>
            <div id="map-marker">
                <div id="map-marker__line"></div>
            </div>
        </div>
        <div class="map-block__country">
            <?php
            $loop = new WP_Query(
                array(
                    'post_type' => 'destinations',
                    'posts_per_page' => -1
                )
            );
            while ( $loop->have_posts() ) : $loop->the_post();?>
            <?php $countryImage = get_field('background_image');?>
            <div class="map-block__country--item <?php global $post;
            $post_slug = $post->post_name;
            $cleanSlug = str_replace('-', '', $post_slug);
            echo $cleanSlug;?>">
                <div class="background-image">
                    <img <?php $thisImage = $countryImage;?>
                    src="<?php echo $thisImage['url'];?>"
                    title="<?php echo $thisImage['title'];?>"
                    alt="<?php echo $thisImage['alt'];?>"
                    />
                    <h2 class="heading heading__4"><?php the_title();?></h2>
                </div>
                <h3 class="heading heading__6"><?php the_field('introduction_heading');?></h3>
                <p><?php $destinationCopy = get_field('copy');
                    $destinationExcerpt = substr($destinationCopy, 0, 150);
                    echo $destinationExcerpt . '...';
                    ?></p>
                <a href="<?php the_permalink();?>" class="button">Read More</a>
            </div>

            <?php endwhile;
            wp_reset_postdata();
            ?>


        </div>
    </div>
</div>

<?php get_template_part('template-parts/small-leaders');?>

<?php get_footer();?>
