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

            <div class="header__widgets">
                <div class="header__widgets-item header-search">
                    <a class="header-search__link" href="">Поиск</a>
                </div>
                <div class="header__widgets-item header-profile-widget">
                    <a class="header-profile-widget__link" href="">Личный кабинет</a>
                </div>
                <div class="header__widgets-item header-favorites-widget">
                    <a class="header-favorites-widget__count" href="">Избранное<span>5</span></a>
                </div>
                <div class="header__widgets-item header-cart-widget js-cart-widget">
                    <a class="header-cart-widget__counter" href="{{ url.orderCart }}">Корзина<span>12</span></a>
                    <div class="header-cart-widget__dropdown">
                    </div>
                </div>
            </div>
        
        </div>

        <nav class="header__main-menu">
            <!-- <button data-menu-mobile--switcher-btn><span>menu</span></button> -->
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
        </nav>
    </header>
    <!-- end header -->

    

    <!-- begin main -->
    <main class="l-main">