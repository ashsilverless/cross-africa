<?php
/**
 * The template for displaying the footer
 * @package crossafrica
 */
?>
</main>
<footer class="footer">
<?php $footerImage = get_field('footer_background_image', 'options');?>
	<div class="upper">
		<div class="container">
			<div class="background-image">
				<img <?php $thisImage = $footerImage;?>
				src="<?php echo $thisImage['url'];?>"
				title="<?php echo $thisImage['title'];?>"
				alt="<?php echo $thisImage['alt'];?>"
				/>
			</div>
			<div class="content">
				<h4 class="heading heading__3 heading__dark"><?php the_field('footer_cta_text', 'options');?></h4>
				<a href="<?php the_field('footer_cta_target', 'options');?>" class="button button__boxed"><?php the_field('footer_cta_button', 'options');?></a>
			</div>
		</div>
	</div>
	<div class="lower">
		<div class="container">
			<div class="left-col">
				<p><strong>Support</strong></p>
				<p>Phone: <span class="phonenumber"><?php the_field('telephone', 'options');?></span></p>
				<p>Email: <span><?php the_field('email', 'options');?></span></p>
				<div class="socials">
		            <?php if( have_rows('social_links', 'option') ): while( have_rows('social_links', 'option') ): the_row(); ?>
		            <a href="<?php the_sub_field('page_link'); ?>"><i class="fab fa-<?php the_sub_field('name'); ?>"></i></a>
		            <?php endwhile; endif; ?>
		        </div>
			</div>
			<div class="right-col">
				<p><strong>Links</strong></p>
					<?php
					wp_nav_menu( array(
					'theme_location' => 'footer-menu',
					'container'      => 'ul',
				    'menu_class'     => 'links-menu',
				) );
					?>
			</div>
		</div>
	</div>
	<div class="socket">
		<div class="container">
			<div class="silverless logo-holder">
				<a href="https://silverless.co.uk"><?php get_template_part('inc/img/silverless', 'logo');?></a>
			</div>
			<div class="left-col copyright">
				<p>&copy; Cross Africa Safaris <?php echo date ('Y');?>.  All Rights Reserved</p>
			</div>
			<div class="right-col termscons">
				<a href="/terms-conditions">Terms & Conditions</a> |
				<a href="/privacy">Privacy Policy</a>
			</div>
		</div>
	</div>


	<!--<div class="socket">
		<div class="container cols-8 cols-sm-24">
			<div class="col colophon">&copy; Capture Africa <?php echo date ('Y');?></div>
			<div class="col silverless">
				<a href="https://silverless.co.uk"><?php get_template_part('inc/img/silverless', 'logo');?></a>
			</div>
			<div class="col mandatory">
				<?php if( have_rows('legal_pages', 'option') ):
					    while ( have_rows('legal_pages', 'option') ) : the_row();?>
				<a href="#" data-modal="<?php the_sub_field('page_name')?>-<?php echo get_row_index(); ?>"><?php the_sub_field('page_name')?></a>
			<?php endwhile; endif; ?>
			</div>
		</div>
	</div>
	</div><!--socket-->
</footer>
</div><!-- #page -->
<?php if( have_rows('legal_pages', 'option') ):
	while ( have_rows('legal_pages', 'option') ) : the_row();?>
		<div class="legalInfo" id="<?php the_sub_field('page_name')?>-<?php echo get_row_index(); ?>">
			<div class="legalOverlay"></div>
			<div class="legalContent">
				<div class="close">x</div>
			 		<?php $post_object = get_sub_field('page');
					if( $post_object ):
						// override $post
						$post = $post_object;
						setup_postdata( $post );?>
					    <?php the_content();?>
					    <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
				</div>
			</div>
		<?php endif; ?>
	<?php endwhile; endif; ?>

<script>
jQuery(document).ready(function($) {

     });
</script>


<?php wp_footer(); ?>
</body>
</html>
