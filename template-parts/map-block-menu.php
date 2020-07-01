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
            $childItemTitle = $childItem->post_title;
            $childID = $childItem->ID;
            $childLower = strtolower ($childItemTitle);
            $cleanChild = str_replace(' ', '', $childLower);?>
            <div class="child" data-target="<?php echo $cleanChild;?>">
                <?php if ( is_singular('destinations') ){
                    echo '<a href="'.get_permalink( $childID ).'">'. $childItemTitle .'</a>';
                }else{
                    echo $childItemTitle;
                }?>
            </div>
            <?php endwhile; endif;
            //End child loop?>
        </div>
    </div>
    <?php endwhile; endif;?>
</div>
