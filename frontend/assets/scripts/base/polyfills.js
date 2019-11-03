/* eslint-disable */

// nodelist-foreach-polyfill ( thx ie )
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function forEach(callback, thisArg) {
        thisArg = thisArg || window;
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md
((arr) => {
    arr.forEach((item) => {
        if (item.hasOwnProperty('prepend')) {
            return;
        }
        Object.defineProperty(item, 'prepend', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function prepend() {
                const argArr = Array.prototype.slice.call(arguments);
                const docFrag = document.createDocumentFragment();

                argArr.forEach((argItem) => {
                    const isNode = argItem instanceof Node;
                    docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });

                this.insertBefore(docFrag, this.firstChild);
            },
        });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

// Element.closest()
((ELEMENT) => {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
        if (!this) return null;
        if (this.matches(selector)) return this;
        if (!this.parentElement) { return null; }
        return this.parentElement.closest(selector);
    };
})(Element.prototype);


/**
 * Remove all class which has prefix
 * example $("html").removeClassPrefix("blind-");
 */
$.fn.removeClassPrefix = function removeClassPrefix(prefix) {
    this.each((i, el) => {
        const classes = el.className.split(' ').filter(c => c.lastIndexOf(prefix, 0) !== 0);
        el.className = $.trim(classes.join(' '));
    });
    return this;
};
