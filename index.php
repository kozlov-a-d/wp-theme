<?php get_header(); ?>

<div class="l-container">

    <div class="breadcrumbs">
        <a href="/">Home</a>
        <span>Contact Us</span>
    </div>

    <h1>Contact Us</h1>

    <?php
		if ( have_posts() ) {

			// Load posts loop.
			while ( have_posts() ) {
				the_post();
				// get_template_part( 'template-parts/content/content' );
			}

			// Previous/next page navigation.
			// twentynineteen_the_posts_navigation();

		} else {

			// If no content, include the "No posts found" template.
			// get_template_part( 'template-parts/content/content', 'none' );

		}
    ?>
        
</div>

<?php get_footer(); ?>
