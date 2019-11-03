// import $ from 'jquery';
import App from '~scripts/common/app';

/**
 * COMPONENT FOR TRACKING GOALS
 *
 * GOALS NAMING CONVENTION
 *
 * Category: 'Clicks'
 * Action: 'Click on Phone' - Клик на телефон
 * Action: 'Click on Email' - Клик на почту
 * Action: 'Click on WhatsApp' - Клик на WhatsApp
 * Action: 'Click on Telegram' - Клик на Telegram
 *
 * Category: Email
 * Action: 'Email Enquiry' - форма Book Now форму и аналогичные
 * Action: 'Email Feedback' - ФОС на странице контакты или в подвале
 * Action: 'Email Callback' - Заказ звонка
 * Action: 'Email Review' - Добавление отзыва
 * Action: 'Email Specialist' - Вызов специалиста
 * Action: 'Email Subscribe' - Подписаться на рассылку
 * Action: 'Email Career' - Отклик на вакансию
 *
 * Category: 'Ecommerce'
 * Action: 'View Product' - Просмотр продукта
 * Action: 'Add to Cart' - Добавление в корзину
 * Action: 'Remove from Cart' - Удаление из корзины
 * Action: 'Purchase' - Покупка
 * Action: 'Get Price List' - Получить прайс
 * Action: 'Enquire' - Отправить запрос
 * Action: 'Quick Order' - Заказ без корзины (купить в 1 клик)
 * Action: 'Review Product' - Отзыв к товару
 *
 *
 * USAGE EXAMPLE
 *
 * goalsModule.trigger('goalName', 'goalCategory');
 *
 * @requires jquery
 * @type {{trigger}}
 */
const goalsModule = (() => {
    // Enable/Disable tracking services
    const isMultilang = true;
    const services = {
        yaCounterID: '',
        mailRuID: false,
        ga: true,
        gtag: true,
        fbq: true,
    };

    const goalDone = (goalName, goalCategory) => {
        if (isMultilang) {
            if (App.lang) {
                goalName = `${goalName} ${App.lang[0].toUpperCase() + App.lang.slice(1)}`;
            } else {
                console.warn('У тега html отсутствует атрибут lang')
            }
        }
        if (services.yaCounterID !== '' && typeof window[`yaCounter${services.yaCounterID}`] !== 'undefined') {
            window[`yaCounter${services.yaCounterID}`].reachGoal(goalName, () => {});
        }
        if (services.mailRuID !== '' && typeof _tmr !== 'undefined') {
            window._tmr.push({ id: services.mailRuID, type: 'reachGoal', goal: goalName });
        }
        if (services.ga && typeof ga !== 'undefined') {
            window.ga('send', 'event', goalCategory, goalName);
        }
        if (services.gtag && typeof gtag !== 'undefined') {
            window.gtag('event', goalName, { event_category: goalCategory });
        }
        if (services.fbq && typeof fbq !== 'undefined') {
            window.fbq('track', goalName, { });
        }
        console.log(`Goal done. name: ${goalName}, category: ${goalCategory}`);
    };


    const $body = $('body');

    $body.on('click', 'a[href^="tel:"]', () => {
        goalDone('Click on Phone', 'Clicks');
    });

    $body.on('click', 'a[href^="mailto:"]', () => {
        goalDone('Click on Email', 'Clicks');
    });

    // exmaple <a href="https://api.whatsapp.com/send?phone=PHONE_NUMBER">
    $body.on('click', 'a[href^="https://api.whatsapp.com/"]', () => {
        goalDone('Click on WhatsApp', 'Clicks');
    });

    // exmaple <a href="tg://resolve?domain=USER_NAME"
    $body.on('click', 'a[href^="tg:"]', () => {
        goalDone('Click on Telegram', 'Clicks');
    });


    // For our CMS
    // App.events.form.success - event of a successfull form submit
    // Form must have data-attributes with goal name and category
    // Exmaple:
    // <form data-goal-name="EmailFeedback" data-goal-category="Email" class="js-ajax" >
    if (App.events.form.success) {
        $(document).on(App.events.form.success, (e, args) => {
            const { $form } = args;
            const name = $form.data('goalName') ? $form.data('goalName') : false;
            if (name) {
                const category = $form.data('goalCategory') ? $form.data('goalCategory') : 'default';
                goalsModule.trigger(name, category);
            }
        });
    }


    return Object.freeze({
        trigger(name, params) {
            goalDone(name, params);
        },
    });
})();

export default goalsModule;
