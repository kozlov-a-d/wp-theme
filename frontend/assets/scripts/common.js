import { loadScript } from '~scripts/base/load.component';
import App from '~scripts/common/app';


import '~scripts/components/tabs.jquery';
// import '~scripts/components/datepicker';
// import '~scripts/components/timepicker';

import '~scripts/common/form';
import '~scripts/common/inputmask';
import '~scripts/common/novalidate';
import '~scripts/common/listeners';
import '~scripts/common/goals'; 

import '~scripts/tests/test-main';

// import '~blocks/blind-version/blind';


/**
 *  Кнопка скролящая наверх страницы
 */
import scrollTopModule from '~scripts/components/scroll-top.module';
scrollTopModule.init('.js-scroll-top', {  offsetTop: 105 });


/**
 *  Кнопки скролящие к анкору на странице
 */
import Anchors from '~scripts/components/anchors';
App.initComponent('.js-anchor', (el) => {
    new Anchors(el);
});

/**
 * polyfils
 */
// import '~scripts/base/polyfils.js';


/**
 * Lazy load for images
 */
import lazyImageComponent from '~scripts/base/lazy-images.component';
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        lazyImageComponent.add([].slice.call(document.querySelectorAll('img.js-img-lazy')));
    }, 10);
});


/**
 * Обёртка над фотосвайпом
 */
import photoswipeWrapper from '~scripts/components/photoswipe.wrapper';
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        photoswipeWrapper.init('.js-photoswipe-gallery', 'a:not(.no-photoswipe)');
    }, 10);
});


/**
 * Вставка видео
 */
import embedVideoModule from '~scripts/components/embed-video.module';
document.addEventListener('DOMContentLoaded', () => {
    embedVideoModule.init('.js-embed-video');
});



/**
 * Всплывающие окна с аяксом
 */
import '~scripts/components/modal-ajax.jquery';
(function initModalAjax() {
    const init = ((context) => {
        const $context = $(context || 'body');
        $context.find('.js-ajax:not(form)').modalAjax();
    })();
    App.onAjaxStream.push(init);
}());


/**
 *  Генерируемые всплывающие окна
 */
// import '~scripts/components/old/modal-html.jquery';
// (function initModalHtml() {
//     const init = ((context) => {
//         const $context = $(context || 'body');
//         $context.find('.js-modal').modalHtml();
//     })();
//     App.onAjaxStream.push(init);
// }());


/**
 * Add scrollbar for table on mobile
 */
import Tables from '~scripts/components/tables';
Tables.addMobileView('table');


/**
 * Кнопка печать
 */
import printModule from '~scripts/components/print.module';
printModule.init('.js-print');


/**
 * input[type="number"] with controls (+ -)
 */
import CustomInputNumber from '~scripts/components/custom-input-number';
App.initComponent('.js-custom-number', (el) => {
    new CustomInputNumber(el, {});
});


/**
 * Custom input[type="file"]
 */
import CustomInputFile from '~scripts/components/custom-input-file';
App.initComponent('.js-custom-file', (el) => {
    new CustomInputFile(el, {});
});


/**
 * Highslide
 */
if(document.querySelectorAll('.bigpic').length){
    import(/* webpackChunkName: "hs" */ '~vendor/highslide/highslide-full').then(module => {
        const hs = module.default;
        App.initComponent('.bigpic', (el) => {
            const link = el.parentNode;
            if (link.nodeName === 'A') {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    hs.expand(link);
                    return false;
                });
            }
        });
    }).catch(error => 'An error occurred while loading the component (hs)');
}


/**
 * Spoiler Area
 */
import SpoilerContent from '~scripts/components/spoiler-content';
App.initComponent('.js-spoiler-content', (el) => {
    new SpoilerContent(el);
});


/**
 * Spoiler List items
 */
import SpoilerList from '~scripts/components/spoiler-list';
App.initComponent('.js-spoiler-list', (el) => {
    new SpoilerList(el);
});


/**
 * Footer Menu
 */
const footerMenu = (() => {
    const root = document.querySelector('.js-footer-menu');
    const elements = (root) ? [...root.querySelectorAll('.-has-dropdown > a')] : [];
    const mobileView = 820;

    elements.forEach((element) => {
        element.addEventListener('click', (e) => {
            if (window.innerWidth <= mobileView) {
                e.preventDefault();
                e.target.nextElementSibling.classList.toggle('is-open');
                return false;
            }
        });
    });
})();


/**
 * Yandex maps
 */
import MapYandex from '~scripts/components/maps';
(function initMapYandex() {
    const apiUrl = 'https://api-maps.yandex.ru/2.1/?apikey=a093acd9-ac0d-4425-b81d-2ece98effc36&lang=ru_RU';
    const elements = document.querySelectorAll('.js-map-yandex');

    if (!elements.length) {
        return false;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const nodesObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    loadScript(apiUrl).then(() => {
                        new MapYandex(entry.target, {});
                        return true;
                    }).catch(
                        // console.log('MapYandex')
                    );
                }
            });
        });

        elements.forEach((element) => {
            nodesObserver.observe(element);
        });
    });
}());

// import checkElementOnScreen from '~scripts/components/check-element-on-screen';
// checkElementOnScreen.onScreen(document.querySelectorAll('.template-parallax-on-mouse__container'), function(el){ console.log(el)});
