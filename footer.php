        </main><!-- end main -->

    </div><!-- end wrapper -->

    <!-- begin footer -->
    <footer class="l-footer footer">
        <div class="footer__container">

            <div class="footer__call">
                <a class="footer__phone" href="tel:+971503749323">+971 50 374 9323</a>
                <a class="footer__whatsapp" href="https://api.whatsapp.com/send?phone=+971503749323" target="_blank">WhatsApp Chat</a>
            </div>

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

            

            <div class="footer__bottom">
                <a class="footer__logo" href="/"><img src="assets/images/logo-footer.png" alt="Logo"></a>
                <p><span>Address:</span> Rent Ferrari Dubai, Ofice 1003, <br>Sobha Ivory II, Business Bay, Dubai, UAE</p>
            </div>
        </div>

        <!-- powered_by_google -->
        <div itemscope itemtype="http://schema.org/Place">
            <div itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                <meta itemprop="ratingValue" content="4.9"/>
                <meta itemprop="ratingCount" content="172"/>
                <meta itemprop="bestRating" content="5"/>
            </div>
        </div>
        
    </footer> <!-- end footer -->

<?php wp_footer(); ?>

</body>
</html>