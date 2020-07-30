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
                <h2 class="heading heading__5">
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

<div class="container container__narrow page-section map-wrapper">
    <div id="map"></div>
</div>

<h3 class="heading heading__4 heading__accent" style="margin-bottom:3rem;">Other Itineraries</h3>
<?php get_template_part('template-parts/itinerary-leaders');?>

<script type="text/javascript">
mapboxgl.accessToken = 'pk.eyJ1Ijoic2lsdmVybGVzcyIsImEiOiJjaXNibDlmM2gwMDB2Mm9tazV5YWRmZTVoIn0.ilTX0t72N3P3XbzGFhUKcg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/silverless/ckaftm7gk01ns1ipbof0j4ryk',
    center: [-1.830765, 28.144188],
    pitch: 0,
    zoom: 8
});
map.addControl(new mapboxgl.FullscreenControl());
map.addControl(new mapboxgl.NavigationControl());


//Set bounds of map

<?php $rows = get_field('daily_activity');
$count = count($rows) - 1;
$firstLatPosition = $rows[0]['lat'];
$firstLongPosition = $rows[0]['long'];
$lastLatPosition = $rows[$count]['lat'];
$lastLongPosition = $rows[$count]['long']; ?>

var boundingBox = [
    [ <?php echo $firstLongPosition ?> , <?php echo $firstLatPosition ?> ],
    [ <?php echo $lastLongPosition ?> , <?php echo $lastLatPosition ?> ]
];

document.addEventListener("DOMContentLoaded", function(event) {
    event.preventDefault;
    if (document.documentElement.clientWidth < 900) {
        map.fitBounds(boundingBox, {
            padding: 100,
        });
    } else {
        map.fitBounds(boundingBox, {
            padding: 140,
        });
    }
});

//Plot paths between markers

map.on('load', function() {
    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [ <?php
                    if (have_rows('daily_activity')):
                        while (have_rows('daily_activity')): the_row();
                    $latPosn = get_sub_field('lat');
                    $longPosn = get_sub_field('long'); ?>

                    [ <?php echo $longPosn ?> , <?php echo $latPosn ?> ],
                    <?php endwhile;endif; ?>
                ]
            }
        }
    });
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#484848',
            'line-width': 3,
            'line-dasharray': [0.1, 1.8]
        }
    });
});

var geojson = {
    type: 'FeatureCollection',
    features: [

        <?php
        if (have_rows('daily_activity')):
            while (have_rows('daily_activity')): the_row();
        $latPosn = get_sub_field('lat');
        $longPosn = get_sub_field('long');
        $dayHeading = get_sub_field('day');
        $activityHeading = get_sub_field('activity_heading'); ?>
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [ <?php echo $longPosn ?> , <?php echo $latPosn ?> ]
            },
            properties: {
                title: '<?php echo $dayHeading; ?>',
                description: '<?php echo $activityHeading; ?>'
            }
        }, <?php endwhile;endif; ?>
    ]
};

// add markers to map
geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({
                offset: 25
            }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
        .addTo(map);

});
</script>

<?php get_footer(); ?>
