import scrollComponent from '~scripts/base/scroll.component';
import { mergeDeep } from '~scripts/base/utils';
import { getElementCoords } from '~scripts/base/utils';

export default class Anchors {
    constructor(_root, _options) {
        this.root = _root;
        this.defaults = {};
        this.settings = mergeDeep(this.defaults, _options);

        this.root.addEventListener('click', (e) => {
            e.preventDefault();
            const el = document.querySelector(this.root.getAttribute('href'));
            if (el) {
                const positionTo = getElementCoords(el).top; 
                scrollComponent.moveTo(positionTo);
            } else {
                console.warn(`Anchors: element ${this.root.getAttribute('href')} not found`);
            }
            return false;
        });
    }
}
