<?php
/**
 * The template for displaying all single posts
 *
 * @package crossafrica
 */
get_header(); ?>

<div class="container container__narrow page-section">
	<div class="itinerary-wrapper">
		<?php if( have_rows('daily_activity') ):
		while( have_rows('daily_activity') ): the_row();?>
			<div class="itinerary-wrapper__item js-toggle-parent">
				<div class="head js-toggle-trigger">
					<h2 class="heading heading__4">
						<span><?php the_sub_field('day');?></span>
						<span><?php the_sub_field('activity_heading');?></span>
					</h2>
				</div>
				<div class="body js-toggle-target">
					<div class="carousel-wrapper">
						<div class="owl-carousel itinerary-carousel">
						<?php $images = get_sub_field('gallery');
							if( $images ):
							foreach( $images as $image ): ?>
								<div class="background-image">
									<img src="<?php echo $image['sizes']['large']; ?>" />
								</div>
							<?php endforeach; ?>
							<?php endif; ?>
						</div>
						<div class="owl-prev"></div>
						<div class="owl-next"></div>
					</div>
					<div class="content">
						<p><?php the_sub_field('copy');?></p>
						<a href="/contact" class="button button__boxed">Talk To Us About This Safari</a>
					</div>
				</div>
			</div>

		<?php endwhile; endif;?>
	</div>
</div>

<div id="map"></div>

<h3 class="heading heading__4 heading__accent" style="margin-bottom:3rem;">Other Itineraries</h3>
<?php get_template_part('template-parts/itinerary-leaders');?>

<script type="text/javascript">
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXNobG91ZG9uIiwiYSI6ImNqb3pwZXl6djJudzQzcGxrZWcwaW5tZXkifQ.OeAVB7SvtuUl25boyEYkaQ';

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/ashloudon/ck7ymql2d0bzo1im85281r0vo',
center: [23.4181, -19.9953],
zoom: 6
});

<?php if( have_rows('daily_activity') ):
while( have_rows('daily_activity') ): the_row();
$latPosn = get_sub_field('lat');
$longPosn = get_sub_field('long');
?>
var latPosn = "<?php echo $latPosn ?>";
var longPosn = "<?php echo $longPosn ?>";
var marker = new mapboxgl.Marker()
.setLngLat([latPosn, longPosn])
.addTo(map);
//console.log(latPosn);

<?php endwhile; endif;?>

</script>
<?php get_footer(); ?>
