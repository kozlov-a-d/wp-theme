// import $ from 'jquery';
import App from '~scripts/common/app';

$('body').on('submit', 'form.js-ajax', (e) => {
    e.preventDefault();

    const $form = $(e.currentTarget);

    if ($form.data('submitted')) {
        return;
    }

    $form.data('submitted', true);

    App.addFullscreenPreloader();

    const options = {
        url: $form.attr('action') || '',
        type: $form.attr('method') || 'get',
        data: typeof FormData !== 'undefined' ? new FormData($form[0]) : $form.serialize(),
    };

    if (typeof FormData !== 'undefined') {
        options.contentType = options.processData = false;
    }

    $.ajax(options).done((data) => {
        $(document).trigger(`app.form.${data.success ? 'success' : 'error'}`, {
            $form,
        });

        // App.notify(data.message, data.success ? 'success' : 'error');
        App.redirect(data.redirectUrl);


        // костыль для отправки форм на локалхосте
        if (window.location.hostname === 'localhost') {
            const html = data;
            data = {};
            data.html = html;

            $(document).trigger(App.events.form.success, {
                $form,
            });
        }

        if (data.html) {
            const $html = $(data.html);

            // если в ответе сервера форма, то вставляем именно её
            // иначе вставляем ответ целиком
            if ($html.find('form').length > 0) {
                $form.replaceWith($html.find('form'));
            } else {
                $form.replaceWith($html);
            }

            $(document).trigger(App.events.ajax.html, {
                $html: $html.parent(),
            });
            // $(document).trigger(App.events.ajax.complete, {});
        }
    }).always(() => {
        $form.removeData('submitted');
    }).fail(App.onAjaxFail);
});
