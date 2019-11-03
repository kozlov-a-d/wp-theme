/**
 * Компонент обёртка для requestAnimationFrame и формирования очереди
 *
 * Example:
 * requestAnimationFrameComponent.add(functionName);
 *
 * @method {{ add}}
 */
const requestAnimationFrameComponent = (() => {
    const self = {
        callbacks: [],
    };

    /**
     * добавляем новый колбэк в очередь
     * @param {{callback: function}} callback
     */
    const add = (callback) => {
        self.callbacks.push(callback);
    };

    function init() {
        self.callbacks.forEach((element) => {
            element();
        });
        requestAnimationFrame(init);
    }

    requestAnimationFrame(init);

    // PUBLIC ==========================================================================================================
    return Object.freeze({
        add,
    });
})();

export default requestAnimationFrameComponent;
