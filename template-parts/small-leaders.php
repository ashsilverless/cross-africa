<?php $counter = 0;
if( have_rows('leader') ):
while( have_rows('leader') ): the_row();
$counter ++;
endwhile; endif;?>

<div class="container col-2 page-section">
    <div class="small-leaders small-leaders__count-<?php echo $counter;?>">
        <?php if( have_rows('leader') ):
        while( have_rows('leader') ): the_row();
        $leaderImage = get_sub_field('background_image');
        ?>
        <a href="<?php the_sub_field('target');?>">
            <div class="small-leaders__item <?php if( get_sub_field('light_text')){
    echo 'light-text';
}?>">
                <div class="background-image">
                    <img <?php $thisImage = $leaderImage;
                    $smallImage = $thisImage['sizes']['large'];
                    ?>
                    src="<?php echo $smallImage;?>"
                    title="<?php echo $thisImage['title'];?>"
                    alt="<?php echo $thisImage['alt'];?>"
                    />
                </div>
                <div class="content">
                    <h3 class="heading heading__4 heading__accent"><?php the_sub_field('heading');?></h3>
                    <p><?php the_sub_field('sub_heading');?></p>
                </div>
            </div>
        </a>
        <?php endwhile; endif;?>
    </div>
</div>
