        </main><!-- end main -->

    </div><!-- end wrapper -->

    <!-- begin footer -->
    <footer class="l-footer footer">
        <div class="footer__menu">
            <div class="menu-footer js-footer-menu">
                <!-- <nav class="menu-footer__container">
                    <ul>
                        <li class="-has-dropdown is-active">
                            <a href="">Category 1</a>
                            <div class="menu-footer__dropdown -col-2">
                                <ul>
                                    {% for i in 0..12 %}
                                    <li {% if (loop.index == 3) %}class="is-active"{% endif %}>
                                        <a href="#">Subcategory {{loop.index}}</a>
                                    </li>
                                    {% endfor %}
                                </ul>
                            </div>
                        </li>
                        {% for i in 0..2 %}
                        <li class="-has-dropdown">
                            <a href="">Category {{loop.index + 1}}</a>
                            <div class="menu-footer__dropdown">
                                <ul>
                                    {% for i in 0..7 %}
                                    <li><a href="#">Subcategory {{loop.index}}</a></li>
                                    {% endfor %}
                                </ul>
                            </div>
                        </li>
                        {% endfor %}
                    </ul>
                </nav> -->
                <div class="footer__menu">
                    <?php wp_nav_menu( [
                        'theme_location'  => 'foot_menu',
                        'container'       => 'nav', 
                        'container_class' => 'menu-footer', 
                        'container_id'    => '',
                        'menu_class'      => '', 
                        'menu_id'         => '',
                        'echo'            => true,
                        'fallback_cb'     => 'wp_page_menu',
                        'items_wrap'      => '<ul class="%2$s">%3$s</ul>',
                        'depth'           => 0,
                        'walker'          => new True_Walker_Nav_Menu,
                    ] ); ?>
                </div>
            </div>
        </div>

        <div class="footer__bottom">

            <div class="social-icon">
                <a href="#" class="icon-vkontakte" rel="noreferrer noopener">vkontakte</a>
                <a href="#" class="icon-facebook" rel="noreferrer noopener">facebook</a>
                <a href="#" class="icon-instagram" rel="noreferrer noopener">instagram</a>
                <a href="#" class="icon-twitter" rel="noreferrer noopener">twitter</a>
                <a href="#" class="icon-google" rel="noreferrer noopener">google</a>
                <!-- <a href="#" class="icon-odnoklassniki" rel="noreferrer noopener">odnoklassniki</a>
                |
                <a href="#" class="icon-youtube" rel="noreferrer noopener">youtube</a>
                <a href="#" class="icon-youtube2" rel="noreferrer noopener">youtube</a>
                <a href="#" class="icon-linkedin" rel="noreferrer noopener">linkedin</a>
                <a href="#" class="icon-flickr" rel="noreferrer noopener">flickr</a>
                <a href="#" class="icon-mailru" rel="noreferrer noopener">mailru</a>
                <a href="#" class="icon-pinterest" rel="noreferrer noopener">pinterest</a>
                <a href="#" class="icon-tumblr" rel="noreferrer noopener">tumblr</a>
                |
                <a href="#" class="icon-whatsapp" rel="noreferrer noopener" target="_blank">whatsapp</a>
                <a href="#" class="icon-viber" rel="noreferrer noopener" target="_blank>viber</a>
                <a href="#" class="icon-telegram" rel="noreferrer noopener" target="_blank>telegram</a>
                <a href="#" class="icon-skype" rel="noreferrer noopener" target="_blank">skype</a> -->
            </div>
        
            <div itemscope itemtype="http://schema.org/Place">
                <div itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                    <meta itemprop="ratingValue" content="4.9"/>
                    <meta itemprop="ratingCount" content="172"/>
                    <meta itemprop="bestRating" content="5"/>
                </div>
            </div>

        </div>
    </footer>

    <!-- end footer -->

<?php wp_footer(); ?>

</body>
</html>