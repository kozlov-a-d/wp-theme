<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="format-detection" content="telephone=no">
	<?php wp_head(); ?>
</head>
<body>
<div class="l-wrapper">

<!-- begin header -->
    <header class="l-header header">
        <div class="header__container">
            
            <?php if ( has_custom_logo() ) : ?>
                <div class="header__logo"><?php the_custom_logo(); ?></div>
            <?php endif; ?>

            <div class="header__menu">
                <?php wp_nav_menu( [
                    'theme_location'  => 'main_menu',
                    'container'       => 'nav', 
                    'container_class' => 'main-menu js-menu-smart js-menu-mobile', 
                    'container_id'    => '',
                    'menu_class'      => 'main-menu__root is-root', 
                    'menu_id'         => '',
                    'echo'            => true,
                    'fallback_cb'     => 'wp_page_menu',
                    'items_wrap'      => '<ul class="%2$s">%3$s</ul>',
                    'depth'           => 0,
                    'walker'          => new True_Walker_Nav_Menu,
                ] ); ?>
            </div>
        
            <div class="header__call">
                <a class="header__whatsapp" href="https://api.whatsapp.com/send?phone=+971503749323" target="_blank">WhatsApp Chat</a>
                <a class="header__phone" href="tel:+971503749323">+971 50 374 9323</a>
            </div>
        </div>

    </header>
    <!-- end header -->

    <!-- begin main -->
    <main class="l-main">