import { mergeDeep } from '~scripts/base/utils';
import resizeComponent from '~scripts/base/resize.component';

/**
 * Spoiler items
 */
export default class SpoilerItems {
    constructor(_root, _options) {
        this.root = _root;
        this.defaults = {
            text: {
                opened: 'Скрыть',
                closed: 'Смотреть полностью',
            },
            btnClass: '',
            hiddenItemsSelector: '.js-spoiler-list-item-hidden',
            hiddenResolution: 980,
        };
        this.hiddenItems = [];
        this.btn = null;

        this.settings = mergeDeep(this.defaults, _options || {});
        this.parseSettingsFromDataAttr();
        this.hiddenItems = this.root.querySelectorAll(this.settings.hiddenItemsSelector);
        this.addHTML();
        this.addEvents();
        this.onResize();
    }

    parseSettingsFromDataAttr() {
        this.settings.text.opened = this.root.dataset.textOpened ? this.root.dataset.textOpened : 'Скрыть';
        this.settings.text.closed = this.root.dataset.textClosed ? this.root.dataset.textClosed : 'Смотреть полностью';
        this.settings.btnClass = this.root.dataset.btnClass ? this.root.dataset.btnClass : '';
        this.settings.hiddenItemsSelector = this.root.dataset.hiddenItemsSelector ? this.root.dataset.hiddenItemsSelector : '.js-spoiler-list-item-hidden';
        this.settings.hiddenResolution = this.root.dataset.hiddenResolution ? this.root.dataset.hiddenResolution : 980;
    }

    addHTML() {
        const btnHtml = `<button class="spoiler-list__btn ${this.settings.btnClass}">
                            <span>${this.settings.text.closed}</span>
                        </button>`;
        this.btn = (() => {
            const t = document.createElement('template');
            t.innerHTML = btnHtml;
            return t.content.cloneNode(true);
        })().firstElementChild;
        this.root.appendChild(this.btn);
    }

    addEvents() {
        this.btn.addEventListener('click', () => {
            this.btn.classList.toggle('is-opened');
            if (this.btn.classList.contains('is-opened')) {
                // show
                this.btn.querySelector('span').innerText = this.settings.text.opened;
                this.hiddenItems.forEach((item) => {
                    item.style.display = '';
                });
            } else {
                // hide
                this.btn.querySelector('span').innerText = this.settings.text.closed;
                this.hiddenItems.forEach((item) => {
                    item.style.display = 'none';
                });
            }
        });
    }

    onResize() {
        const self = this;
        resizeComponent.addMediaQuery({
            min: 0,
            max: self.settings.hiddenResolution * 1,
            onEnter() {
                self.hiddenItems.forEach((item) => {
                    item.style.display = 'none';
                });
            },
            onExit() {
                self.hiddenItems.forEach((item) => {
                    item.style.display = '';
                });
            },
        });
    }
}
