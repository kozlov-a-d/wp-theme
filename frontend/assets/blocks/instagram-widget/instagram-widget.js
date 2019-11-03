import { loadScript } from '~scripts/base/load.component';
import lazyImageComponent from '~scripts/base/lazy-images.component';
import photoswipeWrapper from '~scripts/components/photoswipe.wrapper';
import './instagram-widget.scss';

/**
 * Подтягиваем картинки с инсты
 *
 * Хтмлка:
    <div class="instagram-widget-carousel js-instagram-widget-carousel">
        <div class="instagram-widget-carousel__list js-instagram-widget-carousel-list" id="instafeed">
            // тут будут выводиться фотки
        </div>
    </div>
 */

if ($('.js-instagram-widget').length) {
    window.addEventListener('DOMContentLoaded', () => {
        loadScript('https://matthewelsom.com/assets/js/libs/instafeed.min.js').then(() => {
            const { Instafeed } = window;
            const userFeed = new Instafeed({
                get: 'user',
                userId: '8188155449',
                clientId: '8064acdcdd3541e1a2598c30c75974d4',
                accessToken: '8188155449.8064acd.592a4300c35e430e9ede1941a9e1505c',
                resolution: 'standard_resolution',
                template: '<div class="instagram-widget__item"><a href="{{image}}" data-size="{{width}}x{{height}}" class="instagram-widget__item-img"><img src="assets/images/placeholder.svg" data-src="{{image}}" class="lazy" /></a></div>',
                sortBy: 'most-recent',
                limit: 8,
                links: false,
                after() {
                    photoswipeWrapper.init('.js-instagram-widget-list', 'a:not(.no-photoswipe)');
                    lazyImageComponent.add([].slice.call(document.querySelectorAll('.js-instagram-widget-list img.lazy')));
                },
            });
            userFeed.run();
            return true;
        }).catch(
            // console.log('Instafeed')
        );
    });
}
