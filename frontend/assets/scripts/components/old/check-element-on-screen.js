import scrollComponent from '~scripts/base/scroll.component';

/**
 * Check element on screen after resize and scroll
 *
 * Examples:
 * checkElementOnScreen.onScreen(document.querySelector('h1'), function(el){ console.log(el)});
 * checkElementOnScreen.onScreen(document.querySelectorAll('p'), function(el){ console.log(el)});
 * checkElementOnScreen.onScreen(document.querySelectorAll('.l-main .l-container > *'), function(el){ console.log(el)});
 * checkElementOnScreen.onScreen(document.querySelectorAll('.text-block.-top'), function(el){ console.log(el)});
 */


const checkElementOnScreen = (() => {
    const self = {
        currentScroll: scrollComponent.current(),
        watchElements: [],
    };

    // =================================================================================================================

    /**
     * Add elements to watch
     * @param {NodeList} els elements
     * @param {function} cb callback function
     * @param {string} cbType number of calls callback ( 'single' or 'multiple' )
     */
    const addElementsToWatch = (els, cb, cbType) => {
        const type = cbType || 'single';
        if (els.length) {
            // NodeList
            els.forEach((item) => {
                self.watchElements.push({
                    element: item,
                    top: 0,
                    bottom: 0,
                    callback: cb,
                    callbackType: type,
                });
            });
        } else {
            // single dom element
            self.watchElements.push({
                element: els,
                top: 0,
                bottom: 0,
                callback: cb,
                callbackType: type,
            });
        }
    };

    const chechVisibleInterval = () => {
        const screenHeight = window.innerHeight;
        for (let i = self.watchElements.length - 1; i >= 0; i--) {
            const box = self.watchElements[i].element.getBoundingClientRect();
            self.watchElements[i].top = box.y + box.height * 0.05 - screenHeight;
            self.watchElements[i].bottom = box.y + box.height * 0.95;
        }
    };

    /**
     * Сhecks if the item is visible on the screen
     * @param {watchElementsItem} element
     * @returns {number} current value
     */
    const IsElementOnScreen = element => element.top < self.currentScroll && self.currentScroll < element.bottom;

    /**
     * Trigger elements callback
     */
    const triggerElementsCallback = () => {
        for (let i = self.watchElements.length - 1; i >= 0; i--) {
            if (IsElementOnScreen(self.watchElements[i])) {
                self.watchElements[i].callback(self.watchElements[i].element);
                self.watchElements.splice(i, 1);
            }
        }
    };

    // =================================================================================================================

    window.addEventListener('load', () => {
        self.currentScroll = scrollComponent.current();
        chechVisibleInterval();
        triggerElementsCallback();
    });

    window.addEventListener('scroll', () => {
        self.currentScroll = scrollComponent.current();
        // chechVisibleInterval();
        triggerElementsCallback();
    });

    window.addEventListener('resize', () => {
        self.currentScroll = scrollComponent.current();
        chechVisibleInterval();
        triggerElementsCallback();
    });

    // =================================================================================================================

    return Object.freeze({
        onScreen: addElementsToWatch,
    });
})();

export default checkElementOnScreen;
