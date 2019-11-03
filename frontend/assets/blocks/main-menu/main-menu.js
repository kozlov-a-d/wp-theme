import './main-menu.scss';

/**
 * Менюшка для мобильника
 */
import MenuMobile from '~scripts/components/menu-mobile.component';
document.addEventListener('DOMContentLoaded', () => {
    new MenuMobile(document.querySelector('.js-menu-mobile'), {
        text: {
            rootTitle: 'Menu',
        },
    });
});

/**
 *  Скрытие пунктов меню, если они не помещаются
 */
import MenuSmart from '~scripts/components/menu-smart.component';
document.addEventListener('DOMContentLoaded', () => {
    new MenuSmart(document.querySelector('.js-menu-smart'));
});
