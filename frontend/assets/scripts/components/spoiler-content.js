import { mergeDeep, wrap } from '~scripts/base/utils';
// js-spoiler-content - скрывает область под спойлер
//
// исходный код
// <div class="js-spoiler-content"
// data-screen="{xxs, xs, sm, md, lg, xl}"
// data-text-opened="Скрыть"
// data-text-closed="Показать полностью">
//  <!-- тут контент который нужно скрывать -->
// </div>

export default class SpoilerContent {
    constructor(_el, _options) {
        this.root = _el;
        this.defaults = {
            text: {
                opened: 'Скрыть',
                closed: 'Смотреть полностью',
            },
            btnClass: '',
            visibleClass: '',
        };
        this.settings = {};
        this.html = {
            wrapper: '',
            content: '',
            btn: '',
        };

        this.checkSettings(_options);
        this.addHTML();
        this.addHandler();
        this.addResponseClass();
    }

    checkSettings(_options) {
        this.settings = mergeDeep(this.defaults, _options);
        this.settings.text.opened = this.root.dataset.textOpened ? this.root.dataset.textOpened : this.settings.text.opened;
        this.settings.text.closed = this.root.dataset.textClosed ? this.root.dataset.textClosed : this.settings.text.closed;
        this.settings.btnClass = this.root.dataset.btnClass ? this.root.dataset.btnClass : this.settings.btnClass;
        this.settings.visibleClass = this.root.dataset.screen ? this.root.dataset.screen : this.settings.visibleClass;
    }


    addHTML() {
        this.html.wrapper = document.createElement('div');
        this.html.wrapper.classList.add('spoiler');

        this.html.btn = document.createElement('button');
        this.html.btn.classList.add('spoiler__btn', 'btn');
        if(this.settings.btnClass) this.html.btn.classList.add(...this.settings.btnClass.split(' '));
        this.html.btn.innerHTML = `<span>${this.settings.text.closed}</span>`;

        this.html.content = this.root;
        this.html.content.classList.add('spoiler__content');

        wrap(this.html.content, this.html.wrapper);
        this.html.wrapper.appendChild(this.html.btn);
    }

    addHandler() {
        const { html } = this;
        const { text } = this.settings;
        this.html.btn.addEventListener('click', () => {
            html.content.classList.toggle('display-none');
            html.btn.classList.toggle('is-opened');
            if (html.btn.classList.contains('is-opened')) {
                html.btn.innerHTML = `<span>${text.opened}</span>`;
            } else {
                html.btn.innerHTML = `<span>${text.closed}</span>`;
            }
        });
    }

    addResponseClass() {
        if (this.settings.visibleClass) {
            this.html.content.classList.add('display-none', `display-${this.settings.visibleClass}-block`);
            this.html.btn.classList.add('display-block', `display-${this.settings.visibleClass}-none`);
        } else {
            this.html.content.classList.add('display-none');
        }
    }
}
