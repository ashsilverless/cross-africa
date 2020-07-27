<div class="container container__narrow page-section">
    <div class="introduction">
        <h3 class="heading heading__5 heading__accent"><?php the_field('heading');?></h3>
        <?php if( get_field('heading_or_quote') == 'quote'): ?>
        <p class="cite"><?php the_field('cite');?></p>
        <?php endif; ?>
        <p><?php the_field('introduction_copy');?></p>
        <?php if(get_field('introduction_read_more_copy')):?>
            <div class="read-more-wrapper">
            <p><?php the_field('introduction_read_more_copy');?></p>
            <a href="" class="button read-more-wrapper--close">Read Less</a>
            </div>
            <a href="" class="button read-more--open">Read More</a>
        <?php endif;?>
    </div>
</div>
