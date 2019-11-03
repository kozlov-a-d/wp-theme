/**
 * @function {loadScript}
 * @param {string} src
 * @returns {Promise} Promise(script object)
 */
const loadScript = (src) => {
    const scripts = [...document.scripts].filter(script => script.src === src);
    return new Promise((resolve, reject) => {
        if (scripts.length) {
            if (document.readyState === 'complete') {
                resolve(scripts);
            }
            document.addEventListener('DOMContentLoaded', () => {
                resolve(scripts);
            });
        } else {
            const script = document.createElement('script');
            script.src = src;
            script.onerror = () => {
                reject(script);
            };
            script.onload = () => {
                resolve(script);
            };
            document.body.appendChild(script);
        }
    });
};

/**
 * @function {loadStyle}
 * @param {string} src
 * @returns {Promise} Promise(stylesheet object)
 */
const loadStyle = (src) => {
    const styles = [...document.styleSheets].filter(style => style.href === src);
    return new Promise((resolve, reject) => {
        if (styles.length) {
            resolve(styles);
        } else {
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = src;
            style.onerror = () => {
                reject(style);
            };
            style.onload = () => {
                resolve(style);
            };
            document.head.appendChild(style);
        }
    });
};

export { loadScript, loadStyle };
