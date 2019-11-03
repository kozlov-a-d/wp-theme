// import $ from 'jquery';
import Translator from 'bazinga-translator';

const App = (() => {
    const NOTIFICATION_TIMEOUT = 2000;
    const PRELOADER = '<img class="preloader" src="/assets/images/loader.svg" style="margin-left: 5px;">';
    const PRELOADER_FULLSCREEN = '<div id="preloader-fullscreen" class="preloader" style="background: url(/assets/images/loader.svg) center no-repeat #28272d; background-size: 128px 128px; position: fixed; top: 0; bottom: 0; width: 100%; height: 100%; opacity: 0.4; z-index: 9999;">';

    const events = {
        ajax: {
            html: 'app.ajax.html',
        },
        form: {
            success: 'app.form.success', // args.$form
            error: 'app.form.error',
        },
        popup: {
            open: 'app.popup.open',
            close: 'app.popup.close',
        },
        cart: {
            add: 'app.cart.add',
        },
    };

    const breakpoints = {
        xxs: 375, 
        xs: 414,
        sm: 568,
        md: 820, 
        desktop: 980,
        lg: 1024, 
        xl: 1280, 
    };

    const isMobile = () => window.innerWidth <= 890;
    const translate = text => (typeof Translator !== 'undefined' ? Translator.trans(text) : text);
    // Noty закоментирована в галпфайле
    const notify = (text, type) => {
        if (!text || isMobile()) {
            return;
        }
        if (typeof Noty === 'undefined') {
            alert(translate(text));
        }

        // new Noty({
        //     text: translate(text),
        //     type,
        //     timeout: NOTIFICATION_TIMEOUT,
        //     theme: 'sunset',
        // }).show();
    };

    const lang = (() => {
        const langAttr = document.querySelector('html').getAttribute('lang');
        return langAttr || null;
    })();

    const isRtl = (() => {
        const html = document.querySelector('html');
        return html.getAttribute('dir') === 'rtl' || html.getAttribute('lang') === 'ar';
    })();

    const onAjaxStream = [];

    /**
     * Init component on page load and ajax
     * @param {string} _selector
     * @param {function} _cb
     */
    const initComponent = (_selector, _cb) => {
        const init = ((context) => {
            const ctx = context || document.querySelector('body');
            const elements = [...ctx.querySelectorAll(_selector)];

            if (!elements.length) {
                return false;
            }

            elements.forEach((el) => {
                _cb(el);
            });
        })();
        onAjaxStream.push(init);
    };


    return {
        lang,
        isRtl,
        events,
        breakpoints,
        addFullscreenPreloader: () => {
            $('body').append(PRELOADER_FULLSCREEN);
        },
        removeFullscreenPreloader: () => {
            $('#preloader-fullscreen').remove();
        },
        addPreloader: (node, method) => {
            $(node)[method || 'append'](PRELOADER);
        },
        notify,
        onAjaxFail: (jqXHR) => {
            if (jqXHR.status) {
                const translation = `error.message.${jqXHR.status}`;
                const translated = translate(translation);

                notify(translated !== translation ? translated : [jqXHR.status, jqXHR.statusText].join(' '), 'error');
            }
        },
        onAjaxStream,
        redirect: (url, immediately) => {
            if (url) {
                setTimeout(() => {
                    location.href = url;
                }, immediately ? 0 : (NOTIFICATION_TIMEOUT / 2));
            }
        },
        translate,
        initComponent,
    };
})();

export default App;
