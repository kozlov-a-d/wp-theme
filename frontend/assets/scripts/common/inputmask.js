// import $ from 'jquery';
import App from '~scripts/common/app';

$(document).on(App.events.ajax.html, (e, html) => {
    if (typeof $.fn.inputmask !== 'undefined') {
        html.find('input.js-inputmask-phone').inputmask('9', {
            repeat: '*',
        });
    }
});
