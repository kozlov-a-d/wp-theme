<?php

/****************************************************************************************
 * ASSETS
 ****************************************************************************************/

function my_theme_assets_function() {
	wp_enqueue_style( 'app', get_theme_file_uri('/build/common.css'));
	wp_enqueue_script( 'app', get_theme_file_uri('/build/common.js'), '', '', true);
	if ( is_front_page() ) {
		wp_enqueue_style( 'app', get_theme_file_uri('/build/index.css'));
		wp_enqueue_script( 'app', get_theme_file_uri('/build/index.js'), '', '', true);
	} else {
		wp_enqueue_style( 'app', get_theme_file_uri('/build/main.css'));
		wp_enqueue_script( 'app', get_theme_file_uri('/build/main.js'), '', '', true);
	}
}

add_action('wp_enqueue_scripts','my_theme_assets_function');


/****************************************************************************************
 * LOGO
 ****************************************************************************************/

add_theme_support( 'custom-logo' );


/****************************************************************************************
 * MENU
 ****************************************************************************************/

if (function_exists('add_theme_support')) {
	add_theme_support('menus');
}

if(function_exists('register_nav_menus')){
	register_nav_menus(
		array( // создаём любое количество областей
		  'main_menu' => 'Main menu', // 'имя' => 'описание'
		  'foot_menu' => 'Menu in footer'
		)
	);
}

function my_class_filter( $var ) {
    $allow = array(
    'current-menu-item',
    'menu-item-has-children'
    );
    return is_array( $var ) ? array_intersect( $var, $allow ) : '';
}

class True_Walker_Nav_Menu extends Walker_Nav_Menu {
	/*
	 * Позволяет перезаписать <ul class="sub-menu">
	 */
	function start_lvl( &$output, $depth = 0, $args = array() ) {
		/*
		 * $depth – уровень вложенности, например 2,3 и т д
		 */ 
		$output .= '<div><ul>';
    }
    
    function end_lvl( &$output, $depth = 0, $args = array() ) {
        $indent = str_repeat("\t", $depth);
        $output .= "$indent</ul></div>\n";
    }

	/**
	 * @see Walker::start_el()
	 * @since 3.0.0
	 *
	 * @param string $output
	 * @param object $item Объект элемента меню, подробнее ниже.
	 * @param int $depth Уровень вложенности элемента меню.
	 * @param object $args Параметры функции wp_nav_menu
	 */
	function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
		global $wp_query;           
		/*
		 * Некоторые из параметров объекта $item
		 * ID - ID самого элемента меню, а не объекта на который он ссылается
		 * menu_item_parent - ID родительского элемента меню
		 * classes - массив классов элемента меню
		 * post_date - дата добавления
		 * post_modified - дата последнего изменения
		 * post_author - ID пользователя, добавившего этот элемент меню
		 * title - заголовок элемента меню
		 * url - ссылка
		 * attr_title - HTML-атрибут title ссылки
		 * xfn - атрибут rel
		 * target - атрибут target
		 * current - равен 1, если является текущим элементом
		 * current_item_ancestor - равен 1, если текущим (открытым на сайте) является вложенный элемент данного
		 * current_item_parent - равен 1, если текущим (открытым на сайте) является родительский элемент данного
		 * menu_order - порядок в меню
		 * object_id - ID объекта меню
		 * type - тип объекта меню (таксономия, пост, произвольно)
		 * object - какая это таксономия / какой тип поста (page /category / post_tag и т д)
		 * type_label - название данного типа с локализацией (Рубрика, Страница)
		 * post_parent - ID родительского поста / категории
		 * post_title - заголовок, который был у поста, когда он был добавлен в меню
		 * post_name - ярлык, который был у поста при его добавлении в меню
		 */
		$indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
 
		/*
		 * Генерируем строку с CSS-классами элемента меню
		 */
		$class_names = $value = '';
		$classes = empty( $item->classes ) ? array() : (array) $item->classes;
		// $classes[] = 'menu-item-' . $item->ID;
        $classes[] = [];  
    
 
        // функция join превращает массив в строку
        $class_array = apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args );

        

        $class_names = join( ' ', my_class_filter($class_array) );
        // current-menu-item        is-active
        // menu-item-has-children   -has-dropdown
        $class_names = str_replace('current-menu-item', 'is-active', $class_names);
        $class_names = str_replace('menu-item-has-children', '-has-dropdown', $class_names);
		$class_names = ' class="' . esc_attr( $class_names ) . '"';
		// $class_names = '';
 
		/*
		 * Генерируем ID элемента
		 */
		// $id = apply_filters( 'nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args );
		// $id = strlen( $id ) ? ' id="' . esc_attr( $id ) . '"' : '';
 
		/*
		 * Генерируем элемент меню
		 */
		// $output .= $indent . '<li' . $id . $value . $class_names .'>';
		$output .= $indent . '<li' . $value . $class_names .'>';
 
		// атрибуты элемента, title="", rel="", target="" и href=""
		$attributes  = ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
		$attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
		$attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
		$attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';
 
		// ссылка и околоссылочный текст
		$item_output = $args->before;
		$item_output .= '<a'. $attributes .'>';
		$item_output .= $args->link_before . apply_filters( 'the_title', $item->title, $item->ID ) . $args->link_after;
		$item_output .= '</a>';
		$item_output .= $args->after;
 
 		$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
	}
}



