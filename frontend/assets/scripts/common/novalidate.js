// import $ from 'jquery';
import App from '~scripts/common/app';

$(document).on(App.events.ajax.html, (e, html) => {
    if (location.search.indexOf('?novalidate') === 0 || location.search.indexOf('&novalidate') !== -1) {
        html.find('form').attr('novalidate', 'novalidate');
    }
});
