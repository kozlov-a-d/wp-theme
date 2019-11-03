// import $ from 'jquery';
import App from '~scripts/common/app';
import CartWidget from '~blocks/cart-widget/cart-widget';


/**
 * Event On Ajax Add Html
 */
$(document).on(App.events.ajax.html, (e, args) => {
    console.log('Triggered App.events.ajax.html');
    
    const html = args.$html || args.html;

    App.removeFullscreenPreloader();

    // перебираем все функции повешеные на аякс
    $.each(App.onAjaxStream, (index) => {
        if (typeof App.onAjaxStream[index] === 'function') {
            App.onAjaxStream[index](html);
        }
    });
});


/**
 * Event On Form Success Sent
 */
$(document).on(App.events.form.success, () => {
    console.log('Triggered App.events.form.success');
    // ..
});


/**
 * Event On Form Error
 */
$(document).on(App.events.form.error, () => {
    console.log('Triggered App.events.form.error');
    // ..
});


/**
 * Event On Add Product
 */
$(document).on(App.events.cart.add, () => {
    console.log('Triggered App.events.cart.add');
    CartWidget.add();
});


/**
 * Event On Modal Open
 */
$(document).on(App.events.popup.open, () => {
    console.log('Triggered App.events.popup.open');
    // ..
});


/**
 * Event On Modal Close
 */
$(document).on(App.events.popup.close, () => {
    console.log('Triggered App.events.popup.close');
    // ..
});
