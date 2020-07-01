<?php
/**
 * ============== Template Name: Contact Template
 *
 * @package crossafrica
 */
get_header();?>

<div class="container page-section">
    <div class="contact">
        <div class="contact__details">
            <a href="mailto:<?php the_field('email', 'options'); ?>"><?php the_field('email', 'options'); ?></a>
            <br />
            <a href="tel:<?php the_field('telephone', 'options'); ?>"><?php the_field('telephone', 'options'); ?></a>
            <p class="address"><?php the_field('address', 'options'); ?></a></p>
            <div class="socials">
                <?php if( have_rows('social_links', 'option') ): while( have_rows('social_links', 'option') ): the_row(); ?>
                <a href="<?php the_sub_field('page_link'); ?>"><i class="fab fa-<?php the_sub_field('name'); ?>"></i></a>
                <?php endwhile; endif; ?>
            </div>
        </div>
        <div class="contact__form">
            <p><?php the_field('copy'); ?></p>
            <?php echo do_shortcode('[contact-form-7 id="5" title="Contact form 1"]');?>
        </div>
    </div>

</div>

<?php get_footer();?>
