(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hs"],{

/***/ "./frontend/assets/vendor/highslide/highslide-full.js":
/*!************************************************************!*\
  !*** ./frontend/assets/vendor/highslide/highslide-full.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** 
 * Name:    Highslide JS
 * Version: 5.0.0 (2016-05-24)
 * Config:  default +events +unobtrusive +imagemap +slideshow +positioning +transitions +viewport +thumbstrip +inline +ajax +iframe +flash
 * Author:  Torstein Hønsi
 * Support: www.highslide.com/support
 * License: MIT
 */
if (!hs) {
  var hs = {
    // Language strings
    lang: {
      cssDirection: 'ltr',
      loadingText: 'Loading...',
      loadingTitle: 'Click to cancel',
      focusTitle: 'Click to bring to front',
      fullExpandTitle: 'Expand to actual size (f)',
      creditsText: 'Powered by <i>Highslide JS</i>',
      creditsTitle: 'Go to the Highslide JS homepage',
      previousText: 'Previous',
      nextText: 'Next',
      moveText: 'Move',
      closeText: 'Close',
      closeTitle: 'Close (esc)',
      resizeTitle: 'Resize',
      playText: 'Play',
      playTitle: 'Play slideshow (spacebar)',
      pauseText: 'Pause',
      pauseTitle: 'Pause slideshow (spacebar)',
      previousTitle: 'Previous (arrow left)',
      nextTitle: 'Next (arrow right)',
      moveTitle: 'Move',
      fullExpandText: '1:1',
      number: 'Image %1 of %2',
      restoreTitle: 'Click to close image, click and drag to move. Use arrow keys for next and previous.'
    },
    // See http://highslide.com/ref for examples of settings  
    graphicsDir: window.location.origin + '/assets/images/highslide/',
    expandCursor: 'zoomin.cur',
    // null disables
    restoreCursor: 'zoomout.cur',
    // null disables
    expandDuration: 250,
    // milliseconds
    restoreDuration: 250,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
    zIndexCounter: 1001,
    // adjust to other absolutely positioned elements
    loadingOpacity: 0.75,
    allowMultipleInstances: true,
    numberOfImagesToPreload: 5,
    outlineWhileAnimating: 2,
    // 0 = never, 1 = always, 2 = HTML only 
    outlineStartOffset: 3,
    // ends at 10
    padToMinWidth: false,
    // pad the popup width to make room for wide caption
    fullExpandPosition: 'bottom right',
    fullExpandOpacity: 1,
    showCredits: false,
    // you can set this to false if you want
    creditsHref: 'http://highslide.com/',
    creditsTarget: '_self',
    enableKeyListener: true,
    openerTagNames: ['a', 'area'],
    // Add more to allow slideshow indexing
    transitions: [],
    transitionDuration: 250,
    dimmingOpacity: 0,
    // Lightbox style dimming background
    dimmingDuration: 50,
    // 0 for instant dimming
    allowWidthReduction: false,
    allowHeightReduction: true,
    preserveContent: true,
    // Preserve changes made to the content and position of HTML popups.
    objectLoadTime: 'before',
    // Load iframes 'before' or 'after' expansion.
    cacheAjax: true,
    // Cache ajax popups for instant display. Can be overridden for each popup.
    anchor: 'auto',
    // where the image expands from
    align: 'auto',
    // position in the client (overrides anchor)
    targetX: null,
    // the id of a target element
    targetY: null,
    dragByHeading: true,
    minWidth: 200,
    minHeight: 200,
    allowSizeReduction: true,
    // allow the image to reduce to fit client size. If false, this overrides minWidth and minHeight
    outlineType: 'drop-shadow',
    // set null to disable outlines
    skin: {
      controls: '<div class="highslide-controls"><ul>' + '<li class="highslide-previous">' + '<a href="#" title="{hs.lang.previousTitle}">' + '<span>{hs.lang.previousText}</span></a>' + '</li>' + '<li class="highslide-play">' + '<a href="#" title="{hs.lang.playTitle}">' + '<span>{hs.lang.playText}</span></a>' + '</li>' + '<li class="highslide-pause">' + '<a href="#" title="{hs.lang.pauseTitle}">' + '<span>{hs.lang.pauseText}</span></a>' + '</li>' + '<li class="highslide-next">' + '<a href="#" title="{hs.lang.nextTitle}">' + '<span>{hs.lang.nextText}</span></a>' + '</li>' + '<li class="highslide-move">' + '<a href="#" title="{hs.lang.moveTitle}">' + '<span>{hs.lang.moveText}</span></a>' + '</li>' + '<li class="highslide-full-expand">' + '<a href="#" title="{hs.lang.fullExpandTitle}">' + '<span>{hs.lang.fullExpandText}</span></a>' + '</li>' + '<li class="highslide-close">' + '<a href="#" title="{hs.lang.closeTitle}" >' + '<span>{hs.lang.closeText}</span></a>' + '</li>' + '</ul></div>',
      contentWrapper: '<div class="highslide-header"><ul>' + '<li class="highslide-previous">' + '<a href="#" title="{hs.lang.previousTitle}" onclick="return hs.previous(this)">' + '<span>{hs.lang.previousText}</span></a>' + '</li>' + '<li class="highslide-next">' + '<a href="#" title="{hs.lang.nextTitle}" onclick="return hs.next(this)">' + '<span>{hs.lang.nextText}</span></a>' + '</li>' + '<li class="highslide-move">' + '<a href="#" title="{hs.lang.moveTitle}" onclick="return false">' + '<span>{hs.lang.moveText}</span></a>' + '</li>' + '<li class="highslide-close">' + '<a href="#" title="{hs.lang.closeTitle}" onclick="return hs.close(this)">' + '<span>{hs.lang.closeText}</span></a>' + '</li>' + '</ul></div>' + '<div class="highslide-body"></div>' + '<div class="highslide-footer"><div>' + '<span class="highslide-resize" title="{hs.lang.resizeTitle}"><span></span></span>' + '</div></div>'
    },
    // END OF YOUR SETTINGS
    // declare internal properties
    preloadTheseImages: [],
    continuePreloading: true,
    expanders: [],
    overrides: ['allowSizeReduction', 'useBox', 'anchor', 'align', 'targetX', 'targetY', 'outlineType', 'outlineWhileAnimating', 'captionId', 'captionText', 'captionEval', 'captionOverlay', 'headingId', 'headingText', 'headingEval', 'headingOverlay', 'creditsPosition', 'dragByHeading', 'autoplay', 'numberPosition', 'transitions', 'dimmingOpacity', 'width', 'height', 'contentId', 'allowWidthReduction', 'allowHeightReduction', 'preserveContent', 'maincontentId', 'maincontentText', 'maincontentEval', 'objectType', 'cacheAjax', 'objectWidth', 'objectHeight', 'objectLoadTime', 'swfOptions', 'wrapperClassName', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'pageOrigin', 'slideshowGroup', 'easing', 'easingClose', 'fadeInOut', 'src'],
    overlays: [],
    idCounter: 0,
    oPos: {
      x: ['leftpanel', 'left', 'center', 'right', 'rightpanel'],
      y: ['above', 'top', 'middle', 'bottom', 'below']
    },
    mouse: {},
    headingOverlay: {},
    captionOverlay: {},
    swfOptions: {
      flashvars: {},
      params: {},
      attributes: {}
    },
    timers: [],
    slideshows: [],
    pendingOutlines: {},
    sleeping: [],
    preloadTheseAjax: [],
    cacheBindings: [],
    cachedGets: {},
    clones: {},
    onReady: [],
    uaVersion: document.documentMode || parseFloat((navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1]),
    ie: document.all && !window.opera,
    //ie : navigator && /MSIE [678]/.test(navigator.userAgent), // ie9 compliant?
    safari: /Safari/.test(navigator.userAgent),
    geckoMac: /Macintosh.+rv:1\.[0-8].+Gecko/.test(navigator.userAgent),
    $: function $(id) {
      if (id) return document.getElementById(id);
    },
    push: function push(arr, val) {
      arr[arr.length] = val;
    },
    createElement: function createElement(tag, attribs, styles, parent, nopad) {
      var el = document.createElement(tag);
      if (attribs) hs.extend(el, attribs);
      if (nopad) hs.setStyles(el, {
        padding: 0,
        border: 'none',
        margin: 0
      });
      if (styles) hs.setStyles(el, styles);
      if (parent) parent.appendChild(el);
      return el;
    },
    extend: function extend(el, attribs) {
      for (var x in attribs) {
        el[x] = attribs[x];
      }

      return el;
    },
    setStyles: function setStyles(el, styles) {
      for (var x in styles) {
        if (hs.ieLt9 && x == 'opacity') {
          if (styles[x] > 0.99) el.style.removeAttribute('filter');else el.style.filter = 'alpha(opacity=' + styles[x] * 100 + ')';
        } else el.style[x] = styles[x];
      }
    },
    animate: function animate(el, prop, opt) {
      var start, end, unit;

      if (_typeof(opt) != 'object' || opt === null) {
        var args = arguments;
        opt = {
          duration: args[2],
          easing: args[3],
          complete: args[4]
        };
      }

      if (typeof opt.duration != 'number') opt.duration = 250;
      opt.easing = Math[opt.easing] || Math.easeInQuad;
      opt.curAnim = hs.extend({}, prop);

      for (var name in prop) {
        var e = new hs.fx(el, opt, name);
        start = parseFloat(hs.css(el, name)) || 0;
        end = parseFloat(prop[name]);
        unit = name != 'opacity' ? 'px' : '';
        e.custom(start, end, unit);
      }
    },
    css: function css(el, prop) {
      if (el.style[prop]) {
        return el.style[prop];
      } else if (document.defaultView) {
        return document.defaultView.getComputedStyle(el, null).getPropertyValue(prop);
      } else {
        if (prop == 'opacity') prop = 'filter';
        var val = el.currentStyle[prop.replace(/\-(\w)/g, function (a, b) {
          return b.toUpperCase();
        })];
        if (prop == 'filter') val = val.replace(/alpha\(opacity=([0-9]+)\)/, function (a, b) {
          return b / 100;
        });
        return val === '' ? 1 : val;
      }
    },
    getPageSize: function getPageSize() {
      var d = document,
          w = window,
          iebody = d.compatMode && d.compatMode != 'BackCompat' ? d.documentElement : d.body,
          ieLt9 = hs.ie && (hs.uaVersion < 9 || typeof pageXOffset == 'undefined');
      var width = ieLt9 ? iebody.clientWidth : d.documentElement.clientWidth || self.innerWidth,
          height = ieLt9 ? iebody.clientHeight : self.innerHeight;
      hs.page = {
        width: width,
        height: height,
        scrollLeft: ieLt9 ? iebody.scrollLeft : pageXOffset,
        scrollTop: ieLt9 ? iebody.scrollTop : pageYOffset
      };
      return hs.page;
    },
    getPosition: function getPosition(el) {
      if (/area/i.test(el.tagName)) {
        var imgs = document.getElementsByTagName('img');

        for (var i = 0; i < imgs.length; i++) {
          var u = imgs[i].useMap;

          if (u && u.replace(/^.*?#/, '') == el.parentNode.name) {
            el = imgs[i];
            break;
          }
        }
      }

      var p = {
        x: el.offsetLeft,
        y: el.offsetTop
      };

      while (el.offsetParent) {
        el = el.offsetParent;
        p.x += el.offsetLeft;
        p.y += el.offsetTop;

        if (el != document.body && el != document.documentElement) {
          p.x -= el.scrollLeft;
          p.y -= el.scrollTop;
        }
      }

      return p;
    },
    expand: function expand(a, params, custom, type) {
      if (!a) a = hs.createElement('a', null, {
        display: 'none'
      }, hs.container);
      if (typeof a.getParams == 'function') return params;

      if (type == 'html') {
        for (var i = 0; i < hs.sleeping.length; i++) {
          if (hs.sleeping[i] && hs.sleeping[i].a == a) {
            hs.sleeping[i].awake();
            hs.sleeping[i] = null;
            return false;
          }
        }

        hs.hasHtmlExpanders = true;
      }

      try {
        new hs.Expander(a, params, custom, type);
        return false;
      } catch (e) {
        return true;
      }
    },
    htmlExpand: function htmlExpand(a, params, custom) {
      return hs.expand(a, params, custom, 'html');
    },
    getSelfRendered: function getSelfRendered() {
      return hs.createElement('div', {
        className: 'highslide-html-content',
        innerHTML: hs.replaceLang(hs.skin.contentWrapper)
      });
    },
    getElementByClass: function getElementByClass(el, tagName, className) {
      var els = el.getElementsByTagName(tagName);

      for (var i = 0; i < els.length; i++) {
        if (new RegExp(className).test(els[i].className)) {
          return els[i];
        }
      }

      return null;
    },
    replaceLang: function replaceLang(s) {
      s = s.replace(/\s/g, ' ');
      var re = /{hs\.lang\.([^}]+)\}/g,
          matches = s.match(re),
          lang;
      if (matches) for (var i = 0; i < matches.length; i++) {
        lang = matches[i].replace(re, "$1");
        if (typeof hs.lang[lang] != 'undefined') s = s.replace(matches[i], hs.lang[lang]);
      }
      return s;
    },
    setClickEvents: function setClickEvents() {
      var els = document.getElementsByTagName('a');

      for (var i = 0; i < els.length; i++) {
        var type = hs.isUnobtrusiveAnchor(els[i]);

        if (type && !els[i].hsHasSetClick) {
          (function () {
            var t = type;

            if (hs.fireEvent(hs, 'onSetClickEvent', {
              element: els[i],
              type: t
            })) {
              els[i].onclick = type == 'image' ? function () {
                return hs.expand(this);
              } : function () {
                return hs.htmlExpand(this, {
                  objectType: t
                });
              };
            }
          })();

          els[i].hsHasSetClick = true;
        }
      }

      hs.getAnchors();
    },
    isUnobtrusiveAnchor: function isUnobtrusiveAnchor(el) {
      if (el.rel == 'highslide') return 'image';else if (el.rel == 'highslide-ajax') return 'ajax';else if (el.rel == 'highslide-iframe') return 'iframe';else if (el.rel == 'highslide-swf') return 'swf';
    },
    getCacheBinding: function getCacheBinding(a) {
      for (var i = 0; i < hs.cacheBindings.length; i++) {
        if (hs.cacheBindings[i][0] == a) {
          var c = hs.cacheBindings[i][1];
          hs.cacheBindings[i][1] = c.cloneNode(1);
          return c;
        }
      }

      return null;
    },
    preloadAjax: function preloadAjax(e) {
      var arr = hs.getAnchors();

      for (var i = 0; i < arr.htmls.length; i++) {
        var a = arr.htmls[i];
        if (hs.getParam(a, 'objectType') == 'ajax' && hs.getParam(a, 'cacheAjax')) hs.push(hs.preloadTheseAjax, a);
      }

      hs.preloadAjaxElement(0);
    },
    preloadAjaxElement: function preloadAjaxElement(i) {
      if (!hs.preloadTheseAjax[i]) return;
      var a = hs.preloadTheseAjax[i];
      var cache = hs.getNode(hs.getParam(a, 'contentId'));
      if (!cache) cache = hs.getSelfRendered();
      var ajax = new hs.Ajax(a, cache, 1);

      ajax.onError = function () {};

      ajax.onLoad = function () {
        hs.push(hs.cacheBindings, [a, cache]);
        hs.preloadAjaxElement(i + 1);
      };

      ajax.run();
    },
    focusTopmost: function focusTopmost() {
      var topZ = 0,
          topmostKey = -1,
          expanders = hs.expanders,
          exp,
          zIndex;

      for (var i = 0; i < expanders.length; i++) {
        exp = expanders[i];

        if (exp) {
          zIndex = exp.wrapper.style.zIndex;

          if (zIndex && zIndex > topZ) {
            topZ = zIndex;
            topmostKey = i;
          }
        }
      }

      if (topmostKey == -1) hs.focusKey = -1;else expanders[topmostKey].focus();
    },
    getParam: function getParam(a, param) {
      a.getParams = a.onclick;
      var p = a.getParams ? a.getParams() : null;
      a.getParams = null;
      return p && typeof p[param] != 'undefined' ? p[param] : typeof hs[param] != 'undefined' ? hs[param] : null;
    },
    getSrc: function getSrc(a) {
      var src = hs.getParam(a, 'src');
      if (src) return src;
      return a.href;
    },
    getNode: function getNode(id) {
      var node = hs.$(id),
          clone = hs.clones[id],
          a = {};
      if (!node && !clone) return null;

      if (!clone) {
        clone = node.cloneNode(true);
        clone.id = '';
        hs.clones[id] = clone;
        return node;
      } else {
        return clone.cloneNode(true);
      }
    },
    discardElement: function discardElement(d) {
      if (d) hs.garbageBin.appendChild(d);
      hs.garbageBin.innerHTML = '';
    },
    dim: function dim(exp) {
      if (!hs.dimmer) {
        isNew = true;
        hs.dimmer = hs.createElement('div', {
          className: 'highslide-dimming highslide-viewport-size',
          owner: '',
          onclick: function onclick() {
            if (hs.fireEvent(hs, 'onDimmerClick')) hs.close();
          }
        }, {
          visibility: 'visible',
          opacity: 0
        }, hs.container, true);

        if (/(Android|iPad|iPhone|iPod)/.test(navigator.userAgent)) {
          var pixDimmerSize = function pixDimmerSize() {
            hs.setStyles(hs.dimmer, {
              width: body.scrollWidth + 'px',
              height: body.scrollHeight + 'px'
            });
          };

          var body = document.body;
          pixDimmerSize();
          hs.addEventListener(window, 'resize', pixDimmerSize);
        }
      }

      hs.dimmer.style.display = '';
      var isNew = hs.dimmer.owner == '';
      hs.dimmer.owner += '|' + exp.key;

      if (isNew) {
        if (hs.geckoMac && hs.dimmingGeckoFix) hs.setStyles(hs.dimmer, {
          background: 'url(' + hs.graphicsDir + 'geckodimmer.png)',
          opacity: 1
        });else hs.animate(hs.dimmer, {
          opacity: exp.dimmingOpacity
        }, hs.dimmingDuration);
      }
    },
    undim: function undim(key) {
      if (!hs.dimmer) return;
      if (typeof key != 'undefined') hs.dimmer.owner = hs.dimmer.owner.replace('|' + key, '');
      if (typeof key != 'undefined' && hs.dimmer.owner != '' || hs.upcoming && hs.getParam(hs.upcoming, 'dimmingOpacity')) return;
      if (hs.geckoMac && hs.dimmingGeckoFix) hs.dimmer.style.display = 'none';else hs.animate(hs.dimmer, {
        opacity: 0
      }, hs.dimmingDuration, null, function () {
        hs.dimmer.style.display = 'none';
      });
    },
    transit: function transit(adj, exp) {
      var last = exp || hs.getExpander();
      exp = last;
      if (hs.upcoming) return false;else hs.last = last;
      hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);

      try {
        hs.upcoming = adj;
        adj.onclick();
      } catch (e) {
        hs.last = hs.upcoming = null;
      }

      try {
        if (!adj || exp.transitions[1] != 'crossfade') exp.close();
      } catch (e) {}

      return false;
    },
    previousOrNext: function previousOrNext(el, op) {
      var exp = hs.getExpander(el);
      if (exp) return hs.transit(exp.getAdjacentAnchor(op), exp);else return false;
    },
    previous: function previous(el) {
      return hs.previousOrNext(el, -1);
    },
    next: function next(el) {
      return hs.previousOrNext(el, 1);
    },
    keyHandler: function keyHandler(e) {
      if (!e) e = window.event;
      if (!e.target) e.target = e.srcElement; // ie

      if (typeof e.target.form != 'undefined') return true; // form element has focus

      if (!hs.fireEvent(hs, 'onKeyDown', e)) return true;
      var exp = hs.getExpander();
      var op = null;

      switch (e.keyCode) {
        case 70:
          // f
          if (exp) exp.doFullExpand();
          return true;

        case 32:
          // Space
          op = 2;
          break;

        case 34: // Page Down

        case 39: // Arrow right

        case 40:
          // Arrow down
          op = 1;
          break;

        case 8: // Backspace

        case 33: // Page Up

        case 37: // Arrow left

        case 38:
          // Arrow up
          op = -1;
          break;

        case 27: // Escape

        case 13:
          // Enter
          op = 0;
      }

      if (op !== null) {
        if (op != 2) hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);
        if (!hs.enableKeyListener) return true;
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;

        if (exp) {
          if (op == 0) {
            exp.close();
          } else if (op == 2) {
            if (exp.slideshow) exp.slideshow.hitSpace();
          } else {
            if (exp.slideshow) exp.slideshow.pause();
            hs.previousOrNext(exp.key, op);
          }

          return false;
        }
      }

      return true;
    },
    registerOverlay: function registerOverlay(overlay) {
      hs.push(hs.overlays, hs.extend(overlay, {
        hsId: 'hsId' + hs.idCounter++
      }));
    },
    addSlideshow: function addSlideshow(options) {
      var sg = options.slideshowGroup;

      if (_typeof(sg) == 'object') {
        for (var i = 0; i < sg.length; i++) {
          var o = {};

          for (var x in options) {
            o[x] = options[x];
          }

          o.slideshowGroup = sg[i];
          hs.push(hs.slideshows, o);
        }
      } else {
        hs.push(hs.slideshows, options);
      }
    },
    getWrapperKey: function getWrapperKey(element, expOnly) {
      var el,
          re = /^highslide-wrapper-([0-9]+)$/; // 1. look in open expanders

      el = element;

      while (el.parentNode) {
        if (el.hsKey !== undefined) return el.hsKey;
        if (el.id && re.test(el.id)) return el.id.replace(re, "$1");
        el = el.parentNode;
      } // 2. look in thumbnail


      if (!expOnly) {
        el = element;

        while (el.parentNode) {
          if (el.tagName && hs.isHsAnchor(el)) {
            for (var key = 0; key < hs.expanders.length; key++) {
              var exp = hs.expanders[key];
              if (exp && exp.a == el) return key;
            }
          }

          el = el.parentNode;
        }
      }

      return null;
    },
    getExpander: function getExpander(el, expOnly) {
      if (typeof el == 'undefined') return hs.expanders[hs.focusKey] || null;
      if (typeof el == 'number') return hs.expanders[el] || null;
      if (typeof el == 'string') el = hs.$(el);
      return hs.expanders[hs.getWrapperKey(el, expOnly)] || null;
    },
    isHsAnchor: function isHsAnchor(a) {
      return a.onclick && a.onclick.toString().replace(/\s/g, ' ').match(/hs.(htmlE|e)xpand/);
    },
    reOrder: function reOrder() {
      for (var i = 0; i < hs.expanders.length; i++) {
        if (hs.expanders[i] && hs.expanders[i].isExpanded) hs.focusTopmost();
      }
    },
    fireEvent: function fireEvent(obj, evt, args) {
      return obj && obj[evt] ? obj[evt](obj, args) !== false : true;
    },
    mouseClickHandler: function mouseClickHandler(e) {
      if (!e) e = window.event;
      if (e.button > 1) return true;
      if (!e.target) e.target = e.srcElement;
      var el = e.target;

      while (el.parentNode && !/highslide-(image|move|html|resize)/.test(el.className)) {
        el = el.parentNode;
      }

      var exp = hs.getExpander(el);
      if (exp && (exp.isClosing || !exp.isExpanded)) return true;

      if (exp && e.type == 'mousedown') {
        if (e.target.form) return true;
        var match = el.className.match(/highslide-(image|move|resize)/);

        if (match) {
          hs.dragArgs = {
            exp: exp,
            type: match[1],
            left: exp.x.pos,
            width: exp.x.size,
            top: exp.y.pos,
            height: exp.y.size,
            clickX: e.clientX,
            clickY: e.clientY
          };
          hs.addEventListener(document, 'mousemove', hs.dragHandler);
          if (e.preventDefault) e.preventDefault(); // FF

          if (/highslide-(image|html)-blur/.test(exp.content.className)) {
            exp.focus();
            hs.hasFocused = true;
          }

          return false;
        } else if (/highslide-html/.test(el.className) && hs.focusKey != exp.key) {
          exp.focus();
          exp.doShowHide('hidden');
        }
      } else if (e.type == 'mouseup') {
        hs.removeEventListener(document, 'mousemove', hs.dragHandler);

        if (hs.dragArgs) {
          if (hs.styleRestoreCursor && hs.dragArgs.type == 'image') hs.dragArgs.exp.content.style.cursor = hs.styleRestoreCursor;
          var hasDragged = hs.dragArgs.hasDragged;

          if (!hasDragged && !hs.hasFocused && !/(move|resize)/.test(hs.dragArgs.type)) {
            if (hs.fireEvent(exp, 'onImageClick')) exp.close();
          } else if (hasDragged || !hasDragged && hs.hasHtmlExpanders) {
            hs.dragArgs.exp.doShowHide('hidden');
          }

          if (hs.dragArgs.exp.releaseMask) hs.dragArgs.exp.releaseMask.style.display = 'none';
          if (hasDragged) hs.fireEvent(hs.dragArgs.exp, 'onDrop', hs.dragArgs);
          hs.hasFocused = false;
          hs.dragArgs = null;
        } else if (/highslide-image-blur/.test(el.className)) {
          el.style.cursor = hs.styleRestoreCursor;
        }
      }

      return false;
    },
    dragHandler: function dragHandler(e) {
      if (!hs.dragArgs) return true;
      if (!e) e = window.event;
      var a = hs.dragArgs,
          exp = a.exp;

      if (exp.iframe) {
        if (!exp.releaseMask) exp.releaseMask = hs.createElement('div', null, {
          position: 'absolute',
          width: exp.x.size + 'px',
          height: exp.y.size + 'px',
          left: exp.x.cb + 'px',
          top: exp.y.cb + 'px',
          zIndex: 4,
          background: hs.ieLt9 ? 'white' : 'none',
          opacity: 0.01
        }, exp.wrapper, true);
        if (exp.releaseMask.style.display == 'none') exp.releaseMask.style.display = '';
      }

      a.dX = e.clientX - a.clickX;
      a.dY = e.clientY - a.clickY;
      var distance = Math.sqrt(Math.pow(a.dX, 2) + Math.pow(a.dY, 2));
      if (!a.hasDragged) a.hasDragged = a.type != 'image' && distance > 0 || distance > (hs.dragSensitivity || 5);

      if (a.hasDragged && e.clientX > 5 && e.clientY > 5) {
        if (!hs.fireEvent(exp, 'onDrag', a)) return false;
        if (a.type == 'resize') exp.resize(a);else {
          exp.moveTo(a.left + a.dX, a.top + a.dY);
          if (a.type == 'image') exp.content.style.cursor = 'move';
        }
      }

      return false;
    },
    wrapperMouseHandler: function wrapperMouseHandler(e) {
      try {
        if (!e) e = window.event;
        var over = /mouseover/i.test(e.type);
        if (!e.target) e.target = e.srcElement; // ie

        if (!e.relatedTarget) e.relatedTarget = over ? e.fromElement : e.toElement; // ie

        var exp = hs.getExpander(e.target);
        if (!exp.isExpanded) return;
        if (!exp || !e.relatedTarget || hs.getExpander(e.relatedTarget, true) == exp || hs.dragArgs) return;
        hs.fireEvent(exp, over ? 'onMouseOver' : 'onMouseOut', e);

        for (var i = 0; i < exp.overlays.length; i++) {
          (function () {
            var o = hs.$('hsId' + exp.overlays[i]);

            if (o && o.hideOnMouseOut) {
              if (over) hs.setStyles(o, {
                visibility: 'visible',
                display: ''
              });
              hs.animate(o, {
                opacity: over ? o.opacity : 0
              }, o.dur);
            }
          })();
        }
      } catch (e) {}
    },
    addEventListener: function addEventListener(el, event, func) {
      if (el == document && event == 'ready') {
        hs.push(hs.onReady, func);
      }

      try {
        el.addEventListener(event, func, false);
      } catch (e) {
        try {
          el.detachEvent('on' + event, func);
          el.attachEvent('on' + event, func);
        } catch (e) {
          el['on' + event] = func;
        }
      }
    },
    removeEventListener: function removeEventListener(el, event, func) {
      try {
        el.removeEventListener(event, func, false);
      } catch (e) {
        try {
          el.detachEvent('on' + event, func);
        } catch (e) {
          el['on' + event] = null;
        }
      }
    },
    preloadFullImage: function preloadFullImage(i) {
      if (hs.continuePreloading && hs.preloadTheseImages[i] && hs.preloadTheseImages[i] != 'undefined') {
        var img = document.createElement('img');

        img.onload = function () {
          img = null;
          hs.preloadFullImage(i + 1);
        };

        img.src = hs.preloadTheseImages[i];
      }
    },
    preloadImages: function preloadImages(number) {
      if (number && _typeof(number) != 'object') hs.numberOfImagesToPreload = number;
      var arr = hs.getAnchors();

      for (var i = 0; i < arr.images.length && i < hs.numberOfImagesToPreload; i++) {
        hs.push(hs.preloadTheseImages, hs.getSrc(arr.images[i]));
      } // preload outlines


      if (hs.outlineType) new hs.Outline(hs.outlineType, function () {
        hs.preloadFullImage(0);
      });else hs.preloadFullImage(0); // preload cursor

      if (hs.restoreCursor) var cur = hs.createElement('img', {
        src: hs.graphicsDir + hs.restoreCursor
      });
    },
    init: function init() {
      if (!hs.container) {
        hs.ieLt7 = hs.ie && hs.uaVersion < 7;
        hs.ieLt9 = hs.ie && hs.uaVersion < 9;
        hs.getPageSize();
        hs.ie6SSL = hs.ieLt7 && location.protocol == 'https:';

        for (var x in hs.langDefaults) {
          if (typeof hs[x] != 'undefined') hs.lang[x] = hs[x];else if (typeof hs.lang[x] == 'undefined' && typeof hs.langDefaults[x] != 'undefined') hs.lang[x] = hs.langDefaults[x];
        }

        hs.container = hs.createElement('div', {
          className: 'highslide-container'
        }, {
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          zIndex: hs.zIndexCounter,
          direction: 'ltr'
        }, document.body, true);
        hs.loading = hs.createElement('a', {
          className: 'highslide-loading',
          title: hs.lang.loadingTitle,
          innerHTML: hs.lang.loadingText,
          href: 'javascript:;'
        }, {
          position: 'absolute',
          top: '-9999px',
          opacity: hs.loadingOpacity,
          zIndex: 1
        }, hs.container);
        hs.garbageBin = hs.createElement('div', null, {
          display: 'none'
        }, hs.container);
        hs.viewport = hs.createElement('div', {
          className: 'highslide-viewport highslide-viewport-size'
        }, {
          visibility: hs.safari && hs.uaVersion < 525 ? 'visible' : 'hidden'
        }, hs.container, 1);
        hs.clearing = hs.createElement('div', null, {
          clear: 'both',
          paddingTop: '1px'
        }, null, true); // http://www.robertpenner.com/easing/ 

        Math.linearTween = function (t, b, c, d) {
          return c * t / d + b;
        };

        Math.easeInQuad = function (t, b, c, d) {
          return c * (t /= d) * t + b;
        };

        Math.easeOutQuad = function (t, b, c, d) {
          return -c * (t /= d) * (t - 2) + b;
        };

        hs.hideSelects = hs.ieLt7;
        hs.hideIframes = window.opera && hs.uaVersion < 9 || navigator.vendor == 'KDE' || hs.ieLt7 && hs.uaVersion < 5.5;
        hs.fireEvent(this, 'onActivate');
      }
    },
    ready: function ready() {
      if (hs.isReady) return;
      hs.isReady = true;

      for (var i = 0; i < hs.onReady.length; i++) {
        hs.onReady[i]();
      }
    },
    updateAnchors: function updateAnchors() {
      var el,
          els,
          all = [],
          images = [],
          htmls = [],
          groups = {},
          re;

      for (var i = 0; i < hs.openerTagNames.length; i++) {
        els = document.getElementsByTagName(hs.openerTagNames[i]);

        for (var j = 0; j < els.length; j++) {
          el = els[j];
          re = hs.isHsAnchor(el);

          if (re) {
            hs.push(all, el);
            if (re[0] == 'hs.expand') hs.push(images, el);else if (re[0] == 'hs.htmlExpand') hs.push(htmls, el);
            var g = hs.getParam(el, 'slideshowGroup') || 'none';
            if (!groups[g]) groups[g] = [];
            hs.push(groups[g], el);
          }
        }
      }

      hs.anchors = {
        all: all,
        groups: groups,
        images: images,
        htmls: htmls
      };
      return hs.anchors;
    },
    getAnchors: function getAnchors() {
      return hs.anchors || hs.updateAnchors();
    },
    close: function close(el) {
      var exp = hs.getExpander(el);
      if (exp) exp.close();
      return false;
    }
  }; // end hs object

  hs.fx = function (elem, options, prop) {
    this.options = options;
    this.elem = elem;
    this.prop = prop;
    if (!options.orig) options.orig = {};
  };

  hs.fx.prototype = {
    update: function update() {
      (hs.fx.step[this.prop] || hs.fx.step._default)(this);

      if (this.options.step) this.options.step.call(this.elem, this.now, this);
    },
    custom: function custom(from, to, unit) {
      this.startTime = new Date().getTime();
      this.start = from;
      this.end = to;
      this.unit = unit; // || this.unit || "px";

      this.now = this.start;
      this.pos = this.state = 0;
      var self = this;

      function t(gotoEnd) {
        return self.step(gotoEnd);
      }

      t.elem = this.elem;

      if (t() && hs.timers.push(t) == 1) {
        hs.timerId = setInterval(function () {
          var timers = hs.timers;

          for (var i = 0; i < timers.length; i++) {
            if (!timers[i]()) timers.splice(i--, 1);
          }

          if (!timers.length) {
            clearInterval(hs.timerId);
          }
        }, 13);
      }
    },
    step: function step(gotoEnd) {
      var t = new Date().getTime();

      if (gotoEnd || t >= this.options.duration + this.startTime) {
        this.now = this.end;
        this.pos = this.state = 1;
        this.update();
        this.options.curAnim[this.prop] = true;
        var done = true;

        for (var i in this.options.curAnim) {
          if (this.options.curAnim[i] !== true) done = false;
        }

        if (done) {
          if (this.options.complete) this.options.complete.call(this.elem);
        }

        return false;
      } else {
        var n = t - this.startTime;
        this.state = n / this.options.duration;
        this.pos = this.options.easing(n, 0, 1, this.options.duration);
        this.now = this.start + (this.end - this.start) * this.pos;
        this.update();
      }

      return true;
    }
  };
  hs.extend(hs.fx, {
    step: {
      opacity: function opacity(fx) {
        hs.setStyles(fx.elem, {
          opacity: fx.now
        });
      },
      _default: function _default(fx) {
        try {
          if (fx.elem.style && fx.elem.style[fx.prop] != null) fx.elem.style[fx.prop] = fx.now + fx.unit;else fx.elem[fx.prop] = fx.now;
        } catch (e) {}
      }
    }
  });

  hs.Outline = function (outlineType, onLoad) {
    this.onLoad = onLoad;
    this.outlineType = outlineType;
    var v = hs.uaVersion,
        tr;
    this.hasAlphaImageLoader = hs.ie && hs.uaVersion < 7;

    if (!outlineType) {
      if (onLoad) onLoad();
      return;
    }

    hs.init();
    this.table = hs.createElement('table', {
      cellSpacing: 0
    }, {
      visibility: 'hidden',
      position: 'absolute',
      borderCollapse: 'collapse',
      width: 0
    }, hs.container, true);
    var tbody = hs.createElement('tbody', null, null, this.table, 1);
    this.td = [];

    for (var i = 0; i <= 8; i++) {
      if (i % 3 == 0) tr = hs.createElement('tr', null, {
        height: 'auto'
      }, tbody, true);
      this.td[i] = hs.createElement('td', null, null, tr, true);
      var style = i != 4 ? {
        lineHeight: 0,
        fontSize: 0
      } : {
        position: 'relative'
      };
      hs.setStyles(this.td[i], style);
    }

    this.td[4].className = outlineType + ' highslide-outline';
    this.preloadGraphic();
  };

  hs.Outline.prototype = {
    preloadGraphic: function preloadGraphic() {
      var src = hs.graphicsDir + (hs.outlinesDir || "outlines/") + this.outlineType + ".png";
      var appendTo = hs.safari && hs.uaVersion < 525 ? hs.container : null;
      this.graphic = hs.createElement('img', null, {
        position: 'absolute',
        top: '-9999px'
      }, appendTo, true); // for onload trigger

      var pThis = this;

      this.graphic.onload = function () {
        pThis.onGraphicLoad();
      };

      this.graphic.src = src;
    },
    onGraphicLoad: function onGraphicLoad() {
      var o = this.offset = this.graphic.width / 4,
          pos = [[0, 0], [0, -4], [-2, 0], [0, -8], 0, [-2, -8], [0, -2], [0, -6], [-2, -2]],
          dim = {
        height: 2 * o + 'px',
        width: 2 * o + 'px'
      };

      for (var i = 0; i <= 8; i++) {
        if (pos[i]) {
          if (this.hasAlphaImageLoader) {
            var w = i == 1 || i == 7 ? '100%' : this.graphic.width + 'px';
            var div = hs.createElement('div', null, {
              width: '100%',
              height: '100%',
              position: 'relative',
              overflow: 'hidden'
            }, this.td[i], true);
            hs.createElement('div', null, {
              filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale, src='" + this.graphic.src + "')",
              position: 'absolute',
              width: w,
              height: this.graphic.height + 'px',
              left: pos[i][0] * o + 'px',
              top: pos[i][1] * o + 'px'
            }, div, true);
          } else {
            hs.setStyles(this.td[i], {
              background: 'url(' + this.graphic.src + ') ' + pos[i][0] * o + 'px ' + pos[i][1] * o + 'px'
            });
          }

          if (window.opera && (i == 3 || i == 5)) hs.createElement('div', null, dim, this.td[i], true);
          hs.setStyles(this.td[i], dim);
        }
      }

      this.graphic = null;
      if (hs.pendingOutlines[this.outlineType]) hs.pendingOutlines[this.outlineType].destroy();
      hs.pendingOutlines[this.outlineType] = this;
      if (this.onLoad) this.onLoad();
    },
    setPosition: function setPosition(pos, offset, vis, dur, easing) {
      var exp = this.exp,
          stl = exp.wrapper.style,
          offset = offset || 0,
          pos = pos || {
        x: exp.x.pos + offset,
        y: exp.y.pos + offset,
        w: exp.x.get('wsize') - 2 * offset,
        h: exp.y.get('wsize') - 2 * offset
      };
      if (vis) this.table.style.visibility = pos.h >= 4 * this.offset ? 'visible' : 'hidden';
      hs.setStyles(this.table, {
        left: pos.x - this.offset + 'px',
        top: pos.y - this.offset + 'px',
        width: pos.w + 2 * this.offset + 'px'
      });
      pos.w -= 2 * this.offset;
      pos.h -= 2 * this.offset;
      hs.setStyles(this.td[4], {
        width: pos.w >= 0 ? pos.w + 'px' : 0,
        height: pos.h >= 0 ? pos.h + 'px' : 0
      });
      if (this.hasAlphaImageLoader) this.td[3].style.height = this.td[5].style.height = this.td[4].style.height;
    },
    destroy: function destroy(hide) {
      if (hide) this.table.style.visibility = 'hidden';else hs.discardElement(this.table);
    }
  };

  hs.Dimension = function (exp, dim) {
    this.exp = exp;
    this.dim = dim;
    this.ucwh = dim == 'x' ? 'Width' : 'Height';
    this.wh = this.ucwh.toLowerCase();
    this.uclt = dim == 'x' ? 'Left' : 'Top';
    this.lt = this.uclt.toLowerCase();
    this.ucrb = dim == 'x' ? 'Right' : 'Bottom';
    this.rb = this.ucrb.toLowerCase();
    this.p1 = this.p2 = 0;
  };

  hs.Dimension.prototype = {
    get: function get(key) {
      switch (key) {
        case 'loadingPos':
          return this.tpos + this.tb + (this.t - hs.loading['offset' + this.ucwh]) / 2;

        case 'loadingPosXfade':
          return this.pos + this.cb + this.p1 + (this.size - hs.loading['offset' + this.ucwh]) / 2;

        case 'wsize':
          return this.size + 2 * this.cb + this.p1 + this.p2;

        case 'fitsize':
          return this.clientSize - this.marginMin - this.marginMax;

        case 'maxsize':
          return this.get('fitsize') - 2 * this.cb - this.p1 - this.p2;

        case 'opos':
          return this.pos - (this.exp.outline ? this.exp.outline.offset : 0);

        case 'osize':
          return this.get('wsize') + (this.exp.outline ? 2 * this.exp.outline.offset : 0);

        case 'imgPad':
          return this.imgSize ? Math.round((this.size - this.imgSize) / 2) : 0;
      }
    },
    calcBorders: function calcBorders() {
      // correct for borders
      this.cb = (this.exp.content['offset' + this.ucwh] - this.t) / 2;
      this.marginMax = hs['margin' + this.ucrb];
    },
    calcThumb: function calcThumb() {
      this.t = this.exp.el[this.wh] ? parseInt(this.exp.el[this.wh]) : this.exp.el['offset' + this.ucwh];
      this.tpos = this.exp.tpos[this.dim];
      this.tb = (this.exp.el['offset' + this.ucwh] - this.t) / 2;

      if (this.tpos == 0 || this.tpos == -1) {
        this.tpos = hs.page[this.wh] / 2 + hs.page['scroll' + this.uclt];
      }

      ;
    },
    calcExpanded: function calcExpanded() {
      var exp = this.exp;
      this.justify = 'auto'; // get alignment

      if (exp.align == 'center') this.justify = 'center';else if (new RegExp(this.lt).test(exp.anchor)) this.justify = null;else if (new RegExp(this.rb).test(exp.anchor)) this.justify = 'max'; // size and position

      this.pos = this.tpos - this.cb + this.tb;
      if (this.maxHeight && this.dim == 'x') exp.maxWidth = Math.min(exp.maxWidth || this.full, exp.maxHeight * this.full / exp.y.full);
      this.size = Math.min(this.full, exp['max' + this.ucwh] || this.full);
      this.minSize = exp.allowSizeReduction ? Math.min(exp['min' + this.ucwh], this.full) : this.full;

      if (exp.isImage && exp.useBox) {
        this.size = exp[this.wh];
        this.imgSize = this.full;
      }

      if (this.dim == 'x' && hs.padToMinWidth) this.minSize = exp.minWidth;
      this.target = exp['target' + this.dim.toUpperCase()];
      this.marginMin = hs['margin' + this.uclt];
      this.scroll = hs.page['scroll' + this.uclt];
      this.clientSize = hs.page[this.wh];
    },
    setSize: function setSize(i) {
      var exp = this.exp;

      if (exp.isImage && (exp.useBox || hs.padToMinWidth)) {
        this.imgSize = i;
        this.size = Math.max(this.size, this.imgSize);
        exp.content.style[this.lt] = this.get('imgPad') + 'px';
      } else this.size = i;

      exp.content.style[this.wh] = i + 'px';
      exp.wrapper.style[this.wh] = this.get('wsize') + 'px';
      if (exp.outline) exp.outline.setPosition();
      if (exp.releaseMask) exp.releaseMask.style[this.wh] = i + 'px';
      if (this.dim == 'y' && exp.iDoc && exp.body.style.height != 'auto') try {
        exp.iDoc.body.style.overflow = 'auto';
      } catch (e) {}

      if (exp.isHtml) {
        var d = exp.scrollerDiv;
        if (this.sizeDiff === undefined) this.sizeDiff = exp.innerContent['offset' + this.ucwh] - d['offset' + this.ucwh];
        d.style[this.wh] = this.size - this.sizeDiff + 'px';
        if (this.dim == 'x') exp.mediumContent.style.width = 'auto';
        if (exp.body) exp.body.style[this.wh] = 'auto';
      }

      if (this.dim == 'x' && exp.overlayBox) exp.sizeOverlayBox(true);

      if (this.dim == 'x' && exp.slideshow && exp.isImage) {
        if (i == this.full) exp.slideshow.disable('full-expand');else exp.slideshow.enable('full-expand');
      }
    },
    setPos: function setPos(i) {
      this.pos = i;
      this.exp.wrapper.style[this.lt] = i + 'px';
      if (this.exp.outline) this.exp.outline.setPosition();
    }
  };

  hs.Expander = function (a, params, custom, contentType) {
    if (document.readyState && hs.ie && !hs.isReady) {
      hs.addEventListener(document, 'ready', function () {
        new hs.Expander(a, params, custom, contentType);
      });
      return;
    }

    this.a = a;
    this.custom = custom;
    this.contentType = contentType || 'image';
    this.isHtml = contentType == 'html';
    this.isImage = !this.isHtml;
    hs.continuePreloading = false;
    this.overlays = [];
    this.last = hs.last;
    hs.last = null;
    hs.init();
    var key = this.key = hs.expanders.length; // override inline parameters

    for (var i = 0; i < hs.overrides.length; i++) {
      var name = hs.overrides[i];
      this[name] = params && typeof params[name] != 'undefined' ? params[name] : hs[name];
    }

    if (!this.src) this.src = a.href; // get thumb

    var el = params && params.thumbnailId ? hs.$(params.thumbnailId) : a;
    el = this.thumb = el.getElementsByTagName('img')[0] || el;
    this.thumbsUserSetId = el.id || a.id;
    if (!hs.fireEvent(this, 'onInit')) return true; // check if already open

    for (var i = 0; i < hs.expanders.length; i++) {
      if (hs.expanders[i] && hs.expanders[i].a == a && !(this.last && this.transitions[1] == 'crossfade')) {
        hs.expanders[i].focus();
        return false;
      }
    } // cancel other


    if (!hs.allowSimultaneousLoading) for (var i = 0; i < hs.expanders.length; i++) {
      if (hs.expanders[i] && hs.expanders[i].thumb != el && !hs.expanders[i].onLoadStarted) {
        hs.expanders[i].cancelLoading();
      }
    }
    hs.expanders[key] = this;

    if (!hs.allowMultipleInstances && !hs.upcoming) {
      if (hs.expanders[key - 1]) hs.expanders[key - 1].close();
      if (typeof hs.focusKey != 'undefined' && hs.expanders[hs.focusKey]) hs.expanders[hs.focusKey].close();
    } // initiate metrics


    this.el = el;
    this.tpos = this.pageOrigin || hs.getPosition(el);
    hs.getPageSize();
    var x = this.x = new hs.Dimension(this, 'x');
    x.calcThumb();
    var y = this.y = new hs.Dimension(this, 'y');
    y.calcThumb();
    if (/area/i.test(el.tagName)) this.getImageMapAreaCorrection(el);
    this.wrapper = hs.createElement('div', {
      id: 'highslide-wrapper-' + this.key,
      className: 'highslide-wrapper ' + this.wrapperClassName
    }, {
      visibility: 'hidden',
      position: 'absolute',
      zIndex: hs.zIndexCounter += 2
    }, null, true);
    this.wrapper.onmouseover = this.wrapper.onmouseout = hs.wrapperMouseHandler;
    if (this.contentType == 'image' && this.outlineWhileAnimating == 2) this.outlineWhileAnimating = 0; // get the outline

    if (!this.outlineType || this.last && this.isImage && this.transitions[1] == 'crossfade') {
      this[this.contentType + 'Create']();
    } else if (hs.pendingOutlines[this.outlineType]) {
      this.connectOutline();
      this[this.contentType + 'Create']();
    } else {
      this.showLoading();
      var exp = this;
      new hs.Outline(this.outlineType, function () {
        exp.connectOutline();
        exp[exp.contentType + 'Create']();
      });
    }

    return true;
  };

  hs.Expander.prototype = {
    error: function error(e) {
      if (hs.debug) alert('Line ' + e.lineNumber + ': ' + e.message);else window.location.href = this.src;
    },
    connectOutline: function connectOutline() {
      var outline = this.outline = hs.pendingOutlines[this.outlineType];
      outline.exp = this;
      outline.table.style.zIndex = this.wrapper.style.zIndex - 1;
      hs.pendingOutlines[this.outlineType] = null;
    },
    showLoading: function showLoading() {
      if (this.onLoadStarted || this.loading) return;
      this.loading = hs.loading;
      var exp = this;

      this.loading.onclick = function () {
        exp.cancelLoading();
      };

      if (!hs.fireEvent(this, 'onShowLoading')) return;
      var exp = this,
          l = this.x.get('loadingPos') + 'px',
          t = this.y.get('loadingPos') + 'px';
      if (!tgt && this.last && this.transitions[1] == 'crossfade') var tgt = this.last;

      if (tgt) {
        l = tgt.x.get('loadingPosXfade') + 'px';
        t = tgt.y.get('loadingPosXfade') + 'px';
        this.loading.style.zIndex = hs.zIndexCounter++;
      }

      setTimeout(function () {
        if (exp.loading) hs.setStyles(exp.loading, {
          left: l,
          top: t,
          zIndex: hs.zIndexCounter++
        });
      }, 100);
    },
    imageCreate: function imageCreate() {
      var exp = this;
      var img = document.createElement('img');
      this.content = img;

      img.onload = function () {
        if (hs.expanders[exp.key]) exp.contentLoaded();
      };

      if (hs.blockRightClick) img.oncontextmenu = function () {
        return false;
      };
      img.className = 'highslide-image';
      hs.setStyles(img, {
        visibility: 'hidden',
        display: 'block',
        position: 'absolute',
        maxWidth: '9999px',
        zIndex: 3
      });
      img.title = hs.lang.restoreTitle;
      if (hs.safari && hs.uaVersion < 525) hs.container.appendChild(img);
      if (hs.ie && hs.flushImgSize) img.src = null;
      img.src = this.src;
      this.showLoading();
    },
    htmlCreate: function htmlCreate() {
      if (!hs.fireEvent(this, 'onBeforeGetContent')) return;
      this.content = hs.getCacheBinding(this.a);
      if (!this.content) this.content = hs.getNode(this.contentId);
      if (!this.content) this.content = hs.getSelfRendered();
      this.getInline(['maincontent']);

      if (this.maincontent) {
        var body = hs.getElementByClass(this.content, 'div', 'highslide-body');
        if (body) body.appendChild(this.maincontent);
        this.maincontent.style.display = 'block';
      }

      hs.fireEvent(this, 'onAfterGetContent');
      var innerContent = this.innerContent = this.content;
      if (/(swf|iframe)/.test(this.objectType)) this.setObjContainerSize(innerContent); // the content tree

      hs.container.appendChild(this.wrapper);
      hs.setStyles(this.wrapper, {
        position: 'static',
        padding: '0 ' + hs.marginRight + 'px 0 ' + hs.marginLeft + 'px'
      });
      this.content = hs.createElement('div', {
        className: 'highslide-html'
      }, {
        position: 'relative',
        zIndex: 3,
        height: 0,
        overflow: 'hidden'
      }, this.wrapper);
      this.mediumContent = hs.createElement('div', null, null, this.content, 1);
      this.mediumContent.appendChild(innerContent);
      hs.setStyles(innerContent, {
        position: 'relative',
        display: 'block',
        direction: hs.lang.cssDirection || ''
      });
      if (this.width) innerContent.style.width = this.width + 'px';
      if (this.height) hs.setStyles(innerContent, {
        height: this.height + 'px',
        overflow: 'hidden'
      });
      if (innerContent.offsetWidth < this.minWidth) innerContent.style.width = this.minWidth + 'px';

      if (this.objectType == 'ajax' && !hs.getCacheBinding(this.a)) {
        this.showLoading();
        var exp = this;
        var ajax = new hs.Ajax(this.a, innerContent);
        ajax.src = this.src;

        ajax.onLoad = function () {
          if (hs.expanders[exp.key]) exp.contentLoaded();
        };

        ajax.onError = function () {
          location.href = exp.src;
        };

        ajax.run();
      } else if (this.objectType == 'iframe' && this.objectLoadTime == 'before') {
        this.writeExtendedContent();
      } else this.contentLoaded();
    },
    contentLoaded: function contentLoaded() {
      try {
        if (!this.content) return;
        this.content.onload = null;
        if (this.onLoadStarted) return;else this.onLoadStarted = true;
        var x = this.x,
            y = this.y;

        if (this.loading) {
          hs.setStyles(this.loading, {
            top: '-9999px'
          });
          this.loading = null;
          hs.fireEvent(this, 'onHideLoading');
        }

        if (this.isImage) {
          x.full = this.content.width;
          y.full = this.content.height;
          hs.setStyles(this.content, {
            width: x.t + 'px',
            height: y.t + 'px'
          });
          this.wrapper.appendChild(this.content);
          hs.container.appendChild(this.wrapper);
        } else if (this.htmlGetSize) this.htmlGetSize();

        x.calcBorders();
        y.calcBorders();
        hs.setStyles(this.wrapper, {
          left: x.tpos + x.tb - x.cb + 'px',
          top: y.tpos + x.tb - y.cb + 'px'
        });
        this.initSlideshow();
        this.getOverlays();
        var ratio = x.full / y.full;
        x.calcExpanded();
        this.justify(x);
        y.calcExpanded();
        this.justify(y);
        if (this.isHtml) this.htmlSizeOperations();
        if (this.overlayBox) this.sizeOverlayBox(0, 1);

        if (this.allowSizeReduction) {
          if (this.isImage) this.correctRatio(ratio);else this.fitOverlayBox();
          var ss = this.slideshow;

          if (ss && this.last && ss.controls && ss.fixedControls) {
            var pos = ss.overlayOptions.position || '',
                p;

            for (var dim in hs.oPos) {
              for (var i = 0; i < 5; i++) {
                p = this[dim];

                if (pos.match(hs.oPos[dim][i])) {
                  p.pos = this.last[dim].pos + (this.last[dim].p1 - p.p1) + (this.last[dim].size - p.size) * [0, 0, .5, 1, 1][i];

                  if (ss.fixedControls == 'fit') {
                    if (p.pos + p.size + p.p1 + p.p2 > p.scroll + p.clientSize - p.marginMax) p.pos = p.scroll + p.clientSize - p.size - p.marginMin - p.marginMax - p.p1 - p.p2;
                    if (p.pos < p.scroll + p.marginMin) p.pos = p.scroll + p.marginMin;
                  }
                }
              }
            }
          }

          if (this.isImage && this.x.full > (this.x.imgSize || this.x.size)) {
            this.createFullExpand();
            if (this.overlays.length == 1) this.sizeOverlayBox();
          }
        }

        this.show();
      } catch (e) {
        this.error(e);
      }
    },
    setObjContainerSize: function setObjContainerSize(parent, auto) {
      var c = hs.getElementByClass(parent, 'DIV', 'highslide-body');

      if (/(iframe|swf)/.test(this.objectType)) {
        if (this.objectWidth) c.style.width = this.objectWidth + 'px';
        if (this.objectHeight) c.style.height = this.objectHeight + 'px';
      }
    },
    writeExtendedContent: function writeExtendedContent() {
      if (this.hasExtendedContent) return;
      var exp = this;
      this.body = hs.getElementByClass(this.innerContent, 'DIV', 'highslide-body');

      if (this.objectType == 'iframe') {
        this.showLoading();
        var ruler = hs.clearing.cloneNode(1);
        this.body.appendChild(ruler);
        this.newWidth = this.innerContent.offsetWidth;
        if (!this.objectWidth) this.objectWidth = ruler.offsetWidth;
        var hDiff = this.innerContent.offsetHeight - this.body.offsetHeight,
            h = this.objectHeight || hs.page.height - hDiff - hs.marginTop - hs.marginBottom,
            onload = this.objectLoadTime == 'before' ? ' onload="if (hs.expanders[' + this.key + ']) hs.expanders[' + this.key + '].contentLoaded()" ' : '';
        this.body.innerHTML += '<iframe name="hs' + new Date().getTime() + '" frameborder="0" key="' + this.key + '" ' + ' style="width:' + this.objectWidth + 'px; height:' + h + 'px" ' + onload + ' src="' + this.src + '" allowfullscreen></iframe>';
        this.ruler = this.body.getElementsByTagName('div')[0];
        this.iframe = this.body.getElementsByTagName('iframe')[0];
        if (this.objectLoadTime == 'after') this.correctIframeSize();
      }

      if (this.objectType == 'swf') {
        this.body.id = this.body.id || 'hs-flash-id-' + this.key;
        var a = this.swfOptions;
        if (!a.params) a.params = {};
        if (typeof a.params.wmode == 'undefined') a.params.wmode = 'transparent';
        if (swfobject) swfobject.embedSWF(this.src, this.body.id, this.objectWidth, this.objectHeight, a.version || '7', a.expressInstallSwfurl, a.flashvars, a.params, a.attributes);
      }

      this.hasExtendedContent = true;
    },
    htmlGetSize: function htmlGetSize() {
      if (this.iframe && !this.objectHeight) {
        // loadtime before
        this.iframe.style.height = this.body.style.height = this.getIframePageHeight() + 'px';
      }

      this.innerContent.appendChild(hs.clearing);
      if (!this.x.full) this.x.full = this.innerContent.offsetWidth;
      this.y.full = this.innerContent.offsetHeight;
      this.innerContent.removeChild(hs.clearing);

      if (hs.ie && this.newHeight > parseInt(this.innerContent.currentStyle.height)) {
        // ie css bug
        this.newHeight = parseInt(this.innerContent.currentStyle.height);
      }

      hs.setStyles(this.wrapper, {
        position: 'absolute',
        padding: '0'
      });
      hs.setStyles(this.content, {
        width: this.x.t + 'px',
        height: this.y.t + 'px'
      });
    },
    getIframePageHeight: function getIframePageHeight() {
      var h;

      try {
        var doc = this.iDoc = this.iframe.contentDocument || this.iframe.contentWindow.document;
        var clearing = doc.createElement('div');
        clearing.style.clear = 'both';
        doc.body.appendChild(clearing);
        h = clearing.offsetTop;
        if (hs.ie) h += parseInt(doc.body.currentStyle.marginTop) + parseInt(doc.body.currentStyle.marginBottom) - 1;
      } catch (e) {
        // other domain
        h = 300;
      }

      return h;
    },
    correctIframeSize: function correctIframeSize() {
      var wDiff = this.innerContent.offsetWidth - this.ruler.offsetWidth;
      hs.discardElement(this.ruler);
      if (wDiff < 0) wDiff = 0;
      var hDiff = this.innerContent.offsetHeight - this.iframe.offsetHeight;
      if (this.iDoc && !this.objectHeight && !this.height && this.y.size == this.y.full) try {
        this.iDoc.body.style.overflow = 'hidden';
      } catch (e) {}
      hs.setStyles(this.iframe, {
        width: Math.abs(this.x.size - wDiff) + 'px',
        height: Math.abs(this.y.size - hDiff) + 'px'
      });
      hs.setStyles(this.body, {
        width: this.iframe.style.width,
        height: this.iframe.style.height
      });
      this.scrollingContent = this.iframe;
      this.scrollerDiv = this.scrollingContent;
    },
    htmlSizeOperations: function htmlSizeOperations() {
      this.setObjContainerSize(this.innerContent);
      if (this.objectType == 'swf' && this.objectLoadTime == 'before') this.writeExtendedContent(); // handle minimum size

      if (this.x.size < this.x.full && !this.allowWidthReduction) this.x.size = this.x.full;
      if (this.y.size < this.y.full && !this.allowHeightReduction) this.y.size = this.y.full;
      this.scrollerDiv = this.innerContent;
      hs.setStyles(this.mediumContent, {
        position: 'relative',
        width: this.x.size + 'px'
      });
      hs.setStyles(this.innerContent, {
        border: 'none',
        width: 'auto',
        height: 'auto'
      });
      var node = hs.getElementByClass(this.innerContent, 'DIV', 'highslide-body');

      if (node && !/(iframe|swf)/.test(this.objectType)) {
        var cNode = node; // wrap to get true size

        node = hs.createElement(cNode.nodeName, null, {
          overflow: 'hidden'
        }, null, true);
        cNode.parentNode.insertBefore(node, cNode);
        node.appendChild(hs.clearing); // IE6

        node.appendChild(cNode);
        var wDiff = this.innerContent.offsetWidth - node.offsetWidth;
        var hDiff = this.innerContent.offsetHeight - node.offsetHeight;
        node.removeChild(hs.clearing);
        var kdeBugCorr = hs.safari || navigator.vendor == 'KDE' ? 1 : 0; // KDE repainting bug

        hs.setStyles(node, {
          width: this.x.size - wDiff - kdeBugCorr + 'px',
          height: this.y.size - hDiff + 'px',
          overflow: 'auto',
          position: 'relative'
        });

        if (kdeBugCorr && cNode.offsetHeight > node.offsetHeight) {
          node.style.width = parseInt(node.style.width) + kdeBugCorr + 'px';
        }

        this.scrollingContent = node;
        this.scrollerDiv = this.scrollingContent;
      }

      if (this.iframe && this.objectLoadTime == 'before') this.correctIframeSize();
      if (!this.scrollingContent && this.y.size < this.mediumContent.offsetHeight) this.scrollerDiv = this.content;

      if (this.scrollerDiv == this.content && !this.allowWidthReduction && !/(iframe|swf)/.test(this.objectType)) {
        this.x.size += 17; // room for scrollbars
      }

      if (this.scrollerDiv && this.scrollerDiv.offsetHeight > this.scrollerDiv.parentNode.offsetHeight) {
        setTimeout("try { hs.expanders[" + this.key + "].scrollerDiv.style.overflow = 'auto'; } catch(e) {}", hs.expandDuration);
      }
    },
    getImageMapAreaCorrection: function getImageMapAreaCorrection(area) {
      var c = area.coords.split(',');

      for (var i = 0; i < c.length; i++) {
        c[i] = parseInt(c[i]);
      }

      if (area.shape.toLowerCase() == 'circle') {
        this.x.tpos += c[0] - c[2];
        this.y.tpos += c[1] - c[2];
        this.x.t = this.y.t = 2 * c[2];
      } else {
        var maxX,
            maxY,
            minX = maxX = c[0],
            minY = maxY = c[1];

        for (var i = 0; i < c.length; i++) {
          if (i % 2 == 0) {
            minX = Math.min(minX, c[i]);
            maxX = Math.max(maxX, c[i]);
          } else {
            minY = Math.min(minY, c[i]);
            maxY = Math.max(maxY, c[i]);
          }
        }

        this.x.tpos += minX;
        this.x.t = maxX - minX;
        this.y.tpos += minY;
        this.y.t = maxY - minY;
      }
    },
    justify: function justify(p, moveOnly) {
      var tgtArr,
          tgt = p.target,
          dim = p == this.x ? 'x' : 'y';

      if (tgt && tgt.match(/ /)) {
        tgtArr = tgt.split(' ');
        tgt = tgtArr[0];
      }

      if (tgt && hs.$(tgt)) {
        p.pos = hs.getPosition(hs.$(tgt))[dim];
        if (tgtArr && tgtArr[1] && tgtArr[1].match(/^[-]?[0-9]+px$/)) p.pos += parseInt(tgtArr[1]);
        if (p.size < p.minSize) p.size = p.minSize;
      } else if (p.justify == 'auto' || p.justify == 'center') {
        var hasMovedMin = false;
        var allowReduce = p.exp.allowSizeReduction;
        if (p.justify == 'center') p.pos = Math.round(p.scroll + (p.clientSize + p.marginMin - p.marginMax - p.get('wsize')) / 2);else p.pos = Math.round(p.pos - (p.get('wsize') - p.t) / 2);

        if (p.pos < p.scroll + p.marginMin) {
          p.pos = p.scroll + p.marginMin;
          hasMovedMin = true;
        }

        if (!moveOnly && p.size < p.minSize) {
          p.size = p.minSize;
          allowReduce = false;
        }

        if (p.pos + p.get('wsize') > p.scroll + p.clientSize - p.marginMax) {
          if (!moveOnly && hasMovedMin && allowReduce) {
            p.size = Math.min(p.size, p.get(dim == 'y' ? 'fitsize' : 'maxsize'));
          } else if (p.get('wsize') < p.get('fitsize')) {
            p.pos = p.scroll + p.clientSize - p.marginMax - p.get('wsize');
          } else {
            // image larger than viewport
            p.pos = p.scroll + p.marginMin;
            if (!moveOnly && allowReduce) p.size = p.get(dim == 'y' ? 'fitsize' : 'maxsize');
          }
        }

        if (!moveOnly && p.size < p.minSize) {
          p.size = p.minSize;
          allowReduce = false;
        }
      } else if (p.justify == 'max') {
        p.pos = Math.floor(p.pos - p.size + p.t);
      }

      if (p.pos < p.marginMin) {
        var tmpMin = p.pos;
        p.pos = p.marginMin;
        if (allowReduce && !moveOnly) p.size = p.size - (p.pos - tmpMin);
      }
    },
    correctRatio: function correctRatio(ratio) {
      var x = this.x,
          y = this.y,
          changed = false,
          xSize = Math.min(x.full, x.size),
          ySize = Math.min(y.full, y.size),
          useBox = this.useBox || hs.padToMinWidth;

      if (xSize / ySize > ratio) {
        // width greater
        xSize = ySize * ratio;

        if (xSize < x.minSize) {
          // below minWidth
          xSize = x.minSize;
          ySize = xSize / ratio;
        }

        changed = true;
      } else if (xSize / ySize < ratio) {
        // height greater
        ySize = xSize / ratio;
        changed = true;
      }

      if (hs.padToMinWidth && x.full < x.minSize) {
        x.imgSize = x.full;
        y.size = y.imgSize = y.full;
      } else if (this.useBox) {
        x.imgSize = xSize;
        y.imgSize = ySize;
      } else {
        x.size = xSize;
        y.size = ySize;
      }

      changed = this.fitOverlayBox(this.useBox ? null : ratio, changed);

      if (useBox && y.size < y.imgSize) {
        y.imgSize = y.size;
        x.imgSize = y.size * ratio;
      }

      if (changed || useBox) {
        x.pos = x.tpos - x.cb + x.tb;
        x.minSize = x.size;
        this.justify(x, true);
        y.pos = y.tpos - y.cb + y.tb;
        y.minSize = y.size;
        this.justify(y, true);
        if (this.overlayBox) this.sizeOverlayBox();
      }
    },
    fitOverlayBox: function fitOverlayBox(ratio, changed) {
      var x = this.x,
          y = this.y;

      if (this.overlayBox && (this.isImage || this.allowHeightReduction)) {
        while (y.size > this.minHeight && x.size > this.minWidth && y.get('wsize') > y.get('fitsize')) {
          y.size -= 10;
          if (ratio) x.size = y.size * ratio;
          this.sizeOverlayBox(0, 1);
          changed = true;
        }
      }

      return changed;
    },
    reflow: function reflow() {
      if (this.scrollerDiv) {
        var h = /iframe/i.test(this.scrollerDiv.tagName) ? this.getIframePageHeight() + 1 + 'px' : 'auto';
        if (this.body) this.body.style.height = h;
        this.scrollerDiv.style.height = h;
        this.y.setSize(this.innerContent.offsetHeight);
      }
    },
    show: function show() {
      var x = this.x,
          y = this.y;
      this.doShowHide('hidden');
      hs.fireEvent(this, 'onBeforeExpand');
      if (this.slideshow && this.slideshow.thumbstrip) this.slideshow.thumbstrip.selectThumb(); // Apply size change

      this.changeSize(1, {
        wrapper: {
          width: x.get('wsize'),
          height: y.get('wsize'),
          left: x.pos,
          top: y.pos
        },
        content: {
          left: x.p1 + x.get('imgPad'),
          top: y.p1 + y.get('imgPad'),
          width: x.imgSize || x.size,
          height: y.imgSize || y.size
        }
      }, hs.expandDuration);
    },
    changeSize: function changeSize(up, to, dur) {
      // transition
      var trans = this.transitions,
          other = up ? this.last ? this.last.a : null : hs.upcoming,
          t = trans[1] && other && hs.getParam(other, 'transitions')[1] == trans[1] ? trans[1] : trans[0];

      if (this[t] && t != 'expand') {
        this[t](up, to);
        return;
      }

      if (this.outline && !this.outlineWhileAnimating) {
        if (up) this.outline.setPosition();else this.outline.destroy(this.isHtml && this.preserveContent);
      }

      if (!up) this.destroyOverlays();
      var exp = this,
          x = exp.x,
          y = exp.y,
          easing = this.easing;
      if (!up) easing = this.easingClose || easing;
      var after = up ? function () {
        if (exp.outline) exp.outline.table.style.visibility = "visible";
        setTimeout(function () {
          exp.afterExpand();
        }, 50);
      } : function () {
        exp.afterClose();
      };
      if (up) hs.setStyles(this.wrapper, {
        width: x.t + 'px',
        height: y.t + 'px'
      });

      if (up && this.isHtml) {
        hs.setStyles(this.wrapper, {
          left: x.tpos - x.cb + x.tb + 'px',
          top: y.tpos - y.cb + y.tb + 'px'
        });
      }

      if (this.fadeInOut) {
        hs.setStyles(this.wrapper, {
          opacity: up ? 0 : 1
        });
        hs.extend(to.wrapper, {
          opacity: up
        });
      }

      hs.animate(this.wrapper, to.wrapper, {
        duration: dur,
        easing: easing,
        step: function step(val, args) {
          if (exp.outline && exp.outlineWhileAnimating && args.prop == 'top') {
            var fac = up ? args.pos : 1 - args.pos;
            var pos = {
              w: x.t + (x.get('wsize') - x.t) * fac,
              h: y.t + (y.get('wsize') - y.t) * fac,
              x: x.tpos + (x.pos - x.tpos) * fac,
              y: y.tpos + (y.pos - y.tpos) * fac
            };
            exp.outline.setPosition(pos, 0, 1);
          }

          if (exp.isHtml) {
            if (args.prop == 'left') exp.mediumContent.style.left = x.pos - val + 'px';
            if (args.prop == 'top') exp.mediumContent.style.top = y.pos - val + 'px';
          }
        }
      });
      hs.animate(this.content, to.content, dur, easing, after);

      if (up) {
        this.wrapper.style.visibility = 'visible';
        this.content.style.visibility = 'visible';
        if (this.isHtml) this.innerContent.style.visibility = 'visible';
        this.a.className += ' highslide-active-anchor';
      }
    },
    fade: function fade(up, to) {
      this.outlineWhileAnimating = false;
      var exp = this,
          t = up ? hs.expandDuration : 0;

      if (up) {
        hs.animate(this.wrapper, to.wrapper, 0);
        hs.setStyles(this.wrapper, {
          opacity: 0,
          visibility: 'visible'
        });
        hs.animate(this.content, to.content, 0);
        this.content.style.visibility = 'visible';
        hs.animate(this.wrapper, {
          opacity: 1
        }, t, null, function () {
          exp.afterExpand();
        });
      }

      if (this.outline) {
        this.outline.table.style.zIndex = this.wrapper.style.zIndex;
        var dir = up || -1,
            offset = this.outline.offset,
            startOff = up ? 3 : offset,
            endOff = up ? offset : 3;

        for (var i = startOff; dir * i <= dir * endOff; i += dir, t += 25) {
          (function () {
            var o = up ? endOff - i : startOff - i;
            setTimeout(function () {
              exp.outline.setPosition(0, o, 1);
            }, t);
          })();
        }
      }

      if (up) {} //setTimeout(function() { exp.afterExpand(); }, t+50);
      else {
          setTimeout(function () {
            if (exp.outline) exp.outline.destroy(exp.preserveContent);
            exp.destroyOverlays();
            hs.animate(exp.wrapper, {
              opacity: 0
            }, hs.restoreDuration, null, function () {
              exp.afterClose();
            });
          }, t);
        }
    },
    crossfade: function crossfade(up, to, from) {
      if (!up) return;
      var exp = this,
          last = this.last,
          x = this.x,
          y = this.y,
          lastX = last.x,
          lastY = last.y,
          wrapper = this.wrapper,
          content = this.content,
          overlayBox = this.overlayBox;
      hs.removeEventListener(document, 'mousemove', hs.dragHandler);
      hs.setStyles(content, {
        width: (x.imgSize || x.size) + 'px',
        height: (y.imgSize || y.size) + 'px'
      });
      if (overlayBox) overlayBox.style.overflow = 'visible';
      this.outline = last.outline;
      if (this.outline) this.outline.exp = exp;
      last.outline = null;
      var fadeBox = hs.createElement('div', {
        className: 'highslide-' + this.contentType
      }, {
        position: 'absolute',
        zIndex: 4,
        overflow: 'hidden',
        display: 'none'
      });
      var names = {
        oldImg: last,
        newImg: this
      };

      for (var n in names) {
        this[n] = names[n].content.cloneNode(!names[n].iframe); // #11

        hs.setStyles(this[n], {
          position: 'absolute',
          border: 0,
          visibility: 'visible'
        });
        fadeBox.appendChild(this[n]);
      }

      wrapper.appendChild(fadeBox);
      if (this.isHtml) hs.setStyles(this.mediumContent, {
        left: 0,
        top: 0
      });

      if (overlayBox) {
        overlayBox.className = '';
        wrapper.appendChild(overlayBox);
      }

      fadeBox.style.display = '';
      last.content.style.display = 'none';

      if (hs.safari && hs.uaVersion < 525) {
        this.wrapper.style.visibility = 'visible';
      }

      hs.animate(wrapper, {
        width: x.size
      }, {
        duration: hs.transitionDuration,
        step: function step(val, args) {
          var pos = args.pos,
              invPos = 1 - pos;
          var prop,
              size = {},
              props = ['pos', 'size', 'p1', 'p2'];

          for (var n in props) {
            prop = props[n];
            size['x' + prop] = Math.round(invPos * lastX[prop] + pos * x[prop]);
            size['y' + prop] = Math.round(invPos * lastY[prop] + pos * y[prop]);
            size.ximgSize = Math.round(invPos * (lastX.imgSize || lastX.size) + pos * (x.imgSize || x.size));
            size.ximgPad = Math.round(invPos * lastX.get('imgPad') + pos * x.get('imgPad'));
            size.yimgSize = Math.round(invPos * (lastY.imgSize || lastY.size) + pos * (y.imgSize || y.size));
            size.yimgPad = Math.round(invPos * lastY.get('imgPad') + pos * y.get('imgPad'));
          }

          if (exp.outline) exp.outline.setPosition({
            x: size.xpos,
            y: size.ypos,
            w: size.xsize + size.xp1 + size.xp2 + 2 * x.cb,
            h: size.ysize + size.yp1 + size.yp2 + 2 * y.cb
          });
          last.wrapper.style.clip = 'rect(' + (size.ypos - lastY.pos) + 'px, ' + (size.xsize + size.xp1 + size.xp2 + size.xpos + 2 * lastX.cb - lastX.pos) + 'px, ' + (size.ysize + size.yp1 + size.yp2 + size.ypos + 2 * lastY.cb - lastY.pos) + 'px, ' + (size.xpos - lastX.pos) + 'px)';
          hs.setStyles(content, {
            top: size.yp1 + y.get('imgPad') + 'px',
            left: size.xp1 + x.get('imgPad') + 'px',
            marginTop: y.pos - size.ypos + 'px',
            marginLeft: x.pos - size.xpos + 'px'
          });
          hs.setStyles(wrapper, {
            top: size.ypos + 'px',
            left: size.xpos + 'px',
            width: size.xp1 + size.xp2 + size.xsize + 2 * x.cb + 'px',
            height: size.yp1 + size.yp2 + size.ysize + 2 * y.cb + 'px'
          });
          hs.setStyles(fadeBox, {
            width: (size.ximgSize || size.xsize) + 'px',
            height: (size.yimgSize || size.ysize) + 'px',
            left: size.xp1 + size.ximgPad + 'px',
            top: size.yp1 + size.yimgPad + 'px',
            visibility: 'visible'
          });
          hs.setStyles(exp.oldImg, {
            top: lastY.pos - size.ypos + lastY.p1 - size.yp1 + lastY.get('imgPad') - size.yimgPad + 'px',
            left: lastX.pos - size.xpos + lastX.p1 - size.xp1 + lastX.get('imgPad') - size.ximgPad + 'px'
          });
          hs.setStyles(exp.newImg, {
            opacity: pos,
            top: y.pos - size.ypos + y.p1 - size.yp1 + y.get('imgPad') - size.yimgPad + 'px',
            left: x.pos - size.xpos + x.p1 - size.xp1 + x.get('imgPad') - size.ximgPad + 'px'
          });
          if (overlayBox) hs.setStyles(overlayBox, {
            width: size.xsize + 'px',
            height: size.ysize + 'px',
            left: size.xp1 + x.cb + 'px',
            top: size.yp1 + y.cb + 'px'
          });
        },
        complete: function complete() {
          wrapper.style.visibility = content.style.visibility = 'visible';
          content.style.display = 'block';
          hs.discardElement(fadeBox);
          exp.afterExpand();
          if (last.isHtml) last.htmlPrepareClose(); // #11

          last.afterClose();
          exp.last = null;
        }
      });
    },
    reuseOverlay: function reuseOverlay(o, el) {
      if (!this.last) return false;

      for (var i = 0; i < this.last.overlays.length; i++) {
        var oDiv = hs.$('hsId' + this.last.overlays[i]);

        if (oDiv && oDiv.hsId == o.hsId) {
          this.genOverlayBox();
          oDiv.reuse = this.key;
          hs.push(this.overlays, this.last.overlays[i]);
          return true;
        }
      }

      return false;
    },
    afterExpand: function afterExpand() {
      this.isExpanded = true;
      this.focus();
      if (this.isHtml && this.objectLoadTime == 'after') this.writeExtendedContent();

      if (this.iframe) {
        try {
          var exp = this,
              doc = this.iframe.contentDocument || this.iframe.contentWindow.document;
          hs.addEventListener(doc, 'mousedown', function () {
            if (hs.focusKey != exp.key) exp.focus();
          });
        } catch (e) {}

        if (hs.ie && typeof this.isClosing != 'boolean') // first open 
          this.iframe.style.width = this.objectWidth - 1 + 'px'; // hasLayout
      }

      if (this.dimmingOpacity) hs.dim(this);
      if (hs.upcoming && hs.upcoming == this.a) hs.upcoming = null;
      this.prepareNextOutline();
      var p = hs.page,
          mX = hs.mouse.x + p.scrollLeft,
          mY = hs.mouse.y + p.scrollTop;
      this.mouseIsOver = this.x.pos < mX && mX < this.x.pos + this.x.get('wsize') && this.y.pos < mY && mY < this.y.pos + this.y.get('wsize');
      if (this.overlayBox) this.showOverlays();
      hs.fireEvent(this, 'onAfterExpand');
    },
    prepareNextOutline: function prepareNextOutline() {
      var key = this.key;
      var outlineType = this.outlineType;
      new hs.Outline(outlineType, function () {
        try {
          hs.expanders[key].preloadNext();
        } catch (e) {}
      });
    },
    preloadNext: function preloadNext() {
      var next = this.getAdjacentAnchor(1);
      if (next && next.onclick.toString().match(/hs\.expand/)) var img = hs.createElement('img', {
        src: hs.getSrc(next)
      });
    },
    getAdjacentAnchor: function getAdjacentAnchor(op) {
      var current = this.getAnchorIndex(),
          as = hs.anchors.groups[this.slideshowGroup || 'none'];

      if (as && !as[current + op] && this.slideshow && this.slideshow.repeat) {
        if (op == 1) return as[0];else if (op == -1) return as[as.length - 1];
      }

      return as && as[current + op] || null;
    },
    getAnchorIndex: function getAnchorIndex() {
      var arr = hs.getAnchors().groups[this.slideshowGroup || 'none'];
      if (arr) for (var i = 0; i < arr.length; i++) {
        if (arr[i] == this.a) return i;
      }
      return null;
    },
    getNumber: function getNumber() {
      if (this[this.numberPosition]) {
        var arr = hs.anchors.groups[this.slideshowGroup || 'none'];

        if (arr) {
          var s = hs.lang.number.replace('%1', this.getAnchorIndex() + 1).replace('%2', arr.length);
          this[this.numberPosition].innerHTML = '<div class="highslide-number">' + s + '</div>' + this[this.numberPosition].innerHTML;
        }
      }
    },
    initSlideshow: function initSlideshow() {
      if (!this.last) {
        for (var i = 0; i < hs.slideshows.length; i++) {
          var ss = hs.slideshows[i],
              sg = ss.slideshowGroup;
          if (typeof sg == 'undefined' || sg === null || sg === this.slideshowGroup) this.slideshow = new hs.Slideshow(this.key, ss);
        }
      } else {
        this.slideshow = this.last.slideshow;
      }

      var ss = this.slideshow;
      if (!ss) return;
      var key = ss.expKey = this.key;
      ss.checkFirstAndLast();
      ss.disable('full-expand');

      if (ss.controls) {
        this.createOverlay(hs.extend(ss.overlayOptions || {}, {
          overlayId: ss.controls,
          hsId: 'controls',
          zIndex: 5
        }));
      }

      if (ss.thumbstrip) ss.thumbstrip.add(this);
      if (!this.last && this.autoplay) ss.play(true);

      if (ss.autoplay) {
        ss.autoplay = setTimeout(function () {
          hs.next(key);
        }, ss.interval || 500);
      }
    },
    cancelLoading: function cancelLoading() {
      hs.discardElement(this.wrapper);
      hs.expanders[this.key] = null;
      if (hs.upcoming == this.a) hs.upcoming = null;
      hs.undim(this.key);
      if (this.loading) hs.loading.style.left = '-9999px';
      hs.fireEvent(this, 'onHideLoading');
    },
    writeCredits: function writeCredits() {
      if (this.credits) return;
      this.credits = hs.createElement('a', {
        href: hs.creditsHref,
        target: hs.creditsTarget,
        className: 'highslide-credits',
        innerHTML: hs.lang.creditsText,
        title: hs.lang.creditsTitle
      });
      this.createOverlay({
        overlayId: this.credits,
        position: this.creditsPosition || 'top left',
        hsId: 'credits'
      });
    },
    getInline: function getInline(types, addOverlay) {
      for (var i = 0; i < types.length; i++) {
        var type = types[i],
            s = null;
        if (type == 'caption' && !hs.fireEvent(this, 'onBeforeGetCaption')) return;else if (type == 'heading' && !hs.fireEvent(this, 'onBeforeGetHeading')) return;
        if (!this[type + 'Id'] && this.thumbsUserSetId) this[type + 'Id'] = type + '-for-' + this.thumbsUserSetId;
        if (this[type + 'Id']) this[type] = hs.getNode(this[type + 'Id']);
        if (!this[type] && !this[type + 'Text'] && this[type + 'Eval']) try {
          s = eval(this[type + 'Eval']);
        } catch (e) {}

        if (!this[type] && this[type + 'Text']) {
          s = this[type + 'Text'];
        }

        if (!this[type] && !s) {
          this[type] = hs.getNode(this.a['_' + type + 'Id']);

          if (!this[type]) {
            var next = this.a.nextSibling;

            while (next && !hs.isHsAnchor(next)) {
              if (new RegExp('highslide-' + type).test(next.className || null)) {
                if (!next.id) this.a['_' + type + 'Id'] = next.id = 'hsId' + hs.idCounter++;
                this[type] = hs.getNode(next.id);
                break;
              }

              next = next.nextSibling;
            }
          }
        }

        if (!this[type] && !s && this.numberPosition == type) s = '\n';
        if (!this[type] && s) this[type] = hs.createElement('div', {
          className: 'highslide-' + type,
          innerHTML: s
        });

        if (addOverlay && this[type]) {
          var o = {
            position: type == 'heading' ? 'above' : 'below'
          };

          for (var x in this[type + 'Overlay']) {
            o[x] = this[type + 'Overlay'][x];
          }

          o.overlayId = this[type];
          this.createOverlay(o);
        }
      }
    },
    // on end move and resize
    doShowHide: function doShowHide(visibility) {
      if (hs.hideSelects) this.showHideElements('SELECT', visibility);
      if (hs.hideIframes) this.showHideElements('IFRAME', visibility);
      if (hs.geckoMac) this.showHideElements('*', visibility);
    },
    showHideElements: function showHideElements(tagName, visibility) {
      var els = document.getElementsByTagName(tagName);
      var prop = tagName == '*' ? 'overflow' : 'visibility';

      for (var i = 0; i < els.length; i++) {
        if (prop == 'visibility' || document.defaultView.getComputedStyle(els[i], "").getPropertyValue('overflow') == 'auto' || els[i].getAttribute('hidden-by') != null) {
          var hiddenBy = els[i].getAttribute('hidden-by');

          if (visibility == 'visible' && hiddenBy) {
            hiddenBy = hiddenBy.replace('[' + this.key + ']', '');
            els[i].setAttribute('hidden-by', hiddenBy);
            if (!hiddenBy) els[i].style[prop] = els[i].origProp;
          } else if (visibility == 'hidden') {
            // hide if behind
            var elPos = hs.getPosition(els[i]);
            elPos.w = els[i].offsetWidth;
            elPos.h = els[i].offsetHeight;

            if (!this.dimmingOpacity) {
              // hide all if dimming
              var clearsX = elPos.x + elPos.w < this.x.get('opos') || elPos.x > this.x.get('opos') + this.x.get('osize');
              var clearsY = elPos.y + elPos.h < this.y.get('opos') || elPos.y > this.y.get('opos') + this.y.get('osize');
            }

            var wrapperKey = hs.getWrapperKey(els[i]);

            if (!clearsX && !clearsY && wrapperKey != this.key) {
              // element falls behind image
              if (!hiddenBy) {
                els[i].setAttribute('hidden-by', '[' + this.key + ']');
                els[i].origProp = els[i].style[prop];
                els[i].style[prop] = 'hidden';
              } else if (hiddenBy.indexOf('[' + this.key + ']') == -1) {
                els[i].setAttribute('hidden-by', hiddenBy + '[' + this.key + ']');
              }
            } else if ((hiddenBy == '[' + this.key + ']' || hs.focusKey == wrapperKey) && wrapperKey != this.key) {
              // on move
              els[i].setAttribute('hidden-by', '');
              els[i].style[prop] = els[i].origProp || '';
            } else if (hiddenBy && hiddenBy.indexOf('[' + this.key + ']') > -1) {
              els[i].setAttribute('hidden-by', hiddenBy.replace('[' + this.key + ']', ''));
            }
          }
        }
      }
    },
    focus: function focus() {
      this.wrapper.style.zIndex = hs.zIndexCounter += 2; // blur others

      for (var i = 0; i < hs.expanders.length; i++) {
        if (hs.expanders[i] && i == hs.focusKey) {
          var blurExp = hs.expanders[i];
          blurExp.content.className += ' highslide-' + blurExp.contentType + '-blur';

          if (blurExp.isImage) {
            blurExp.content.style.cursor = hs.ieLt7 ? 'hand' : 'pointer';
            blurExp.content.title = hs.lang.focusTitle;
          }

          hs.fireEvent(blurExp, 'onBlur');
        }
      } // focus this


      if (this.outline) this.outline.table.style.zIndex = this.wrapper.style.zIndex - 1;
      this.content.className = 'highslide-' + this.contentType;

      if (this.isImage) {
        this.content.title = hs.lang.restoreTitle;

        if (hs.restoreCursor) {
          hs.styleRestoreCursor = window.opera ? 'pointer' : 'url(' + hs.graphicsDir + hs.restoreCursor + '), pointer';
          if (hs.ieLt7 && hs.uaVersion < 6) hs.styleRestoreCursor = 'hand';
          this.content.style.cursor = hs.styleRestoreCursor;
        }
      }

      hs.focusKey = this.key;
      hs.addEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);
      hs.fireEvent(this, 'onFocus');
    },
    moveTo: function moveTo(x, y) {
      this.x.setPos(x);
      this.y.setPos(y);
    },
    resize: function resize(e) {
      var w,
          h,
          r = e.width / e.height;
      w = Math.max(e.width + e.dX, Math.min(this.minWidth, this.x.full));
      if (this.isImage && Math.abs(w - this.x.full) < 12) w = this.x.full;
      h = this.isHtml ? e.height + e.dY : w / r;

      if (h < Math.min(this.minHeight, this.y.full)) {
        h = Math.min(this.minHeight, this.y.full);
        if (this.isImage) w = h * r;
      }

      this.resizeTo(w, h);
    },
    resizeTo: function resizeTo(w, h) {
      this.y.setSize(h);
      this.x.setSize(w);
      this.wrapper.style.height = this.y.get('wsize') + 'px';
    },
    close: function close() {
      if (this.isClosing || !this.isExpanded) return;

      if (this.transitions[1] == 'crossfade' && hs.upcoming) {
        hs.getExpander(hs.upcoming).cancelLoading();
        hs.upcoming = null;
      }

      if (!hs.fireEvent(this, 'onBeforeClose')) return;
      this.isClosing = true;
      if (this.slideshow && !hs.upcoming) this.slideshow.pause();
      hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);

      try {
        if (this.isHtml) this.htmlPrepareClose();
        this.content.style.cursor = 'default';
        this.changeSize(0, {
          wrapper: {
            width: this.x.t,
            height: this.y.t,
            left: this.x.tpos - this.x.cb + this.x.tb,
            top: this.y.tpos - this.y.cb + this.y.tb
          },
          content: {
            left: 0,
            top: 0,
            width: this.x.t,
            height: this.y.t
          }
        }, hs.restoreDuration);
      } catch (e) {
        this.afterClose();
      }
    },
    htmlPrepareClose: function htmlPrepareClose() {
      if (hs.geckoMac) {
        // bad redraws
        if (!hs.mask) hs.mask = hs.createElement('div', null, {
          position: 'absolute'
        }, hs.container);
        hs.setStyles(hs.mask, {
          width: this.x.size + 'px',
          height: this.y.size + 'px',
          left: this.x.pos + 'px',
          top: this.y.pos + 'px',
          display: 'block'
        });
      }

      if (this.objectType == 'swf') try {
        hs.$(this.body.id).StopPlay();
      } catch (e) {}
      if (this.objectLoadTime == 'after' && !this.preserveContent) this.destroyObject();
      if (this.scrollerDiv && this.scrollerDiv != this.scrollingContent) this.scrollerDiv.style.overflow = 'hidden';
    },
    destroyObject: function destroyObject() {
      if (hs.ie && this.iframe) try {
        this.iframe.contentWindow.document.body.innerHTML = '';
      } catch (e) {
        this.iframe.src = '';
      }
      if (this.objectType == 'swf') swfobject.removeSWF(this.body.id);
      this.body.innerHTML = '';
    },
    sleep: function sleep() {
      if (this.outline) this.outline.table.style.display = 'none';
      this.releaseMask = null;
      this.wrapper.style.display = 'none';
      this.isExpanded = false;
      hs.push(hs.sleeping, this);
    },
    awake: function awake() {
      try {
        hs.expanders[this.key] = this;

        if (!hs.allowMultipleInstances && hs.focusKey != this.key) {
          try {
            hs.expanders[hs.focusKey].close();
          } catch (e) {}
        }

        var z = hs.zIndexCounter++,
            stl = {
          display: '',
          zIndex: z
        };
        hs.setStyles(this.wrapper, stl);
        this.isClosing = false;
        var o = this.outline || 0;

        if (o) {
          if (!this.outlineWhileAnimating) stl.visibility = 'hidden';
          hs.setStyles(o.table, stl);
        }

        if (this.slideshow) {
          this.initSlideshow();
        }

        this.show();
      } catch (e) {}
    },
    createOverlay: function createOverlay(o) {
      var el = o.overlayId,
          relToVP = o.relativeTo == 'viewport' && !/panel$/.test(o.position);
      if (typeof el == 'string') el = hs.getNode(el);
      if (o.html) el = hs.createElement('div', {
        innerHTML: o.html
      });
      if (!el || typeof el == 'string') return;
      if (!hs.fireEvent(this, 'onCreateOverlay', {
        overlay: el
      })) return;
      el.style.display = 'block';
      o.hsId = o.hsId || o.overlayId;
      if (this.transitions[1] == 'crossfade' && this.reuseOverlay(o, el)) return;
      this.genOverlayBox();
      var width = o.width && /^[0-9]+(px|%)$/.test(o.width) ? o.width : 'auto';
      if (/^(left|right)panel$/.test(o.position) && !/^[0-9]+px$/.test(o.width)) width = '200px';
      var overlay = hs.createElement('div', {
        id: 'hsId' + hs.idCounter++,
        hsId: o.hsId
      }, {
        position: 'absolute',
        visibility: 'hidden',
        width: width,
        direction: hs.lang.cssDirection || '',
        opacity: 0
      }, relToVP ? hs.viewport : this.overlayBox, true);
      if (relToVP) overlay.hsKey = this.key;
      overlay.appendChild(el);
      hs.extend(overlay, {
        opacity: 1,
        offsetX: 0,
        offsetY: 0,
        dur: o.fade === 0 || o.fade === false || o.fade == 2 && hs.ie ? 0 : 250
      });
      hs.extend(overlay, o);

      if (this.gotOverlays) {
        this.positionOverlay(overlay);
        if (!overlay.hideOnMouseOut || this.mouseIsOver) hs.animate(overlay, {
          opacity: overlay.opacity
        }, overlay.dur);
      }

      hs.push(this.overlays, hs.idCounter - 1);
    },
    positionOverlay: function positionOverlay(overlay) {
      var p = overlay.position || 'middle center',
          relToVP = overlay.relativeTo == 'viewport',
          offX = overlay.offsetX,
          offY = overlay.offsetY;

      if (relToVP) {
        hs.viewport.style.display = 'block';
        overlay.hsKey = this.key;
        if (overlay.offsetWidth > overlay.parentNode.offsetWidth) overlay.style.width = '100%';
      } else if (overlay.parentNode != this.overlayBox) this.overlayBox.appendChild(overlay);

      if (/left$/.test(p)) overlay.style.left = offX + 'px';
      if (/center$/.test(p)) hs.setStyles(overlay, {
        left: '50%',
        marginLeft: offX - Math.round(overlay.offsetWidth / 2) + 'px'
      });
      if (/right$/.test(p)) overlay.style.right = -offX + 'px';

      if (/^leftpanel$/.test(p)) {
        hs.setStyles(overlay, {
          right: '100%',
          marginRight: this.x.cb + 'px',
          top: -this.y.cb + 'px',
          bottom: -this.y.cb + 'px',
          overflow: 'auto'
        });
        this.x.p1 = overlay.offsetWidth;
      } else if (/^rightpanel$/.test(p)) {
        hs.setStyles(overlay, {
          left: '100%',
          marginLeft: this.x.cb + 'px',
          top: -this.y.cb + 'px',
          bottom: -this.y.cb + 'px',
          overflow: 'auto'
        });
        this.x.p2 = overlay.offsetWidth;
      }

      var parOff = overlay.parentNode.offsetHeight;
      overlay.style.height = 'auto';
      if (relToVP && overlay.offsetHeight > parOff) overlay.style.height = hs.ieLt7 ? parOff + 'px' : '100%';
      if (/^top/.test(p)) overlay.style.top = offY + 'px';
      if (/^middle/.test(p)) hs.setStyles(overlay, {
        top: '50%',
        marginTop: offY - Math.round(overlay.offsetHeight / 2) + 'px'
      });
      if (/^bottom/.test(p)) overlay.style.bottom = -offY + 'px';

      if (/^above$/.test(p)) {
        hs.setStyles(overlay, {
          left: -this.x.p1 - this.x.cb + 'px',
          right: -this.x.p2 - this.x.cb + 'px',
          bottom: '100%',
          marginBottom: this.y.cb + 'px',
          width: 'auto'
        });
        this.y.p1 = overlay.offsetHeight;
      } else if (/^below$/.test(p)) {
        hs.setStyles(overlay, {
          position: 'relative',
          left: -this.x.p1 - this.x.cb + 'px',
          right: -this.x.p2 - this.x.cb + 'px',
          top: '100%',
          marginTop: this.y.cb + 'px',
          width: 'auto'
        });
        this.y.p2 = overlay.offsetHeight;
        overlay.style.position = 'absolute';
      }
    },
    getOverlays: function getOverlays() {
      this.getInline(['heading', 'caption'], true);
      this.getNumber();
      if (this.caption) hs.fireEvent(this, 'onAfterGetCaption');
      if (this.heading) hs.fireEvent(this, 'onAfterGetHeading');
      if (this.heading && this.dragByHeading) this.heading.className += ' highslide-move';
      if (hs.showCredits) this.writeCredits();

      for (var i = 0; i < hs.overlays.length; i++) {
        var o = hs.overlays[i],
            tId = o.thumbnailId,
            sg = o.slideshowGroup;

        if (!tId && !sg || tId && tId == this.thumbsUserSetId || sg && sg === this.slideshowGroup) {
          if (this.isImage || this.isHtml && o.useOnHtml) this.createOverlay(o);
        }
      }

      var os = [];

      for (var i = 0; i < this.overlays.length; i++) {
        var o = hs.$('hsId' + this.overlays[i]);
        if (/panel$/.test(o.position)) this.positionOverlay(o);else hs.push(os, o);
      }

      for (var i = 0; i < os.length; i++) {
        this.positionOverlay(os[i]);
      }

      this.gotOverlays = true;
    },
    genOverlayBox: function genOverlayBox() {
      if (!this.overlayBox) this.overlayBox = hs.createElement('div', {
        className: this.wrapperClassName
      }, {
        position: 'absolute',
        width: (this.x.size || (this.useBox ? this.width : null) || this.x.full) + 'px',
        height: (this.y.size || this.y.full) + 'px',
        visibility: 'hidden',
        overflow: 'hidden',
        zIndex: hs.ie ? 4 : 'auto'
      }, hs.container, true);
    },
    sizeOverlayBox: function sizeOverlayBox(doWrapper, doPanels) {
      var overlayBox = this.overlayBox,
          x = this.x,
          y = this.y;
      hs.setStyles(overlayBox, {
        width: x.size + 'px',
        height: y.size + 'px'
      });

      if (doWrapper || doPanels) {
        for (var i = 0; i < this.overlays.length; i++) {
          var o = hs.$('hsId' + this.overlays[i]);
          var ie6 = hs.ieLt7 || document.compatMode == 'BackCompat';

          if (o && /^(above|below)$/.test(o.position)) {
            if (ie6) {
              o.style.width = overlayBox.offsetWidth + 2 * x.cb + x.p1 + x.p2 + 'px';
            }

            y[o.position == 'above' ? 'p1' : 'p2'] = o.offsetHeight;
          }

          if (o && ie6 && /^(left|right)panel$/.test(o.position)) {
            o.style.height = overlayBox.offsetHeight + 2 * y.cb + 'px';
          }
        }
      }

      if (doWrapper) {
        hs.setStyles(this.content, {
          top: y.p1 + 'px'
        });
        hs.setStyles(overlayBox, {
          top: y.p1 + y.cb + 'px'
        });
      }
    },
    showOverlays: function showOverlays() {
      var b = this.overlayBox;
      b.className = '';
      hs.setStyles(b, {
        top: this.y.p1 + this.y.cb + 'px',
        left: this.x.p1 + this.x.cb + 'px',
        overflow: 'visible'
      });
      if (hs.safari) b.style.visibility = 'visible';
      this.wrapper.appendChild(b);

      for (var i = 0; i < this.overlays.length; i++) {
        var o = hs.$('hsId' + this.overlays[i]);
        o.style.zIndex = o.zIndex || 4;

        if (!o.hideOnMouseOut || this.mouseIsOver) {
          o.style.visibility = 'visible';
          hs.setStyles(o, {
            visibility: 'visible',
            display: ''
          });
          hs.animate(o, {
            opacity: o.opacity
          }, o.dur);
        }
      }
    },
    destroyOverlays: function destroyOverlays() {
      if (!this.overlays.length) return;

      if (this.slideshow) {
        var c = this.slideshow.controls;
        if (c && hs.getExpander(c) == this) c.parentNode.removeChild(c);
      }

      for (var i = 0; i < this.overlays.length; i++) {
        var o = hs.$('hsId' + this.overlays[i]);
        if (o && o.parentNode == hs.viewport && hs.getExpander(o) == this) hs.discardElement(o);
      }

      if (this.isHtml && this.preserveContent) {
        this.overlayBox.style.top = '-9999px';
        hs.container.appendChild(this.overlayBox);
      } else hs.discardElement(this.overlayBox);
    },
    createFullExpand: function createFullExpand() {
      if (this.slideshow && this.slideshow.controls) {
        this.slideshow.enable('full-expand');
        return;
      }

      this.fullExpandLabel = hs.createElement('a', {
        href: 'javascript:hs.expanders[' + this.key + '].doFullExpand();',
        title: hs.lang.fullExpandTitle,
        className: 'highslide-full-expand'
      });
      if (!hs.fireEvent(this, 'onCreateFullExpand')) return;
      this.createOverlay({
        overlayId: this.fullExpandLabel,
        position: hs.fullExpandPosition,
        hideOnMouseOut: true,
        opacity: hs.fullExpandOpacity
      });
    },
    doFullExpand: function doFullExpand() {
      try {
        if (!hs.fireEvent(this, 'onDoFullExpand')) return;
        if (this.fullExpandLabel) hs.discardElement(this.fullExpandLabel);
        this.focus();
        var xSize = this.x.size,
            ySize = this.y.size;
        this.resizeTo(this.x.full, this.y.full);
        var xpos = this.x.pos - (this.x.size - xSize) / 2;
        if (xpos < hs.marginLeft) xpos = hs.marginLeft;
        var ypos = this.y.pos - (this.y.size - ySize) / 2;
        if (ypos < hs.marginTop) ypos = hs.marginTop;
        this.moveTo(xpos, ypos);
        this.doShowHide('hidden');
      } catch (e) {
        this.error(e);
      }
    },
    afterClose: function afterClose() {
      this.a.className = this.a.className.replace('highslide-active-anchor', '');
      this.doShowHide('visible');

      if (this.isHtml && this.preserveContent && this.transitions[1] != 'crossfade') {
        this.sleep();
      } else {
        if (this.outline && this.outlineWhileAnimating) this.outline.destroy();
        if (this.iframe && this.objectLoadTime != 'after') this.destroyObject();
        hs.discardElement(this.wrapper);
      }

      if (hs.mask) hs.mask.style.display = 'none';
      this.destroyOverlays();
      if (!hs.viewport.childNodes.length) hs.viewport.style.display = 'none';
      if (this.dimmingOpacity) hs.undim(this.key);
      hs.fireEvent(this, 'onAfterClose');
      hs.expanders[this.key] = null;
      hs.reOrder();
    }
  }; // hs.Ajax object prototype

  hs.Ajax = function (a, content, pre) {
    this.a = a;
    this.content = content;
    this.pre = pre;
  };

  hs.Ajax.prototype = {
    run: function run() {
      var xhr;
      if (!this.src) this.src = hs.getSrc(this.a);

      if (this.src.match('#')) {
        var arr = this.src.split('#');
        this.src = arr[0];
        this.id = arr[1];
      }

      if (hs.cachedGets[this.src]) {
        this.cachedGet = hs.cachedGets[this.src];
        if (this.id) this.getElementContent();else this.loadHTML();
        return;
      }

      try {
        xhr = new XMLHttpRequest();
      } catch (e) {
        try {
          xhr = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
          try {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {
            this.onError();
          }
        }
      }

      var pThis = this;

      xhr.onreadystatechange = function () {
        if (pThis.xhr.readyState == 4) {
          if (pThis.id) pThis.getElementContent();else pThis.loadHTML();
        }
      };

      var src = this.src;
      this.xhr = xhr;
      if (hs.forceAjaxReload) src = src.replace(/$/, (/\?/.test(src) ? '&' : '?') + 'dummy=' + new Date().getTime());
      xhr.open('GET', src, true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(null);
    },
    getElementContent: function getElementContent() {
      hs.init();
      var attribs = window.opera || hs.ie6SSL ? {
        src: 'about:blank'
      } : null;
      this.iframe = hs.createElement('iframe', attribs, {
        position: 'absolute',
        top: '-9999px'
      }, hs.container);
      this.loadHTML();
    },
    loadHTML: function loadHTML() {
      var s = this.cachedGet || this.xhr.responseText,
          regBody;
      if (this.pre) hs.cachedGets[this.src] = s;

      if (!hs.ie || hs.uaVersion >= 5.5) {
        s = s.replace(new RegExp('<link[^>]*>', 'gi'), '').replace(new RegExp('<script[^>]*>.*?</script>', 'gi'), '');

        if (this.iframe) {
          var doc = this.iframe.contentDocument;
          if (!doc && this.iframe.contentWindow) doc = this.iframe.contentWindow.document;

          if (!doc) {
            // Opera
            var pThis = this;
            setTimeout(function () {
              pThis.loadHTML();
            }, 25);
            return;
          }

          doc.open();
          doc.write(s);
          doc.close();

          try {
            s = doc.getElementById(this.id).innerHTML;
          } catch (e) {
            try {
              s = this.iframe.document.getElementById(this.id).innerHTML;
            } catch (e) {} // opera

          }

          hs.discardElement(this.iframe);
        } else {
          regBody = /(<body[^>]*>|<\/body>)/ig;
          if (regBody.test(s)) s = s.split(regBody)[hs.ieLt9 ? 1 : 2];
        }
      }

      hs.getElementByClass(this.content, 'DIV', 'highslide-body').innerHTML = s;
      this.onLoad();

      for (var x in this) {
        this[x] = null;
      }
    }
  };

  hs.Slideshow = function (expKey, options) {
    if (hs.dynamicallyUpdateAnchors !== false) hs.updateAnchors();
    this.expKey = expKey;

    for (var x in options) {
      this[x] = options[x];
    }

    if (this.useControls) this.getControls();
    if (this.thumbstrip) this.thumbstrip = hs.Thumbstrip(this);
  };

  hs.Slideshow.prototype = {
    getControls: function getControls() {
      this.controls = hs.createElement('div', {
        innerHTML: hs.replaceLang(hs.skin.controls)
      }, null, hs.container);
      var buttons = ['play', 'pause', 'previous', 'next', 'move', 'full-expand', 'close'];
      this.btn = {};
      var pThis = this;

      for (var i = 0; i < buttons.length; i++) {
        this.btn[buttons[i]] = hs.getElementByClass(this.controls, 'li', 'highslide-' + buttons[i]);
        this.enable(buttons[i]);
      }

      this.btn.pause.style.display = 'none'; //this.disable('full-expand');
    },
    checkFirstAndLast: function checkFirstAndLast() {
      if (this.repeat || !this.controls) return;
      var exp = hs.expanders[this.expKey],
          cur = exp.getAnchorIndex(),
          re = /disabled$/;
      if (cur == 0) this.disable('previous');else if (re.test(this.btn.previous.getElementsByTagName('a')[0].className)) this.enable('previous');

      if (cur + 1 == hs.anchors.groups[exp.slideshowGroup || 'none'].length) {
        this.disable('next');
        this.disable('play');
      } else if (re.test(this.btn.next.getElementsByTagName('a')[0].className)) {
        this.enable('next');
        this.enable('play');
      }
    },
    enable: function enable(btn) {
      if (!this.btn) return;
      var sls = this,
          a = this.btn[btn].getElementsByTagName('a')[0],
          re = /disabled$/;

      a.onclick = function () {
        sls[btn]();
        return false;
      };

      if (re.test(a.className)) a.className = a.className.replace(re, '');
    },
    disable: function disable(btn) {
      if (!this.btn) return;
      var a = this.btn[btn].getElementsByTagName('a')[0];

      a.onclick = function () {
        return false;
      };

      if (!/disabled$/.test(a.className)) a.className += ' disabled';
    },
    hitSpace: function hitSpace() {
      if (this.autoplay) this.pause();else this.play();
    },
    play: function play(wait) {
      if (this.btn) {
        this.btn.play.style.display = 'none';
        this.btn.pause.style.display = '';
      }

      this.autoplay = true;
      if (!wait) hs.next(this.expKey);
    },
    pause: function pause() {
      if (this.btn) {
        this.btn.pause.style.display = 'none';
        this.btn.play.style.display = '';
      }

      clearTimeout(this.autoplay);
      this.autoplay = null;
    },
    previous: function previous() {
      this.pause();
      hs.previous(this.btn.previous);
    },
    next: function next() {
      this.pause();
      hs.next(this.btn.next);
    },
    move: function move() {},
    'full-expand': function fullExpand() {
      hs.getExpander().doFullExpand();
    },
    close: function close() {
      hs.close(this.btn.close);
    }
  };

  hs.Thumbstrip = function (slideshow) {
    function add(exp) {
      hs.extend(options || {}, {
        overlayId: dom,
        hsId: 'thumbstrip',
        className: 'highslide-thumbstrip-' + mode + '-overlay ' + (options.className || '')
      });
      if (hs.ieLt7) options.fade = 0;
      exp.createOverlay(options);
      hs.setStyles(dom.parentNode, {
        overflow: 'hidden'
      });
    }

    ;

    function scroll(delta) {
      selectThumb(undefined, Math.round(delta * dom[isX ? 'offsetWidth' : 'offsetHeight'] * 0.7));
    }

    ;

    function selectThumb(i, scrollBy) {
      if (i === undefined) for (var j = 0; j < group.length; j++) {
        if (group[j] == hs.expanders[slideshow.expKey].a) {
          i = j;
          break;
        }
      }
      if (i === undefined) return;
      var as = dom.getElementsByTagName('a'),
          active = as[i],
          cell = active.parentNode,
          left = isX ? 'Left' : 'Top',
          right = isX ? 'Right' : 'Bottom',
          width = isX ? 'Width' : 'Height',
          offsetLeft = 'offset' + left,
          offsetWidth = 'offset' + width,
          overlayWidth = div.parentNode.parentNode[offsetWidth],
          minTblPos = overlayWidth - table[offsetWidth],
          curTblPos = parseInt(table.style[isX ? 'left' : 'top']) || 0,
          tblPos = curTblPos,
          mgnRight = 20;

      if (scrollBy !== undefined) {
        tblPos = curTblPos - scrollBy;
        if (minTblPos > 0) minTblPos = 0;
        if (tblPos > 0) tblPos = 0;
        if (tblPos < minTblPos) tblPos = minTblPos;
      } else {
        for (var j = 0; j < as.length; j++) {
          as[j].className = '';
        }

        active.className = 'highslide-active-anchor';
        var activeLeft = i > 0 ? as[i - 1].parentNode[offsetLeft] : cell[offsetLeft],
            activeRight = cell[offsetLeft] + cell[offsetWidth] + (as[i + 1] ? as[i + 1].parentNode[offsetWidth] : 0);
        if (activeRight > overlayWidth - curTblPos) tblPos = overlayWidth - activeRight;else if (activeLeft < -curTblPos) tblPos = -activeLeft;
      }

      var markerPos = cell[offsetLeft] + (cell[offsetWidth] - marker[offsetWidth]) / 2 + tblPos;
      hs.animate(table, isX ? {
        left: tblPos
      } : {
        top: tblPos
      }, null, 'easeOutQuad');
      hs.animate(marker, isX ? {
        left: markerPos
      } : {
        top: markerPos
      }, null, 'easeOutQuad');
      scrollUp.style.display = tblPos < 0 ? 'block' : 'none';
      scrollDown.style.display = tblPos > minTblPos ? 'block' : 'none';
    }

    ; // initialize

    var group = hs.anchors.groups[hs.expanders[slideshow.expKey].slideshowGroup || 'none'],
        options = slideshow.thumbstrip,
        mode = options.mode || 'horizontal',
        floatMode = mode == 'float',
        tree = floatMode ? ['div', 'ul', 'li', 'span'] : ['table', 'tbody', 'tr', 'td'],
        isX = mode == 'horizontal',
        dom = hs.createElement('div', {
      className: 'highslide-thumbstrip highslide-thumbstrip-' + mode,
      innerHTML: '<div class="highslide-thumbstrip-inner">' + '<' + tree[0] + '><' + tree[1] + '></' + tree[1] + '></' + tree[0] + '></div>' + '<div class="highslide-scroll-up"><div></div></div>' + '<div class="highslide-scroll-down"><div></div></div>' + '<div class="highslide-marker"><div></div></div>'
    }, {
      display: 'none'
    }, hs.container),
        domCh = dom.childNodes,
        div = domCh[0],
        scrollUp = domCh[1],
        scrollDown = domCh[2],
        marker = domCh[3],
        table = div.firstChild,
        tbody = dom.getElementsByTagName(tree[1])[0],
        tr;

    for (var i = 0; i < group.length; i++) {
      if (i == 0 || !isX) tr = hs.createElement(tree[2], null, null, tbody);

      (function () {
        var a = group[i],
            cell = hs.createElement(tree[3], null, null, tr),
            pI = i;
        hs.createElement('a', {
          href: a.href,
          title: a.title,
          onclick: function onclick() {
            if (/highslide-active-anchor/.test(this.className)) return false;
            hs.getExpander(this).focus();
            return hs.transit(a);
          },
          innerHTML: hs.stripItemFormatter ? hs.stripItemFormatter(a) : a.innerHTML
        }, null, cell);
      })();
    }

    if (!floatMode) {
      scrollUp.onclick = function () {
        scroll(-1);
      };

      scrollDown.onclick = function () {
        scroll(1);
      };

      hs.addEventListener(tbody, document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll', function (e) {
        var delta = 0;
        e = e || window.event;

        if (e.wheelDelta) {
          delta = e.wheelDelta / 120;
          if (hs.opera) delta = -delta;
        } else if (e.detail) {
          delta = -e.detail / 3;
        }

        if (delta) scroll(-delta * 0.2);
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      }, {
        passive: true
      });
    }

    return {
      add: add,
      selectThumb: selectThumb
    };
  };

  hs.langDefaults = hs.lang; // history

  var HsExpander = hs.Expander;

  if (hs.ie && window == window.top) {
    (function () {
      try {
        document.documentElement.doScroll('left');
      } catch (e) {
        setTimeout(arguments.callee, 50);
        return;
      }

      hs.ready();
    })();
  }

  hs.addEventListener(document, 'DOMContentLoaded', hs.ready);
  hs.addEventListener(window, 'load', hs.ready); // set handlers

  hs.addEventListener(document, 'ready', function () {
    if (hs.expandCursor || hs.dimmingOpacity) {
      var addRule = function addRule(sel, dec) {
        if (hs.ie && (hs.uaVersion < 9 || backCompat)) {
          var last = document.styleSheets[document.styleSheets.length - 1];
          if (_typeof(last.addRule) == "object") last.addRule(sel, dec);
        } else {
          style.appendChild(document.createTextNode(sel + " {" + dec + "}"));
        }
      };

      var fix = function fix(prop) {
        return 'expression( ( ( ignoreMe = document.documentElement.' + prop + ' ? document.documentElement.' + prop + ' : document.body.' + prop + ' ) ) + \'px\' );';
      };

      var style = hs.createElement('style', {
        type: 'text/css'
      }, null, document.getElementsByTagName('HEAD')[0]),
          backCompat = document.compatMode == 'BackCompat';
      if (hs.expandCursor) addRule('.highslide img', 'cursor: url(' + hs.graphicsDir + hs.expandCursor + '), pointer !important;');
      addRule('.highslide-viewport-size', hs.ie && (hs.uaVersion < 7 || backCompat) ? 'position: absolute; ' + 'left:' + fix('scrollLeft') + 'top:' + fix('scrollTop') + 'width:' + fix('clientWidth') + 'height:' + fix('clientHeight') : 'position: fixed; width: 100%; height: 100%; left: 0; top: 0');
    }
  });
  hs.addEventListener(window, 'resize', function () {
    hs.getPageSize();
    if (hs.viewport) for (var i = 0; i < hs.viewport.childNodes.length; i++) {
      var node = hs.viewport.childNodes[i],
          exp = hs.getExpander(node);
      exp.positionOverlay(node);
      if (node.hsId == 'thumbstrip') exp.slideshow.thumbstrip.selectThumb();
    }
  });
  hs.addEventListener(document, 'mousemove', function (e) {
    hs.mouse = {
      x: e.clientX,
      y: e.clientY
    };
  });
  hs.addEventListener(document, 'mousedown', hs.mouseClickHandler);
  hs.addEventListener(document, 'mouseup', hs.mouseClickHandler);
  hs.addEventListener(document, 'ready', hs.setClickEvents);
  hs.addEventListener(window, 'load', hs.preloadImages);
  hs.addEventListener(window, 'load', hs.preloadAjax);
}

/* harmony default export */ __webpack_exports__["default"] = (hs);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hc3NldHMvdmVuZG9yL2hpZ2hzbGlkZS9oaWdoc2xpZGUtZnVsbC5qcyJdLCJuYW1lcyI6WyJocyIsImxhbmciLCJjc3NEaXJlY3Rpb24iLCJsb2FkaW5nVGV4dCIsImxvYWRpbmdUaXRsZSIsImZvY3VzVGl0bGUiLCJmdWxsRXhwYW5kVGl0bGUiLCJjcmVkaXRzVGV4dCIsImNyZWRpdHNUaXRsZSIsInByZXZpb3VzVGV4dCIsIm5leHRUZXh0IiwibW92ZVRleHQiLCJjbG9zZVRleHQiLCJjbG9zZVRpdGxlIiwicmVzaXplVGl0bGUiLCJwbGF5VGV4dCIsInBsYXlUaXRsZSIsInBhdXNlVGV4dCIsInBhdXNlVGl0bGUiLCJwcmV2aW91c1RpdGxlIiwibmV4dFRpdGxlIiwibW92ZVRpdGxlIiwiZnVsbEV4cGFuZFRleHQiLCJudW1iZXIiLCJyZXN0b3JlVGl0bGUiLCJncmFwaGljc0RpciIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiZXhwYW5kQ3Vyc29yIiwicmVzdG9yZUN1cnNvciIsImV4cGFuZER1cmF0aW9uIiwicmVzdG9yZUR1cmF0aW9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiekluZGV4Q291bnRlciIsImxvYWRpbmdPcGFjaXR5IiwiYWxsb3dNdWx0aXBsZUluc3RhbmNlcyIsIm51bWJlck9mSW1hZ2VzVG9QcmVsb2FkIiwib3V0bGluZVdoaWxlQW5pbWF0aW5nIiwib3V0bGluZVN0YXJ0T2Zmc2V0IiwicGFkVG9NaW5XaWR0aCIsImZ1bGxFeHBhbmRQb3NpdGlvbiIsImZ1bGxFeHBhbmRPcGFjaXR5Iiwic2hvd0NyZWRpdHMiLCJjcmVkaXRzSHJlZiIsImNyZWRpdHNUYXJnZXQiLCJlbmFibGVLZXlMaXN0ZW5lciIsIm9wZW5lclRhZ05hbWVzIiwidHJhbnNpdGlvbnMiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJkaW1taW5nT3BhY2l0eSIsImRpbW1pbmdEdXJhdGlvbiIsImFsbG93V2lkdGhSZWR1Y3Rpb24iLCJhbGxvd0hlaWdodFJlZHVjdGlvbiIsInByZXNlcnZlQ29udGVudCIsIm9iamVjdExvYWRUaW1lIiwiY2FjaGVBamF4IiwiYW5jaG9yIiwiYWxpZ24iLCJ0YXJnZXRYIiwidGFyZ2V0WSIsImRyYWdCeUhlYWRpbmciLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImFsbG93U2l6ZVJlZHVjdGlvbiIsIm91dGxpbmVUeXBlIiwic2tpbiIsImNvbnRyb2xzIiwiY29udGVudFdyYXBwZXIiLCJwcmVsb2FkVGhlc2VJbWFnZXMiLCJjb250aW51ZVByZWxvYWRpbmciLCJleHBhbmRlcnMiLCJvdmVycmlkZXMiLCJvdmVybGF5cyIsImlkQ291bnRlciIsIm9Qb3MiLCJ4IiwieSIsIm1vdXNlIiwiaGVhZGluZ092ZXJsYXkiLCJjYXB0aW9uT3ZlcmxheSIsInN3Zk9wdGlvbnMiLCJmbGFzaHZhcnMiLCJwYXJhbXMiLCJhdHRyaWJ1dGVzIiwidGltZXJzIiwic2xpZGVzaG93cyIsInBlbmRpbmdPdXRsaW5lcyIsInNsZWVwaW5nIiwicHJlbG9hZFRoZXNlQWpheCIsImNhY2hlQmluZGluZ3MiLCJjYWNoZWRHZXRzIiwiY2xvbmVzIiwib25SZWFkeSIsInVhVmVyc2lvbiIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwicGFyc2VGbG9hdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJpZSIsImFsbCIsIm9wZXJhIiwic2FmYXJpIiwidGVzdCIsImdlY2tvTWFjIiwiJCIsImlkIiwiZ2V0RWxlbWVudEJ5SWQiLCJwdXNoIiwiYXJyIiwidmFsIiwibGVuZ3RoIiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImF0dHJpYnMiLCJzdHlsZXMiLCJwYXJlbnQiLCJub3BhZCIsImVsIiwiZXh0ZW5kIiwic2V0U3R5bGVzIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImFwcGVuZENoaWxkIiwiaWVMdDkiLCJzdHlsZSIsInJlbW92ZUF0dHJpYnV0ZSIsImZpbHRlciIsImFuaW1hdGUiLCJwcm9wIiwib3B0Iiwic3RhcnQiLCJlbmQiLCJ1bml0IiwiYXJncyIsImFyZ3VtZW50cyIsImR1cmF0aW9uIiwiZWFzaW5nIiwiY29tcGxldGUiLCJNYXRoIiwiZWFzZUluUXVhZCIsImN1ckFuaW0iLCJuYW1lIiwiZSIsImZ4IiwiY3NzIiwiY3VzdG9tIiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImN1cnJlbnRTdHlsZSIsInJlcGxhY2UiLCJhIiwiYiIsInRvVXBwZXJDYXNlIiwiZ2V0UGFnZVNpemUiLCJkIiwidyIsImllYm9keSIsImNvbXBhdE1vZGUiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwicGFnZVhPZmZzZXQiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwic2VsZiIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsInBhZ2UiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJnZXRQb3NpdGlvbiIsInRhZ05hbWUiLCJpbWdzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpIiwidSIsInVzZU1hcCIsInBhcmVudE5vZGUiLCJwIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsIm9mZnNldFBhcmVudCIsImV4cGFuZCIsInR5cGUiLCJkaXNwbGF5IiwiY29udGFpbmVyIiwiZ2V0UGFyYW1zIiwiYXdha2UiLCJoYXNIdG1sRXhwYW5kZXJzIiwiRXhwYW5kZXIiLCJodG1sRXhwYW5kIiwiZ2V0U2VsZlJlbmRlcmVkIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwicmVwbGFjZUxhbmciLCJnZXRFbGVtZW50QnlDbGFzcyIsImVscyIsIlJlZ0V4cCIsInMiLCJyZSIsIm1hdGNoZXMiLCJzZXRDbGlja0V2ZW50cyIsImlzVW5vYnRydXNpdmVBbmNob3IiLCJoc0hhc1NldENsaWNrIiwidCIsImZpcmVFdmVudCIsImVsZW1lbnQiLCJvbmNsaWNrIiwib2JqZWN0VHlwZSIsImdldEFuY2hvcnMiLCJyZWwiLCJnZXRDYWNoZUJpbmRpbmciLCJjIiwiY2xvbmVOb2RlIiwicHJlbG9hZEFqYXgiLCJodG1scyIsImdldFBhcmFtIiwicHJlbG9hZEFqYXhFbGVtZW50IiwiY2FjaGUiLCJnZXROb2RlIiwiYWpheCIsIkFqYXgiLCJvbkVycm9yIiwib25Mb2FkIiwicnVuIiwiZm9jdXNUb3Btb3N0IiwidG9wWiIsInRvcG1vc3RLZXkiLCJleHAiLCJ6SW5kZXgiLCJ3cmFwcGVyIiwiZm9jdXNLZXkiLCJmb2N1cyIsInBhcmFtIiwiZ2V0U3JjIiwic3JjIiwiaHJlZiIsIm5vZGUiLCJjbG9uZSIsImRpc2NhcmRFbGVtZW50IiwiZ2FyYmFnZUJpbiIsImRpbSIsImRpbW1lciIsImlzTmV3Iiwib3duZXIiLCJjbG9zZSIsInZpc2liaWxpdHkiLCJvcGFjaXR5IiwicGl4RGltbWVyU2l6ZSIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleSIsImRpbW1pbmdHZWNrb0ZpeCIsImJhY2tncm91bmQiLCJ1bmRpbSIsInVwY29taW5nIiwidHJhbnNpdCIsImFkaiIsImxhc3QiLCJnZXRFeHBhbmRlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXlIYW5kbGVyIiwicHJldmlvdXNPck5leHQiLCJvcCIsImdldEFkamFjZW50QW5jaG9yIiwicHJldmlvdXMiLCJuZXh0IiwiZXZlbnQiLCJ0YXJnZXQiLCJzcmNFbGVtZW50IiwiZm9ybSIsImtleUNvZGUiLCJkb0Z1bGxFeHBhbmQiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwic2xpZGVzaG93IiwiaGl0U3BhY2UiLCJwYXVzZSIsInJlZ2lzdGVyT3ZlcmxheSIsIm92ZXJsYXkiLCJoc0lkIiwiYWRkU2xpZGVzaG93Iiwib3B0aW9ucyIsInNnIiwic2xpZGVzaG93R3JvdXAiLCJvIiwiZ2V0V3JhcHBlcktleSIsImV4cE9ubHkiLCJoc0tleSIsInVuZGVmaW5lZCIsImlzSHNBbmNob3IiLCJ0b1N0cmluZyIsInJlT3JkZXIiLCJpc0V4cGFuZGVkIiwib2JqIiwiZXZ0IiwibW91c2VDbGlja0hhbmRsZXIiLCJidXR0b24iLCJpc0Nsb3NpbmciLCJkcmFnQXJncyIsImxlZnQiLCJwb3MiLCJzaXplIiwidG9wIiwiY2xpY2tYIiwiY2xpZW50WCIsImNsaWNrWSIsImNsaWVudFkiLCJkcmFnSGFuZGxlciIsImNvbnRlbnQiLCJoYXNGb2N1c2VkIiwiZG9TaG93SGlkZSIsInN0eWxlUmVzdG9yZUN1cnNvciIsImN1cnNvciIsImhhc0RyYWdnZWQiLCJyZWxlYXNlTWFzayIsImlmcmFtZSIsInBvc2l0aW9uIiwiY2IiLCJkWCIsImRZIiwiZGlzdGFuY2UiLCJzcXJ0IiwicG93IiwiZHJhZ1NlbnNpdGl2aXR5IiwicmVzaXplIiwibW92ZVRvIiwid3JhcHBlck1vdXNlSGFuZGxlciIsIm92ZXIiLCJyZWxhdGVkVGFyZ2V0IiwiZnJvbUVsZW1lbnQiLCJ0b0VsZW1lbnQiLCJoaWRlT25Nb3VzZU91dCIsImR1ciIsImZ1bmMiLCJkZXRhY2hFdmVudCIsImF0dGFjaEV2ZW50IiwicHJlbG9hZEZ1bGxJbWFnZSIsImltZyIsIm9ubG9hZCIsInByZWxvYWRJbWFnZXMiLCJpbWFnZXMiLCJPdXRsaW5lIiwiY3VyIiwiaW5pdCIsImllTHQ3IiwiaWU2U1NMIiwicHJvdG9jb2wiLCJsYW5nRGVmYXVsdHMiLCJkaXJlY3Rpb24iLCJsb2FkaW5nIiwidGl0bGUiLCJ2aWV3cG9ydCIsImNsZWFyaW5nIiwiY2xlYXIiLCJwYWRkaW5nVG9wIiwibGluZWFyVHdlZW4iLCJlYXNlT3V0UXVhZCIsImhpZGVTZWxlY3RzIiwiaGlkZUlmcmFtZXMiLCJ2ZW5kb3IiLCJyZWFkeSIsImlzUmVhZHkiLCJ1cGRhdGVBbmNob3JzIiwiZ3JvdXBzIiwiaiIsImciLCJhbmNob3JzIiwiZWxlbSIsIm9yaWciLCJwcm90b3R5cGUiLCJ1cGRhdGUiLCJzdGVwIiwiX2RlZmF1bHQiLCJjYWxsIiwibm93IiwiZnJvbSIsInRvIiwic3RhcnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJzdGF0ZSIsImdvdG9FbmQiLCJ0aW1lcklkIiwic2V0SW50ZXJ2YWwiLCJzcGxpY2UiLCJjbGVhckludGVydmFsIiwiZG9uZSIsIm4iLCJ2IiwidHIiLCJoYXNBbHBoYUltYWdlTG9hZGVyIiwidGFibGUiLCJjZWxsU3BhY2luZyIsImJvcmRlckNvbGxhcHNlIiwidGJvZHkiLCJ0ZCIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsInByZWxvYWRHcmFwaGljIiwib3V0bGluZXNEaXIiLCJhcHBlbmRUbyIsImdyYXBoaWMiLCJwVGhpcyIsIm9uR3JhcGhpY0xvYWQiLCJvZmZzZXQiLCJkaXYiLCJvdmVyZmxvdyIsImRlc3Ryb3kiLCJzZXRQb3NpdGlvbiIsInZpcyIsInN0bCIsImdldCIsImgiLCJoaWRlIiwiRGltZW5zaW9uIiwidWN3aCIsIndoIiwidWNsdCIsImx0IiwidWNyYiIsInJiIiwicDEiLCJwMiIsInRwb3MiLCJ0YiIsImNsaWVudFNpemUiLCJtYXJnaW5NaW4iLCJtYXJnaW5NYXgiLCJvdXRsaW5lIiwiaW1nU2l6ZSIsInJvdW5kIiwiY2FsY0JvcmRlcnMiLCJjYWxjVGh1bWIiLCJwYXJzZUludCIsImNhbGNFeHBhbmRlZCIsImp1c3RpZnkiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsIm1pbiIsImZ1bGwiLCJtaW5TaXplIiwiaXNJbWFnZSIsInVzZUJveCIsInNjcm9sbCIsInNldFNpemUiLCJtYXgiLCJpRG9jIiwiaXNIdG1sIiwic2Nyb2xsZXJEaXYiLCJzaXplRGlmZiIsImlubmVyQ29udGVudCIsIm1lZGl1bUNvbnRlbnQiLCJvdmVybGF5Qm94Iiwic2l6ZU92ZXJsYXlCb3giLCJkaXNhYmxlIiwiZW5hYmxlIiwic2V0UG9zIiwiY29udGVudFR5cGUiLCJyZWFkeVN0YXRlIiwidGh1bWJuYWlsSWQiLCJ0aHVtYiIsInRodW1ic1VzZXJTZXRJZCIsImFsbG93U2ltdWx0YW5lb3VzTG9hZGluZyIsIm9uTG9hZFN0YXJ0ZWQiLCJjYW5jZWxMb2FkaW5nIiwicGFnZU9yaWdpbiIsImdldEltYWdlTWFwQXJlYUNvcnJlY3Rpb24iLCJ3cmFwcGVyQ2xhc3NOYW1lIiwib25tb3VzZW92ZXIiLCJvbm1vdXNlb3V0IiwiY29ubmVjdE91dGxpbmUiLCJzaG93TG9hZGluZyIsImVycm9yIiwiZGVidWciLCJhbGVydCIsImxpbmVOdW1iZXIiLCJtZXNzYWdlIiwibCIsInRndCIsInNldFRpbWVvdXQiLCJpbWFnZUNyZWF0ZSIsImNvbnRlbnRMb2FkZWQiLCJibG9ja1JpZ2h0Q2xpY2siLCJvbmNvbnRleHRtZW51IiwiZmx1c2hJbWdTaXplIiwiaHRtbENyZWF0ZSIsImNvbnRlbnRJZCIsImdldElubGluZSIsIm1haW5jb250ZW50Iiwic2V0T2JqQ29udGFpbmVyU2l6ZSIsIm9mZnNldFdpZHRoIiwid3JpdGVFeHRlbmRlZENvbnRlbnQiLCJodG1sR2V0U2l6ZSIsImluaXRTbGlkZXNob3ciLCJnZXRPdmVybGF5cyIsInJhdGlvIiwiaHRtbFNpemVPcGVyYXRpb25zIiwiY29ycmVjdFJhdGlvIiwiZml0T3ZlcmxheUJveCIsInNzIiwiZml4ZWRDb250cm9scyIsIm92ZXJsYXlPcHRpb25zIiwiY3JlYXRlRnVsbEV4cGFuZCIsInNob3ciLCJhdXRvIiwib2JqZWN0V2lkdGgiLCJvYmplY3RIZWlnaHQiLCJoYXNFeHRlbmRlZENvbnRlbnQiLCJydWxlciIsIm5ld1dpZHRoIiwiaERpZmYiLCJvZmZzZXRIZWlnaHQiLCJjb3JyZWN0SWZyYW1lU2l6ZSIsIndtb2RlIiwic3dmb2JqZWN0IiwiZW1iZWRTV0YiLCJ2ZXJzaW9uIiwiZXhwcmVzc0luc3RhbGxTd2Z1cmwiLCJnZXRJZnJhbWVQYWdlSGVpZ2h0IiwicmVtb3ZlQ2hpbGQiLCJuZXdIZWlnaHQiLCJkb2MiLCJjb250ZW50RG9jdW1lbnQiLCJjb250ZW50V2luZG93Iiwid0RpZmYiLCJhYnMiLCJzY3JvbGxpbmdDb250ZW50IiwiY05vZGUiLCJub2RlTmFtZSIsImluc2VydEJlZm9yZSIsImtkZUJ1Z0NvcnIiLCJhcmVhIiwiY29vcmRzIiwic3BsaXQiLCJzaGFwZSIsIm1heFgiLCJtYXhZIiwibWluWCIsIm1pblkiLCJtb3ZlT25seSIsInRndEFyciIsImhhc01vdmVkTWluIiwiYWxsb3dSZWR1Y2UiLCJmbG9vciIsInRtcE1pbiIsImNoYW5nZWQiLCJ4U2l6ZSIsInlTaXplIiwicmVmbG93IiwidGh1bWJzdHJpcCIsInNlbGVjdFRodW1iIiwiY2hhbmdlU2l6ZSIsInVwIiwidHJhbnMiLCJvdGhlciIsImRlc3Ryb3lPdmVybGF5cyIsImVhc2luZ0Nsb3NlIiwiYWZ0ZXIiLCJhZnRlckV4cGFuZCIsImFmdGVyQ2xvc2UiLCJmYWRlSW5PdXQiLCJmYWMiLCJmYWRlIiwiZGlyIiwic3RhcnRPZmYiLCJlbmRPZmYiLCJjcm9zc2ZhZGUiLCJsYXN0WCIsImxhc3RZIiwiZmFkZUJveCIsIm5hbWVzIiwib2xkSW1nIiwibmV3SW1nIiwiaW52UG9zIiwicHJvcHMiLCJ4aW1nU2l6ZSIsInhpbWdQYWQiLCJ5aW1nU2l6ZSIsInlpbWdQYWQiLCJ4cG9zIiwieXBvcyIsInhzaXplIiwieHAxIiwieHAyIiwieXNpemUiLCJ5cDEiLCJ5cDIiLCJjbGlwIiwiaHRtbFByZXBhcmVDbG9zZSIsInJldXNlT3ZlcmxheSIsIm9EaXYiLCJnZW5PdmVybGF5Qm94IiwicmV1c2UiLCJwcmVwYXJlTmV4dE91dGxpbmUiLCJtWCIsIm1ZIiwibW91c2VJc092ZXIiLCJzaG93T3ZlcmxheXMiLCJwcmVsb2FkTmV4dCIsImN1cnJlbnQiLCJnZXRBbmNob3JJbmRleCIsImFzIiwicmVwZWF0IiwiZ2V0TnVtYmVyIiwibnVtYmVyUG9zaXRpb24iLCJTbGlkZXNob3ciLCJleHBLZXkiLCJjaGVja0ZpcnN0QW5kTGFzdCIsImNyZWF0ZU92ZXJsYXkiLCJvdmVybGF5SWQiLCJhZGQiLCJhdXRvcGxheSIsInBsYXkiLCJpbnRlcnZhbCIsIndyaXRlQ3JlZGl0cyIsImNyZWRpdHMiLCJjcmVkaXRzUG9zaXRpb24iLCJ0eXBlcyIsImFkZE92ZXJsYXkiLCJldmFsIiwibmV4dFNpYmxpbmciLCJzaG93SGlkZUVsZW1lbnRzIiwiZ2V0QXR0cmlidXRlIiwiaGlkZGVuQnkiLCJzZXRBdHRyaWJ1dGUiLCJvcmlnUHJvcCIsImVsUG9zIiwiY2xlYXJzWCIsImNsZWFyc1kiLCJ3cmFwcGVyS2V5IiwiaW5kZXhPZiIsImJsdXJFeHAiLCJyIiwicmVzaXplVG8iLCJtYXNrIiwiU3RvcFBsYXkiLCJkZXN0cm95T2JqZWN0IiwicmVtb3ZlU1dGIiwic2xlZXAiLCJ6IiwicmVsVG9WUCIsInJlbGF0aXZlVG8iLCJodG1sIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJnb3RPdmVybGF5cyIsInBvc2l0aW9uT3ZlcmxheSIsIm9mZlgiLCJvZmZZIiwicmlnaHQiLCJib3R0b20iLCJwYXJPZmYiLCJjYXB0aW9uIiwiaGVhZGluZyIsInRJZCIsInVzZU9uSHRtbCIsIm9zIiwiZG9XcmFwcGVyIiwiZG9QYW5lbHMiLCJpZTYiLCJmdWxsRXhwYW5kTGFiZWwiLCJjaGlsZE5vZGVzIiwicHJlIiwieGhyIiwiY2FjaGVkR2V0IiwiZ2V0RWxlbWVudENvbnRlbnQiLCJsb2FkSFRNTCIsIlhNTEh0dHBSZXF1ZXN0IiwiQWN0aXZlWE9iamVjdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsImZvcmNlQWpheFJlbG9hZCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsInJlc3BvbnNlVGV4dCIsInJlZ0JvZHkiLCJ3cml0ZSIsImR5bmFtaWNhbGx5VXBkYXRlQW5jaG9ycyIsInVzZUNvbnRyb2xzIiwiZ2V0Q29udHJvbHMiLCJUaHVtYnN0cmlwIiwiYnV0dG9ucyIsImJ0biIsInNscyIsIndhaXQiLCJjbGVhclRpbWVvdXQiLCJtb3ZlIiwiZG9tIiwibW9kZSIsImRlbHRhIiwiaXNYIiwic2Nyb2xsQnkiLCJncm91cCIsImFjdGl2ZSIsImNlbGwiLCJvdmVybGF5V2lkdGgiLCJtaW5UYmxQb3MiLCJjdXJUYmxQb3MiLCJ0YmxQb3MiLCJtZ25SaWdodCIsImFjdGl2ZUxlZnQiLCJhY3RpdmVSaWdodCIsIm1hcmtlclBvcyIsIm1hcmtlciIsInNjcm9sbFVwIiwic2Nyb2xsRG93biIsImZsb2F0TW9kZSIsInRyZWUiLCJkb21DaCIsImZpcnN0Q2hpbGQiLCJwSSIsInN0cmlwSXRlbUZvcm1hdHRlciIsIm9ubW91c2V3aGVlbCIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJwYXNzaXZlIiwiSHNFeHBhbmRlciIsImRvU2Nyb2xsIiwiY2FsbGVlIiwiYWRkUnVsZSIsInNlbCIsImRlYyIsImJhY2tDb21wYXQiLCJzdHlsZVNoZWV0cyIsImNyZWF0ZVRleHROb2RlIiwiZml4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBUUEsSUFBSSxDQUFDQSxFQUFMLEVBQVM7QUFBRSxNQUFJQSxFQUFFLEdBQUc7QUFDcEI7QUFDQUMsUUFBSSxFQUFHO0FBQ05DLGtCQUFZLEVBQUUsS0FEUjtBQUVOQyxpQkFBVyxFQUFHLFlBRlI7QUFHTkMsa0JBQVksRUFBRyxpQkFIVDtBQUlOQyxnQkFBVSxFQUFHLHlCQUpQO0FBS05DLHFCQUFlLEVBQUcsMkJBTFo7QUFNTkMsaUJBQVcsRUFBRyxnQ0FOUjtBQU9OQyxrQkFBWSxFQUFHLGlDQVBUO0FBUU5DLGtCQUFZLEVBQUcsVUFSVDtBQVNOQyxjQUFRLEVBQUcsTUFUTDtBQVVOQyxjQUFRLEVBQUcsTUFWTDtBQVdOQyxlQUFTLEVBQUcsT0FYTjtBQVlOQyxnQkFBVSxFQUFHLGFBWlA7QUFhTkMsaUJBQVcsRUFBRyxRQWJSO0FBY05DLGNBQVEsRUFBRyxNQWRMO0FBZU5DLGVBQVMsRUFBRywyQkFmTjtBQWdCTkMsZUFBUyxFQUFHLE9BaEJOO0FBaUJOQyxnQkFBVSxFQUFHLDRCQWpCUDtBQWtCTkMsbUJBQWEsRUFBRyx1QkFsQlY7QUFtQk5DLGVBQVMsRUFBRyxvQkFuQk47QUFvQk5DLGVBQVMsRUFBRyxNQXBCTjtBQXFCTkMsb0JBQWMsRUFBRyxLQXJC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NU8sTUFBcEIsRUFBNEIsTUFBNUIsRUFBb0MxQixFQUFFLENBQUNpTyxXQUF2QztBQUNDOztBQUVjak8saUVBQWYsRSIsImZpbGUiOiJocy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBcbiAqIE5hbWU6ICAgIEhpZ2hzbGlkZSBKU1xuICogVmVyc2lvbjogNS4wLjAgKDIwMTYtMDUtMjQpXG4gKiBDb25maWc6ICBkZWZhdWx0ICtldmVudHMgK3Vub2J0cnVzaXZlICtpbWFnZW1hcCArc2xpZGVzaG93ICtwb3NpdGlvbmluZyArdHJhbnNpdGlvbnMgK3ZpZXdwb3J0ICt0aHVtYnN0cmlwICtpbmxpbmUgK2FqYXggK2lmcmFtZSArZmxhc2hcbiAqIEF1dGhvcjogIFRvcnN0ZWluIEjDuG5zaVxuICogU3VwcG9ydDogd3d3LmhpZ2hzbGlkZS5jb20vc3VwcG9ydFxuICogTGljZW5zZTogTUlUXG4gKi9cbmlmICghaHMpIHsgdmFyIGhzID0ge1xuLy8gTGFuZ3VhZ2Ugc3RyaW5nc1xubGFuZyA6IHtcblx0Y3NzRGlyZWN0aW9uOiAnbHRyJyxcblx0bG9hZGluZ1RleHQgOiAnTG9hZGluZy4uLicsXG5cdGxvYWRpbmdUaXRsZSA6ICdDbGljayB0byBjYW5jZWwnLFxuXHRmb2N1c1RpdGxlIDogJ0NsaWNrIHRvIGJyaW5nIHRvIGZyb250Jyxcblx0ZnVsbEV4cGFuZFRpdGxlIDogJ0V4cGFuZCB0byBhY3R1YWwgc2l6ZSAoZiknLFxuXHRjcmVkaXRzVGV4dCA6ICdQb3dlcmVkIGJ5IDxpPkhpZ2hzbGlkZSBKUzwvaT4nLFxuXHRjcmVkaXRzVGl0bGUgOiAnR28gdG8gdGhlIEhpZ2hzbGlkZSBKUyBob21lcGFnZScsXG5cdHByZXZpb3VzVGV4dCA6ICdQcmV2aW91cycsXG5cdG5leHRUZXh0IDogJ05leHQnLCBcblx0bW92ZVRleHQgOiAnTW92ZScsXG5cdGNsb3NlVGV4dCA6ICdDbG9zZScsIFxuXHRjbG9zZVRpdGxlIDogJ0Nsb3NlIChlc2MpJywgXG5cdHJlc2l6ZVRpdGxlIDogJ1Jlc2l6ZScsXG5cdHBsYXlUZXh0IDogJ1BsYXknLFxuXHRwbGF5VGl0bGUgOiAnUGxheSBzbGlkZXNob3cgKHNwYWNlYmFyKScsXG5cdHBhdXNlVGV4dCA6ICdQYXVzZScsXG5cdHBhdXNlVGl0bGUgOiAnUGF1c2Ugc2xpZGVzaG93IChzcGFjZWJhciknLFxuXHRwcmV2aW91c1RpdGxlIDogJ1ByZXZpb3VzIChhcnJvdyBsZWZ0KScsXG5cdG5leHRUaXRsZSA6ICdOZXh0IChhcnJvdyByaWdodCknLFxuXHRtb3ZlVGl0bGUgOiAnTW92ZScsXG5cdGZ1bGxFeHBhbmRUZXh0IDogJzE6MScsXG5cdG51bWJlcjogJ0ltYWdlICUxIG9mICUyJyxcblx0cmVzdG9yZVRpdGxlIDogJ0NsaWNrIHRvIGNsb3NlIGltYWdlLCBjbGljayBhbmQgZHJhZyB0byBtb3ZlLiBVc2UgYXJyb3cga2V5cyBmb3IgbmV4dCBhbmQgcHJldmlvdXMuJ1xufSxcbi8vIFNlZSBodHRwOi8vaGlnaHNsaWRlLmNvbS9yZWYgZm9yIGV4YW1wbGVzIG9mIHNldHRpbmdzICBcbmdyYXBoaWNzRGlyIDogd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvYXNzZXRzL2ltYWdlcy9oaWdoc2xpZGUvJyxcbmV4cGFuZEN1cnNvciA6ICd6b29taW4uY3VyJywgLy8gbnVsbCBkaXNhYmxlc1xucmVzdG9yZUN1cnNvciA6ICd6b29tb3V0LmN1cicsIC8vIG51bGwgZGlzYWJsZXNcbmV4cGFuZER1cmF0aW9uIDogMjUwLCAvLyBtaWxsaXNlY29uZHNcbnJlc3RvcmVEdXJhdGlvbiA6IDI1MCxcbm1hcmdpbkxlZnQgOiAxNSxcbm1hcmdpblJpZ2h0IDogMTUsXG5tYXJnaW5Ub3AgOiAxNSxcbm1hcmdpbkJvdHRvbSA6IDE1LFxuekluZGV4Q291bnRlciA6IDEwMDEsIC8vIGFkanVzdCB0byBvdGhlciBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgZWxlbWVudHNcbmxvYWRpbmdPcGFjaXR5IDogMC43NSxcbmFsbG93TXVsdGlwbGVJbnN0YW5jZXM6IHRydWUsXG5udW1iZXJPZkltYWdlc1RvUHJlbG9hZCA6IDUsXG5vdXRsaW5lV2hpbGVBbmltYXRpbmcgOiAyLCAvLyAwID0gbmV2ZXIsIDEgPSBhbHdheXMsIDIgPSBIVE1MIG9ubHkgXG5vdXRsaW5lU3RhcnRPZmZzZXQgOiAzLCAvLyBlbmRzIGF0IDEwXG5wYWRUb01pbldpZHRoIDogZmFsc2UsIC8vIHBhZCB0aGUgcG9wdXAgd2lkdGggdG8gbWFrZSByb29tIGZvciB3aWRlIGNhcHRpb25cbmZ1bGxFeHBhbmRQb3NpdGlvbiA6ICdib3R0b20gcmlnaHQnLFxuZnVsbEV4cGFuZE9wYWNpdHkgOiAxLFxuc2hvd0NyZWRpdHMgOiBmYWxzZSwgLy8geW91IGNhbiBzZXQgdGhpcyB0byBmYWxzZSBpZiB5b3Ugd2FudFxuY3JlZGl0c0hyZWYgOiAnaHR0cDovL2hpZ2hzbGlkZS5jb20vJyxcbmNyZWRpdHNUYXJnZXQgOiAnX3NlbGYnLFxuZW5hYmxlS2V5TGlzdGVuZXIgOiB0cnVlLFxub3BlbmVyVGFnTmFtZXMgOiBbJ2EnLCAnYXJlYSddLCAvLyBBZGQgbW9yZSB0byBhbGxvdyBzbGlkZXNob3cgaW5kZXhpbmdcbnRyYW5zaXRpb25zIDogW10sXG50cmFuc2l0aW9uRHVyYXRpb246IDI1MCxcbmRpbW1pbmdPcGFjaXR5OiAwLCAvLyBMaWdodGJveCBzdHlsZSBkaW1taW5nIGJhY2tncm91bmRcbmRpbW1pbmdEdXJhdGlvbjogNTAsIC8vIDAgZm9yIGluc3RhbnQgZGltbWluZ1xuXG5hbGxvd1dpZHRoUmVkdWN0aW9uIDogZmFsc2UsXG5hbGxvd0hlaWdodFJlZHVjdGlvbiA6IHRydWUsXG5wcmVzZXJ2ZUNvbnRlbnQgOiB0cnVlLCAvLyBQcmVzZXJ2ZSBjaGFuZ2VzIG1hZGUgdG8gdGhlIGNvbnRlbnQgYW5kIHBvc2l0aW9uIG9mIEhUTUwgcG9wdXBzLlxub2JqZWN0TG9hZFRpbWUgOiAnYmVmb3JlJywgLy8gTG9hZCBpZnJhbWVzICdiZWZvcmUnIG9yICdhZnRlcicgZXhwYW5zaW9uLlxuY2FjaGVBamF4IDogdHJ1ZSwgLy8gQ2FjaGUgYWpheCBwb3B1cHMgZm9yIGluc3RhbnQgZGlzcGxheS4gQ2FuIGJlIG92ZXJyaWRkZW4gZm9yIGVhY2ggcG9wdXAuXG5hbmNob3IgOiAnYXV0bycsIC8vIHdoZXJlIHRoZSBpbWFnZSBleHBhbmRzIGZyb21cbmFsaWduIDogJ2F1dG8nLCAvLyBwb3NpdGlvbiBpbiB0aGUgY2xpZW50IChvdmVycmlkZXMgYW5jaG9yKVxudGFyZ2V0WDogbnVsbCwgLy8gdGhlIGlkIG9mIGEgdGFyZ2V0IGVsZW1lbnRcbnRhcmdldFk6IG51bGwsXG5kcmFnQnlIZWFkaW5nOiB0cnVlLFxubWluV2lkdGg6IDIwMCxcbm1pbkhlaWdodDogMjAwLFxuYWxsb3dTaXplUmVkdWN0aW9uOiB0cnVlLCAvLyBhbGxvdyB0aGUgaW1hZ2UgdG8gcmVkdWNlIHRvIGZpdCBjbGllbnQgc2l6ZS4gSWYgZmFsc2UsIHRoaXMgb3ZlcnJpZGVzIG1pbldpZHRoIGFuZCBtaW5IZWlnaHRcbm91dGxpbmVUeXBlIDogJ2Ryb3Atc2hhZG93JywgLy8gc2V0IG51bGwgdG8gZGlzYWJsZSBvdXRsaW5lc1xuc2tpbiA6IHtcblx0Y29udHJvbHM6XG5cdFx0JzxkaXYgY2xhc3M9XCJoaWdoc2xpZGUtY29udHJvbHNcIj48dWw+Jytcblx0XHRcdCc8bGkgY2xhc3M9XCJoaWdoc2xpZGUtcHJldmlvdXNcIj4nK1xuXHRcdFx0XHQnPGEgaHJlZj1cIiNcIiB0aXRsZT1cIntocy5sYW5nLnByZXZpb3VzVGl0bGV9XCI+Jytcblx0XHRcdFx0JzxzcGFuPntocy5sYW5nLnByZXZpb3VzVGV4dH08L3NwYW4+PC9hPicrXG5cdFx0XHQnPC9saT4nK1xuXHRcdFx0JzxsaSBjbGFzcz1cImhpZ2hzbGlkZS1wbGF5XCI+Jytcblx0XHRcdFx0JzxhIGhyZWY9XCIjXCIgdGl0bGU9XCJ7aHMubGFuZy5wbGF5VGl0bGV9XCI+Jytcblx0XHRcdFx0JzxzcGFuPntocy5sYW5nLnBsYXlUZXh0fTwvc3Bhbj48L2E+Jytcblx0XHRcdCc8L2xpPicrXG5cdFx0XHQnPGxpIGNsYXNzPVwiaGlnaHNsaWRlLXBhdXNlXCI+Jytcblx0XHRcdFx0JzxhIGhyZWY9XCIjXCIgdGl0bGU9XCJ7aHMubGFuZy5wYXVzZVRpdGxlfVwiPicrXG5cdFx0XHRcdCc8c3Bhbj57aHMubGFuZy5wYXVzZVRleHR9PC9zcGFuPjwvYT4nK1xuXHRcdFx0JzwvbGk+Jytcblx0XHRcdCc8bGkgY2xhc3M9XCJoaWdoc2xpZGUtbmV4dFwiPicrXG5cdFx0XHRcdCc8YSBocmVmPVwiI1wiIHRpdGxlPVwie2hzLmxhbmcubmV4dFRpdGxlfVwiPicrXG5cdFx0XHRcdCc8c3Bhbj57aHMubGFuZy5uZXh0VGV4dH08L3NwYW4+PC9hPicrXG5cdFx0XHQnPC9saT4nK1xuXHRcdFx0JzxsaSBjbGFzcz1cImhpZ2hzbGlkZS1tb3ZlXCI+Jytcblx0XHRcdFx0JzxhIGhyZWY9XCIjXCIgdGl0bGU9XCJ7aHMubGFuZy5tb3ZlVGl0bGV9XCI+Jytcblx0XHRcdFx0JzxzcGFuPntocy5sYW5nLm1vdmVUZXh0fTwvc3Bhbj48L2E+Jytcblx0XHRcdCc8L2xpPicrXG5cdFx0XHQnPGxpIGNsYXNzPVwiaGlnaHNsaWRlLWZ1bGwtZXhwYW5kXCI+Jytcblx0XHRcdFx0JzxhIGhyZWY9XCIjXCIgdGl0bGU9XCJ7aHMubGFuZy5mdWxsRXhwYW5kVGl0bGV9XCI+Jytcblx0XHRcdFx0JzxzcGFuPntocy5sYW5nLmZ1bGxFeHBhbmRUZXh0fTwvc3Bhbj48L2E+Jytcblx0XHRcdCc8L2xpPicrXG5cdFx0XHQnPGxpIGNsYXNzPVwiaGlnaHNsaWRlLWNsb3NlXCI+Jytcblx0XHRcdFx0JzxhIGhyZWY9XCIjXCIgdGl0bGU9XCJ7aHMubGFuZy5jbG9zZVRpdGxlfVwiID4nK1xuXHRcdFx0XHQnPHNwYW4+e2hzLmxhbmcuY2xvc2VUZXh0fTwvc3Bhbj48L2E+Jytcblx0XHRcdCc8L2xpPicrXG5cdFx0JzwvdWw+PC9kaXY+J1xuXHQsXG5cdGNvbnRlbnRXcmFwcGVyOlxuXHRcdCc8ZGl2IGNsYXNzPVwiaGlnaHNsaWRlLWhlYWRlclwiPjx1bD4nK1xuXHRcdFx0JzxsaSBjbGFzcz1cImhpZ2hzbGlkZS1wcmV2aW91c1wiPicrXG5cdFx0XHRcdCc8YSBocmVmPVwiI1wiIHRpdGxlPVwie2hzLmxhbmcucHJldmlvdXNUaXRsZX1cIiBvbmNsaWNrPVwicmV0dXJuIGhzLnByZXZpb3VzKHRoaXMpXCI+Jytcblx0XHRcdFx0JzxzcGFuPntocy5sYW5nLnByZXZpb3VzVGV4dH08L3NwYW4+PC9hPicrXG5cdFx0XHQnPC9saT4nK1xuXHRcdFx0JzxsaSBjbGFzcz1cImhpZ2hzbGlkZS1uZXh0XCI+Jytcblx0XHRcdFx0JzxhIGhyZWY9XCIjXCIgdGl0bGU9XCJ7aHMubGFuZy5uZXh0VGl0bGV9XCIgb25jbGljaz1cInJldHVybiBocy5uZXh0KHRoaXMpXCI+Jytcblx0XHRcdFx0JzxzcGFuPntocy5sYW5nLm5leHRUZXh0fTwvc3Bhbj48L2E+Jytcblx0XHRcdCc8L2xpPicrXG5cdFx0XHQnPGxpIGNsYXNzPVwiaGlnaHNsaWRlLW1vdmVcIj4nK1xuXHRcdFx0XHQnPGEgaHJlZj1cIiNcIiB0aXRsZT1cIntocy5sYW5nLm1vdmVUaXRsZX1cIiBvbmNsaWNrPVwicmV0dXJuIGZhbHNlXCI+Jytcblx0XHRcdFx0JzxzcGFuPntocy5sYW5nLm1vdmVUZXh0fTwvc3Bhbj48L2E+Jytcblx0XHRcdCc8L2xpPicrXG5cdFx0XHQnPGxpIGNsYXNzPVwiaGlnaHNsaWRlLWNsb3NlXCI+Jytcblx0XHRcdFx0JzxhIGhyZWY9XCIjXCIgdGl0bGU9XCJ7aHMubGFuZy5jbG9zZVRpdGxlfVwiIG9uY2xpY2s9XCJyZXR1cm4gaHMuY2xvc2UodGhpcylcIj4nK1xuXHRcdFx0XHQnPHNwYW4+e2hzLmxhbmcuY2xvc2VUZXh0fTwvc3Bhbj48L2E+Jytcblx0XHRcdCc8L2xpPicrXG5cdFx0JzwvdWw+PC9kaXY+Jytcblx0XHQnPGRpdiBjbGFzcz1cImhpZ2hzbGlkZS1ib2R5XCI+PC9kaXY+Jytcblx0XHQnPGRpdiBjbGFzcz1cImhpZ2hzbGlkZS1mb290ZXJcIj48ZGl2PicrXG5cdFx0XHQnPHNwYW4gY2xhc3M9XCJoaWdoc2xpZGUtcmVzaXplXCIgdGl0bGU9XCJ7aHMubGFuZy5yZXNpemVUaXRsZX1cIj48c3Bhbj48L3NwYW4+PC9zcGFuPicrXG5cdFx0JzwvZGl2PjwvZGl2Pidcbn0sXG4vLyBFTkQgT0YgWU9VUiBTRVRUSU5HU1xuXG5cbi8vIGRlY2xhcmUgaW50ZXJuYWwgcHJvcGVydGllc1xucHJlbG9hZFRoZXNlSW1hZ2VzIDogW10sXG5jb250aW51ZVByZWxvYWRpbmc6IHRydWUsXG5leHBhbmRlcnMgOiBbXSxcbm92ZXJyaWRlcyA6IFtcblx0J2FsbG93U2l6ZVJlZHVjdGlvbicsXG5cdCd1c2VCb3gnLFxuXHQnYW5jaG9yJyxcblx0J2FsaWduJyxcblx0J3RhcmdldFgnLFxuXHQndGFyZ2V0WScsXG5cdCdvdXRsaW5lVHlwZScsXG5cdCdvdXRsaW5lV2hpbGVBbmltYXRpbmcnLFxuXHQnY2FwdGlvbklkJyxcblx0J2NhcHRpb25UZXh0Jyxcblx0J2NhcHRpb25FdmFsJyxcblx0J2NhcHRpb25PdmVybGF5Jyxcblx0J2hlYWRpbmdJZCcsXG5cdCdoZWFkaW5nVGV4dCcsXG5cdCdoZWFkaW5nRXZhbCcsXG5cdCdoZWFkaW5nT3ZlcmxheScsXG5cdCdjcmVkaXRzUG9zaXRpb24nLFxuXHQnZHJhZ0J5SGVhZGluZycsXG5cdCdhdXRvcGxheScsXG5cdCdudW1iZXJQb3NpdGlvbicsXG5cdCd0cmFuc2l0aW9ucycsXG5cdCdkaW1taW5nT3BhY2l0eScsXG5cdFxuXHQnd2lkdGgnLFxuXHQnaGVpZ2h0Jyxcblx0XG5cdCdjb250ZW50SWQnLFxuXHQnYWxsb3dXaWR0aFJlZHVjdGlvbicsXG5cdCdhbGxvd0hlaWdodFJlZHVjdGlvbicsXG5cdCdwcmVzZXJ2ZUNvbnRlbnQnLFxuXHQnbWFpbmNvbnRlbnRJZCcsXG5cdCdtYWluY29udGVudFRleHQnLFxuXHQnbWFpbmNvbnRlbnRFdmFsJyxcblx0J29iamVjdFR5cGUnLFx0XG5cdCdjYWNoZUFqYXgnLFx0XG5cdCdvYmplY3RXaWR0aCcsXG5cdCdvYmplY3RIZWlnaHQnLFxuXHQnb2JqZWN0TG9hZFRpbWUnLFx0XG5cdCdzd2ZPcHRpb25zJyxcblx0J3dyYXBwZXJDbGFzc05hbWUnLFxuXHQnbWluV2lkdGgnLFxuXHQnbWluSGVpZ2h0Jyxcblx0J21heFdpZHRoJyxcblx0J21heEhlaWdodCcsXG5cdCdwYWdlT3JpZ2luJyxcblx0J3NsaWRlc2hvd0dyb3VwJyxcblx0J2Vhc2luZycsXG5cdCdlYXNpbmdDbG9zZScsXG5cdCdmYWRlSW5PdXQnLFxuXHQnc3JjJ1xuXSxcbm92ZXJsYXlzIDogW10sXG5pZENvdW50ZXIgOiAwLFxub1BvcyA6IHtcblx0eDogWydsZWZ0cGFuZWwnLCAnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnLCAncmlnaHRwYW5lbCddLFxuXHR5OiBbJ2Fib3ZlJywgJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJywgJ2JlbG93J11cbn0sXG5tb3VzZToge30sXG5oZWFkaW5nT3ZlcmxheToge30sXG5jYXB0aW9uT3ZlcmxheToge30sXG5zd2ZPcHRpb25zOiB7IGZsYXNodmFyczoge30sIHBhcmFtczoge30sIGF0dHJpYnV0ZXM6IHt9IH0sXG50aW1lcnMgOiBbXSxcblxuc2xpZGVzaG93cyA6IFtdLFxuXG5wZW5kaW5nT3V0bGluZXMgOiB7fSxcbnNsZWVwaW5nIDogW10sXG5wcmVsb2FkVGhlc2VBamF4IDogW10sXG5jYWNoZUJpbmRpbmdzIDogW10sXG5jYWNoZWRHZXRzIDoge30sXG5jbG9uZXMgOiB7fSxcbm9uUmVhZHk6IFtdLFxudWFWZXJzaW9uOiBkb2N1bWVudC5kb2N1bWVudE1vZGUgfHxcdHBhcnNlRmxvYXQoKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCggLy4rKD86cnZ8aXR8cmF8aWUpW1xcLzogXShbXFxkLl0rKS8gKSB8fCBbMCwnMCddKVsxXSksXG5pZSA6IChkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5vcGVyYSksXG4vL2llIDogbmF2aWdhdG9yICYmIC9NU0lFIFs2NzhdLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLCAvLyBpZTkgY29tcGxpYW50P1xuc2FmYXJpIDogL1NhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxcbmdlY2tvTWFjIDogL01hY2ludG9zaC4rcnY6MVxcLlswLThdLitHZWNrby8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxcblxuJCA6IGZ1bmN0aW9uIChpZCkge1xuXHRpZiAoaWQpIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG59LFxuXG5wdXNoIDogZnVuY3Rpb24gKGFyciwgdmFsKSB7XG5cdGFyclthcnIubGVuZ3RoXSA9IHZhbDtcbn0sXG5cbmNyZWF0ZUVsZW1lbnQgOiBmdW5jdGlvbiAodGFnLCBhdHRyaWJzLCBzdHlsZXMsIHBhcmVudCwgbm9wYWQpIHtcblx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXHRpZiAoYXR0cmlicykgaHMuZXh0ZW5kKGVsLCBhdHRyaWJzKTtcblx0aWYgKG5vcGFkKSBocy5zZXRTdHlsZXMoZWwsIHtwYWRkaW5nOiAwLCBib3JkZXI6ICdub25lJywgbWFyZ2luOiAwfSk7XG5cdGlmIChzdHlsZXMpIGhzLnNldFN0eWxlcyhlbCwgc3R5bGVzKTtcblx0aWYgKHBhcmVudCkgcGFyZW50LmFwcGVuZENoaWxkKGVsKTtcdFxuXHRyZXR1cm4gZWw7XG59LFxuXG5leHRlbmQgOiBmdW5jdGlvbiAoZWwsIGF0dHJpYnMpIHtcblx0Zm9yICh2YXIgeCBpbiBhdHRyaWJzKSBlbFt4XSA9IGF0dHJpYnNbeF07XG5cdHJldHVybiBlbDtcbn0sXG5cbnNldFN0eWxlcyA6IGZ1bmN0aW9uIChlbCwgc3R5bGVzKSB7XG5cdGZvciAodmFyIHggaW4gc3R5bGVzKSB7XG5cdFx0aWYgKGhzLmllTHQ5ICYmIHggPT0gJ29wYWNpdHknKSB7XG5cdFx0XHRpZiAoc3R5bGVzW3hdID4gMC45OSkgZWwuc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdmaWx0ZXInKTtcblx0XHRcdGVsc2UgZWwuc3R5bGUuZmlsdGVyID0gJ2FscGhhKG9wYWNpdHk9JysgKHN0eWxlc1t4XSAqIDEwMCkgKycpJztcblx0XHR9XG5cdFx0ZWxzZSBlbC5zdHlsZVt4XSA9IHN0eWxlc1t4XTtcdFx0XG5cdH1cbn0sXG5hbmltYXRlOiBmdW5jdGlvbihlbCwgcHJvcCwgb3B0KSB7XG5cdHZhciBzdGFydCxcblx0XHRlbmQsXG5cdFx0dW5pdDtcblx0aWYgKHR5cGVvZiBvcHQgIT0gJ29iamVjdCcgfHwgb3B0ID09PSBudWxsKSB7XG5cdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cdFx0b3B0ID0ge1xuXHRcdFx0ZHVyYXRpb246IGFyZ3NbMl0sXG5cdFx0XHRlYXNpbmc6IGFyZ3NbM10sXG5cdFx0XHRjb21wbGV0ZTogYXJnc1s0XVxuXHRcdH07XG5cdH1cblx0aWYgKHR5cGVvZiBvcHQuZHVyYXRpb24gIT0gJ251bWJlcicpIG9wdC5kdXJhdGlvbiA9IDI1MDtcblx0b3B0LmVhc2luZyA9IE1hdGhbb3B0LmVhc2luZ10gfHwgTWF0aC5lYXNlSW5RdWFkO1xuXHRvcHQuY3VyQW5pbSA9IGhzLmV4dGVuZCh7fSwgcHJvcCk7XG5cdGZvciAodmFyIG5hbWUgaW4gcHJvcCkge1xuXHRcdHZhciBlID0gbmV3IGhzLmZ4KGVsLCBvcHQgLCBuYW1lICk7XG5cdFx0XG5cdFx0c3RhcnQgPSBwYXJzZUZsb2F0KGhzLmNzcyhlbCwgbmFtZSkpIHx8IDA7XG5cdFx0ZW5kID0gcGFyc2VGbG9hdChwcm9wW25hbWVdKTtcblx0XHR1bml0ID0gbmFtZSAhPSAnb3BhY2l0eScgPyAncHgnIDogJyc7XG5cdFx0XG5cdFx0ZS5jdXN0b20oIHN0YXJ0LCBlbmQsIHVuaXQgKTtcblx0fVx0XG59LFxuY3NzOiBmdW5jdGlvbihlbCwgcHJvcCkge1xuXHRpZiAoZWwuc3R5bGVbcHJvcF0pIHtcblx0XHRyZXR1cm4gZWwuc3R5bGVbcHJvcF07XG5cdH0gZWxzZSBpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcblxuXHR9IGVsc2Uge1xuXHRcdGlmIChwcm9wID09ICdvcGFjaXR5JykgcHJvcCA9ICdmaWx0ZXInO1xuXHRcdHZhciB2YWwgPSBlbC5jdXJyZW50U3R5bGVbcHJvcC5yZXBsYWNlKC9cXC0oXFx3KS9nLCBmdW5jdGlvbiAoYSwgYil7IHJldHVybiBiLnRvVXBwZXJDYXNlKCk7IH0pXTtcblx0XHRpZiAocHJvcCA9PSAnZmlsdGVyJykgXG5cdFx0XHR2YWwgPSB2YWwucmVwbGFjZSgvYWxwaGFcXChvcGFjaXR5PShbMC05XSspXFwpLywgXG5cdFx0XHRcdGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBiIC8gMTAwIH0pO1xuXHRcdHJldHVybiB2YWwgPT09ICcnID8gMSA6IHZhbDtcblx0fSBcbn0sXG5cbmdldFBhZ2VTaXplIDogZnVuY3Rpb24gKCkge1xuXHR2YXIgZCA9IGRvY3VtZW50LCB3ID0gd2luZG93LCBpZWJvZHkgPSBkLmNvbXBhdE1vZGUgJiYgZC5jb21wYXRNb2RlICE9ICdCYWNrQ29tcGF0JyBcblx0XHQ/IGQuZG9jdW1lbnRFbGVtZW50IDogZC5ib2R5LFxuXHRcdGllTHQ5ID0gaHMuaWUgJiYgKGhzLnVhVmVyc2lvbiA8IDkgfHwgdHlwZW9mIHBhZ2VYT2Zmc2V0ID09ICd1bmRlZmluZWQnKTtcblx0XG5cdHZhciB3aWR0aCA9IGllTHQ5ID8gaWVib2R5LmNsaWVudFdpZHRoIDogXG5cdFx0XHQoZC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgc2VsZi5pbm5lcldpZHRoKSxcblx0XHRoZWlnaHQgPSBpZUx0OSA/IGllYm9keS5jbGllbnRIZWlnaHQgOiBzZWxmLmlubmVySGVpZ2h0O1xuXHRocy5wYWdlID0ge1xuXHRcdHdpZHRoOiB3aWR0aCxcblx0XHRoZWlnaHQ6IGhlaWdodCxcdFx0XG5cdFx0c2Nyb2xsTGVmdDogaWVMdDkgPyBpZWJvZHkuc2Nyb2xsTGVmdCA6IHBhZ2VYT2Zmc2V0LFxuXHRcdHNjcm9sbFRvcDogaWVMdDkgPyBpZWJvZHkuc2Nyb2xsVG9wIDogcGFnZVlPZmZzZXRcblx0fTtcblx0cmV0dXJuIGhzLnBhZ2U7XG59LFxuXG5nZXRQb3NpdGlvbiA6IGZ1bmN0aW9uKGVsKVx0e1xuXHRpZiAoL2FyZWEvaS50ZXN0KGVsLnRhZ05hbWUpKSB7XG5cdFx0dmFyIGltZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgdSA9IGltZ3NbaV0udXNlTWFwO1xuXHRcdFx0aWYgKHUgJiYgdS5yZXBsYWNlKC9eLio/Iy8sICcnKSA9PSBlbC5wYXJlbnROb2RlLm5hbWUpIHtcblx0XHRcdFx0ZWwgPSBpbWdzW2ldO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dmFyIHAgPSB7IHg6IGVsLm9mZnNldExlZnQsIHk6IGVsLm9mZnNldFRvcCB9O1xuXHR3aGlsZSAoZWwub2Zmc2V0UGFyZW50KVx0e1xuXHRcdGVsID0gZWwub2Zmc2V0UGFyZW50O1xuXHRcdHAueCArPSBlbC5vZmZzZXRMZWZ0O1xuXHRcdHAueSArPSBlbC5vZmZzZXRUb3A7XG5cdFx0aWYgKGVsICE9IGRvY3VtZW50LmJvZHkgJiYgZWwgIT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG5cdFx0XHRwLnggLT0gZWwuc2Nyb2xsTGVmdDtcblx0XHRcdHAueSAtPSBlbC5zY3JvbGxUb3A7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBwO1xufSxcblxuZXhwYW5kIDogZnVuY3Rpb24oYSwgcGFyYW1zLCBjdXN0b20sIHR5cGUpIHtcblx0aWYgKCFhKSBhID0gaHMuY3JlYXRlRWxlbWVudCgnYScsIG51bGwsIHsgZGlzcGxheTogJ25vbmUnIH0sIGhzLmNvbnRhaW5lcik7XG5cdGlmICh0eXBlb2YgYS5nZXRQYXJhbXMgPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHBhcmFtcztcblx0aWYgKHR5cGUgPT0gJ2h0bWwnKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBocy5zbGVlcGluZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGhzLnNsZWVwaW5nW2ldICYmIGhzLnNsZWVwaW5nW2ldLmEgPT0gYSkge1xuXHRcdFx0XHRocy5zbGVlcGluZ1tpXS5hd2FrZSgpO1xuXHRcdFx0XHRocy5zbGVlcGluZ1tpXSA9IG51bGw7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aHMuaGFzSHRtbEV4cGFuZGVycyA9IHRydWU7XG5cdH1cdFxuXHR0cnkge1x0XG5cdFx0bmV3IGhzLkV4cGFuZGVyKGEsIHBhcmFtcywgY3VzdG9tLCB0eXBlKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHRydWU7IH1cbn0sXG5cbmh0bWxFeHBhbmQgOiBmdW5jdGlvbihhLCBwYXJhbXMsIGN1c3RvbSkge1xuXHRyZXR1cm4gaHMuZXhwYW5kKGEsIHBhcmFtcywgY3VzdG9tLCAnaHRtbCcpO1xufSxcblxuZ2V0U2VsZlJlbmRlcmVkIDogZnVuY3Rpb24oKSB7XG5cdHJldHVybiBocy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IFxuXHRcdGNsYXNzTmFtZTogJ2hpZ2hzbGlkZS1odG1sLWNvbnRlbnQnLCBcblx0XHRpbm5lckhUTUw6IGhzLnJlcGxhY2VMYW5nKGhzLnNraW4uY29udGVudFdyYXBwZXIpIFxuXHR9KTtcbn0sXG5nZXRFbGVtZW50QnlDbGFzcyA6IGZ1bmN0aW9uIChlbCwgdGFnTmFtZSwgY2xhc3NOYW1lKSB7XG5cdHZhciBlbHMgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcbiAgICBcdGlmICgobmV3IFJlZ0V4cChjbGFzc05hbWUpKS50ZXN0KGVsc1tpXS5jbGFzc05hbWUpKSB7XG5cdFx0XHRyZXR1cm4gZWxzW2ldO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn0sXG5yZXBsYWNlTGFuZyA6IGZ1bmN0aW9uKHMpIHtcblx0cyA9IHMucmVwbGFjZSgvXFxzL2csICcgJyk7XG5cdHZhciByZSA9IC97aHNcXC5sYW5nXFwuKFtefV0rKVxcfS9nLFxuXHRcdG1hdGNoZXMgPSBzLm1hdGNoKHJlKSxcblx0XHRsYW5nO1xuXHRpZiAobWF0Y2hlcykgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGFuZyA9IG1hdGNoZXNbaV0ucmVwbGFjZShyZSwgXCIkMVwiKTtcblx0XHRpZiAodHlwZW9mIGhzLmxhbmdbbGFuZ10gIT0gJ3VuZGVmaW5lZCcpIHMgPSBzLnJlcGxhY2UobWF0Y2hlc1tpXSwgaHMubGFuZ1tsYW5nXSk7XG5cdH1cblx0cmV0dXJuIHM7XG59LFxuXG5cbnNldENsaWNrRXZlbnRzIDogZnVuY3Rpb24gKCkge1xuXHR2YXIgZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdHlwZSA9IGhzLmlzVW5vYnRydXNpdmVBbmNob3IoZWxzW2ldKTtcblx0XHRpZiAodHlwZSAmJiAhZWxzW2ldLmhzSGFzU2V0Q2xpY2spIHtcblx0XHRcdChmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgdCA9IHR5cGU7XG5cdFx0XHRcdGlmIChocy5maXJlRXZlbnQoaHMsICdvblNldENsaWNrRXZlbnQnLCB7IGVsZW1lbnQ6IGVsc1tpXSwgdHlwZTogdCB9KSkge1xuXHRcdFx0XHRcdGVsc1tpXS5vbmNsaWNrID0odHlwZSA9PSAnaW1hZ2UnKSA/ZnVuY3Rpb24oKSB7IHJldHVybiBocy5leHBhbmQodGhpcykgfTpcblx0XHRcdFx0XHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gaHMuaHRtbEV4cGFuZCh0aGlzLCB7IG9iamVjdFR5cGU6IHQgfSApO307XG5cdFx0XHRcdH1cblx0XHRcdH0pKCk7XG5cdFx0XHRlbHNbaV0uaHNIYXNTZXRDbGljayA9IHRydWU7XHRcblx0XHR9XG5cdH1cblx0aHMuZ2V0QW5jaG9ycygpO1xufSxcbmlzVW5vYnRydXNpdmVBbmNob3I6IGZ1bmN0aW9uKGVsKSB7XG5cdGlmIChlbC5yZWwgPT0gJ2hpZ2hzbGlkZScpIHJldHVybiAnaW1hZ2UnO1xuXHRlbHNlIGlmIChlbC5yZWwgPT0gJ2hpZ2hzbGlkZS1hamF4JykgcmV0dXJuICdhamF4Jztcblx0ZWxzZSBpZiAoZWwucmVsID09ICdoaWdoc2xpZGUtaWZyYW1lJykgcmV0dXJuICdpZnJhbWUnO1xuXHRlbHNlIGlmIChlbC5yZWwgPT0gJ2hpZ2hzbGlkZS1zd2YnKSByZXR1cm4gJ3N3Zic7XG59LFxuXG5nZXRDYWNoZUJpbmRpbmcgOiBmdW5jdGlvbiAoYSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGhzLmNhY2hlQmluZGluZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoaHMuY2FjaGVCaW5kaW5nc1tpXVswXSA9PSBhKSB7XG5cdFx0XHR2YXIgYyA9IGhzLmNhY2hlQmluZGluZ3NbaV1bMV07XG5cdFx0XHRocy5jYWNoZUJpbmRpbmdzW2ldWzFdID0gYy5jbG9uZU5vZGUoMSk7XG5cdFx0XHRyZXR1cm4gYztcblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59LFxuXG5wcmVsb2FkQWpheCA6IGZ1bmN0aW9uIChlKSB7XG5cdHZhciBhcnIgPSBocy5nZXRBbmNob3JzKCk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmh0bWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGEgPSBhcnIuaHRtbHNbaV07XG5cdFx0aWYgKGhzLmdldFBhcmFtKGEsICdvYmplY3RUeXBlJykgPT0gJ2FqYXgnICYmIGhzLmdldFBhcmFtKGEsICdjYWNoZUFqYXgnKSlcblx0XHRcdGhzLnB1c2goaHMucHJlbG9hZFRoZXNlQWpheCwgYSk7XG5cdH1cblx0XG5cdGhzLnByZWxvYWRBamF4RWxlbWVudCgwKTtcbn0sXG5cbnByZWxvYWRBamF4RWxlbWVudCA6IGZ1bmN0aW9uIChpKSB7XG5cdGlmICghaHMucHJlbG9hZFRoZXNlQWpheFtpXSkgcmV0dXJuO1xuXHR2YXIgYSA9IGhzLnByZWxvYWRUaGVzZUFqYXhbaV07XG5cdHZhciBjYWNoZSA9IGhzLmdldE5vZGUoaHMuZ2V0UGFyYW0oYSwgJ2NvbnRlbnRJZCcpKTtcblx0aWYgKCFjYWNoZSkgY2FjaGUgPSBocy5nZXRTZWxmUmVuZGVyZWQoKTtcblx0dmFyIGFqYXggPSBuZXcgaHMuQWpheChhLCBjYWNoZSwgMSk7XHRcbiAgIFx0YWpheC5vbkVycm9yID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgXHRhamF4Lm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgIFx0XHRocy5wdXNoKGhzLmNhY2hlQmluZGluZ3MsIFthLCBjYWNoZV0pO1xuICAgXHRcdGhzLnByZWxvYWRBamF4RWxlbWVudChpICsgMSk7XG4gICBcdH07XG4gICBcdGFqYXgucnVuKCk7XG59LFxuXG5mb2N1c1RvcG1vc3QgOiBmdW5jdGlvbigpIHtcblx0dmFyIHRvcFogPSAwLCBcblx0XHR0b3Btb3N0S2V5ID0gLTEsXG5cdFx0ZXhwYW5kZXJzID0gaHMuZXhwYW5kZXJzLFxuXHRcdGV4cCxcblx0XHR6SW5kZXg7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZXhwYW5kZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0ZXhwID0gZXhwYW5kZXJzW2ldO1xuXHRcdGlmIChleHApIHtcblx0XHRcdHpJbmRleCA9IGV4cC53cmFwcGVyLnN0eWxlLnpJbmRleDtcblx0XHRcdGlmICh6SW5kZXggJiYgekluZGV4ID4gdG9wWikge1xuXHRcdFx0XHR0b3BaID0gekluZGV4O1x0XHRcdFx0XG5cdFx0XHRcdHRvcG1vc3RLZXkgPSBpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRpZiAodG9wbW9zdEtleSA9PSAtMSkgaHMuZm9jdXNLZXkgPSAtMTtcblx0ZWxzZSBleHBhbmRlcnNbdG9wbW9zdEtleV0uZm9jdXMoKTtcbn0sXG5cbmdldFBhcmFtIDogZnVuY3Rpb24gKGEsIHBhcmFtKSB7XG5cdGEuZ2V0UGFyYW1zID0gYS5vbmNsaWNrO1xuXHR2YXIgcCA9IGEuZ2V0UGFyYW1zID8gYS5nZXRQYXJhbXMoKSA6IG51bGw7XG5cdGEuZ2V0UGFyYW1zID0gbnVsbDtcblx0XG5cdHJldHVybiAocCAmJiB0eXBlb2YgcFtwYXJhbV0gIT0gJ3VuZGVmaW5lZCcpID8gcFtwYXJhbV0gOiBcblx0XHQodHlwZW9mIGhzW3BhcmFtXSAhPSAndW5kZWZpbmVkJyA/IGhzW3BhcmFtXSA6IG51bGwpO1xufSxcblxuZ2V0U3JjIDogZnVuY3Rpb24gKGEpIHtcblx0dmFyIHNyYyA9IGhzLmdldFBhcmFtKGEsICdzcmMnKTtcblx0aWYgKHNyYykgcmV0dXJuIHNyYztcblx0cmV0dXJuIGEuaHJlZjtcbn0sXG5cbmdldE5vZGUgOiBmdW5jdGlvbiAoaWQpIHtcblx0dmFyIG5vZGUgPSBocy4kKGlkKSwgY2xvbmUgPSBocy5jbG9uZXNbaWRdLCBhID0ge307XG5cdGlmICghbm9kZSAmJiAhY2xvbmUpIHJldHVybiBudWxsO1xuXHRpZiAoIWNsb25lKSB7XG5cdFx0Y2xvbmUgPSBub2RlLmNsb25lTm9kZSh0cnVlKTtcblx0XHRjbG9uZS5pZCA9ICcnO1xuXHRcdGhzLmNsb25lc1tpZF0gPSBjbG9uZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gY2xvbmUuY2xvbmVOb2RlKHRydWUpO1xuXHR9XG59LFxuXG5kaXNjYXJkRWxlbWVudCA6IGZ1bmN0aW9uKGQpIHtcblx0aWYgKGQpIGhzLmdhcmJhZ2VCaW4uYXBwZW5kQ2hpbGQoZCk7XG5cdGhzLmdhcmJhZ2VCaW4uaW5uZXJIVE1MID0gJyc7XG59LFxuZGltIDogZnVuY3Rpb24oZXhwKSB7XG5cdGlmICghaHMuZGltbWVyKSB7XG5cdFx0aXNOZXcgPSB0cnVlO1xuXHRcdGhzLmRpbW1lciA9IGhzLmNyZWF0ZUVsZW1lbnQgKCdkaXYnLCB7XG5cdFx0XHRcdGNsYXNzTmFtZTogJ2hpZ2hzbGlkZS1kaW1taW5nIGhpZ2hzbGlkZS12aWV3cG9ydC1zaXplJyxcblx0XHRcdFx0b3duZXI6ICcnLFxuXHRcdFx0XHRvbmNsaWNrOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoaHMuZmlyZUV2ZW50KGhzLCAnb25EaW1tZXJDbGljaycpKVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aHMuY2xvc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcblx0XHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0fSwgaHMuY29udGFpbmVyLCB0cnVlKTtcblx0XHRcdFxuXHRcdGlmICgvKEFuZHJvaWR8aVBhZHxpUGhvbmV8aVBvZCkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcblx0XHRcdGZ1bmN0aW9uIHBpeERpbW1lclNpemUoKSB7XG5cdFx0XHRcdGhzLnNldFN0eWxlcyhocy5kaW1tZXIsIHtcblx0XHRcdFx0XHR3aWR0aDogYm9keS5zY3JvbGxXaWR0aCArJ3B4Jyxcblx0XHRcdFx0XHRoZWlnaHQ6IGJvZHkuc2Nyb2xsSGVpZ2h0ICsncHgnXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cGl4RGltbWVyU2l6ZSgpO1xuXHRcdFx0aHMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCBwaXhEaW1tZXJTaXplKTtcblx0XHR9XG5cdH1cblx0aHMuZGltbWVyLnN0eWxlLmRpc3BsYXkgPSAnJztcblxuXHR2YXIgaXNOZXcgPSBocy5kaW1tZXIub3duZXIgPT0gJyc7XG5cdGhzLmRpbW1lci5vd25lciArPSAnfCcrIGV4cC5rZXk7XG5cdFxuXHRpZiAoaXNOZXcpIHtcblx0XHRpZiAoaHMuZ2Vja29NYWMgJiYgaHMuZGltbWluZ0dlY2tvRml4KVxuXHRcdFx0aHMuc2V0U3R5bGVzKGhzLmRpbW1lciwge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAndXJsKCcrIGhzLmdyYXBoaWNzRGlyICsgJ2dlY2tvZGltbWVyLnBuZyknLFxuXHRcdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHR9KTtcblx0XHRlbHNlXG5cdFx0XHRocy5hbmltYXRlKGhzLmRpbW1lciwgeyBvcGFjaXR5OiBleHAuZGltbWluZ09wYWNpdHkgfSwgaHMuZGltbWluZ0R1cmF0aW9uKTtcblx0fVxufSxcbnVuZGltIDogZnVuY3Rpb24oa2V5KSB7XG5cdGlmICghaHMuZGltbWVyKSByZXR1cm47XG5cdGlmICh0eXBlb2Yga2V5ICE9ICd1bmRlZmluZWQnKSBocy5kaW1tZXIub3duZXIgPSBocy5kaW1tZXIub3duZXIucmVwbGFjZSgnfCcrIGtleSwgJycpO1xuXG5cdGlmIChcblx0XHQodHlwZW9mIGtleSAhPSAndW5kZWZpbmVkJyAmJiBocy5kaW1tZXIub3duZXIgIT0gJycpXG5cdFx0fHwgKGhzLnVwY29taW5nICYmIGhzLmdldFBhcmFtKGhzLnVwY29taW5nLCAnZGltbWluZ09wYWNpdHknKSlcblx0KSByZXR1cm47XG5cblx0aWYgKGhzLmdlY2tvTWFjICYmIGhzLmRpbW1pbmdHZWNrb0ZpeCkgaHMuZGltbWVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdGVsc2UgaHMuYW5pbWF0ZShocy5kaW1tZXIsIHsgb3BhY2l0eTogMCB9LCBocy5kaW1taW5nRHVyYXRpb24sIG51bGwsIGZ1bmN0aW9uKCkge1xuXHRcdGhzLmRpbW1lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9KTtcbn0sXG50cmFuc2l0IDogZnVuY3Rpb24gKGFkaiwgZXhwKSB7XG5cdHZhciBsYXN0ID0gZXhwIHx8IGhzLmdldEV4cGFuZGVyKCk7XG5cdGV4cCA9IGxhc3Q7XG5cdGlmIChocy51cGNvbWluZykgcmV0dXJuIGZhbHNlO1xuXHRlbHNlIGhzLmxhc3QgPSBsYXN0O1xuXHRocy5yZW1vdmVFdmVudExpc3RlbmVyKGRvY3VtZW50LCB3aW5kb3cub3BlcmEgPyAna2V5cHJlc3MnIDogJ2tleWRvd24nLCBocy5rZXlIYW5kbGVyKTtcblx0dHJ5IHtcblx0XHRocy51cGNvbWluZyA9IGFkajtcblx0XHRhZGoub25jbGljaygpOyBcdFx0XG5cdH0gY2F0Y2ggKGUpe1xuXHRcdGhzLmxhc3QgPSBocy51cGNvbWluZyA9IG51bGw7XG5cdH1cblx0dHJ5IHtcblx0XHRpZiAoIWFkaiB8fCBleHAudHJhbnNpdGlvbnNbMV0gIT0gJ2Nyb3NzZmFkZScpXG5cdFx0ZXhwLmNsb3NlKCk7XG5cdH0gY2F0Y2ggKGUpIHt9XG5cdHJldHVybiBmYWxzZTtcbn0sXG5cbnByZXZpb3VzT3JOZXh0IDogZnVuY3Rpb24gKGVsLCBvcCkge1xuXHR2YXIgZXhwID0gaHMuZ2V0RXhwYW5kZXIoZWwpO1xuXHRpZiAoZXhwKSByZXR1cm4gaHMudHJhbnNpdChleHAuZ2V0QWRqYWNlbnRBbmNob3Iob3ApLCBleHApO1xuXHRlbHNlIHJldHVybiBmYWxzZTtcbn0sXG5cbnByZXZpb3VzIDogZnVuY3Rpb24gKGVsKSB7XG5cdHJldHVybiBocy5wcmV2aW91c09yTmV4dChlbCwgLTEpO1xufSxcblxubmV4dCA6IGZ1bmN0aW9uIChlbCkge1xuXHRyZXR1cm4gaHMucHJldmlvdXNPck5leHQoZWwsIDEpO1x0XG59LFxuXG5rZXlIYW5kbGVyIDogZnVuY3Rpb24oZSkge1xuXHRpZiAoIWUpIGUgPSB3aW5kb3cuZXZlbnQ7XG5cdGlmICghZS50YXJnZXQpIGUudGFyZ2V0ID0gZS5zcmNFbGVtZW50OyAvLyBpZVxuXHRpZiAodHlwZW9mIGUudGFyZ2V0LmZvcm0gIT0gJ3VuZGVmaW5lZCcpIHJldHVybiB0cnVlOyAvLyBmb3JtIGVsZW1lbnQgaGFzIGZvY3VzXG5cdGlmICghaHMuZmlyZUV2ZW50KGhzLCAnb25LZXlEb3duJywgZSkpIHJldHVybiB0cnVlO1xuXHR2YXIgZXhwID0gaHMuZ2V0RXhwYW5kZXIoKTtcblx0XG5cdHZhciBvcCA9IG51bGw7XG5cdHN3aXRjaCAoZS5rZXlDb2RlKSB7XG5cdFx0Y2FzZSA3MDogLy8gZlxuXHRcdFx0aWYgKGV4cCkgZXhwLmRvRnVsbEV4cGFuZCgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0Y2FzZSAzMjogLy8gU3BhY2Vcblx0XHRcdG9wID0gMjtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzQ6IC8vIFBhZ2UgRG93blxuXHRcdGNhc2UgMzk6IC8vIEFycm93IHJpZ2h0XG5cdFx0Y2FzZSA0MDogLy8gQXJyb3cgZG93blxuXHRcdFx0b3AgPSAxO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA4OiAgLy8gQmFja3NwYWNlXG5cdFx0Y2FzZSAzMzogLy8gUGFnZSBVcFxuXHRcdGNhc2UgMzc6IC8vIEFycm93IGxlZnRcblx0XHRjYXNlIDM4OiAvLyBBcnJvdyB1cFxuXHRcdFx0b3AgPSAtMTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjc6IC8vIEVzY2FwZVxuXHRcdGNhc2UgMTM6IC8vIEVudGVyXG5cdFx0XHRvcCA9IDA7XG5cdH1cblx0aWYgKG9wICE9PSBudWxsKSB7aWYgKG9wICE9IDIpaHMucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgd2luZG93Lm9wZXJhID8gJ2tleXByZXNzJyA6ICdrZXlkb3duJywgaHMua2V5SGFuZGxlcik7XG5cdFx0aWYgKCFocy5lbmFibGVLZXlMaXN0ZW5lcikgcmV0dXJuIHRydWU7XG5cdFx0XG5cdFx0aWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcdGVsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIFx0aWYgKGV4cCkge1xuXHRcdFx0aWYgKG9wID09IDApIHtcblx0XHRcdFx0ZXhwLmNsb3NlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKG9wID09IDIpIHtcblx0XHRcdFx0aWYgKGV4cC5zbGlkZXNob3cpIGV4cC5zbGlkZXNob3cuaGl0U3BhY2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChleHAuc2xpZGVzaG93KSBleHAuc2xpZGVzaG93LnBhdXNlKCk7XG5cdFx0XHRcdGhzLnByZXZpb3VzT3JOZXh0KGV4cC5rZXksIG9wKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59LFxuXG5cbnJlZ2lzdGVyT3ZlcmxheSA6IGZ1bmN0aW9uIChvdmVybGF5KSB7XG5cdGhzLnB1c2goaHMub3ZlcmxheXMsIGhzLmV4dGVuZChvdmVybGF5LCB7IGhzSWQ6ICdoc0lkJysgaHMuaWRDb3VudGVyKysgfSApKTtcbn0sXG5cblxuYWRkU2xpZGVzaG93IDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dmFyIHNnID0gb3B0aW9ucy5zbGlkZXNob3dHcm91cDtcblx0aWYgKHR5cGVvZiBzZyA9PSAnb2JqZWN0Jykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2cubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBvID0ge307XG5cdFx0XHRmb3IgKHZhciB4IGluIG9wdGlvbnMpIG9beF0gPSBvcHRpb25zW3hdO1xuXHRcdFx0by5zbGlkZXNob3dHcm91cCA9IHNnW2ldO1xuXHRcdFx0aHMucHVzaChocy5zbGlkZXNob3dzLCBvKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aHMucHVzaChocy5zbGlkZXNob3dzLCBvcHRpb25zKTtcblx0fVxufSxcblxuZ2V0V3JhcHBlcktleSA6IGZ1bmN0aW9uIChlbGVtZW50LCBleHBPbmx5KSB7XG5cdHZhciBlbCwgcmUgPSAvXmhpZ2hzbGlkZS13cmFwcGVyLShbMC05XSspJC87XG5cdC8vIDEuIGxvb2sgaW4gb3BlbiBleHBhbmRlcnNcblx0ZWwgPSBlbGVtZW50O1xuXHR3aGlsZSAoZWwucGFyZW50Tm9kZSlcdHtcblx0XHRpZiAoZWwuaHNLZXkgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGVsLmhzS2V5O1xuXHRcdGlmIChlbC5pZCAmJiByZS50ZXN0KGVsLmlkKSkgcmV0dXJuIGVsLmlkLnJlcGxhY2UocmUsIFwiJDFcIik7XG5cdFx0ZWwgPSBlbC5wYXJlbnROb2RlO1xuXHR9XG5cdC8vIDIuIGxvb2sgaW4gdGh1bWJuYWlsXG5cdGlmICghZXhwT25seSkge1xuXHRcdGVsID0gZWxlbWVudDtcblx0XHR3aGlsZSAoZWwucGFyZW50Tm9kZSlcdHtcblx0XHRcdGlmIChlbC50YWdOYW1lICYmIGhzLmlzSHNBbmNob3IoZWwpKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSA9IDA7IGtleSA8IGhzLmV4cGFuZGVycy5sZW5ndGg7IGtleSsrKSB7XG5cdFx0XHRcdFx0dmFyIGV4cCA9IGhzLmV4cGFuZGVyc1trZXldO1xuXHRcdFx0XHRcdGlmIChleHAgJiYgZXhwLmEgPT0gZWwpIHJldHVybiBrZXk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsID0gZWwucGFyZW50Tm9kZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7IFxufSxcblxuZ2V0RXhwYW5kZXIgOiBmdW5jdGlvbiAoZWwsIGV4cE9ubHkpIHtcblx0aWYgKHR5cGVvZiBlbCA9PSAndW5kZWZpbmVkJykgcmV0dXJuIGhzLmV4cGFuZGVyc1tocy5mb2N1c0tleV0gfHwgbnVsbDtcblx0aWYgKHR5cGVvZiBlbCA9PSAnbnVtYmVyJykgcmV0dXJuIGhzLmV4cGFuZGVyc1tlbF0gfHwgbnVsbDtcblx0aWYgKHR5cGVvZiBlbCA9PSAnc3RyaW5nJykgZWwgPSBocy4kKGVsKTtcblx0cmV0dXJuIGhzLmV4cGFuZGVyc1tocy5nZXRXcmFwcGVyS2V5KGVsLCBleHBPbmx5KV0gfHwgbnVsbDtcbn0sXG5cbmlzSHNBbmNob3IgOiBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4gKGEub25jbGljayAmJiBhLm9uY2xpY2sudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHMvZywgJyAnKS5tYXRjaCgvaHMuKGh0bWxFfGUpeHBhbmQvKSk7XG59LFxuXG5yZU9yZGVyIDogZnVuY3Rpb24gKCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGhzLmV4cGFuZGVycy5sZW5ndGg7IGkrKylcblx0XHRpZiAoaHMuZXhwYW5kZXJzW2ldICYmIGhzLmV4cGFuZGVyc1tpXS5pc0V4cGFuZGVkKSBocy5mb2N1c1RvcG1vc3QoKTtcbn0sXG5maXJlRXZlbnQgOiBmdW5jdGlvbiAob2JqLCBldnQsIGFyZ3MpIHtcblx0cmV0dXJuIG9iaiAmJiBvYmpbZXZ0XSA/IChvYmpbZXZ0XShvYmosIGFyZ3MpICE9PSBmYWxzZSkgOiB0cnVlO1xufSxcblxubW91c2VDbGlja0hhbmRsZXIgOiBmdW5jdGlvbihlKSBcbntcdFxuXHRpZiAoIWUpIGUgPSB3aW5kb3cuZXZlbnQ7XG5cdGlmIChlLmJ1dHRvbiA+IDEpIHJldHVybiB0cnVlO1xuXHRpZiAoIWUudGFyZ2V0KSBlLnRhcmdldCA9IGUuc3JjRWxlbWVudDtcblx0XG5cdHZhciBlbCA9IGUudGFyZ2V0O1xuXHR3aGlsZSAoZWwucGFyZW50Tm9kZVxuXHRcdCYmICEoL2hpZ2hzbGlkZS0oaW1hZ2V8bW92ZXxodG1sfHJlc2l6ZSkvLnRlc3QoZWwuY2xhc3NOYW1lKSkpXG5cdHtcblx0XHRlbCA9IGVsLnBhcmVudE5vZGU7XG5cdH1cblx0dmFyIGV4cCA9IGhzLmdldEV4cGFuZGVyKGVsKTtcblx0aWYgKGV4cCAmJiAoZXhwLmlzQ2xvc2luZyB8fCAhZXhwLmlzRXhwYW5kZWQpKSByZXR1cm4gdHJ1ZTtcblx0XHRcblx0aWYgKGV4cCAmJiBlLnR5cGUgPT0gJ21vdXNlZG93bicpIHtcblx0XHRpZiAoZS50YXJnZXQuZm9ybSkgcmV0dXJuIHRydWU7XG5cdFx0dmFyIG1hdGNoID0gZWwuY2xhc3NOYW1lLm1hdGNoKC9oaWdoc2xpZGUtKGltYWdlfG1vdmV8cmVzaXplKS8pO1xuXHRcdGlmIChtYXRjaCkge1xuXHRcdFx0aHMuZHJhZ0FyZ3MgPSB7IFxuXHRcdFx0XHRleHA6IGV4cCAsIFxuXHRcdFx0XHR0eXBlOiBtYXRjaFsxXSwgXG5cdFx0XHRcdGxlZnQ6IGV4cC54LnBvcywgXG5cdFx0XHRcdHdpZHRoOiBleHAueC5zaXplLCBcblx0XHRcdFx0dG9wOiBleHAueS5wb3MsIFxuXHRcdFx0XHRoZWlnaHQ6IGV4cC55LnNpemUsIFxuXHRcdFx0XHRjbGlja1g6IGUuY2xpZW50WCwgXG5cdFx0XHRcdGNsaWNrWTogZS5jbGllbnRZXG5cdFx0XHR9O1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGhzLmFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBocy5kcmFnSGFuZGxlcik7XG5cdFx0XHRpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBGRlxuXHRcdFx0XG5cdFx0XHRpZiAoL2hpZ2hzbGlkZS0oaW1hZ2V8aHRtbCktYmx1ci8udGVzdChleHAuY29udGVudC5jbGFzc05hbWUpKSB7XG5cdFx0XHRcdGV4cC5mb2N1cygpO1xuXHRcdFx0XHRocy5oYXNGb2N1c2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoL2hpZ2hzbGlkZS1odG1sLy50ZXN0KGVsLmNsYXNzTmFtZSkgJiYgaHMuZm9jdXNLZXkgIT0gZXhwLmtleSkge1xuXHRcdFx0ZXhwLmZvY3VzKCk7XG5cdFx0XHRleHAuZG9TaG93SGlkZSgnaGlkZGVuJyk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGUudHlwZSA9PSAnbW91c2V1cCcpIHtcblx0XHRcblx0XHRocy5yZW1vdmVFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgaHMuZHJhZ0hhbmRsZXIpO1xuXHRcdFxuXHRcdGlmIChocy5kcmFnQXJncykge1xuXHRcdFx0aWYgKGhzLnN0eWxlUmVzdG9yZUN1cnNvciAmJiBocy5kcmFnQXJncy50eXBlID09ICdpbWFnZScpIFxuXHRcdFx0XHRocy5kcmFnQXJncy5leHAuY29udGVudC5zdHlsZS5jdXJzb3IgPSBocy5zdHlsZVJlc3RvcmVDdXJzb3I7XG5cdFx0XHR2YXIgaGFzRHJhZ2dlZCA9IGhzLmRyYWdBcmdzLmhhc0RyYWdnZWQ7XG5cdFx0XHRcblx0XHRcdGlmICghaGFzRHJhZ2dlZCAmJiFocy5oYXNGb2N1c2VkICYmICEvKG1vdmV8cmVzaXplKS8udGVzdChocy5kcmFnQXJncy50eXBlKSkge1xuXHRcdFx0XHRpZiAoaHMuZmlyZUV2ZW50KGV4cCwgJ29uSW1hZ2VDbGljaycpKVxuXHRcdFx0XHRleHAuY2xvc2UoKTtcblx0XHRcdH0gXG5cdFx0XHRlbHNlIGlmIChoYXNEcmFnZ2VkIHx8ICghaGFzRHJhZ2dlZCAmJiBocy5oYXNIdG1sRXhwYW5kZXJzKSkge1xuXHRcdFx0XHRocy5kcmFnQXJncy5leHAuZG9TaG93SGlkZSgnaGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmIChocy5kcmFnQXJncy5leHAucmVsZWFzZU1hc2spIFxuXHRcdFx0XHRocy5kcmFnQXJncy5leHAucmVsZWFzZU1hc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFxuXHRcdFx0aWYgKGhhc0RyYWdnZWQpIGhzLmZpcmVFdmVudChocy5kcmFnQXJncy5leHAsICdvbkRyb3AnLCBocy5kcmFnQXJncyk7XG5cdFx0XHRocy5oYXNGb2N1c2VkID0gZmFsc2U7XG5cdFx0XHRocy5kcmFnQXJncyA9IG51bGw7XG5cdFx0XG5cdFx0fSBlbHNlIGlmICgvaGlnaHNsaWRlLWltYWdlLWJsdXIvLnRlc3QoZWwuY2xhc3NOYW1lKSkge1xuXHRcdFx0ZWwuc3R5bGUuY3Vyc29yID0gaHMuc3R5bGVSZXN0b3JlQ3Vyc29yO1x0XHRcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufSxcblxuZHJhZ0hhbmRsZXIgOiBmdW5jdGlvbihlKVxue1xuXHRpZiAoIWhzLmRyYWdBcmdzKSByZXR1cm4gdHJ1ZTtcblx0aWYgKCFlKSBlID0gd2luZG93LmV2ZW50O1xuXHR2YXIgYSA9IGhzLmRyYWdBcmdzLCBleHAgPSBhLmV4cDtcblx0aWYgKGV4cC5pZnJhbWUpIHtcdFx0XG5cdFx0aWYgKCFleHAucmVsZWFzZU1hc2spIGV4cC5yZWxlYXNlTWFzayA9IGhzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIFxuXHRcdFx0eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgd2lkdGg6IGV4cC54LnNpemUrJ3B4JywgaGVpZ2h0OiBleHAueS5zaXplKydweCcsIFxuXHRcdFx0XHRsZWZ0OiBleHAueC5jYisncHgnLCB0b3A6IGV4cC55LmNiKydweCcsIHpJbmRleDogNCxcdGJhY2tncm91bmQ6IChocy5pZUx0OSA/ICd3aGl0ZScgOiAnbm9uZScpLCBcblx0XHRcdFx0b3BhY2l0eTogMC4wMSB9LCBcblx0XHRcdGV4cC53cmFwcGVyLCB0cnVlKTtcblx0XHRpZiAoZXhwLnJlbGVhc2VNYXNrLnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKVxuXHRcdFx0ZXhwLnJlbGVhc2VNYXNrLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0fVxuXHRcblx0YS5kWCA9IGUuY2xpZW50WCAtIGEuY2xpY2tYO1xuXHRhLmRZID0gZS5jbGllbnRZIC0gYS5jbGlja1k7XHRcblx0XG5cdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyhhLmRYLCAyKSArIE1hdGgucG93KGEuZFksIDIpKTtcblx0aWYgKCFhLmhhc0RyYWdnZWQpIGEuaGFzRHJhZ2dlZCA9IChhLnR5cGUgIT0gJ2ltYWdlJyAmJiBkaXN0YW5jZSA+IDApXG5cdFx0fHwgKGRpc3RhbmNlID4gKGhzLmRyYWdTZW5zaXRpdml0eSB8fCA1KSk7XG5cdFxuXHRpZiAoYS5oYXNEcmFnZ2VkICYmIGUuY2xpZW50WCA+IDUgJiYgZS5jbGllbnRZID4gNSkge1xuXHRcdGlmICghaHMuZmlyZUV2ZW50KGV4cCwgJ29uRHJhZycsIGEpKSByZXR1cm4gZmFsc2U7XG5cdFx0XG5cdFx0aWYgKGEudHlwZSA9PSAncmVzaXplJykgZXhwLnJlc2l6ZShhKTtcblx0XHRlbHNlIHtcblx0XHRcdGV4cC5tb3ZlVG8oYS5sZWZ0ICsgYS5kWCwgYS50b3AgKyBhLmRZKTtcblx0XHRcdGlmIChhLnR5cGUgPT0gJ2ltYWdlJykgZXhwLmNvbnRlbnQuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59LFxuXG53cmFwcGVyTW91c2VIYW5kbGVyIDogZnVuY3Rpb24gKGUpIHtcblx0dHJ5IHtcblx0XHRpZiAoIWUpIGUgPSB3aW5kb3cuZXZlbnQ7XG5cdFx0dmFyIG92ZXIgPSAvbW91c2VvdmVyL2kudGVzdChlLnR5cGUpOyBcblx0XHRpZiAoIWUudGFyZ2V0KSBlLnRhcmdldCA9IGUuc3JjRWxlbWVudDsgLy8gaWVcblx0XHRpZiAoIWUucmVsYXRlZFRhcmdldCkgZS5yZWxhdGVkVGFyZ2V0ID0gXG5cdFx0XHRvdmVyID8gZS5mcm9tRWxlbWVudCA6IGUudG9FbGVtZW50OyAvLyBpZVxuXHRcdHZhciBleHAgPSBocy5nZXRFeHBhbmRlcihlLnRhcmdldCk7XG5cdFx0aWYgKCFleHAuaXNFeHBhbmRlZCkgcmV0dXJuO1xuXHRcdGlmICghZXhwIHx8ICFlLnJlbGF0ZWRUYXJnZXQgfHwgaHMuZ2V0RXhwYW5kZXIoZS5yZWxhdGVkVGFyZ2V0LCB0cnVlKSA9PSBleHAgXG5cdFx0XHR8fCBocy5kcmFnQXJncykgcmV0dXJuO1xuXHRcdGhzLmZpcmVFdmVudChleHAsIG92ZXIgPyAnb25Nb3VzZU92ZXInIDogJ29uTW91c2VPdXQnLCBlKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGV4cC5vdmVybGF5cy5sZW5ndGg7IGkrKykgKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG8gPSBocy4kKCdoc0lkJysgZXhwLm92ZXJsYXlzW2ldKTtcblx0XHRcdGlmIChvICYmIG8uaGlkZU9uTW91c2VPdXQpIHtcblx0XHRcdFx0aWYgKG92ZXIpIGhzLnNldFN0eWxlcyhvLCB7IHZpc2liaWxpdHk6ICd2aXNpYmxlJywgZGlzcGxheTogJycgfSk7XG5cdFx0XHRcdGhzLmFuaW1hdGUobywgeyBvcGFjaXR5OiBvdmVyID8gby5vcGFjaXR5IDogMCB9LCBvLmR1cik7XG5cdFx0XHR9XG5cdFx0fSkoKTtcdFxuXHR9IGNhdGNoIChlKSB7fVxufSxcbmFkZEV2ZW50TGlzdGVuZXIgOiBmdW5jdGlvbiAoZWwsIGV2ZW50LCBmdW5jKSB7XG5cdGlmIChlbCA9PSBkb2N1bWVudCAmJiBldmVudCA9PSAncmVhZHknKSB7XG5cdFx0aHMucHVzaChocy5vblJlYWR5LCBmdW5jKTtcblx0fVxuXHR0cnkge1xuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMsIGZhbHNlKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRlbC5kZXRhY2hFdmVudCgnb24nKyBldmVudCwgZnVuYyk7XG5cdFx0XHRlbC5hdHRhY2hFdmVudCgnb24nKyBldmVudCwgZnVuYyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0ZWxbJ29uJysgZXZlbnRdID0gZnVuYztcblx0XHR9XG5cdH0gXG59LFxuXG5yZW1vdmVFdmVudExpc3RlbmVyIDogZnVuY3Rpb24gKGVsLCBldmVudCwgZnVuYykge1xuXHR0cnkge1xuXHRcdGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMsIGZhbHNlKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRlbC5kZXRhY2hFdmVudCgnb24nKyBldmVudCwgZnVuYyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0ZWxbJ29uJysgZXZlbnRdID0gbnVsbDtcblx0XHR9XG5cdH1cbn0sXG5cbnByZWxvYWRGdWxsSW1hZ2UgOiBmdW5jdGlvbiAoaSkge1xuXHRpZiAoaHMuY29udGludWVQcmVsb2FkaW5nICYmIGhzLnByZWxvYWRUaGVzZUltYWdlc1tpXSAmJiBocy5wcmVsb2FkVGhlc2VJbWFnZXNbaV0gIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkgeyBcblx0XHRcdGltZyA9IG51bGw7XG5cdFx0XHRocy5wcmVsb2FkRnVsbEltYWdlKGkgKyAxKTtcblx0XHR9O1xuXHRcdGltZy5zcmMgPSBocy5wcmVsb2FkVGhlc2VJbWFnZXNbaV07XG5cdH1cbn0sXG5wcmVsb2FkSW1hZ2VzIDogZnVuY3Rpb24gKG51bWJlcikge1xuXHRpZiAobnVtYmVyICYmIHR5cGVvZiBudW1iZXIgIT0gJ29iamVjdCcpIGhzLm51bWJlck9mSW1hZ2VzVG9QcmVsb2FkID0gbnVtYmVyO1xuXHRcblx0dmFyIGFyciA9IGhzLmdldEFuY2hvcnMoKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnIuaW1hZ2VzLmxlbmd0aCAmJiBpIDwgaHMubnVtYmVyT2ZJbWFnZXNUb1ByZWxvYWQ7IGkrKykge1xuXHRcdGhzLnB1c2goaHMucHJlbG9hZFRoZXNlSW1hZ2VzLCBocy5nZXRTcmMoYXJyLmltYWdlc1tpXSkpO1xuXHR9XG5cdFxuXHQvLyBwcmVsb2FkIG91dGxpbmVzXG5cdGlmIChocy5vdXRsaW5lVHlwZSlcdG5ldyBocy5PdXRsaW5lKGhzLm91dGxpbmVUeXBlLCBmdW5jdGlvbiAoKSB7IGhzLnByZWxvYWRGdWxsSW1hZ2UoMCl9ICk7XG5cdGVsc2Vcblx0XG5cdGhzLnByZWxvYWRGdWxsSW1hZ2UoMCk7XG5cdFxuXHQvLyBwcmVsb2FkIGN1cnNvclxuXHRpZiAoaHMucmVzdG9yZUN1cnNvcikgdmFyIGN1ciA9IGhzLmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBocy5ncmFwaGljc0RpciArIGhzLnJlc3RvcmVDdXJzb3IgfSk7XG59LFxuXG5cbmluaXQgOiBmdW5jdGlvbiAoKSB7XG5cdGlmICghaHMuY29udGFpbmVyKSB7XG5cdFxuXHRcdGhzLmllTHQ3ID0gaHMuaWUgJiYgaHMudWFWZXJzaW9uIDwgNztcblx0XHRocy5pZUx0OSA9IGhzLmllICYmIGhzLnVhVmVyc2lvbiA8IDk7XG5cdFx0XG5cdFx0aHMuZ2V0UGFnZVNpemUoKTtcblx0XHRocy5pZTZTU0wgPSBocy5pZUx0NyAmJiBsb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cHM6Jztcblx0XHRmb3IgKHZhciB4IGluIGhzLmxhbmdEZWZhdWx0cykge1xuXHRcdFx0aWYgKHR5cGVvZiBoc1t4XSAhPSAndW5kZWZpbmVkJykgaHMubGFuZ1t4XSA9IGhzW3hdO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGhzLmxhbmdbeF0gPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhzLmxhbmdEZWZhdWx0c1t4XSAhPSAndW5kZWZpbmVkJykgXG5cdFx0XHRcdGhzLmxhbmdbeF0gPSBocy5sYW5nRGVmYXVsdHNbeF07XG5cdFx0fVxuXHRcdFxuXHRcdGhzLmNvbnRhaW5lciA9IGhzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnaGlnaHNsaWRlLWNvbnRhaW5lcidcblx0XHRcdH0sIHtcblx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0XHRcdGxlZnQ6IDAsIFxuXHRcdFx0XHR0b3A6IDAsIFxuXHRcdFx0XHR3aWR0aDogJzEwMCUnLCBcblx0XHRcdFx0ekluZGV4OiBocy56SW5kZXhDb3VudGVyLFxuXHRcdFx0XHRkaXJlY3Rpb246ICdsdHInXG5cdFx0XHR9LCBcblx0XHRcdGRvY3VtZW50LmJvZHksXG5cdFx0XHR0cnVlXG5cdFx0KTtcblx0XHRocy5sb2FkaW5nID0gaHMuY3JlYXRlRWxlbWVudCgnYScsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnaGlnaHNsaWRlLWxvYWRpbmcnLFxuXHRcdFx0XHR0aXRsZTogaHMubGFuZy5sb2FkaW5nVGl0bGUsXG5cdFx0XHRcdGlubmVySFRNTDogaHMubGFuZy5sb2FkaW5nVGV4dCxcblx0XHRcdFx0aHJlZjogJ2phdmFzY3JpcHQ6Oydcblx0XHRcdH0sIHtcblx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0XHRcdHRvcDogJy05OTk5cHgnLFxuXHRcdFx0XHRvcGFjaXR5OiBocy5sb2FkaW5nT3BhY2l0eSxcblx0XHRcdFx0ekluZGV4OiAxXG5cdFx0XHR9LCBocy5jb250YWluZXJcblx0XHQpO1xuXHRcdGhzLmdhcmJhZ2VCaW4gPSBocy5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCB7IGRpc3BsYXk6ICdub25lJyB9LCBocy5jb250YWluZXIpO1xuXHRcdGhzLnZpZXdwb3J0ID0gaHMuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuXHRcdFx0XHRjbGFzc05hbWU6ICdoaWdoc2xpZGUtdmlld3BvcnQgaGlnaHNsaWRlLXZpZXdwb3J0LXNpemUnXG5cdFx0XHR9LCB7XG5cdFx0XHRcdHZpc2liaWxpdHk6IChocy5zYWZhcmkgJiYgaHMudWFWZXJzaW9uIDwgNTI1KSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXG5cdFx0XHR9LCBocy5jb250YWluZXIsIDFcblx0XHQpO1xuXHRcdGhzLmNsZWFyaW5nID0gaHMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgXG5cdFx0XHR7IGNsZWFyOiAnYm90aCcsIHBhZGRpbmdUb3A6ICcxcHgnIH0sIG51bGwsIHRydWUpO1xuXHRcdFxuXHRcdC8vIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvIFxuXHRcdE1hdGgubGluZWFyVHdlZW4gPSBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xuXHRcdFx0cmV0dXJuIGMqdC9kICsgYjtcblx0XHR9O1xuXHRcdE1hdGguZWFzZUluUXVhZCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XG5cdFx0XHRyZXR1cm4gYyoodC89ZCkqdCArIGI7XG5cdFx0fTtcblx0XHRNYXRoLmVhc2VPdXRRdWFkID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcblx0XHRcdHJldHVybiAtYyAqKHQvPWQpKih0LTIpICsgYjtcblx0XHR9O1xuXHRcdFxuXHRcdGhzLmhpZGVTZWxlY3RzID0gaHMuaWVMdDc7XG5cdFx0aHMuaGlkZUlmcmFtZXMgPSAoKHdpbmRvdy5vcGVyYSAmJiBocy51YVZlcnNpb24gPCA5KSB8fCBuYXZpZ2F0b3IudmVuZG9yID09ICdLREUnIFxuXHRcdFx0fHwgKGhzLmllTHQ3ICYmIGhzLnVhVmVyc2lvbiA8IDUuNSkpO1xuXHRcdGhzLmZpcmVFdmVudCh0aGlzLCAnb25BY3RpdmF0ZScpO1xuXHR9XG59LFxucmVhZHkgOiBmdW5jdGlvbigpIHtcblx0aWYgKGhzLmlzUmVhZHkpIHJldHVybjtcblx0aHMuaXNSZWFkeSA9IHRydWU7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaHMub25SZWFkeS5sZW5ndGg7IGkrKykgaHMub25SZWFkeVtpXSgpO1xufSxcblxudXBkYXRlQW5jaG9ycyA6IGZ1bmN0aW9uKCkge1xuXHR2YXIgZWwsIGVscywgYWxsID0gW10sIGltYWdlcyA9IFtdLCBodG1scyA9IFtdLGdyb3VwcyA9IHt9LCByZTtcblx0XHRcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBocy5vcGVuZXJUYWdOYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdGVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGhzLm9wZW5lclRhZ05hbWVzW2ldKTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGVscy5sZW5ndGg7IGorKykge1xuXHRcdFx0ZWwgPSBlbHNbal07XG5cdFx0XHRyZSA9IGhzLmlzSHNBbmNob3IoZWwpO1xuXHRcdFx0aWYgKHJlKSB7XG5cdFx0XHRcdGhzLnB1c2goYWxsLCBlbCk7XG5cdFx0XHRcdGlmIChyZVswXSA9PSAnaHMuZXhwYW5kJykgaHMucHVzaChpbWFnZXMsIGVsKTtcblx0XHRcdFx0ZWxzZSBpZiAocmVbMF0gPT0gJ2hzLmh0bWxFeHBhbmQnKSBocy5wdXNoKGh0bWxzLCBlbCk7XG5cdFx0XHRcdHZhciBnID0gaHMuZ2V0UGFyYW0oZWwsICdzbGlkZXNob3dHcm91cCcpIHx8ICdub25lJztcblx0XHRcdFx0aWYgKCFncm91cHNbZ10pIGdyb3Vwc1tnXSA9IFtdO1xuXHRcdFx0XHRocy5wdXNoKGdyb3Vwc1tnXSwgZWwpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRocy5hbmNob3JzID0geyBhbGw6IGFsbCwgZ3JvdXBzOiBncm91cHMsIGltYWdlczogaW1hZ2VzLCBodG1sczogaHRtbHMgfTtcblx0cmV0dXJuIGhzLmFuY2hvcnM7XG5cdFxufSxcblxuZ2V0QW5jaG9ycyA6IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gaHMuYW5jaG9ycyB8fCBocy51cGRhdGVBbmNob3JzKCk7XG59LFxuXG5cbmNsb3NlIDogZnVuY3Rpb24oZWwpIHtcblx0dmFyIGV4cCA9IGhzLmdldEV4cGFuZGVyKGVsKTtcblx0aWYgKGV4cCkgZXhwLmNsb3NlKCk7XG5cdHJldHVybiBmYWxzZTtcbn1cbn07IC8vIGVuZCBocyBvYmplY3RcbmhzLmZ4ID0gZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIHByb3AgKXtcblx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0dGhpcy5lbGVtID0gZWxlbTtcblx0dGhpcy5wcm9wID0gcHJvcDtcblxuXHRpZiAoIW9wdGlvbnMub3JpZykgb3B0aW9ucy5vcmlnID0ge307XG59O1xuaHMuZngucHJvdG90eXBlID0ge1xuXHR1cGRhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0KGhzLmZ4LnN0ZXBbdGhpcy5wcm9wXSB8fCBocy5meC5zdGVwLl9kZWZhdWx0KSh0aGlzKTtcblx0XHRcblx0XHRpZiAodGhpcy5vcHRpb25zLnN0ZXApXG5cdFx0XHR0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSwgdGhpcy5ub3csIHRoaXMpO1xuXG5cdH0sXG5cdGN1c3RvbTogZnVuY3Rpb24oZnJvbSwgdG8sIHVuaXQpe1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcblx0XHR0aGlzLnN0YXJ0ID0gZnJvbTtcblx0XHR0aGlzLmVuZCA9IHRvO1xuXHRcdHRoaXMudW5pdCA9IHVuaXQ7Ly8gfHwgdGhpcy51bml0IHx8IFwicHhcIjtcblx0XHR0aGlzLm5vdyA9IHRoaXMuc3RhcnQ7XG5cdFx0dGhpcy5wb3MgPSB0aGlzLnN0YXRlID0gMDtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRmdW5jdGlvbiB0KGdvdG9FbmQpe1xuXHRcdFx0cmV0dXJuIHNlbGYuc3RlcChnb3RvRW5kKTtcblx0XHR9XG5cblx0XHR0LmVsZW0gPSB0aGlzLmVsZW07XG5cblx0XHRpZiAoIHQoKSAmJiBocy50aW1lcnMucHVzaCh0KSA9PSAxICkge1xuXHRcdFx0aHMudGltZXJJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciB0aW1lcnMgPSBocy50aW1lcnM7XG5cblx0XHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGltZXJzLmxlbmd0aDsgaSsrIClcblx0XHRcdFx0XHRpZiAoICF0aW1lcnNbaV0oKSApXG5cdFx0XHRcdFx0XHR0aW1lcnMuc3BsaWNlKGktLSwgMSk7XG5cblx0XHRcdFx0aWYgKCAhdGltZXJzLmxlbmd0aCApIHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKGhzLnRpbWVySWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAxMyk7XG5cdFx0fVxuXHR9LFxuXHRzdGVwOiBmdW5jdGlvbihnb3RvRW5kKXtcblx0XHR2YXIgdCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG5cdFx0aWYgKCBnb3RvRW5kIHx8IHQgPj0gdGhpcy5vcHRpb25zLmR1cmF0aW9uICsgdGhpcy5zdGFydFRpbWUgKSB7XG5cdFx0XHR0aGlzLm5vdyA9IHRoaXMuZW5kO1xuXHRcdFx0dGhpcy5wb3MgPSB0aGlzLnN0YXRlID0gMTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cblx0XHRcdHRoaXMub3B0aW9ucy5jdXJBbmltWyB0aGlzLnByb3AgXSA9IHRydWU7XG5cblx0XHRcdHZhciBkb25lID0gdHJ1ZTtcblx0XHRcdGZvciAoIHZhciBpIGluIHRoaXMub3B0aW9ucy5jdXJBbmltIClcblx0XHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuY3VyQW5pbVtpXSAhPT0gdHJ1ZSApXG5cdFx0XHRcdFx0ZG9uZSA9IGZhbHNlO1xuXG5cdFx0XHRpZiAoIGRvbmUgKSB7XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMuY29tcGxldGUpIHRoaXMub3B0aW9ucy5jb21wbGV0ZS5jYWxsKHRoaXMuZWxlbSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBuID0gdCAtIHRoaXMuc3RhcnRUaW1lO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IG4gLyB0aGlzLm9wdGlvbnMuZHVyYXRpb247XG5cdFx0XHR0aGlzLnBvcyA9IHRoaXMub3B0aW9ucy5lYXNpbmcobiwgMCwgMSwgdGhpcy5vcHRpb25zLmR1cmF0aW9uKTtcblx0XHRcdHRoaXMubm93ID0gdGhpcy5zdGFydCArICgodGhpcy5lbmQgLSB0aGlzLnN0YXJ0KSAqIHRoaXMucG9zKTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cbn07XG5cbmhzLmV4dGVuZCggaHMuZngsIHtcblx0c3RlcDoge1xuXG5cdFx0b3BhY2l0eTogZnVuY3Rpb24oZngpe1xuXHRcdFx0aHMuc2V0U3R5bGVzKGZ4LmVsZW0sIHsgb3BhY2l0eTogZngubm93IH0pO1xuXHRcdH0sXG5cblx0XHRfZGVmYXVsdDogZnVuY3Rpb24oZngpe1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKCBmeC5lbGVtLnN0eWxlICYmIGZ4LmVsZW0uc3R5bGVbIGZ4LnByb3AgXSAhPSBudWxsIClcblx0XHRcdFx0XHRmeC5lbGVtLnN0eWxlWyBmeC5wcm9wIF0gPSBmeC5ub3cgKyBmeC51bml0O1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZnguZWxlbVsgZngucHJvcCBdID0gZngubm93O1xuXHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHR9XG5cdH1cbn0pO1xuXG5ocy5PdXRsaW5lID0gIGZ1bmN0aW9uIChvdXRsaW5lVHlwZSwgb25Mb2FkKSB7XG5cdHRoaXMub25Mb2FkID0gb25Mb2FkO1xuXHR0aGlzLm91dGxpbmVUeXBlID0gb3V0bGluZVR5cGU7XG5cdHZhciB2ID0gaHMudWFWZXJzaW9uLCB0cjtcblx0XG5cdHRoaXMuaGFzQWxwaGFJbWFnZUxvYWRlciA9IGhzLmllICYmIGhzLnVhVmVyc2lvbiA8IDc7XG5cdGlmICghb3V0bGluZVR5cGUpIHtcblx0XHRpZiAob25Mb2FkKSBvbkxvYWQoKTtcblx0XHRyZXR1cm47XG5cdH1cblx0XG5cdGhzLmluaXQoKTtcblx0dGhpcy50YWJsZSA9IGhzLmNyZWF0ZUVsZW1lbnQoXG5cdFx0J3RhYmxlJywgeyBcblx0XHRcdGNlbGxTcGFjaW5nOiAwIFxuXHRcdH0sIHtcblx0XHRcdHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuXHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0XHRib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyxcblx0XHRcdHdpZHRoOiAwXG5cdFx0fSxcblx0XHRocy5jb250YWluZXIsXG5cdFx0dHJ1ZVxuXHQpO1xuXHR2YXIgdGJvZHkgPSBocy5jcmVhdGVFbGVtZW50KCd0Ym9keScsIG51bGwsIG51bGwsIHRoaXMudGFibGUsIDEpO1xuXHRcblx0dGhpcy50ZCA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8PSA4OyBpKyspIHtcblx0XHRpZiAoaSAlIDMgPT0gMCkgdHIgPSBocy5jcmVhdGVFbGVtZW50KCd0cicsIG51bGwsIHsgaGVpZ2h0OiAnYXV0bycgfSwgdGJvZHksIHRydWUpO1xuXHRcdHRoaXMudGRbaV0gPSBocy5jcmVhdGVFbGVtZW50KCd0ZCcsIG51bGwsIG51bGwsIHRyLCB0cnVlKTtcblx0XHR2YXIgc3R5bGUgPSBpICE9IDQgPyB7IGxpbmVIZWlnaHQ6IDAsIGZvbnRTaXplOiAwfSA6IHsgcG9zaXRpb24gOiAncmVsYXRpdmUnIH07XG5cdFx0aHMuc2V0U3R5bGVzKHRoaXMudGRbaV0sIHN0eWxlKTtcblx0fVxuXHR0aGlzLnRkWzRdLmNsYXNzTmFtZSA9IG91dGxpbmVUeXBlICsnIGhpZ2hzbGlkZS1vdXRsaW5lJztcblx0XG5cdHRoaXMucHJlbG9hZEdyYXBoaWMoKTsgXG59O1xuXG5ocy5PdXRsaW5lLnByb3RvdHlwZSA9IHtcbnByZWxvYWRHcmFwaGljIDogZnVuY3Rpb24gKCkge1xuXHR2YXIgc3JjID0gaHMuZ3JhcGhpY3NEaXIgKyAoaHMub3V0bGluZXNEaXIgfHwgXCJvdXRsaW5lcy9cIikrIHRoaXMub3V0bGluZVR5cGUgK1wiLnBuZ1wiO1xuXHRcdFx0XHRcblx0dmFyIGFwcGVuZFRvID0gaHMuc2FmYXJpICYmIGhzLnVhVmVyc2lvbiA8IDUyNSA/IGhzLmNvbnRhaW5lciA6IG51bGw7XG5cdHRoaXMuZ3JhcGhpYyA9IGhzLmNyZWF0ZUVsZW1lbnQoJ2ltZycsIG51bGwsIHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIFxuXHRcdHRvcDogJy05OTk5cHgnIH0sIGFwcGVuZFRvLCB0cnVlKTsgLy8gZm9yIG9ubG9hZCB0cmlnZ2VyXG5cdFxuXHR2YXIgcFRoaXMgPSB0aGlzO1xuXHR0aGlzLmdyYXBoaWMub25sb2FkID0gZnVuY3Rpb24oKSB7IHBUaGlzLm9uR3JhcGhpY0xvYWQoKTsgfTtcblx0XG5cdHRoaXMuZ3JhcGhpYy5zcmMgPSBzcmM7XG59LFxuXG5vbkdyYXBoaWNMb2FkIDogZnVuY3Rpb24gKCkge1xuXHR2YXIgbyA9IHRoaXMub2Zmc2V0ID0gdGhpcy5ncmFwaGljLndpZHRoIC8gNCxcblx0XHRwb3MgPSBbWzAsMF0sWzAsLTRdLFstMiwwXSxbMCwtOF0sMCxbLTIsLThdLFswLC0yXSxbMCwtNl0sWy0yLC0yXV0sXG5cdFx0ZGltID0geyBoZWlnaHQ6ICgyKm8pICsncHgnLCB3aWR0aDogKDIqbykgKydweCcgfTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPD0gODsgaSsrKSB7XG5cdFx0aWYgKHBvc1tpXSkge1xuXHRcdFx0aWYgKHRoaXMuaGFzQWxwaGFJbWFnZUxvYWRlcikge1xuXHRcdFx0XHR2YXIgdyA9IChpID09IDEgfHwgaSA9PSA3KSA/ICcxMDAlJyA6IHRoaXMuZ3JhcGhpYy53aWR0aCArJ3B4Jztcblx0XHRcdFx0dmFyIGRpdiA9IGhzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBvdmVyZmxvdzogJ2hpZGRlbid9LCB0aGlzLnRkW2ldLCB0cnVlKTtcblx0XHRcdFx0aHMuY3JlYXRlRWxlbWVudCAoJ2RpdicsIG51bGwsIHsgXG5cdFx0XHRcdFx0XHRmaWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhSW1hZ2VMb2FkZXIoc2l6aW5nTWV0aG9kPXNjYWxlLCBzcmM9J1wiKyB0aGlzLmdyYXBoaWMuc3JjICsgXCInKVwiLCBcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdFx0XHRcdFx0d2lkdGg6IHcsIFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLmdyYXBoaWMuaGVpZ2h0ICsncHgnLFxuXHRcdFx0XHRcdFx0bGVmdDogKHBvc1tpXVswXSpvKSsncHgnLFxuXHRcdFx0XHRcdFx0dG9wOiAocG9zW2ldWzFdKm8pKydweCdcblx0XHRcdFx0XHR9LCBcblx0XHRcdFx0ZGl2LFxuXHRcdFx0XHR0cnVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhzLnNldFN0eWxlcyh0aGlzLnRkW2ldLCB7IGJhY2tncm91bmQ6ICd1cmwoJysgdGhpcy5ncmFwaGljLnNyYyArJykgJysgKHBvc1tpXVswXSpvKSsncHggJysocG9zW2ldWzFdKm8pKydweCd9KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYgKHdpbmRvdy5vcGVyYSAmJiAoaSA9PSAzIHx8IGkgPT01KSkgXG5cdFx0XHRcdGhzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIGRpbSwgdGhpcy50ZFtpXSwgdHJ1ZSk7XG5cdFx0XHRcblx0XHRcdGhzLnNldFN0eWxlcyAodGhpcy50ZFtpXSwgZGltKTtcblx0XHR9XG5cdH1cblx0dGhpcy5ncmFwaGljID0gbnVsbDtcblx0aWYgKGhzLnBlbmRpbmdPdXRsaW5lc1t0aGlzLm91dGxpbmVUeXBlXSkgaHMucGVuZGluZ091dGxpbmVzW3RoaXMub3V0bGluZVR5cGVdLmRlc3Ryb3koKTtcblx0aHMucGVuZGluZ091dGxpbmVzW3RoaXMub3V0bGluZVR5cGVdID0gdGhpcztcblx0aWYgKHRoaXMub25Mb2FkKSB0aGlzLm9uTG9hZCgpO1xufSxcblx0XG5zZXRQb3NpdGlvbiA6IGZ1bmN0aW9uIChwb3MsIG9mZnNldCwgdmlzLCBkdXIsIGVhc2luZykge1xuXHR2YXIgZXhwID0gdGhpcy5leHAsXG5cdFx0c3RsID0gZXhwLndyYXBwZXIuc3R5bGUsXG5cdFx0b2Zmc2V0ID0gb2Zmc2V0IHx8IDAsXG5cdFx0cG9zID0gcG9zIHx8IHtcblx0XHRcdHg6IGV4cC54LnBvcyArIG9mZnNldCxcblx0XHRcdHk6IGV4cC55LnBvcyArIG9mZnNldCxcblx0XHRcdHc6IGV4cC54LmdldCgnd3NpemUnKSAtIDIgKiBvZmZzZXQsXG5cdFx0XHRoOiBleHAueS5nZXQoJ3dzaXplJykgLSAyICogb2Zmc2V0XG5cdFx0fTtcblx0aWYgKHZpcykgdGhpcy50YWJsZS5zdHlsZS52aXNpYmlsaXR5ID0gKHBvcy5oID49IDQgKiB0aGlzLm9mZnNldCkgXG5cdFx0PyAndmlzaWJsZScgOiAnaGlkZGVuJztcblx0aHMuc2V0U3R5bGVzKHRoaXMudGFibGUsIHtcblx0XHRsZWZ0OiAocG9zLnggLSB0aGlzLm9mZnNldCkgKydweCcsXG5cdFx0dG9wOiAocG9zLnkgLSB0aGlzLm9mZnNldCkgKydweCcsXG5cdFx0d2lkdGg6IChwb3MudyArIDIgKiB0aGlzLm9mZnNldCkgKydweCdcblx0fSk7XG5cdFxuXHRwb3MudyAtPSAyICogdGhpcy5vZmZzZXQ7XG5cdHBvcy5oIC09IDIgKiB0aGlzLm9mZnNldDtcblx0aHMuc2V0U3R5bGVzICh0aGlzLnRkWzRdLCB7XG5cdFx0d2lkdGg6IHBvcy53ID49IDAgPyBwb3MudyArJ3B4JyA6IDAsXG5cdFx0aGVpZ2h0OiBwb3MuaCA+PSAwID8gcG9zLmggKydweCcgOiAwXG5cdH0pO1xuXHRpZiAodGhpcy5oYXNBbHBoYUltYWdlTG9hZGVyKSB0aGlzLnRkWzNdLnN0eWxlLmhlaWdodCBcblx0XHQ9IHRoaXMudGRbNV0uc3R5bGUuaGVpZ2h0ID0gdGhpcy50ZFs0XS5zdHlsZS5oZWlnaHQ7XHRcblx0XG59LFxuXHRcbmRlc3Ryb3kgOiBmdW5jdGlvbihoaWRlKSB7XG5cdGlmIChoaWRlKSB0aGlzLnRhYmxlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblx0ZWxzZSBocy5kaXNjYXJkRWxlbWVudCh0aGlzLnRhYmxlKTtcbn1cbn07XG5cbmhzLkRpbWVuc2lvbiA9IGZ1bmN0aW9uKGV4cCwgZGltKSB7XG5cdHRoaXMuZXhwID0gZXhwO1xuXHR0aGlzLmRpbSA9IGRpbTtcblx0dGhpcy51Y3doID0gZGltID09ICd4JyA/ICdXaWR0aCcgOiAnSGVpZ2h0Jztcblx0dGhpcy53aCA9IHRoaXMudWN3aC50b0xvd2VyQ2FzZSgpO1xuXHR0aGlzLnVjbHQgPSBkaW0gPT0gJ3gnID8gJ0xlZnQnIDogJ1RvcCc7XG5cdHRoaXMubHQgPSB0aGlzLnVjbHQudG9Mb3dlckNhc2UoKTtcblx0dGhpcy51Y3JiID0gZGltID09ICd4JyA/ICdSaWdodCcgOiAnQm90dG9tJztcblx0dGhpcy5yYiA9IHRoaXMudWNyYi50b0xvd2VyQ2FzZSgpO1xuXHR0aGlzLnAxID0gdGhpcy5wMiA9IDA7XG59O1xuaHMuRGltZW5zaW9uLnByb3RvdHlwZSA9IHtcbmdldCA6IGZ1bmN0aW9uKGtleSkge1xuXHRzd2l0Y2ggKGtleSkge1xuXHRcdGNhc2UgJ2xvYWRpbmdQb3MnOlxuXHRcdFx0cmV0dXJuIHRoaXMudHBvcyArIHRoaXMudGIgKyAodGhpcy50IC0gaHMubG9hZGluZ1snb2Zmc2V0JysgdGhpcy51Y3doXSkgLyAyO1xuXHRcdGNhc2UgJ2xvYWRpbmdQb3NYZmFkZSc6XG5cdFx0XHRyZXR1cm4gdGhpcy5wb3MgKyB0aGlzLmNiKyB0aGlzLnAxICsgKHRoaXMuc2l6ZSAtIGhzLmxvYWRpbmdbJ29mZnNldCcrIHRoaXMudWN3aF0pIC8gMjtcblx0XHRjYXNlICd3c2l6ZSc6XG5cdFx0XHRyZXR1cm4gdGhpcy5zaXplICsgMiAqIHRoaXMuY2IgKyB0aGlzLnAxICsgdGhpcy5wMjtcblx0XHRjYXNlICdmaXRzaXplJzpcblx0XHRcdHJldHVybiB0aGlzLmNsaWVudFNpemUgLSB0aGlzLm1hcmdpbk1pbiAtIHRoaXMubWFyZ2luTWF4O1xuXHRcdGNhc2UgJ21heHNpemUnOlxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KCdmaXRzaXplJykgLSAyICogdGhpcy5jYiAtIHRoaXMucDEgLSB0aGlzLnAyIDtcblx0XHRjYXNlICdvcG9zJzpcblx0XHRcdHJldHVybiB0aGlzLnBvcyAtICh0aGlzLmV4cC5vdXRsaW5lID8gdGhpcy5leHAub3V0bGluZS5vZmZzZXQgOiAwKTtcblx0XHRjYXNlICdvc2l6ZSc6XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQoJ3dzaXplJykgKyAodGhpcy5leHAub3V0bGluZSA/IDIqdGhpcy5leHAub3V0bGluZS5vZmZzZXQgOiAwKTtcblx0XHRjYXNlICdpbWdQYWQnOlxuXHRcdFx0cmV0dXJuIHRoaXMuaW1nU2l6ZSA/IE1hdGgucm91bmQoKHRoaXMuc2l6ZSAtIHRoaXMuaW1nU2l6ZSkgLyAyKSA6IDA7XG5cdFx0XG5cdH1cbn0sXG5jYWxjQm9yZGVyczogZnVuY3Rpb24oKSB7XG5cdC8vIGNvcnJlY3QgZm9yIGJvcmRlcnNcblx0dGhpcy5jYiA9ICh0aGlzLmV4cC5jb250ZW50WydvZmZzZXQnKyB0aGlzLnVjd2hdIC0gdGhpcy50KSAvIDI7XG5cdFxuXHR0aGlzLm1hcmdpbk1heCA9IGhzWydtYXJnaW4nKyB0aGlzLnVjcmJdO1xufSxcbmNhbGNUaHVtYjogZnVuY3Rpb24oKSB7XG5cdHRoaXMudCA9IHRoaXMuZXhwLmVsW3RoaXMud2hdID8gcGFyc2VJbnQodGhpcy5leHAuZWxbdGhpcy53aF0pIDogXG5cdFx0dGhpcy5leHAuZWxbJ29mZnNldCcrIHRoaXMudWN3aF07XG5cdHRoaXMudHBvcyA9IHRoaXMuZXhwLnRwb3NbdGhpcy5kaW1dO1xuXHR0aGlzLnRiID0gKHRoaXMuZXhwLmVsWydvZmZzZXQnKyB0aGlzLnVjd2hdIC0gdGhpcy50KSAvIDI7XG5cdGlmICh0aGlzLnRwb3MgPT0gMCB8fCB0aGlzLnRwb3MgPT0gLTEpIHtcblx0XHR0aGlzLnRwb3MgPSAoaHMucGFnZVt0aGlzLndoXSAvIDIpICsgaHMucGFnZVsnc2Nyb2xsJysgdGhpcy51Y2x0XTtcdFx0XG5cdH07XG59LFxuY2FsY0V4cGFuZGVkOiBmdW5jdGlvbigpIHtcblx0dmFyIGV4cCA9IHRoaXMuZXhwO1xuXHR0aGlzLmp1c3RpZnkgPSAnYXV0byc7XG5cdFxuXHQvLyBnZXQgYWxpZ25tZW50XG5cdGlmIChleHAuYWxpZ24gPT0gJ2NlbnRlcicpIHRoaXMuanVzdGlmeSA9ICdjZW50ZXInO1xuXHRlbHNlIGlmIChuZXcgUmVnRXhwKHRoaXMubHQpLnRlc3QoZXhwLmFuY2hvcikpIHRoaXMuanVzdGlmeSA9IG51bGw7XG5cdGVsc2UgaWYgKG5ldyBSZWdFeHAodGhpcy5yYikudGVzdChleHAuYW5jaG9yKSkgdGhpcy5qdXN0aWZ5ID0gJ21heCc7XG5cdFxuXHRcblx0Ly8gc2l6ZSBhbmQgcG9zaXRpb25cblx0dGhpcy5wb3MgPSB0aGlzLnRwb3MgLSB0aGlzLmNiICsgdGhpcy50Yjtcblx0XG5cdGlmICh0aGlzLm1heEhlaWdodCAmJiB0aGlzLmRpbSA9PSAneCcpXG5cdFx0ZXhwLm1heFdpZHRoID0gTWF0aC5taW4oZXhwLm1heFdpZHRoIHx8IHRoaXMuZnVsbCwgZXhwLm1heEhlaWdodCAqIHRoaXMuZnVsbCAvIGV4cC55LmZ1bGwpOyBcblx0XHRcblx0dGhpcy5zaXplID0gTWF0aC5taW4odGhpcy5mdWxsLCBleHBbJ21heCcrIHRoaXMudWN3aF0gfHwgdGhpcy5mdWxsKTtcblx0dGhpcy5taW5TaXplID0gZXhwLmFsbG93U2l6ZVJlZHVjdGlvbiA/IFxuXHRcdE1hdGgubWluKGV4cFsnbWluJysgdGhpcy51Y3doXSwgdGhpcy5mdWxsKSA6dGhpcy5mdWxsO1xuXHRpZiAoZXhwLmlzSW1hZ2UgJiYgZXhwLnVzZUJveClcdHtcblx0XHR0aGlzLnNpemUgPSBleHBbdGhpcy53aF07XG5cdFx0dGhpcy5pbWdTaXplID0gdGhpcy5mdWxsO1xuXHR9XG5cdGlmICh0aGlzLmRpbSA9PSAneCcgJiYgaHMucGFkVG9NaW5XaWR0aCkgdGhpcy5taW5TaXplID0gZXhwLm1pbldpZHRoO1xuXHR0aGlzLnRhcmdldCA9IGV4cFsndGFyZ2V0JysgdGhpcy5kaW0udG9VcHBlckNhc2UoKV07XG5cdHRoaXMubWFyZ2luTWluID0gaHNbJ21hcmdpbicrIHRoaXMudWNsdF07XG5cdHRoaXMuc2Nyb2xsID0gaHMucGFnZVsnc2Nyb2xsJysgdGhpcy51Y2x0XTtcblx0dGhpcy5jbGllbnRTaXplID0gaHMucGFnZVt0aGlzLndoXTtcbn0sXG5zZXRTaXplOiBmdW5jdGlvbihpKSB7XG5cdHZhciBleHAgPSB0aGlzLmV4cDtcblx0aWYgKGV4cC5pc0ltYWdlICYmIChleHAudXNlQm94IHx8IGhzLnBhZFRvTWluV2lkdGgpKSB7XG5cdFx0dGhpcy5pbWdTaXplID0gaTtcblx0XHR0aGlzLnNpemUgPSBNYXRoLm1heCh0aGlzLnNpemUsIHRoaXMuaW1nU2l6ZSk7XG5cdFx0ZXhwLmNvbnRlbnQuc3R5bGVbdGhpcy5sdF0gPSB0aGlzLmdldCgnaW1nUGFkJykrJ3B4Jztcblx0fSBlbHNlXG5cdHRoaXMuc2l6ZSA9IGk7XG5cdFxuXHRleHAuY29udGVudC5zdHlsZVt0aGlzLndoXSA9IGkgKydweCc7XG5cdGV4cC53cmFwcGVyLnN0eWxlW3RoaXMud2hdID0gdGhpcy5nZXQoJ3dzaXplJykgKydweCc7XG5cdGlmIChleHAub3V0bGluZSkgZXhwLm91dGxpbmUuc2V0UG9zaXRpb24oKTtcblx0aWYgKGV4cC5yZWxlYXNlTWFzaykgZXhwLnJlbGVhc2VNYXNrLnN0eWxlW3RoaXMud2hdID0gaSArJ3B4Jztcblx0aWYgKHRoaXMuZGltID09ICd5JyAmJiBleHAuaURvYyAmJiBleHAuYm9keS5zdHlsZS5oZWlnaHQgIT0gJ2F1dG8nKSB0cnkge1xuXHRcdGV4cC5pRG9jLmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG5cdH0gY2F0Y2ggKGUpIHt9XG5cdGlmIChleHAuaXNIdG1sKSB7XG5cdFx0dmFyIGQgPSBleHAuc2Nyb2xsZXJEaXY7XG5cdFx0aWYgKHRoaXMuc2l6ZURpZmYgPT09IHVuZGVmaW5lZClcblx0XHRcdHRoaXMuc2l6ZURpZmYgPSBleHAuaW5uZXJDb250ZW50WydvZmZzZXQnKyB0aGlzLnVjd2hdIC0gZFsnb2Zmc2V0JysgdGhpcy51Y3doXTtcblx0XHRkLnN0eWxlW3RoaXMud2hdID0gKHRoaXMuc2l6ZSAtIHRoaXMuc2l6ZURpZmYpICsncHgnO1xuXHRcdFx0XG5cdFx0aWYgKHRoaXMuZGltID09ICd4JykgZXhwLm1lZGl1bUNvbnRlbnQuc3R5bGUud2lkdGggPSAnYXV0byc7XG5cdFx0aWYgKGV4cC5ib2R5KSBleHAuYm9keS5zdHlsZVt0aGlzLndoXSA9ICdhdXRvJztcblx0fVxuXHRpZiAodGhpcy5kaW0gPT0gJ3gnICYmIGV4cC5vdmVybGF5Qm94KSBleHAuc2l6ZU92ZXJsYXlCb3godHJ1ZSk7XG5cdGlmICh0aGlzLmRpbSA9PSAneCcgJiYgZXhwLnNsaWRlc2hvdyAmJiBleHAuaXNJbWFnZSkge1xuXHRcdGlmIChpID09IHRoaXMuZnVsbCkgZXhwLnNsaWRlc2hvdy5kaXNhYmxlKCdmdWxsLWV4cGFuZCcpO1xuXHRcdGVsc2UgZXhwLnNsaWRlc2hvdy5lbmFibGUoJ2Z1bGwtZXhwYW5kJyk7XG5cdH1cbn0sXG5zZXRQb3M6IGZ1bmN0aW9uKGkpIHtcblx0dGhpcy5wb3MgPSBpO1xuXHR0aGlzLmV4cC53cmFwcGVyLnN0eWxlW3RoaXMubHRdID0gaSArJ3B4JztcdFxuXHRcblx0aWYgKHRoaXMuZXhwLm91dGxpbmUpIHRoaXMuZXhwLm91dGxpbmUuc2V0UG9zaXRpb24oKTtcblx0XG59XG59O1xuXG5ocy5FeHBhbmRlciA9IGZ1bmN0aW9uKGEsIHBhcmFtcywgY3VzdG9tLCBjb250ZW50VHlwZSkge1xuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAmJiBocy5pZSAmJiAhaHMuaXNSZWFkeSkge1xuXHRcdGhzLmFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICdyZWFkeScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bmV3IGhzLkV4cGFuZGVyKGEsIHBhcmFtcywgY3VzdG9tLCBjb250ZW50VHlwZSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuO1xuXHR9IFxuXHR0aGlzLmEgPSBhO1xuXHR0aGlzLmN1c3RvbSA9IGN1c3RvbTtcblx0dGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlIHx8ICdpbWFnZSc7XG5cdHRoaXMuaXNIdG1sID0gKGNvbnRlbnRUeXBlID09ICdodG1sJyk7XG5cdHRoaXMuaXNJbWFnZSA9ICF0aGlzLmlzSHRtbDtcblx0XG5cdGhzLmNvbnRpbnVlUHJlbG9hZGluZyA9IGZhbHNlO1xuXHR0aGlzLm92ZXJsYXlzID0gW107XG5cdHRoaXMubGFzdCA9IGhzLmxhc3Q7XG5cdGhzLmxhc3QgPSBudWxsO1xuXHRocy5pbml0KCk7XG5cdHZhciBrZXkgPSB0aGlzLmtleSA9IGhzLmV4cGFuZGVycy5sZW5ndGg7XG5cdC8vIG92ZXJyaWRlIGlubGluZSBwYXJhbWV0ZXJzXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaHMub3ZlcnJpZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIG5hbWUgPSBocy5vdmVycmlkZXNbaV07XG5cdFx0dGhpc1tuYW1lXSA9IHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zW25hbWVdICE9ICd1bmRlZmluZWQnID9cblx0XHRcdHBhcmFtc1tuYW1lXSA6IGhzW25hbWVdO1xuXHR9XG5cdGlmICghdGhpcy5zcmMpIHRoaXMuc3JjID0gYS5ocmVmO1xuXHRcblx0Ly8gZ2V0IHRodW1iXG5cdHZhciBlbCA9IChwYXJhbXMgJiYgcGFyYW1zLnRodW1ibmFpbElkKSA/IGhzLiQocGFyYW1zLnRodW1ibmFpbElkKSA6IGE7XG5cdGVsID0gdGhpcy50aHVtYiA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXSB8fCBlbDtcblx0dGhpcy50aHVtYnNVc2VyU2V0SWQgPSBlbC5pZCB8fCBhLmlkO1xuXHRpZiAoIWhzLmZpcmVFdmVudCh0aGlzLCAnb25Jbml0JykpIHJldHVybiB0cnVlO1xuXHRcblx0Ly8gY2hlY2sgaWYgYWxyZWFkeSBvcGVuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaHMuZXhwYW5kZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGhzLmV4cGFuZGVyc1tpXSAmJiBocy5leHBhbmRlcnNbaV0uYSA9PSBhIFxuXHRcdFx0JiYgISh0aGlzLmxhc3QgJiYgdGhpcy50cmFuc2l0aW9uc1sxXSA9PSAnY3Jvc3NmYWRlJykpIHtcblx0XHRcdGhzLmV4cGFuZGVyc1tpXS5mb2N1cygpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVx0XG5cblx0Ly8gY2FuY2VsIG90aGVyXG5cdGlmICghaHMuYWxsb3dTaW11bHRhbmVvdXNMb2FkaW5nKSBmb3IgKHZhciBpID0gMDsgaSA8IGhzLmV4cGFuZGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChocy5leHBhbmRlcnNbaV0gJiYgaHMuZXhwYW5kZXJzW2ldLnRodW1iICE9IGVsICYmICFocy5leHBhbmRlcnNbaV0ub25Mb2FkU3RhcnRlZCkge1xuXHRcdFx0aHMuZXhwYW5kZXJzW2ldLmNhbmNlbExvYWRpbmcoKTtcblx0XHR9XG5cdH1cblx0aHMuZXhwYW5kZXJzW2tleV0gPSB0aGlzO1xuXHRpZiAoIWhzLmFsbG93TXVsdGlwbGVJbnN0YW5jZXMgJiYgIWhzLnVwY29taW5nKSB7XG5cdFx0aWYgKGhzLmV4cGFuZGVyc1trZXktMV0pIGhzLmV4cGFuZGVyc1trZXktMV0uY2xvc2UoKTtcblx0XHRpZiAodHlwZW9mIGhzLmZvY3VzS2V5ICE9ICd1bmRlZmluZWQnICYmIGhzLmV4cGFuZGVyc1tocy5mb2N1c0tleV0pXG5cdFx0XHRocy5leHBhbmRlcnNbaHMuZm9jdXNLZXldLmNsb3NlKCk7XG5cdH1cblx0XG5cdC8vIGluaXRpYXRlIG1ldHJpY3Ncblx0dGhpcy5lbCA9IGVsO1xuXHR0aGlzLnRwb3MgPSB0aGlzLnBhZ2VPcmlnaW4gfHwgaHMuZ2V0UG9zaXRpb24oZWwpO1xuXHRocy5nZXRQYWdlU2l6ZSgpO1xuXHR2YXIgeCA9IHRoaXMueCA9IG5ldyBocy5EaW1lbnNpb24odGhpcywgJ3gnKTtcblx0eC5jYWxjVGh1bWIoKTtcblx0dmFyIHkgPSB0aGlzLnkgPSBuZXcgaHMuRGltZW5zaW9uKHRoaXMsICd5Jyk7XG5cdHkuY2FsY1RodW1iKCk7XG5cdGlmICgvYXJlYS9pLnRlc3QoZWwudGFnTmFtZSkpIHRoaXMuZ2V0SW1hZ2VNYXBBcmVhQ29ycmVjdGlvbihlbCk7XG5cdHRoaXMud3JhcHBlciA9IGhzLmNyZWF0ZUVsZW1lbnQoXG5cdFx0J2RpdicsIHtcblx0XHRcdGlkOiAnaGlnaHNsaWRlLXdyYXBwZXItJysgdGhpcy5rZXksXG5cdFx0XHRjbGFzc05hbWU6ICdoaWdoc2xpZGUtd3JhcHBlciAnKyB0aGlzLndyYXBwZXJDbGFzc05hbWVcblx0XHR9LCB7XG5cdFx0XHR2aXNpYmlsaXR5OiAnaGlkZGVuJyxcblx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdFx0ekluZGV4OiBocy56SW5kZXhDb3VudGVyICs9IDJcblx0XHR9LCBudWxsLCB0cnVlICk7XG5cdFxuXHR0aGlzLndyYXBwZXIub25tb3VzZW92ZXIgPSB0aGlzLndyYXBwZXIub25tb3VzZW91dCA9IGhzLndyYXBwZXJNb3VzZUhhbmRsZXI7XG5cdGlmICh0aGlzLmNvbnRlbnRUeXBlID09ICdpbWFnZScgJiYgdGhpcy5vdXRsaW5lV2hpbGVBbmltYXRpbmcgPT0gMilcblx0XHR0aGlzLm91dGxpbmVXaGlsZUFuaW1hdGluZyA9IDA7XG5cdFxuXHQvLyBnZXQgdGhlIG91dGxpbmVcblx0aWYgKCF0aGlzLm91dGxpbmVUeXBlIFxuXHRcdHx8ICh0aGlzLmxhc3QgJiYgdGhpcy5pc0ltYWdlICYmIHRoaXMudHJhbnNpdGlvbnNbMV0gPT0gJ2Nyb3NzZmFkZScpKSB7XG5cdFx0dGhpc1t0aGlzLmNvbnRlbnRUeXBlICsnQ3JlYXRlJ10oKTtcblx0XG5cdH0gZWxzZSBpZiAoaHMucGVuZGluZ091dGxpbmVzW3RoaXMub3V0bGluZVR5cGVdKSB7XG5cdFx0dGhpcy5jb25uZWN0T3V0bGluZSgpO1xuXHRcdHRoaXNbdGhpcy5jb250ZW50VHlwZSArJ0NyZWF0ZSddKCk7XG5cdFxuXHR9IGVsc2Uge1xuXHRcdHRoaXMuc2hvd0xvYWRpbmcoKTtcblx0XHR2YXIgZXhwID0gdGhpcztcblx0XHRuZXcgaHMuT3V0bGluZSh0aGlzLm91dGxpbmVUeXBlLCBcblx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0ZXhwLmNvbm5lY3RPdXRsaW5lKCk7XG5cdFx0XHRcdGV4cFtleHAuY29udGVudFR5cGUgKydDcmVhdGUnXSgpO1xuXHRcdFx0fSBcblx0XHQpO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuaHMuRXhwYW5kZXIucHJvdG90eXBlID0ge1xuZXJyb3IgOiBmdW5jdGlvbihlKSB7XG5cdGlmIChocy5kZWJ1ZykgYWxlcnQgKCdMaW5lICcrIGUubGluZU51bWJlciArJzogJysgZS5tZXNzYWdlKTtcblx0ZWxzZSB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuc3JjO1xufSxcblxuY29ubmVjdE91dGxpbmUgOiBmdW5jdGlvbigpIHtcblx0dmFyIG91dGxpbmUgPSB0aGlzLm91dGxpbmUgPSBocy5wZW5kaW5nT3V0bGluZXNbdGhpcy5vdXRsaW5lVHlwZV07XG5cdG91dGxpbmUuZXhwID0gdGhpcztcblx0b3V0bGluZS50YWJsZS5zdHlsZS56SW5kZXggPSB0aGlzLndyYXBwZXIuc3R5bGUuekluZGV4IC0gMTtcblx0aHMucGVuZGluZ091dGxpbmVzW3RoaXMub3V0bGluZVR5cGVdID0gbnVsbDtcbn0sXG5cbnNob3dMb2FkaW5nIDogZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLm9uTG9hZFN0YXJ0ZWQgfHwgdGhpcy5sb2FkaW5nKSByZXR1cm47XG5cdFxuXHR0aGlzLmxvYWRpbmcgPSBocy5sb2FkaW5nO1xuXHR2YXIgZXhwID0gdGhpcztcblx0dGhpcy5sb2FkaW5nLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRleHAuY2FuY2VsTG9hZGluZygpO1xuXHR9O1xuXHRcblx0XG5cdGlmICghaHMuZmlyZUV2ZW50KHRoaXMsICdvblNob3dMb2FkaW5nJykpIHJldHVybjtcblx0dmFyIGV4cCA9IHRoaXMsIFxuXHRcdGwgPSB0aGlzLnguZ2V0KCdsb2FkaW5nUG9zJykgKydweCcsXG5cdFx0dCA9IHRoaXMueS5nZXQoJ2xvYWRpbmdQb3MnKSArJ3B4Jztcblx0aWYgKCF0Z3QgJiYgdGhpcy5sYXN0ICYmIHRoaXMudHJhbnNpdGlvbnNbMV0gPT0gJ2Nyb3NzZmFkZScpIFxuXHRcdHZhciB0Z3QgPSB0aGlzLmxhc3Q7IFxuXHRpZiAodGd0KSB7XG5cdFx0bCA9IHRndC54LmdldCgnbG9hZGluZ1Bvc1hmYWRlJykgKydweCc7XG5cdFx0dCA9IHRndC55LmdldCgnbG9hZGluZ1Bvc1hmYWRlJykgKydweCc7XG5cdFx0dGhpcy5sb2FkaW5nLnN0eWxlLnpJbmRleCA9IGhzLnpJbmRleENvdW50ZXIrKztcblx0fVxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgXG5cdFx0aWYgKGV4cC5sb2FkaW5nKSBocy5zZXRTdHlsZXMoZXhwLmxvYWRpbmcsIHsgbGVmdDogbCwgdG9wOiB0LCB6SW5kZXg6IGhzLnpJbmRleENvdW50ZXIrKyB9KX1cblx0LCAxMDApO1xufSxcblxuaW1hZ2VDcmVhdGUgOiBmdW5jdGlvbigpIHtcblx0dmFyIGV4cCA9IHRoaXM7XG5cdFxuXHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGhpcy5jb250ZW50ID0gaW1nO1xuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgXHRpZiAoaHMuZXhwYW5kZXJzW2V4cC5rZXldKSBleHAuY29udGVudExvYWRlZCgpOyBcblx0fTtcbiAgICBpZiAoaHMuYmxvY2tSaWdodENsaWNrKSBpbWcub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH07XG4gICAgaW1nLmNsYXNzTmFtZSA9ICdoaWdoc2xpZGUtaW1hZ2UnO1xuICAgIGhzLnNldFN0eWxlcyhpbWcsIHtcbiAgICBcdHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIFx0ZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdG1heFdpZHRoOiAnOTk5OXB4Jyxcblx0XHR6SW5kZXg6IDNcblx0fSk7XG4gICAgaW1nLnRpdGxlID0gaHMubGFuZy5yZXN0b3JlVGl0bGU7XG5cdGlmIChocy5zYWZhcmkgJiYgaHMudWFWZXJzaW9uIDwgNTI1KSBocy5jb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBpZiAoaHMuaWUgJiYgaHMuZmx1c2hJbWdTaXplKSBpbWcuc3JjID0gbnVsbDtcblx0aW1nLnNyYyA9IHRoaXMuc3JjO1xuXHRcblx0dGhpcy5zaG93TG9hZGluZygpO1xufSxcblxuaHRtbENyZWF0ZSA6IGZ1bmN0aW9uICgpIHtcblx0aWYgKCFocy5maXJlRXZlbnQodGhpcywgJ29uQmVmb3JlR2V0Q29udGVudCcpKSByZXR1cm47XG5cdFxuXHR0aGlzLmNvbnRlbnQgPSBocy5nZXRDYWNoZUJpbmRpbmcodGhpcy5hKTtcblx0aWYgKCF0aGlzLmNvbnRlbnQpIFxuXHRcdHRoaXMuY29udGVudCA9IGhzLmdldE5vZGUodGhpcy5jb250ZW50SWQpO1xuXHRpZiAoIXRoaXMuY29udGVudCkgXG5cdFx0dGhpcy5jb250ZW50ID0gaHMuZ2V0U2VsZlJlbmRlcmVkKCk7XG5cdHRoaXMuZ2V0SW5saW5lKFsnbWFpbmNvbnRlbnQnXSk7XG5cdGlmICh0aGlzLm1haW5jb250ZW50KSB7XG5cdFx0dmFyIGJvZHkgPSBocy5nZXRFbGVtZW50QnlDbGFzcyh0aGlzLmNvbnRlbnQsICdkaXYnLCAnaGlnaHNsaWRlLWJvZHknKTtcblx0XHRpZiAoYm9keSkgYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1haW5jb250ZW50KTtcblx0XHR0aGlzLm1haW5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9XG5cdGhzLmZpcmVFdmVudCh0aGlzLCAnb25BZnRlckdldENvbnRlbnQnKTtcblx0XG5cdHZhciBpbm5lckNvbnRlbnQgPSB0aGlzLmlubmVyQ29udGVudCA9IHRoaXMuY29udGVudDtcblx0XG5cdGlmICgvKHN3ZnxpZnJhbWUpLy50ZXN0KHRoaXMub2JqZWN0VHlwZSkpIHRoaXMuc2V0T2JqQ29udGFpbmVyU2l6ZShpbm5lckNvbnRlbnQpO1xuXHRcblx0Ly8gdGhlIGNvbnRlbnQgdHJlZVxuXHRocy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcblx0aHMuc2V0U3R5bGVzKCB0aGlzLndyYXBwZXIsIHsgXG5cdFx0cG9zaXRpb246ICdzdGF0aWMnLFxuXHRcdHBhZGRpbmc6ICcwICcrIGhzLm1hcmdpblJpZ2h0ICsncHggMCAnKyBocy5tYXJnaW5MZWZ0ICsncHgnXG5cdH0pO1xuXHR0aGlzLmNvbnRlbnQgPSBocy5jcmVhdGVFbGVtZW50KFxuICAgIFx0J2RpdicsIHtcbiAgICBcdFx0Y2xhc3NOYW1lOiAnaGlnaHNsaWRlLWh0bWwnIFxuICAgIFx0fSwge1xuXHRcdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0XHR6SW5kZXg6IDMsXG5cdFx0XHRoZWlnaHQ6IDAsXG5cdFx0XHRvdmVyZmxvdzogJ2hpZGRlbidcblx0XHR9LFxuXHRcdHRoaXMud3JhcHBlclxuXHQpO1xuXHR0aGlzLm1lZGl1bUNvbnRlbnQgPSBocy5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsLCB0aGlzLmNvbnRlbnQsIDEpO1xuXHR0aGlzLm1lZGl1bUNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5uZXJDb250ZW50KTtcblx0XG5cdGhzLnNldFN0eWxlcyAoaW5uZXJDb250ZW50LCB7IFxuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0ZGlyZWN0aW9uOiBocy5sYW5nLmNzc0RpcmVjdGlvbiB8fCAnJ1xuXHR9KTtcblx0aWYgKHRoaXMud2lkdGgpIGlubmVyQ29udGVudC5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKydweCc7XG5cdGlmICh0aGlzLmhlaWdodCkgaHMuc2V0U3R5bGVzKGlubmVyQ29udGVudCwge1xuXHRcdGhlaWdodDogdGhpcy5oZWlnaHQgKydweCcsXG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nXG5cdH0pO1xuXHRpZiAoaW5uZXJDb250ZW50Lm9mZnNldFdpZHRoIDwgdGhpcy5taW5XaWR0aClcblx0XHRpbm5lckNvbnRlbnQuc3R5bGUud2lkdGggPSB0aGlzLm1pbldpZHRoICsncHgnO1xuXHRcdFxuXHRcbiAgICBcblx0aWYgKHRoaXMub2JqZWN0VHlwZSA9PSAnYWpheCcgJiYgIWhzLmdldENhY2hlQmluZGluZyh0aGlzLmEpKSB7XG5cdFx0dGhpcy5zaG93TG9hZGluZygpO1xuICAgIFx0dmFyIGV4cCA9IHRoaXM7XG4gICAgXHR2YXIgYWpheCA9IG5ldyBocy5BamF4KHRoaXMuYSwgaW5uZXJDb250ZW50KTtcblx0XHRhamF4LnNyYyA9IHRoaXMuc3JjO1xuICAgIFx0YWpheC5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XHRpZiAoaHMuZXhwYW5kZXJzW2V4cC5rZXldKSBleHAuY29udGVudExvYWRlZCgpOyB9O1xuICAgIFx0YWpheC5vbkVycm9yID0gZnVuY3Rpb24gKCkgeyBsb2NhdGlvbi5ocmVmID0gZXhwLnNyYzsgfTtcbiAgICBcdGFqYXgucnVuKCk7XG5cdH1cbiAgICBlbHNlXG4gICAgXG4gICAgaWYgKHRoaXMub2JqZWN0VHlwZSA9PSAnaWZyYW1lJyAmJiB0aGlzLm9iamVjdExvYWRUaW1lID09ICdiZWZvcmUnKSB7XG5cdFx0dGhpcy53cml0ZUV4dGVuZGVkQ29udGVudCgpO1xuXHR9XG4gICAgZWxzZVxuICAgIFx0dGhpcy5jb250ZW50TG9hZGVkKCk7XG59LFxuXG5jb250ZW50TG9hZGVkIDogZnVuY3Rpb24oKSB7XG5cdHRyeSB7XHRcblx0XHRpZiAoIXRoaXMuY29udGVudCkgcmV0dXJuO1xuXHRcdHRoaXMuY29udGVudC5vbmxvYWQgPSBudWxsO1xuXHRcdGlmICh0aGlzLm9uTG9hZFN0YXJ0ZWQpIHJldHVybjtcblx0XHRlbHNlIHRoaXMub25Mb2FkU3RhcnRlZCA9IHRydWU7XG5cdFx0XG5cdFx0dmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG5cdFx0XG5cdFx0aWYgKHRoaXMubG9hZGluZykge1xuXHRcdFx0aHMuc2V0U3R5bGVzKHRoaXMubG9hZGluZywgeyB0b3A6ICctOTk5OXB4JyB9KTtcblx0XHRcdHRoaXMubG9hZGluZyA9IG51bGw7XG5cdFx0XHRocy5maXJlRXZlbnQodGhpcywgJ29uSGlkZUxvYWRpbmcnKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaXNJbWFnZSkge1x0XG5cdFx0XHR4LmZ1bGwgPSB0aGlzLmNvbnRlbnQud2lkdGg7XG5cdFx0XHR5LmZ1bGwgPSB0aGlzLmNvbnRlbnQuaGVpZ2h0O1xuXHRcdFx0XG5cdFx0XHRocy5zZXRTdHlsZXModGhpcy5jb250ZW50LCB7XG5cdFx0XHRcdHdpZHRoOiB4LnQgKydweCcsXG5cdFx0XHRcdGhlaWdodDogeS50ICsncHgnXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xuXHRcdFx0aHMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmh0bWxHZXRTaXplKSB0aGlzLmh0bWxHZXRTaXplKCk7XG5cdFx0XG5cdFx0eC5jYWxjQm9yZGVycygpO1xuXHRcdHkuY2FsY0JvcmRlcnMoKTtcblx0XHRcblx0XHRocy5zZXRTdHlsZXMgKHRoaXMud3JhcHBlciwge1xuXHRcdFx0bGVmdDogKHgudHBvcyArIHgudGIgLSB4LmNiKSArJ3B4Jyxcblx0XHRcdHRvcDogKHkudHBvcyArIHgudGIgLSB5LmNiKSArJ3B4J1xuXHRcdH0pO1xuXHRcdFxuXHRcdFxuXHRcdHRoaXMuaW5pdFNsaWRlc2hvdygpO1xuXHRcdHRoaXMuZ2V0T3ZlcmxheXMoKTtcblx0XHRcblx0XHR2YXIgcmF0aW8gPSB4LmZ1bGwgLyB5LmZ1bGw7XG5cdFx0eC5jYWxjRXhwYW5kZWQoKTtcblx0XHR0aGlzLmp1c3RpZnkoeCk7XG5cdFx0XG5cdFx0eS5jYWxjRXhwYW5kZWQoKTtcblx0XHR0aGlzLmp1c3RpZnkoeSk7XG5cdFx0aWYgKHRoaXMuaXNIdG1sKSB0aGlzLmh0bWxTaXplT3BlcmF0aW9ucygpO1xuXHRcdGlmICh0aGlzLm92ZXJsYXlCb3gpIHRoaXMuc2l6ZU92ZXJsYXlCb3goMCwgMSk7XG5cblx0XHRcblx0XHRpZiAodGhpcy5hbGxvd1NpemVSZWR1Y3Rpb24pIHtcblx0XHRcdGlmICh0aGlzLmlzSW1hZ2UpXG5cdFx0XHRcdHRoaXMuY29ycmVjdFJhdGlvKHJhdGlvKTtcblx0XHRcdGVsc2UgdGhpcy5maXRPdmVybGF5Qm94KCk7XG5cdFx0XHR2YXIgc3MgPSB0aGlzLnNsaWRlc2hvdztcdFx0XHRcblx0XHRcdGlmIChzcyAmJiB0aGlzLmxhc3QgJiYgc3MuY29udHJvbHMgJiYgc3MuZml4ZWRDb250cm9scykge1xuXHRcdFx0XHR2YXIgcG9zID0gc3Mub3ZlcmxheU9wdGlvbnMucG9zaXRpb24gfHwgJycsIHA7XG5cdFx0XHRcdGZvciAodmFyIGRpbSBpbiBocy5vUG9zKSBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuXHRcdFx0XHRcdHAgPSB0aGlzW2RpbV07XG5cdFx0XHRcdFx0aWYgKHBvcy5tYXRjaChocy5vUG9zW2RpbV1baV0pKSB7XG5cdFx0XHRcdFx0XHRwLnBvcyA9IHRoaXMubGFzdFtkaW1dLnBvcyBcblx0XHRcdFx0XHRcdFx0KyAodGhpcy5sYXN0W2RpbV0ucDEgLSBwLnAxKVxuXHRcdFx0XHRcdFx0XHQrICh0aGlzLmxhc3RbZGltXS5zaXplIC0gcC5zaXplKSAqIFswLCAwLCAuNSwgMSwgMV1baV07XG5cdFx0XHRcdFx0XHRpZiAoc3MuZml4ZWRDb250cm9scyA9PSAnZml0Jykge1xuXHRcdFx0XHRcdFx0XHRpZiAocC5wb3MgKyBwLnNpemUgKyBwLnAxICsgcC5wMiA+IHAuc2Nyb2xsICsgcC5jbGllbnRTaXplIC0gcC5tYXJnaW5NYXgpXG5cdFx0XHRcdFx0XHRcdFx0cC5wb3MgPSBwLnNjcm9sbCArIHAuY2xpZW50U2l6ZSAtIHAuc2l6ZSAtIHAubWFyZ2luTWluIC0gcC5tYXJnaW5NYXggLSBwLnAxIC0gcC5wMjtcblx0XHRcdFx0XHRcdFx0aWYgKHAucG9zIDwgcC5zY3JvbGwgKyBwLm1hcmdpbk1pbikgcC5wb3MgPSBwLnNjcm9sbCArIHAubWFyZ2luTWluOyBcblx0XHRcdFx0XHRcdH0gXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5pc0ltYWdlICYmIHRoaXMueC5mdWxsID4gKHRoaXMueC5pbWdTaXplIHx8IHRoaXMueC5zaXplKSkge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZUZ1bGxFeHBhbmQoKTtcblx0XHRcdFx0aWYgKHRoaXMub3ZlcmxheXMubGVuZ3RoID09IDEpIHRoaXMuc2l6ZU92ZXJsYXlCb3goKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5zaG93KCk7XG5cdFx0XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHR0aGlzLmVycm9yKGUpO1xuXHR9XG59LFxuXG5cbnNldE9iakNvbnRhaW5lclNpemUgOiBmdW5jdGlvbihwYXJlbnQsIGF1dG8pIHtcblx0dmFyIGMgPSBocy5nZXRFbGVtZW50QnlDbGFzcyhwYXJlbnQsICdESVYnLCAnaGlnaHNsaWRlLWJvZHknKTtcblx0aWYgKC8oaWZyYW1lfHN3ZikvLnRlc3QodGhpcy5vYmplY3RUeXBlKSkge1xuXHRcdGlmICh0aGlzLm9iamVjdFdpZHRoKSBjLnN0eWxlLndpZHRoID0gdGhpcy5vYmplY3RXaWR0aCArJ3B4Jztcblx0XHRpZiAodGhpcy5vYmplY3RIZWlnaHQpIGMuc3R5bGUuaGVpZ2h0ID0gdGhpcy5vYmplY3RIZWlnaHQgKydweCc7XG5cdH1cbn0sXG5cbndyaXRlRXh0ZW5kZWRDb250ZW50IDogZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5oYXNFeHRlbmRlZENvbnRlbnQpIHJldHVybjtcblx0dmFyIGV4cCA9IHRoaXM7XG5cdHRoaXMuYm9keSA9IGhzLmdldEVsZW1lbnRCeUNsYXNzKHRoaXMuaW5uZXJDb250ZW50LCAnRElWJywgJ2hpZ2hzbGlkZS1ib2R5Jyk7XG5cdGlmICh0aGlzLm9iamVjdFR5cGUgPT0gJ2lmcmFtZScpIHtcblx0XHR0aGlzLnNob3dMb2FkaW5nKCk7XG5cdFx0dmFyIHJ1bGVyID0gaHMuY2xlYXJpbmcuY2xvbmVOb2RlKDEpO1xuXHRcdHRoaXMuYm9keS5hcHBlbmRDaGlsZChydWxlcik7XG5cdFx0dGhpcy5uZXdXaWR0aCA9IHRoaXMuaW5uZXJDb250ZW50Lm9mZnNldFdpZHRoO1xuXHRcdGlmICghdGhpcy5vYmplY3RXaWR0aCkgdGhpcy5vYmplY3RXaWR0aCA9IHJ1bGVyLm9mZnNldFdpZHRoO1xuXHRcdHZhciBoRGlmZiA9IHRoaXMuaW5uZXJDb250ZW50Lm9mZnNldEhlaWdodCAtIHRoaXMuYm9keS5vZmZzZXRIZWlnaHQsXG5cdFx0XHRoID0gdGhpcy5vYmplY3RIZWlnaHQgfHwgaHMucGFnZS5oZWlnaHQgLSBoRGlmZiAtIGhzLm1hcmdpblRvcCAtIGhzLm1hcmdpbkJvdHRvbSxcblx0XHRcdG9ubG9hZCA9IHRoaXMub2JqZWN0TG9hZFRpbWUgPT0gJ2JlZm9yZScgPyBcblx0XHRcdFx0JyBvbmxvYWQ9XCJpZiAoaHMuZXhwYW5kZXJzWycrIHRoaXMua2V5ICsnXSkgaHMuZXhwYW5kZXJzWycrIHRoaXMua2V5ICsnXS5jb250ZW50TG9hZGVkKClcIiAnIDogJyc7XG5cdFx0dGhpcy5ib2R5LmlubmVySFRNTCArPSAnPGlmcmFtZSBuYW1lPVwiaHMnKyAobmV3IERhdGUoKSkuZ2V0VGltZSgpICsnXCIgZnJhbWVib3JkZXI9XCIwXCIga2V5PVwiJysgdGhpcy5rZXkgKydcIiAnXG5cdFx0XHQrJyBzdHlsZT1cIndpZHRoOicrIHRoaXMub2JqZWN0V2lkdGggKydweDsgaGVpZ2h0OicrIGggKydweFwiICdcblx0XHRcdCsgb25sb2FkICsnIHNyYz1cIicrIHRoaXMuc3JjICsnXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XG5cdFx0dGhpcy5ydWxlciA9IHRoaXMuYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGl2JylbMF07XG5cdFx0dGhpcy5pZnJhbWUgPSB0aGlzLmJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdO1xuXHRcdFxuXHRcdGlmICh0aGlzLm9iamVjdExvYWRUaW1lID09ICdhZnRlcicpIHRoaXMuY29ycmVjdElmcmFtZVNpemUoKTtcblx0XHRcblx0fVxuXHRpZiAodGhpcy5vYmplY3RUeXBlID09ICdzd2YnKSB7XG5cdFx0dGhpcy5ib2R5LmlkID0gdGhpcy5ib2R5LmlkIHx8ICdocy1mbGFzaC1pZC0nICsgdGhpcy5rZXk7XG5cdFx0dmFyIGEgPSB0aGlzLnN3Zk9wdGlvbnM7XG5cdFx0aWYgKCFhLnBhcmFtcykgYS5wYXJhbXMgPSB7fTtcblx0XHRpZiAodHlwZW9mIGEucGFyYW1zLndtb2RlID09ICd1bmRlZmluZWQnKSBhLnBhcmFtcy53bW9kZSA9ICd0cmFuc3BhcmVudCc7XG5cdFx0aWYgKHN3Zm9iamVjdCkgc3dmb2JqZWN0LmVtYmVkU1dGKHRoaXMuc3JjLCB0aGlzLmJvZHkuaWQsIHRoaXMub2JqZWN0V2lkdGgsIHRoaXMub2JqZWN0SGVpZ2h0LCBcblx0XHRcdGEudmVyc2lvbiB8fCAnNycsIGEuZXhwcmVzc0luc3RhbGxTd2Z1cmwsIGEuZmxhc2h2YXJzLCBhLnBhcmFtcywgYS5hdHRyaWJ1dGVzKTtcblx0fVxuXHR0aGlzLmhhc0V4dGVuZGVkQ29udGVudCA9IHRydWU7XG59LFxuaHRtbEdldFNpemUgOiBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuaWZyYW1lICYmICF0aGlzLm9iamVjdEhlaWdodCkgeyAvLyBsb2FkdGltZSBiZWZvcmVcblx0XHR0aGlzLmlmcmFtZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmJvZHkuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRJZnJhbWVQYWdlSGVpZ2h0KCkgKydweCc7XG5cdH1cblx0dGhpcy5pbm5lckNvbnRlbnQuYXBwZW5kQ2hpbGQoaHMuY2xlYXJpbmcpO1xuXHRpZiAoIXRoaXMueC5mdWxsKSB0aGlzLnguZnVsbCA9IHRoaXMuaW5uZXJDb250ZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMueS5mdWxsID0gdGhpcy5pbm5lckNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuaW5uZXJDb250ZW50LnJlbW92ZUNoaWxkKGhzLmNsZWFyaW5nKTtcbiAgICBpZiAoaHMuaWUgJiYgdGhpcy5uZXdIZWlnaHQgPiBwYXJzZUludCh0aGlzLmlubmVyQ29udGVudC5jdXJyZW50U3R5bGUuaGVpZ2h0KSkgeyAvLyBpZSBjc3MgYnVnXG5cdFx0dGhpcy5uZXdIZWlnaHQgPSBwYXJzZUludCh0aGlzLmlubmVyQ29udGVudC5jdXJyZW50U3R5bGUuaGVpZ2h0KTtcblx0fVxuXHRocy5zZXRTdHlsZXMoIHRoaXMud3JhcHBlciwgeyBwb3NpdGlvbjogJ2Fic29sdXRlJyxcdHBhZGRpbmc6ICcwJ30pO1xuXHRocy5zZXRTdHlsZXMoIHRoaXMuY29udGVudCwgeyB3aWR0aDogdGhpcy54LnQgKydweCcsIGhlaWdodDogdGhpcy55LnQgKydweCd9KTtcblx0XG59LFxuXG5nZXRJZnJhbWVQYWdlSGVpZ2h0IDogZnVuY3Rpb24oKSB7XG5cdHZhciBoO1xuXHR0cnkge1xuXHRcdHZhciBkb2MgPSB0aGlzLmlEb2MgPSB0aGlzLmlmcmFtZS5jb250ZW50RG9jdW1lbnQgfHwgdGhpcy5pZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcblx0XHR2YXIgY2xlYXJpbmcgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0Y2xlYXJpbmcuc3R5bGUuY2xlYXIgPSAnYm90aCc7XG5cdFx0ZG9jLmJvZHkuYXBwZW5kQ2hpbGQoY2xlYXJpbmcpO1xuXHRcdGggPSBjbGVhcmluZy5vZmZzZXRUb3A7XG5cdFx0aWYgKGhzLmllKSBoICs9IHBhcnNlSW50KGRvYy5ib2R5LmN1cnJlbnRTdHlsZS5tYXJnaW5Ub3ApIFxuXHRcdFx0KyBwYXJzZUludChkb2MuYm9keS5jdXJyZW50U3R5bGUubWFyZ2luQm90dG9tKSAtIDE7XG5cdH0gY2F0Y2ggKGUpIHsgLy8gb3RoZXIgZG9tYWluXG5cdFx0aCA9IDMwMDtcblx0fVxuXHRyZXR1cm4gaDtcbn0sXG5jb3JyZWN0SWZyYW1lU2l6ZSA6IGZ1bmN0aW9uICgpIHtcblx0dmFyIHdEaWZmID0gdGhpcy5pbm5lckNvbnRlbnQub2Zmc2V0V2lkdGggLSB0aGlzLnJ1bGVyLm9mZnNldFdpZHRoO1xuXHRocy5kaXNjYXJkRWxlbWVudCh0aGlzLnJ1bGVyKTtcblx0aWYgKHdEaWZmIDwgMCkgd0RpZmYgPSAwO1xuXHRcblx0dmFyIGhEaWZmID0gdGhpcy5pbm5lckNvbnRlbnQub2Zmc2V0SGVpZ2h0IC0gdGhpcy5pZnJhbWUub2Zmc2V0SGVpZ2h0O1xuXHRpZiAodGhpcy5pRG9jICYmICF0aGlzLm9iamVjdEhlaWdodCAmJiAhdGhpcy5oZWlnaHQgJiYgdGhpcy55LnNpemUgPT0gdGhpcy55LmZ1bGwpIHRyeSB7XG5cdFx0dGhpcy5pRG9jLmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblx0fSBjYXRjaCAoZSkge31cblx0aHMuc2V0U3R5bGVzKHRoaXMuaWZyYW1lLCB7IFxuXHRcdHdpZHRoOiBNYXRoLmFicyh0aGlzLnguc2l6ZSAtIHdEaWZmKSArJ3B4JywgXG5cdFx0aGVpZ2h0OiBNYXRoLmFicyh0aGlzLnkuc2l6ZSAtIGhEaWZmKSArJ3B4J1xuXHR9KTtcbiAgICBocy5zZXRTdHlsZXModGhpcy5ib2R5LCB7IFxuXHRcdHdpZHRoOiB0aGlzLmlmcmFtZS5zdHlsZS53aWR0aCwgXG4gICAgXHRoZWlnaHQ6IHRoaXMuaWZyYW1lLnN0eWxlLmhlaWdodFxuXHR9KTtcbiAgICBcdFxuICAgIHRoaXMuc2Nyb2xsaW5nQ29udGVudCA9IHRoaXMuaWZyYW1lO1xuICAgIHRoaXMuc2Nyb2xsZXJEaXYgPSB0aGlzLnNjcm9sbGluZ0NvbnRlbnQ7XG5cdFxufSxcbmh0bWxTaXplT3BlcmF0aW9ucyA6IGZ1bmN0aW9uICgpIHtcblx0XG5cdHRoaXMuc2V0T2JqQ29udGFpbmVyU2l6ZSh0aGlzLmlubmVyQ29udGVudCk7XG5cdFxuXHRcblx0aWYgKHRoaXMub2JqZWN0VHlwZSA9PSAnc3dmJyAmJiB0aGlzLm9iamVjdExvYWRUaW1lID09ICdiZWZvcmUnKSB0aGlzLndyaXRlRXh0ZW5kZWRDb250ZW50KCk7XHRcblx0XG4gICAgLy8gaGFuZGxlIG1pbmltdW0gc2l6ZVxuICAgIGlmICh0aGlzLnguc2l6ZSA8IHRoaXMueC5mdWxsICYmICF0aGlzLmFsbG93V2lkdGhSZWR1Y3Rpb24pIHRoaXMueC5zaXplID0gdGhpcy54LmZ1bGw7XG4gICAgaWYgKHRoaXMueS5zaXplIDwgdGhpcy55LmZ1bGwgJiYgIXRoaXMuYWxsb3dIZWlnaHRSZWR1Y3Rpb24pIHRoaXMueS5zaXplID0gdGhpcy55LmZ1bGw7XG5cdHRoaXMuc2Nyb2xsZXJEaXYgPSB0aGlzLmlubmVyQ29udGVudDtcbiAgICBocy5zZXRTdHlsZXModGhpcy5tZWRpdW1Db250ZW50LCB7IFxuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdHdpZHRoOiB0aGlzLnguc2l6ZSArJ3B4J1xuXHR9KTtcbiAgICBocy5zZXRTdHlsZXModGhpcy5pbm5lckNvbnRlbnQsIHsgXG4gICAgXHRib3JkZXI6ICdub25lJyxcbiAgICBcdHdpZHRoOiAnYXV0bycsXG4gICAgXHRoZWlnaHQ6ICdhdXRvJ1xuICAgIH0pO1xuXHR2YXIgbm9kZSA9IGhzLmdldEVsZW1lbnRCeUNsYXNzKHRoaXMuaW5uZXJDb250ZW50LCAnRElWJywgJ2hpZ2hzbGlkZS1ib2R5Jyk7XG4gICAgaWYgKG5vZGUgJiYgIS8oaWZyYW1lfHN3ZikvLnRlc3QodGhpcy5vYmplY3RUeXBlKSkge1xuICAgIFx0dmFyIGNOb2RlID0gbm9kZTsgLy8gd3JhcCB0byBnZXQgdHJ1ZSBzaXplXG4gICAgXHRub2RlID0gaHMuY3JlYXRlRWxlbWVudChjTm9kZS5ub2RlTmFtZSwgbnVsbCwge292ZXJmbG93OiAnaGlkZGVuJ30sIG51bGwsIHRydWUpO1xuICAgIFx0Y05vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgY05vZGUpO1xuICAgIFx0bm9kZS5hcHBlbmRDaGlsZChocy5jbGVhcmluZyk7IC8vIElFNlxuICAgIFx0bm9kZS5hcHBlbmRDaGlsZChjTm9kZSk7XG4gICAgXHRcbiAgICBcdHZhciB3RGlmZiA9IHRoaXMuaW5uZXJDb250ZW50Lm9mZnNldFdpZHRoIC0gbm9kZS5vZmZzZXRXaWR0aDtcbiAgICBcdHZhciBoRGlmZiA9IHRoaXMuaW5uZXJDb250ZW50Lm9mZnNldEhlaWdodCAtIG5vZGUub2Zmc2V0SGVpZ2h0O1xuXHRcdG5vZGUucmVtb3ZlQ2hpbGQoaHMuY2xlYXJpbmcpO1xuICAgIFx0XG4gICAgXHR2YXIga2RlQnVnQ29yciA9IGhzLnNhZmFyaSB8fCBuYXZpZ2F0b3IudmVuZG9yID09ICdLREUnID8gMSA6IDA7IC8vIEtERSByZXBhaW50aW5nIGJ1Z1xuICAgIFx0aHMuc2V0U3R5bGVzKG5vZGUsIHsgXG4gICAgXHRcdFx0d2lkdGg6ICh0aGlzLnguc2l6ZSAtIHdEaWZmIC0ga2RlQnVnQ29ycikgKydweCcsIFxuICAgIFx0XHRcdGhlaWdodDogKHRoaXMueS5zaXplIC0gaERpZmYpICsncHgnLFxuICAgIFx0XHRcdG92ZXJmbG93OiAnYXV0bycsIFxuICAgIFx0XHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnIFxuICAgIFx0XHR9IFxuICAgIFx0KTtcblx0XHRpZiAoa2RlQnVnQ29yciAmJiBjTm9kZS5vZmZzZXRIZWlnaHQgPiBub2RlLm9mZnNldEhlaWdodClcdHtcbiAgICBcdFx0bm9kZS5zdHlsZS53aWR0aCA9IChwYXJzZUludChub2RlLnN0eWxlLndpZHRoKSArIGtkZUJ1Z0NvcnIpICsgJ3B4Jztcblx0XHR9XG4gICAgXHR0aGlzLnNjcm9sbGluZ0NvbnRlbnQgPSBub2RlO1xuICAgIFx0dGhpcy5zY3JvbGxlckRpdiA9IHRoaXMuc2Nyb2xsaW5nQ29udGVudDtcblx0fVxuICAgIGlmICh0aGlzLmlmcmFtZSAmJiB0aGlzLm9iamVjdExvYWRUaW1lID09ICdiZWZvcmUnKSB0aGlzLmNvcnJlY3RJZnJhbWVTaXplKCk7XG4gICAgaWYgKCF0aGlzLnNjcm9sbGluZ0NvbnRlbnQgJiYgdGhpcy55LnNpemUgPCB0aGlzLm1lZGl1bUNvbnRlbnQub2Zmc2V0SGVpZ2h0KSB0aGlzLnNjcm9sbGVyRGl2ID0gdGhpcy5jb250ZW50O1xuXHRcblx0aWYgKHRoaXMuc2Nyb2xsZXJEaXYgPT0gdGhpcy5jb250ZW50ICYmICF0aGlzLmFsbG93V2lkdGhSZWR1Y3Rpb24gJiYgIS8oaWZyYW1lfHN3ZikvLnRlc3QodGhpcy5vYmplY3RUeXBlKSkge1xuXHRcdHRoaXMueC5zaXplICs9IDE3OyAvLyByb29tIGZvciBzY3JvbGxiYXJzXG5cdH1cblx0aWYgKHRoaXMuc2Nyb2xsZXJEaXYgJiYgdGhpcy5zY3JvbGxlckRpdi5vZmZzZXRIZWlnaHQgPiB0aGlzLnNjcm9sbGVyRGl2LnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0KSB7XG5cdFx0c2V0VGltZW91dChcInRyeSB7IGhzLmV4cGFuZGVyc1tcIisgdGhpcy5rZXkgK1wiXS5zY3JvbGxlckRpdi5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJzsgfSBjYXRjaChlKSB7fVwiLFxuXHRcdFx0IGhzLmV4cGFuZER1cmF0aW9uKTtcblx0fVxufSxcblxuZ2V0SW1hZ2VNYXBBcmVhQ29ycmVjdGlvbiA6IGZ1bmN0aW9uKGFyZWEpIHtcblx0dmFyIGMgPSBhcmVhLmNvb3Jkcy5zcGxpdCgnLCcpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGMubGVuZ3RoOyBpKyspIGNbaV0gPSBwYXJzZUludChjW2ldKTtcblx0XG5cdGlmIChhcmVhLnNoYXBlLnRvTG93ZXJDYXNlKCkgPT0gJ2NpcmNsZScpIHtcblx0XHR0aGlzLngudHBvcyArPSBjWzBdIC0gY1syXTtcblx0XHR0aGlzLnkudHBvcyArPSBjWzFdIC0gY1syXTtcblx0XHR0aGlzLngudCA9IHRoaXMueS50ID0gMiAqIGNbMl07XG5cdH0gZWxzZSB7XG5cdFx0dmFyIG1heFgsIG1heFksIG1pblggPSBtYXhYID0gY1swXSwgbWluWSA9IG1heFkgPSBjWzFdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGkgJSAyID09IDApIHtcblx0XHRcdFx0bWluWCA9IE1hdGgubWluKG1pblgsIGNbaV0pO1xuXHRcdFx0XHRtYXhYID0gTWF0aC5tYXgobWF4WCwgY1tpXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtaW5ZID0gTWF0aC5taW4obWluWSwgY1tpXSk7XG5cdFx0XHRcdG1heFkgPSBNYXRoLm1heChtYXhZLCBjW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy54LnRwb3MgKz0gbWluWDtcblx0XHR0aGlzLngudCA9IG1heFggLSBtaW5YO1xuXHRcdHRoaXMueS50cG9zICs9IG1pblk7XG5cdFx0dGhpcy55LnQgPSBtYXhZIC0gbWluWTtcblx0fVxufSxcbmp1c3RpZnkgOiBmdW5jdGlvbiAocCwgbW92ZU9ubHkpIHtcblx0dmFyIHRndEFyciwgdGd0ID0gcC50YXJnZXQsIGRpbSA9IHAgPT0gdGhpcy54ID8gJ3gnIDogJ3knO1xuXHRcblx0aWYgKHRndCAmJiB0Z3QubWF0Y2goLyAvKSkge1xuXHRcdHRndEFyciA9IHRndC5zcGxpdCgnICcpO1xuXHRcdHRndCA9IHRndEFyclswXTtcblx0fVxuXHRpZiAodGd0ICYmIGhzLiQodGd0KSkge1xuXHRcdHAucG9zID0gaHMuZ2V0UG9zaXRpb24oaHMuJCh0Z3QpKVtkaW1dO1xuXHRcdGlmICh0Z3RBcnIgJiYgdGd0QXJyWzFdICYmIHRndEFyclsxXS5tYXRjaCgvXlstXT9bMC05XStweCQvKSkgXG5cdFx0XHRwLnBvcyArPSBwYXJzZUludCh0Z3RBcnJbMV0pO1xuXHRcdGlmIChwLnNpemUgPCBwLm1pblNpemUpIHAuc2l6ZSA9IHAubWluU2l6ZTtcblx0XHRcblx0fSBlbHNlIGlmIChwLmp1c3RpZnkgPT0gJ2F1dG8nIHx8IHAuanVzdGlmeSA9PSAnY2VudGVyJykge1xuXHRcblx0XHR2YXIgaGFzTW92ZWRNaW4gPSBmYWxzZTtcblx0XHRcblx0XHR2YXIgYWxsb3dSZWR1Y2UgPSBwLmV4cC5hbGxvd1NpemVSZWR1Y3Rpb247XG5cdFx0aWYgKHAuanVzdGlmeSA9PSAnY2VudGVyJylcblx0XHRcdHAucG9zID0gTWF0aC5yb3VuZChwLnNjcm9sbCArIChwLmNsaWVudFNpemUgKyBwLm1hcmdpbk1pbiAtIHAubWFyZ2luTWF4IC0gcC5nZXQoJ3dzaXplJykpIC8gMik7XG5cdFx0ZWxzZVxuXHRcdFx0cC5wb3MgPSBNYXRoLnJvdW5kKHAucG9zIC0gKChwLmdldCgnd3NpemUnKSAtIHAudCkgLyAyKSk7XG5cdFx0aWYgKHAucG9zIDwgcC5zY3JvbGwgKyBwLm1hcmdpbk1pbikge1xuXHRcdFx0cC5wb3MgPSBwLnNjcm9sbCArIHAubWFyZ2luTWluO1xuXHRcdFx0aGFzTW92ZWRNaW4gPSB0cnVlO1x0XHRcblx0XHR9XG5cdFx0aWYgKCFtb3ZlT25seSAmJiBwLnNpemUgPCBwLm1pblNpemUpIHtcblx0XHRcdHAuc2l6ZSA9IHAubWluU2l6ZTtcblx0XHRcdGFsbG93UmVkdWNlID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChwLnBvcyArIHAuZ2V0KCd3c2l6ZScpID4gcC5zY3JvbGwgKyBwLmNsaWVudFNpemUgLSBwLm1hcmdpbk1heCkge1xuXHRcdFx0aWYgKCFtb3ZlT25seSAmJiBoYXNNb3ZlZE1pbiAmJiBhbGxvd1JlZHVjZSkge1xuXHRcdFx0XHRwLnNpemUgPSBNYXRoLm1pbihwLnNpemUsIHAuZ2V0KGRpbSA9PSAneScgPyAnZml0c2l6ZScgOiAnbWF4c2l6ZScpKTtcblx0XHRcdH0gZWxzZSBpZiAocC5nZXQoJ3dzaXplJykgPCBwLmdldCgnZml0c2l6ZScpKSB7XG5cdFx0XHRcdHAucG9zID0gcC5zY3JvbGwgKyBwLmNsaWVudFNpemUgLSBwLm1hcmdpbk1heCAtIHAuZ2V0KCd3c2l6ZScpO1xuXHRcdFx0fSBlbHNlIHsgLy8gaW1hZ2UgbGFyZ2VyIHRoYW4gdmlld3BvcnRcblx0XHRcdFx0cC5wb3MgPSBwLnNjcm9sbCArIHAubWFyZ2luTWluO1xuXHRcdFx0XHRpZiAoIW1vdmVPbmx5ICYmIGFsbG93UmVkdWNlKSBwLnNpemUgPSBwLmdldChkaW0gPT0gJ3knID8gJ2ZpdHNpemUnIDogJ21heHNpemUnKTtcblx0XHRcdH1cdFx0XHRcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCFtb3ZlT25seSAmJiBwLnNpemUgPCBwLm1pblNpemUpIHtcblx0XHRcdHAuc2l6ZSA9IHAubWluU2l6ZTtcblx0XHRcdGFsbG93UmVkdWNlID0gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcblx0fSBlbHNlIGlmIChwLmp1c3RpZnkgPT0gJ21heCcpIHtcblx0XHRwLnBvcyA9IE1hdGguZmxvb3IocC5wb3MgLSBwLnNpemUgKyBwLnQpO1xuXHR9XG5cdFxuXHRcdFxuXHRpZiAocC5wb3MgPCBwLm1hcmdpbk1pbikge1xuXHRcdHZhciB0bXBNaW4gPSBwLnBvcztcblx0XHRwLnBvcyA9IHAubWFyZ2luTWluOyBcblx0XHRcblx0XHRpZiAoYWxsb3dSZWR1Y2UgJiYgIW1vdmVPbmx5KSBwLnNpemUgPSBwLnNpemUgLSAocC5wb3MgLSB0bXBNaW4pO1xuXHRcdFxuXHR9XG59LFxuXG5jb3JyZWN0UmF0aW8gOiBmdW5jdGlvbihyYXRpbykge1xuXHR2YXIgeCA9IHRoaXMueCwgXG5cdFx0eSA9IHRoaXMueSxcblx0XHRjaGFuZ2VkID0gZmFsc2UsXG5cdFx0eFNpemUgPSBNYXRoLm1pbih4LmZ1bGwsIHguc2l6ZSksXG5cdFx0eVNpemUgPSBNYXRoLm1pbih5LmZ1bGwsIHkuc2l6ZSksXG5cdFx0dXNlQm94ID0gKHRoaXMudXNlQm94IHx8IGhzLnBhZFRvTWluV2lkdGgpO1xuXHRcblx0aWYgKHhTaXplIC8geVNpemUgPiByYXRpbykgeyAvLyB3aWR0aCBncmVhdGVyXG5cdFx0eFNpemUgPSB5U2l6ZSAqIHJhdGlvO1xuXHRcdGlmICh4U2l6ZSA8IHgubWluU2l6ZSkgeyAvLyBiZWxvdyBtaW5XaWR0aFxuXHRcdFx0eFNpemUgPSB4Lm1pblNpemU7XG5cdFx0XHR5U2l6ZSA9IHhTaXplIC8gcmF0aW87XG5cdFx0fVxuXHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcblx0fSBlbHNlIGlmICh4U2l6ZSAvIHlTaXplIDwgcmF0aW8pIHsgLy8gaGVpZ2h0IGdyZWF0ZXJcblx0XHR5U2l6ZSA9IHhTaXplIC8gcmF0aW87XG5cdFx0Y2hhbmdlZCA9IHRydWU7XG5cdH1cblx0XG5cdGlmIChocy5wYWRUb01pbldpZHRoICYmIHguZnVsbCA8IHgubWluU2l6ZSkge1xuXHRcdHguaW1nU2l6ZSA9IHguZnVsbDtcblx0XHR5LnNpemUgPSB5LmltZ1NpemUgPSB5LmZ1bGw7XG5cdH0gZWxzZSBpZiAodGhpcy51c2VCb3gpIHtcblx0XHR4LmltZ1NpemUgPSB4U2l6ZTtcblx0XHR5LmltZ1NpemUgPSB5U2l6ZTtcblx0fSBlbHNlIHtcblx0XHR4LnNpemUgPSB4U2l6ZTtcblx0XHR5LnNpemUgPSB5U2l6ZTtcblx0fVxuXHRjaGFuZ2VkID0gdGhpcy5maXRPdmVybGF5Qm94KHRoaXMudXNlQm94ID8gbnVsbCA6IHJhdGlvLCBjaGFuZ2VkKTtcblx0aWYgKHVzZUJveCAmJiB5LnNpemUgPCB5LmltZ1NpemUpIHtcblx0XHR5LmltZ1NpemUgPSB5LnNpemU7XG5cdFx0eC5pbWdTaXplID0geS5zaXplICogcmF0aW87XG5cdH1cblx0aWYgKGNoYW5nZWQgfHwgdXNlQm94KSB7XG5cdFx0eC5wb3MgPSB4LnRwb3MgLSB4LmNiICsgeC50Yjtcblx0XHR4Lm1pblNpemUgPSB4LnNpemU7XG5cdFx0dGhpcy5qdXN0aWZ5KHgsIHRydWUpO1xuXHRcblx0XHR5LnBvcyA9IHkudHBvcyAtIHkuY2IgKyB5LnRiO1xuXHRcdHkubWluU2l6ZSA9IHkuc2l6ZTtcblx0XHR0aGlzLmp1c3RpZnkoeSwgdHJ1ZSk7XG5cdFx0aWYgKHRoaXMub3ZlcmxheUJveCkgdGhpcy5zaXplT3ZlcmxheUJveCgpO1xuXHR9XG5cdFxuXHRcbn0sXG5maXRPdmVybGF5Qm94IDogZnVuY3Rpb24ocmF0aW8sIGNoYW5nZWQpIHtcblx0dmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG5cdGlmICh0aGlzLm92ZXJsYXlCb3ggJiYgKHRoaXMuaXNJbWFnZSB8fCB0aGlzLmFsbG93SGVpZ2h0UmVkdWN0aW9uKSkge1xuXHRcdHdoaWxlICh5LnNpemUgPiB0aGlzLm1pbkhlaWdodCAmJiB4LnNpemUgPiB0aGlzLm1pbldpZHRoIFxuXHRcdFx0XHQmJiAgeS5nZXQoJ3dzaXplJykgPiB5LmdldCgnZml0c2l6ZScpKSB7XG5cdFx0XHR5LnNpemUgLT0gMTA7XG5cdFx0XHRpZiAocmF0aW8pIHguc2l6ZSA9IHkuc2l6ZSAqIHJhdGlvO1xuXHRcdFx0dGhpcy5zaXplT3ZlcmxheUJveCgwLCAxKTtcblx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2hhbmdlZDtcbn0sXG5cbnJlZmxvdyA6IGZ1bmN0aW9uICgpIHtcblx0aWYgKHRoaXMuc2Nyb2xsZXJEaXYpIHtcblx0XHR2YXIgaCA9IC9pZnJhbWUvaS50ZXN0KHRoaXMuc2Nyb2xsZXJEaXYudGFnTmFtZSkgPyAodGhpcy5nZXRJZnJhbWVQYWdlSGVpZ2h0KCkgKyAxKSArJ3B4JyA6ICdhdXRvJztcblx0XHRpZiAodGhpcy5ib2R5KSB0aGlzLmJvZHkuc3R5bGUuaGVpZ2h0ID0gaDtcblx0XHR0aGlzLnNjcm9sbGVyRGl2LnN0eWxlLmhlaWdodCA9IGg7XG5cdFx0dGhpcy55LnNldFNpemUodGhpcy5pbm5lckNvbnRlbnQub2Zmc2V0SGVpZ2h0KTtcblx0fVxufSxcblxuc2hvdyA6IGZ1bmN0aW9uICgpIHtcblx0dmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG5cdHRoaXMuZG9TaG93SGlkZSgnaGlkZGVuJyk7XG5cdGhzLmZpcmVFdmVudCh0aGlzLCAnb25CZWZvcmVFeHBhbmQnKTtcblx0aWYgKHRoaXMuc2xpZGVzaG93ICYmIHRoaXMuc2xpZGVzaG93LnRodW1ic3RyaXApIHRoaXMuc2xpZGVzaG93LnRodW1ic3RyaXAuc2VsZWN0VGh1bWIoKTtcblx0XG5cdC8vIEFwcGx5IHNpemUgY2hhbmdlXG5cdHRoaXMuY2hhbmdlU2l6ZShcblx0XHQxLCB7XG5cdFx0XHR3cmFwcGVyOiB7XG5cdFx0XHRcdHdpZHRoIDogeC5nZXQoJ3dzaXplJyksXG5cdFx0XHRcdGhlaWdodCA6IHkuZ2V0KCd3c2l6ZScpLFxuXHRcdFx0XHRsZWZ0OiB4LnBvcyxcblx0XHRcdFx0dG9wOiB5LnBvc1xuXHRcdFx0fSxcblx0XHRcdGNvbnRlbnQ6IHtcblx0XHRcdFx0bGVmdDogeC5wMSArIHguZ2V0KCdpbWdQYWQnKSxcblx0XHRcdFx0dG9wOiB5LnAxICsgeS5nZXQoJ2ltZ1BhZCcpLFxuXHRcdFx0XHR3aWR0aDp4LmltZ1NpemUgfHx4LnNpemUsXG5cdFx0XHRcdGhlaWdodDp5LmltZ1NpemUgfHx5LnNpemVcblx0XHRcdH1cblx0XHR9LFxuXHRcdGhzLmV4cGFuZER1cmF0aW9uXG5cdCk7XG59LFxuXG5jaGFuZ2VTaXplIDogZnVuY3Rpb24odXAsIHRvLCBkdXIpIHtcblx0Ly8gdHJhbnNpdGlvblxuXHR2YXIgdHJhbnMgPSB0aGlzLnRyYW5zaXRpb25zLFxuXHRvdGhlciA9IHVwID8gKHRoaXMubGFzdCA/IHRoaXMubGFzdC5hIDogbnVsbCkgOiBocy51cGNvbWluZyxcblx0dCA9ICh0cmFuc1sxXSAmJiBvdGhlciBcblx0XHRcdCYmIGhzLmdldFBhcmFtKG90aGVyLCAndHJhbnNpdGlvbnMnKVsxXSA9PSB0cmFuc1sxXSkgP1xuXHRcdHRyYW5zWzFdIDogdHJhbnNbMF07XG5cdFx0XG5cdGlmICh0aGlzW3RdICYmIHQgIT0gJ2V4cGFuZCcpIHtcblx0XHR0aGlzW3RdKHVwLCB0byk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdFxuXHRpZiAodGhpcy5vdXRsaW5lICYmICF0aGlzLm91dGxpbmVXaGlsZUFuaW1hdGluZykge1xuXHRcdGlmICh1cCkgdGhpcy5vdXRsaW5lLnNldFBvc2l0aW9uKCk7XG5cdFx0ZWxzZSB0aGlzLm91dGxpbmUuZGVzdHJveShcblx0XHRcdFx0KHRoaXMuaXNIdG1sICYmIHRoaXMucHJlc2VydmVDb250ZW50KSk7XG5cdH1cblx0XG5cdFxuXHRpZiAoIXVwKSB0aGlzLmRlc3Ryb3lPdmVybGF5cygpO1xuXHRcblx0dmFyIGV4cCA9IHRoaXMsXG5cdFx0eCA9IGV4cC54LFxuXHRcdHkgPSBleHAueSxcblx0XHRlYXNpbmcgPSB0aGlzLmVhc2luZztcblx0aWYgKCF1cCkgZWFzaW5nID0gdGhpcy5lYXNpbmdDbG9zZSB8fCBlYXNpbmc7XG5cdHZhciBhZnRlciA9IHVwID9cblx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XG5cdFx0XHRpZiAoZXhwLm91dGxpbmUpIGV4cC5vdXRsaW5lLnRhYmxlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGV4cC5hZnRlckV4cGFuZCgpO1xuXHRcdFx0fSwgNTApO1xuXHRcdH0gOlxuXHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0ZXhwLmFmdGVyQ2xvc2UoKTtcblx0XHR9O1xuXHRpZiAodXApIGhzLnNldFN0eWxlcyggdGhpcy53cmFwcGVyLCB7XG5cdFx0d2lkdGg6IHgudCArJ3B4Jyxcblx0XHRoZWlnaHQ6IHkudCArJ3B4J1xuXHR9KTtcblx0aWYgKHVwICYmIHRoaXMuaXNIdG1sKSB7XG5cdFx0aHMuc2V0U3R5bGVzKHRoaXMud3JhcHBlciwge1xuXHRcdFx0bGVmdDogKHgudHBvcyAtIHguY2IgKyB4LnRiKSArJ3B4Jyxcblx0XHRcdHRvcDogKHkudHBvcyAtIHkuY2IgKyB5LnRiKSArJ3B4J1xuXHRcdH0pO1xuXHR9XG5cdGlmICh0aGlzLmZhZGVJbk91dCkge1xuXHRcdGhzLnNldFN0eWxlcyh0aGlzLndyYXBwZXIsIHsgb3BhY2l0eTogdXAgPyAwIDogMSB9KTtcblx0XHRocy5leHRlbmQodG8ud3JhcHBlciwgeyBvcGFjaXR5OiB1cCB9KTtcblx0fVxuXHRocy5hbmltYXRlKCB0aGlzLndyYXBwZXIsIHRvLndyYXBwZXIsIHtcblx0XHRkdXJhdGlvbjogZHVyLFxuXHRcdGVhc2luZzogZWFzaW5nLFxuXHRcdHN0ZXA6IGZ1bmN0aW9uKHZhbCwgYXJncykge1xuXHRcdFx0aWYgKGV4cC5vdXRsaW5lICYmIGV4cC5vdXRsaW5lV2hpbGVBbmltYXRpbmcgJiYgYXJncy5wcm9wID09ICd0b3AnKSB7XG5cdFx0XHRcdHZhciBmYWMgPSB1cCA/IGFyZ3MucG9zIDogMSAtIGFyZ3MucG9zO1xuXHRcdFx0XHR2YXIgcG9zID0ge1xuXHRcdFx0XHRcdHc6IHgudCArICh4LmdldCgnd3NpemUnKSAtIHgudCkgKiBmYWMsXG5cdFx0XHRcdFx0aDogeS50ICsgKHkuZ2V0KCd3c2l6ZScpIC0geS50KSAqIGZhYyxcblx0XHRcdFx0XHR4OiB4LnRwb3MgKyAoeC5wb3MgLSB4LnRwb3MpICogZmFjLFxuXHRcdFx0XHRcdHk6IHkudHBvcyArICh5LnBvcyAtIHkudHBvcykgKiBmYWNcblx0XHRcdFx0fTtcblx0XHRcdFx0ZXhwLm91dGxpbmUuc2V0UG9zaXRpb24ocG9zLCAwLCAxKTtcdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0aWYgKGV4cC5pc0h0bWwpIHtcdFxuXHRcdFx0XHRpZiAoYXJncy5wcm9wID09ICdsZWZ0JykgXG5cdFx0XHRcdFx0ZXhwLm1lZGl1bUNvbnRlbnQuc3R5bGUubGVmdCA9ICh4LnBvcyAtIHZhbCkgKydweCc7XG5cdFx0XHRcdGlmIChhcmdzLnByb3AgPT0gJ3RvcCcpIFxuXHRcdFx0XHRcdGV4cC5tZWRpdW1Db250ZW50LnN0eWxlLnRvcCA9ICh5LnBvcyAtIHZhbCkgKydweCc7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0aHMuYW5pbWF0ZSggdGhpcy5jb250ZW50LCB0by5jb250ZW50LCBkdXIsIGVhc2luZywgYWZ0ZXIpO1xuXHRpZiAodXApIHtcblx0XHR0aGlzLndyYXBwZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblx0XHR0aGlzLmNvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblx0XHRpZiAodGhpcy5pc0h0bWwpIHRoaXMuaW5uZXJDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cdFx0dGhpcy5hLmNsYXNzTmFtZSArPSAnIGhpZ2hzbGlkZS1hY3RpdmUtYW5jaG9yJztcblx0fVxufSxcblxuXG5cbmZhZGUgOiBmdW5jdGlvbih1cCwgdG8pIHtcblx0dGhpcy5vdXRsaW5lV2hpbGVBbmltYXRpbmcgPSBmYWxzZTtcblx0dmFyIGV4cCA9IHRoaXMsXHR0ID0gdXAgPyBocy5leHBhbmREdXJhdGlvbiA6IDA7XG5cdFxuXHRpZiAodXApIHtcblx0XHRocy5hbmltYXRlKHRoaXMud3JhcHBlciwgdG8ud3JhcHBlciwgMCk7XG5cdFx0aHMuc2V0U3R5bGVzKHRoaXMud3JhcHBlciwgeyBvcGFjaXR5OiAwLCB2aXNpYmlsaXR5OiAndmlzaWJsZScgfSk7XG5cdFx0aHMuYW5pbWF0ZSh0aGlzLmNvbnRlbnQsIHRvLmNvbnRlbnQsIDApO1xuXHRcdHRoaXMuY29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG5cdFx0aHMuYW5pbWF0ZSh0aGlzLndyYXBwZXIsIHsgb3BhY2l0eTogMSB9LCB0LCBudWxsLCBcblx0XHRcdGZ1bmN0aW9uKCkgeyBleHAuYWZ0ZXJFeHBhbmQoKTsgfSk7XG5cdH1cblx0XG5cdGlmICh0aGlzLm91dGxpbmUpIHtcblx0XHR0aGlzLm91dGxpbmUudGFibGUuc3R5bGUuekluZGV4ID0gdGhpcy53cmFwcGVyLnN0eWxlLnpJbmRleDtcblx0XHR2YXIgZGlyID0gdXAgfHwgLTEsIFxuXHRcdFx0b2Zmc2V0ID0gdGhpcy5vdXRsaW5lLm9mZnNldCxcblx0XHRcdHN0YXJ0T2ZmID0gdXAgPyAzIDogb2Zmc2V0LFxuXHRcdFx0ZW5kT2ZmID0gdXA/IG9mZnNldCA6IDM7XG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0T2ZmOyBkaXIgKiBpIDw9IGRpciAqIGVuZE9mZjsgaSArPSBkaXIsIHQgKz0gMjUpIHtcblx0XHRcdChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIG8gPSB1cCA/IGVuZE9mZiAtIGkgOiBzdGFydE9mZiAtIGk7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZXhwLm91dGxpbmUuc2V0UG9zaXRpb24oMCwgbywgMSk7XG5cdFx0XHRcdH0sIHQpO1xuXHRcdFx0fSkoKTtcblx0XHR9XG5cdH1cblx0XG5cdFxuXHRpZiAodXApIHt9Ly9zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBleHAuYWZ0ZXJFeHBhbmQoKTsgfSwgdCs1MCk7XG5cdGVsc2Uge1xuXHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKGV4cC5vdXRsaW5lKSBleHAub3V0bGluZS5kZXN0cm95KGV4cC5wcmVzZXJ2ZUNvbnRlbnQpO1xuXHRcdFx0XG5cdFx0XHRleHAuZGVzdHJveU92ZXJsYXlzKCk7XG5cdFxuXHRcdFx0aHMuYW5pbWF0ZSggZXhwLndyYXBwZXIsIHsgb3BhY2l0eTogMCB9LCBocy5yZXN0b3JlRHVyYXRpb24sIG51bGwsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGV4cC5hZnRlckNsb3NlKCk7XG5cdFx0XHR9KTtcblx0XHR9LCB0KTtcdFx0XG5cdH1cbn0sXG5jcm9zc2ZhZGUgOiBmdW5jdGlvbiAodXAsIHRvLCBmcm9tKSB7XG5cdGlmICghdXApIHJldHVybjtcblx0dmFyIGV4cCA9IHRoaXMsIFxuXHRcdGxhc3QgPSB0aGlzLmxhc3QsXG5cdFx0eCA9IHRoaXMueCxcblx0XHR5ID0gdGhpcy55LFxuXHRcdGxhc3RYID0gbGFzdC54LFxuXHRcdGxhc3RZID0gbGFzdC55LFxuXHRcdHdyYXBwZXIgPSB0aGlzLndyYXBwZXIsXG5cdFx0Y29udGVudCA9IHRoaXMuY29udGVudCxcblx0XHRvdmVybGF5Qm94ID0gdGhpcy5vdmVybGF5Qm94O1xuXHRocy5yZW1vdmVFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgaHMuZHJhZ0hhbmRsZXIpO1xuXHRcblx0aHMuc2V0U3R5bGVzKGNvbnRlbnQsIHsgXG5cdFx0d2lkdGg6ICh4LmltZ1NpemUgfHwgeC5zaXplKSArJ3B4JywgXG5cdFx0aGVpZ2h0OiAoeS5pbWdTaXplIHx8IHkuc2l6ZSkgKydweCdcdFx0XG5cdH0pO1xuXHRpZiAob3ZlcmxheUJveCkgb3ZlcmxheUJveC5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcblx0dGhpcy5vdXRsaW5lID0gbGFzdC5vdXRsaW5lO1xuXHRpZiAodGhpcy5vdXRsaW5lKSB0aGlzLm91dGxpbmUuZXhwID0gZXhwO1xuXHRsYXN0Lm91dGxpbmUgPSBudWxsO1xuXHR2YXIgZmFkZUJveCA9IGhzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZTogJ2hpZ2hzbGlkZS0nKyB0aGlzLmNvbnRlbnRUeXBlXG5cdFx0fSwgeyBcblx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBcblx0XHRcdHpJbmRleDogNCxcblx0XHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHRcdGRpc3BsYXk6ICdub25lJ1xuXHRcdH1cblx0KTtcblx0dmFyIG5hbWVzID0geyBvbGRJbWc6IGxhc3QsIG5ld0ltZzogdGhpcyB9O1xuXHRmb3IgKHZhciBuIGluIG5hbWVzKSB7XG5cdFx0dGhpc1tuXSA9IG5hbWVzW25dLmNvbnRlbnQuY2xvbmVOb2RlKCFuYW1lc1tuXS5pZnJhbWUpOyAvLyAjMTFcblx0XHRocy5zZXRTdHlsZXModGhpc1tuXSwge1xuXHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0XHRib3JkZXI6IDAsXG5cdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZSdcblx0XHR9KTtcblx0XHRmYWRlQm94LmFwcGVuZENoaWxkKHRoaXNbbl0pO1xuXHR9XG5cdHdyYXBwZXIuYXBwZW5kQ2hpbGQoZmFkZUJveCk7XG5cdGlmICh0aGlzLmlzSHRtbCkgaHMuc2V0U3R5bGVzKHRoaXMubWVkaXVtQ29udGVudCwgeyBcblx0XHRsZWZ0OiAwLFxuXHRcdHRvcDogMFxuXHR9KTtcblx0aWYgKG92ZXJsYXlCb3gpIHtcblx0XHRvdmVybGF5Qm94LmNsYXNzTmFtZSA9ICcnO1xuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQob3ZlcmxheUJveCk7XG5cdH1cblx0ZmFkZUJveC5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdGxhc3QuY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcblx0XG5cdGlmIChocy5zYWZhcmkgJiYgaHMudWFWZXJzaW9uIDwgNTI1KSB7XG5cdFx0dGhpcy53cmFwcGVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cdH1cblx0aHMuYW5pbWF0ZSh3cmFwcGVyLCB7XG5cdFx0d2lkdGg6IHguc2l6ZVxuXHR9LCB7XG5cdFx0ZHVyYXRpb246IGhzLnRyYW5zaXRpb25EdXJhdGlvbiwgXG5cdFx0c3RlcDogZnVuY3Rpb24odmFsLCBhcmdzKSB7XG5cdFx0XHR2YXIgcG9zID0gYXJncy5wb3MsXG5cdFx0XHRcdGludlBvcyA9IDEgLSBwb3M7XG5cdFx0XHR2YXIgcHJvcCxcblx0XHRcdFx0c2l6ZSA9IHt9LCBcblx0XHRcdFx0cHJvcHMgPSBbJ3BvcycsICdzaXplJywgJ3AxJywgJ3AyJ107XG5cdFx0XHRmb3IgKHZhciBuIGluIHByb3BzKSB7XG5cdFx0XHRcdHByb3AgPSBwcm9wc1tuXTtcblx0XHRcdFx0c2l6ZVsneCcrIHByb3BdID0gTWF0aC5yb3VuZChpbnZQb3MgKiBsYXN0WFtwcm9wXSArIHBvcyAqIHhbcHJvcF0pO1xuXHRcdFx0XHRzaXplWyd5JysgcHJvcF0gPSBNYXRoLnJvdW5kKGludlBvcyAqIGxhc3RZW3Byb3BdICsgcG9zICogeVtwcm9wXSk7XG5cdFx0XHRcdHNpemUueGltZ1NpemUgPSBNYXRoLnJvdW5kKFxuXHRcdFx0XHRcdGludlBvcyAqIChsYXN0WC5pbWdTaXplIHx8IGxhc3RYLnNpemUpICsgcG9zICogKHguaW1nU2l6ZSB8fCB4LnNpemUpKTtcblx0XHRcdFx0c2l6ZS54aW1nUGFkID0gTWF0aC5yb3VuZChpbnZQb3MgKiBsYXN0WC5nZXQoJ2ltZ1BhZCcpICsgcG9zICogeC5nZXQoJ2ltZ1BhZCcpKTtcblx0XHRcdFx0c2l6ZS55aW1nU2l6ZSA9IE1hdGgucm91bmQoXG5cdFx0XHRcdFx0aW52UG9zICogKGxhc3RZLmltZ1NpemUgfHwgbGFzdFkuc2l6ZSkgKyBwb3MgKiAoeS5pbWdTaXplIHx8IHkuc2l6ZSkpO1xuXHRcdFx0XHRzaXplLnlpbWdQYWQgPSBNYXRoLnJvdW5kKGludlBvcyAqIGxhc3RZLmdldCgnaW1nUGFkJykgKyBwb3MgKiB5LmdldCgnaW1nUGFkJykpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGV4cC5vdXRsaW5lKSBleHAub3V0bGluZS5zZXRQb3NpdGlvbih7IFxuXHRcdFx0XHR4OiBzaXplLnhwb3MsIFxuXHRcdFx0XHR5OiBzaXplLnlwb3MsIFxuXHRcdFx0XHR3OiBzaXplLnhzaXplICsgc2l6ZS54cDEgKyBzaXplLnhwMiArIDIgKiB4LmNiLCBcblx0XHRcdFx0aDogc2l6ZS55c2l6ZSArIHNpemUueXAxICsgc2l6ZS55cDIgKyAyICogeS5jYlxuXHRcdFx0fSk7XG5cdFx0XHRsYXN0LndyYXBwZXIuc3R5bGUuY2xpcCA9ICdyZWN0KCdcblx0XHRcdFx0KyAoc2l6ZS55cG9zIC0gbGFzdFkucG9zKSsncHgsICdcblx0XHRcdFx0KyAoc2l6ZS54c2l6ZSArIHNpemUueHAxICsgc2l6ZS54cDIgKyBzaXplLnhwb3MgKyAyICogbGFzdFguY2IgLSBsYXN0WC5wb3MpICsncHgsICdcblx0XHRcdFx0KyAoc2l6ZS55c2l6ZSArIHNpemUueXAxICsgc2l6ZS55cDIgKyBzaXplLnlwb3MgKyAyICogbGFzdFkuY2IgLSBsYXN0WS5wb3MpICsncHgsICdcblx0XHRcdFx0KyAoc2l6ZS54cG9zIC0gbGFzdFgucG9zKSsncHgpJztcblx0XHRcdFx0XG5cdFx0XHRocy5zZXRTdHlsZXMoY29udGVudCwge1xuXHRcdFx0XHR0b3A6IChzaXplLnlwMSArIHkuZ2V0KCdpbWdQYWQnKSkgKydweCcsXG5cdFx0XHRcdGxlZnQ6IChzaXplLnhwMSArIHguZ2V0KCdpbWdQYWQnKSkgKydweCcsXG5cdFx0XHRcdG1hcmdpblRvcDogKHkucG9zIC0gc2l6ZS55cG9zKSArJ3B4Jyxcblx0XHRcdFx0bWFyZ2luTGVmdDogKHgucG9zIC0gc2l6ZS54cG9zKSArJ3B4J1xuXHRcdFx0fSk7XG5cdFx0XHRocy5zZXRTdHlsZXMod3JhcHBlciwge1xuXHRcdFx0XHR0b3A6IHNpemUueXBvcyArJ3B4Jyxcblx0XHRcdFx0bGVmdDogc2l6ZS54cG9zICsncHgnLFxuXHRcdFx0XHR3aWR0aDogKHNpemUueHAxICsgc2l6ZS54cDIgKyBzaXplLnhzaXplICsgMiAqIHguY2IpKyAncHgnLFxuXHRcdFx0XHRoZWlnaHQ6IChzaXplLnlwMSArIHNpemUueXAyICsgc2l6ZS55c2l6ZSArIDIgKiB5LmNiKSArICdweCdcblx0XHRcdH0pO1xuXHRcdFx0aHMuc2V0U3R5bGVzKGZhZGVCb3gsIHtcblx0XHRcdFx0d2lkdGg6IChzaXplLnhpbWdTaXplIHx8IHNpemUueHNpemUpICsgJ3B4Jyxcblx0XHRcdFx0aGVpZ2h0OiAoc2l6ZS55aW1nU2l6ZSB8fCBzaXplLnlzaXplKSArJ3B4Jyxcblx0XHRcdFx0bGVmdDogKHNpemUueHAxICsgc2l6ZS54aW1nUGFkKSAgKydweCcsXG5cdFx0XHRcdHRvcDogKHNpemUueXAxICsgc2l6ZS55aW1nUGFkKSArJ3B4Jyxcblx0XHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnXG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0aHMuc2V0U3R5bGVzKGV4cC5vbGRJbWcsIHtcblx0XHRcdFx0dG9wOiAobGFzdFkucG9zIC0gc2l6ZS55cG9zICsgbGFzdFkucDEgLSBzaXplLnlwMSArIGxhc3RZLmdldCgnaW1nUGFkJykgLSBzaXplLnlpbWdQYWQpKydweCcsXG5cdFx0XHRcdGxlZnQ6IChsYXN0WC5wb3MgLSBzaXplLnhwb3MgKyBsYXN0WC5wMSAtIHNpemUueHAxICsgbGFzdFguZ2V0KCdpbWdQYWQnKSAtIHNpemUueGltZ1BhZCkrJ3B4J1xuXHRcdFx0fSk7XHRcdFxuXHRcdFx0XG5cdFx0XHRocy5zZXRTdHlsZXMoZXhwLm5ld0ltZywge1xuXHRcdFx0XHRvcGFjaXR5OiBwb3MsXG5cdFx0XHRcdHRvcDogKHkucG9zIC0gc2l6ZS55cG9zICsgeS5wMSAtIHNpemUueXAxICsgeS5nZXQoJ2ltZ1BhZCcpIC0gc2l6ZS55aW1nUGFkKSArJ3B4Jyxcblx0XHRcdFx0bGVmdDogKHgucG9zIC0gc2l6ZS54cG9zICsgeC5wMSAtIHNpemUueHAxICsgeC5nZXQoJ2ltZ1BhZCcpIC0gc2l6ZS54aW1nUGFkKSArJ3B4J1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAob3ZlcmxheUJveCkgaHMuc2V0U3R5bGVzKG92ZXJsYXlCb3gsIHtcblx0XHRcdFx0d2lkdGg6IHNpemUueHNpemUgKyAncHgnLFxuXHRcdFx0XHRoZWlnaHQ6IHNpemUueXNpemUgKydweCcsXG5cdFx0XHRcdGxlZnQ6IChzaXplLnhwMSArIHguY2IpICArJ3B4Jyxcblx0XHRcdFx0dG9wOiAoc2l6ZS55cDEgKyB5LmNiKSArJ3B4J1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0d3JhcHBlci5zdHlsZS52aXNpYmlsaXR5ID0gY29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXHRcdFx0Y29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdGhzLmRpc2NhcmRFbGVtZW50KGZhZGVCb3gpO1xuXHRcdFx0ZXhwLmFmdGVyRXhwYW5kKCk7XG5cdFx0XHRpZiAobGFzdC5pc0h0bWwpIGxhc3QuaHRtbFByZXBhcmVDbG9zZSgpOyAvLyAjMTFcblx0XHRcdGxhc3QuYWZ0ZXJDbG9zZSgpO1xuXHRcdFx0ZXhwLmxhc3QgPSBudWxsO1xuXHRcdH1cblx0XHRcblx0fSk7XG59LFxucmV1c2VPdmVybGF5IDogZnVuY3Rpb24obywgZWwpIHtcblx0aWYgKCF0aGlzLmxhc3QpIHJldHVybiBmYWxzZTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxhc3Qub3ZlcmxheXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgb0RpdiA9IGhzLiQoJ2hzSWQnKyB0aGlzLmxhc3Qub3ZlcmxheXNbaV0pO1xuXHRcdGlmIChvRGl2ICYmIG9EaXYuaHNJZCA9PSBvLmhzSWQpIHtcblx0XHRcdHRoaXMuZ2VuT3ZlcmxheUJveCgpO1xuXHRcdFx0b0Rpdi5yZXVzZSA9IHRoaXMua2V5O1xuXHRcdFx0aHMucHVzaCh0aGlzLm92ZXJsYXlzLCB0aGlzLmxhc3Qub3ZlcmxheXNbaV0pO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn0sXG5cblxuYWZ0ZXJFeHBhbmQgOiBmdW5jdGlvbigpIHtcblx0dGhpcy5pc0V4cGFuZGVkID0gdHJ1ZTtcdFxuXHR0aGlzLmZvY3VzKCk7XG5cdFxuXHRpZiAodGhpcy5pc0h0bWwgJiYgdGhpcy5vYmplY3RMb2FkVGltZSA9PSAnYWZ0ZXInKSB0aGlzLndyaXRlRXh0ZW5kZWRDb250ZW50KCk7XG5cdGlmICh0aGlzLmlmcmFtZSkge1xuXHRcdHRyeSB7XG5cdFx0XHR2YXIgZXhwID0gdGhpcyxcblx0XHRcdFx0ZG9jID0gdGhpcy5pZnJhbWUuY29udGVudERvY3VtZW50IHx8IHRoaXMuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cdFx0XHRocy5hZGRFdmVudExpc3RlbmVyKGRvYywgJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKGhzLmZvY3VzS2V5ICE9IGV4cC5rZXkpIGV4cC5mb2N1cygpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaChlKSB7fVxuXHRcdGlmIChocy5pZSAmJiB0eXBlb2YgdGhpcy5pc0Nsb3NpbmcgIT0gJ2Jvb2xlYW4nKSAvLyBmaXJzdCBvcGVuIFxuXHRcdFx0dGhpcy5pZnJhbWUuc3R5bGUud2lkdGggPSAodGhpcy5vYmplY3RXaWR0aCAtIDEpICsncHgnOyAvLyBoYXNMYXlvdXRcblx0fVxuXHRpZiAodGhpcy5kaW1taW5nT3BhY2l0eSkgaHMuZGltKHRoaXMpO1xuXHRpZiAoaHMudXBjb21pbmcgJiYgaHMudXBjb21pbmcgPT0gdGhpcy5hKSBocy51cGNvbWluZyA9IG51bGw7XG5cdHRoaXMucHJlcGFyZU5leHRPdXRsaW5lKCk7XG5cdHZhciBwID0gaHMucGFnZSwgbVggPSBocy5tb3VzZS54ICsgcC5zY3JvbGxMZWZ0LCBtWSA9IGhzLm1vdXNlLnkgKyBwLnNjcm9sbFRvcDtcblx0dGhpcy5tb3VzZUlzT3ZlciA9IHRoaXMueC5wb3MgPCBtWCAmJiBtWCA8IHRoaXMueC5wb3MgKyB0aGlzLnguZ2V0KCd3c2l6ZScpXG5cdFx0JiYgdGhpcy55LnBvcyA8IG1ZICYmIG1ZIDwgdGhpcy55LnBvcyArIHRoaXMueS5nZXQoJ3dzaXplJyk7XHRcblx0aWYgKHRoaXMub3ZlcmxheUJveCkgdGhpcy5zaG93T3ZlcmxheXMoKTtcblx0aHMuZmlyZUV2ZW50KHRoaXMsICdvbkFmdGVyRXhwYW5kJyk7XG5cdFxufSxcblxuXG5wcmVwYXJlTmV4dE91dGxpbmUgOiBmdW5jdGlvbigpIHtcblx0dmFyIGtleSA9IHRoaXMua2V5O1xuXHR2YXIgb3V0bGluZVR5cGUgPSB0aGlzLm91dGxpbmVUeXBlO1xuXHRuZXcgaHMuT3V0bGluZShvdXRsaW5lVHlwZSwgXG5cdFx0ZnVuY3Rpb24gKCkgeyB0cnkgeyBocy5leHBhbmRlcnNba2V5XS5wcmVsb2FkTmV4dCgpOyB9IGNhdGNoIChlKSB7fSB9KTtcbn0sXG5cblxucHJlbG9hZE5leHQgOiBmdW5jdGlvbigpIHtcblx0dmFyIG5leHQgPSB0aGlzLmdldEFkamFjZW50QW5jaG9yKDEpO1xuXHRpZiAobmV4dCAmJiBuZXh0Lm9uY2xpY2sudG9TdHJpbmcoKS5tYXRjaCgvaHNcXC5leHBhbmQvKSkgXG5cdFx0dmFyIGltZyA9IGhzLmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBocy5nZXRTcmMobmV4dCkgfSk7XG59LFxuXG5cbmdldEFkamFjZW50QW5jaG9yIDogZnVuY3Rpb24ob3ApIHtcblx0dmFyIGN1cnJlbnQgPSB0aGlzLmdldEFuY2hvckluZGV4KCksIGFzID0gaHMuYW5jaG9ycy5ncm91cHNbdGhpcy5zbGlkZXNob3dHcm91cCB8fCAnbm9uZSddO1xuXHRpZiAoYXMgJiYgIWFzW2N1cnJlbnQgKyBvcF0gJiYgdGhpcy5zbGlkZXNob3cgJiYgdGhpcy5zbGlkZXNob3cucmVwZWF0KSB7XG5cdFx0aWYgKG9wID09IDEpIHJldHVybiBhc1swXTtcblx0XHRlbHNlIGlmIChvcCA9PSAtMSkgcmV0dXJuIGFzW2FzLmxlbmd0aC0xXTtcblx0fVxuXHRyZXR1cm4gKGFzICYmIGFzW2N1cnJlbnQgKyBvcF0pIHx8IG51bGw7XG59LFxuXG5nZXRBbmNob3JJbmRleCA6IGZ1bmN0aW9uKCkge1xuXHR2YXIgYXJyID0gaHMuZ2V0QW5jaG9ycygpLmdyb3Vwc1t0aGlzLnNsaWRlc2hvd0dyb3VwIHx8ICdub25lJ107XG5cdGlmIChhcnIpIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGFycltpXSA9PSB0aGlzLmEpIHJldHVybiBpOyBcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn0sXG5cblxuZ2V0TnVtYmVyIDogZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzW3RoaXMubnVtYmVyUG9zaXRpb25dKSB7XG5cdFx0dmFyIGFyciA9IGhzLmFuY2hvcnMuZ3JvdXBzW3RoaXMuc2xpZGVzaG93R3JvdXAgfHwgJ25vbmUnXTtcblx0XHRpZiAoYXJyKSB7XG5cdFx0XHR2YXIgcyA9IGhzLmxhbmcubnVtYmVyLnJlcGxhY2UoJyUxJywgdGhpcy5nZXRBbmNob3JJbmRleCgpICsgMSkucmVwbGFjZSgnJTInLCBhcnIubGVuZ3RoKTtcblx0XHRcdHRoaXNbdGhpcy5udW1iZXJQb3NpdGlvbl0uaW5uZXJIVE1MID0gXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiaGlnaHNsaWRlLW51bWJlclwiPicrIHMgKyc8L2Rpdj4nKyB0aGlzW3RoaXMubnVtYmVyUG9zaXRpb25dLmlubmVySFRNTDtcblx0XHR9XG5cdH1cbn0sXG5pbml0U2xpZGVzaG93IDogZnVuY3Rpb24oKSB7XG5cdGlmICghdGhpcy5sYXN0KSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBocy5zbGlkZXNob3dzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgc3MgPSBocy5zbGlkZXNob3dzW2ldLCBzZyA9IHNzLnNsaWRlc2hvd0dyb3VwO1xuXHRcdFx0aWYgKHR5cGVvZiBzZyA9PSAndW5kZWZpbmVkJyB8fCBzZyA9PT0gbnVsbCB8fCBzZyA9PT0gdGhpcy5zbGlkZXNob3dHcm91cCkgXG5cdFx0XHRcdHRoaXMuc2xpZGVzaG93ID0gbmV3IGhzLlNsaWRlc2hvdyh0aGlzLmtleSwgc3MpO1xuXHRcdH0gXG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5zbGlkZXNob3cgPSB0aGlzLmxhc3Quc2xpZGVzaG93O1xuXHR9XG5cdHZhciBzcyA9IHRoaXMuc2xpZGVzaG93O1xuXHRpZiAoIXNzKSByZXR1cm47XG5cdHZhciBrZXkgPSBzcy5leHBLZXkgPSB0aGlzLmtleTtcblx0XG5cdHNzLmNoZWNrRmlyc3RBbmRMYXN0KCk7XG5cdHNzLmRpc2FibGUoJ2Z1bGwtZXhwYW5kJyk7XG5cdGlmIChzcy5jb250cm9scykge1xuXHRcdHRoaXMuY3JlYXRlT3ZlcmxheShocy5leHRlbmQoc3Mub3ZlcmxheU9wdGlvbnMgfHwge30sIHtcblx0XHRcdG92ZXJsYXlJZDogc3MuY29udHJvbHMsXG5cdFx0XHRoc0lkOiAnY29udHJvbHMnLFxuXHRcdFx0ekluZGV4OiA1XG5cdFx0fSkpO1xuXHR9XG5cdGlmIChzcy50aHVtYnN0cmlwKSBzcy50aHVtYnN0cmlwLmFkZCh0aGlzKTtcblx0aWYgKCF0aGlzLmxhc3QgJiYgdGhpcy5hdXRvcGxheSkgc3MucGxheSh0cnVlKTtcblx0aWYgKHNzLmF1dG9wbGF5KSB7XG5cdFx0c3MuYXV0b3BsYXkgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0aHMubmV4dChrZXkpO1xuXHRcdH0sIChzcy5pbnRlcnZhbCB8fCA1MDApKTtcblx0fVxufSxcblxuY2FuY2VsTG9hZGluZyA6IGZ1bmN0aW9uKCkge1xuXHRocy5kaXNjYXJkRWxlbWVudCAodGhpcy53cmFwcGVyKTtcblx0aHMuZXhwYW5kZXJzW3RoaXMua2V5XSA9IG51bGw7XG5cdGlmIChocy51cGNvbWluZyA9PSB0aGlzLmEpIGhzLnVwY29taW5nID0gbnVsbDtcblx0aHMudW5kaW0odGhpcy5rZXkpO1xuXHRpZiAodGhpcy5sb2FkaW5nKSBocy5sb2FkaW5nLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XG5cdGhzLmZpcmVFdmVudCh0aGlzLCAnb25IaWRlTG9hZGluZycpO1xufSxcblxud3JpdGVDcmVkaXRzIDogZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5jcmVkaXRzKSByZXR1cm47XG5cdHRoaXMuY3JlZGl0cyA9IGhzLmNyZWF0ZUVsZW1lbnQoJ2EnLCB7XG5cdFx0aHJlZjogaHMuY3JlZGl0c0hyZWYsXG5cdFx0dGFyZ2V0OiBocy5jcmVkaXRzVGFyZ2V0LFxuXHRcdGNsYXNzTmFtZTogJ2hpZ2hzbGlkZS1jcmVkaXRzJyxcblx0XHRpbm5lckhUTUw6IGhzLmxhbmcuY3JlZGl0c1RleHQsXG5cdFx0dGl0bGU6IGhzLmxhbmcuY3JlZGl0c1RpdGxlXG5cdH0pO1xuXHR0aGlzLmNyZWF0ZU92ZXJsYXkoeyBcblx0XHRvdmVybGF5SWQ6IHRoaXMuY3JlZGl0cywgXG5cdFx0cG9zaXRpb246IHRoaXMuY3JlZGl0c1Bvc2l0aW9uIHx8ICd0b3AgbGVmdCcsIFxuXHRcdGhzSWQ6ICdjcmVkaXRzJyBcblx0fSk7XG59LFxuXG5nZXRJbmxpbmUgOiBmdW5jdGlvbih0eXBlcywgYWRkT3ZlcmxheSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHR5cGUgPSB0eXBlc1tpXSwgcyA9IG51bGw7XG5cdFx0aWYgKHR5cGUgPT0gJ2NhcHRpb24nICYmICFocy5maXJlRXZlbnQodGhpcywgJ29uQmVmb3JlR2V0Q2FwdGlvbicpKSByZXR1cm47XG5cdFx0ZWxzZSBpZiAodHlwZSA9PSAnaGVhZGluZycgJiYgIWhzLmZpcmVFdmVudCh0aGlzLCAnb25CZWZvcmVHZXRIZWFkaW5nJykpIHJldHVybjtcblx0XHRpZiAoIXRoaXNbdHlwZSArJ0lkJ10gJiYgdGhpcy50aHVtYnNVc2VyU2V0SWQpICBcblx0XHRcdHRoaXNbdHlwZSArJ0lkJ10gPSB0eXBlICsnLWZvci0nKyB0aGlzLnRodW1ic1VzZXJTZXRJZDtcblx0XHRpZiAodGhpc1t0eXBlICsnSWQnXSkgdGhpc1t0eXBlXSA9IGhzLmdldE5vZGUodGhpc1t0eXBlICsnSWQnXSk7XG5cdFx0aWYgKCF0aGlzW3R5cGVdICYmICF0aGlzW3R5cGUgKydUZXh0J10gJiYgdGhpc1t0eXBlICsnRXZhbCddKSB0cnkge1xuXHRcdFx0cyA9IGV2YWwodGhpc1t0eXBlICsnRXZhbCddKTtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdGlmICghdGhpc1t0eXBlXSAmJiB0aGlzW3R5cGUgKydUZXh0J10pIHtcblx0XHRcdHMgPSB0aGlzW3R5cGUgKydUZXh0J107XG5cdFx0fVxuXHRcdGlmICghdGhpc1t0eXBlXSAmJiAhcykge1xuXHRcdFx0dGhpc1t0eXBlXSA9IGhzLmdldE5vZGUodGhpcy5hWydfJysgdHlwZSArICdJZCddKTtcblx0XHRcdGlmICghdGhpc1t0eXBlXSkge1xuXHRcdFx0XHR2YXIgbmV4dCA9IHRoaXMuYS5uZXh0U2libGluZztcblx0XHRcdFx0d2hpbGUgKG5leHQgJiYgIWhzLmlzSHNBbmNob3IobmV4dCkpIHtcblx0XHRcdFx0XHRpZiAoKG5ldyBSZWdFeHAoJ2hpZ2hzbGlkZS0nKyB0eXBlKSkudGVzdChuZXh0LmNsYXNzTmFtZSB8fCBudWxsKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFuZXh0LmlkKSB0aGlzLmFbJ18nKyB0eXBlICsgJ0lkJ10gPSBuZXh0LmlkID0gJ2hzSWQnKyBocy5pZENvdW50ZXIrKztcblx0XHRcdFx0XHRcdHRoaXNbdHlwZV0gPSBocy5nZXROb2RlKG5leHQuaWQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5leHQgPSBuZXh0Lm5leHRTaWJsaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghdGhpc1t0eXBlXSAmJiAhcyAmJiB0aGlzLm51bWJlclBvc2l0aW9uID09IHR5cGUpIHMgPSAnXFxuJztcblx0XHRcblx0XHRpZiAoIXRoaXNbdHlwZV0gJiYgcykgdGhpc1t0eXBlXSA9IGhzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ2hpZ2hzbGlkZS0nKyB0eXBlLCBpbm5lckhUTUw6IHMgfSApO1xuXHRcdFxuXHRcdGlmIChhZGRPdmVybGF5ICYmIHRoaXNbdHlwZV0pIHtcblx0XHRcdHZhciBvID0geyBwb3NpdGlvbjogKHR5cGUgPT0gJ2hlYWRpbmcnKSA/ICdhYm92ZScgOiAnYmVsb3cnIH07XG5cdFx0XHRmb3IgKHZhciB4IGluIHRoaXNbdHlwZSsnT3ZlcmxheSddKSBvW3hdID0gdGhpc1t0eXBlKydPdmVybGF5J11beF07XG5cdFx0XHRvLm92ZXJsYXlJZCA9IHRoaXNbdHlwZV07XG5cdFx0XHR0aGlzLmNyZWF0ZU92ZXJsYXkobyk7XG5cdFx0fVxuXHR9XG59LFxuXG5cbi8vIG9uIGVuZCBtb3ZlIGFuZCByZXNpemVcbmRvU2hvd0hpZGUgOiBmdW5jdGlvbih2aXNpYmlsaXR5KSB7XG5cdGlmIChocy5oaWRlU2VsZWN0cykgdGhpcy5zaG93SGlkZUVsZW1lbnRzKCdTRUxFQ1QnLCB2aXNpYmlsaXR5KTtcblx0aWYgKGhzLmhpZGVJZnJhbWVzKSB0aGlzLnNob3dIaWRlRWxlbWVudHMoJ0lGUkFNRScsIHZpc2liaWxpdHkpO1xuXHRpZiAoaHMuZ2Vja29NYWMpIHRoaXMuc2hvd0hpZGVFbGVtZW50cygnKicsIHZpc2liaWxpdHkpO1xufSxcbnNob3dIaWRlRWxlbWVudHMgOiBmdW5jdGlvbiAodGFnTmFtZSwgdmlzaWJpbGl0eSkge1xuXHR2YXIgZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSk7XG5cdHZhciBwcm9wID0gdGFnTmFtZSA9PSAnKicgPyAnb3ZlcmZsb3cnIDogJ3Zpc2liaWxpdHknO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChwcm9wID09ICd2aXNpYmlsaXR5JyB8fCAoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShcblx0XHRcdFx0ZWxzW2ldLCBcIlwiKS5nZXRQcm9wZXJ0eVZhbHVlKCdvdmVyZmxvdycpID09ICdhdXRvJ1xuXHRcdFx0XHR8fCBlbHNbaV0uZ2V0QXR0cmlidXRlKCdoaWRkZW4tYnknKSAhPSBudWxsKSkge1xuXHRcdFx0dmFyIGhpZGRlbkJ5ID0gZWxzW2ldLmdldEF0dHJpYnV0ZSgnaGlkZGVuLWJ5Jyk7XG5cdFx0XHRpZiAodmlzaWJpbGl0eSA9PSAndmlzaWJsZScgJiYgaGlkZGVuQnkpIHtcblx0XHRcdFx0aGlkZGVuQnkgPSBoaWRkZW5CeS5yZXBsYWNlKCdbJysgdGhpcy5rZXkgKyddJywgJycpO1xuXHRcdFx0XHRlbHNbaV0uc2V0QXR0cmlidXRlKCdoaWRkZW4tYnknLCBoaWRkZW5CeSk7XG5cdFx0XHRcdGlmICghaGlkZGVuQnkpIGVsc1tpXS5zdHlsZVtwcm9wXSA9IGVsc1tpXS5vcmlnUHJvcDtcblx0XHRcdH0gZWxzZSBpZiAodmlzaWJpbGl0eSA9PSAnaGlkZGVuJykgeyAvLyBoaWRlIGlmIGJlaGluZFxuXHRcdFx0XHR2YXIgZWxQb3MgPSBocy5nZXRQb3NpdGlvbihlbHNbaV0pO1xuXHRcdFx0XHRlbFBvcy53ID0gZWxzW2ldLm9mZnNldFdpZHRoO1xuXHRcdFx0XHRlbFBvcy5oID0gZWxzW2ldLm9mZnNldEhlaWdodDtcblx0XHRcdFx0aWYgKCF0aGlzLmRpbW1pbmdPcGFjaXR5KSB7IC8vIGhpZGUgYWxsIGlmIGRpbW1pbmdcblx0XHRcdFx0XG5cdFx0XHRcdFx0dmFyIGNsZWFyc1ggPSAoZWxQb3MueCArIGVsUG9zLncgPCB0aGlzLnguZ2V0KCdvcG9zJykgXG5cdFx0XHRcdFx0XHR8fCBlbFBvcy54ID4gdGhpcy54LmdldCgnb3BvcycpICsgdGhpcy54LmdldCgnb3NpemUnKSk7XG5cdFx0XHRcdFx0dmFyIGNsZWFyc1kgPSAoZWxQb3MueSArIGVsUG9zLmggPCB0aGlzLnkuZ2V0KCdvcG9zJykgXG5cdFx0XHRcdFx0XHR8fCBlbFBvcy55ID4gdGhpcy55LmdldCgnb3BvcycpICsgdGhpcy55LmdldCgnb3NpemUnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHdyYXBwZXJLZXkgPSBocy5nZXRXcmFwcGVyS2V5KGVsc1tpXSk7XG5cdFx0XHRcdGlmICghY2xlYXJzWCAmJiAhY2xlYXJzWSAmJiB3cmFwcGVyS2V5ICE9IHRoaXMua2V5KSB7IC8vIGVsZW1lbnQgZmFsbHMgYmVoaW5kIGltYWdlXG5cdFx0XHRcdFx0aWYgKCFoaWRkZW5CeSkge1xuXHRcdFx0XHRcdFx0ZWxzW2ldLnNldEF0dHJpYnV0ZSgnaGlkZGVuLWJ5JywgJ1snKyB0aGlzLmtleSArJ10nKTtcblx0XHRcdFx0XHRcdGVsc1tpXS5vcmlnUHJvcCA9IGVsc1tpXS5zdHlsZVtwcm9wXTtcblx0XHRcdFx0XHRcdGVsc1tpXS5zdHlsZVtwcm9wXSA9ICdoaWRkZW4nO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChoaWRkZW5CeS5pbmRleE9mKCdbJysgdGhpcy5rZXkgKyddJykgPT0gLTEpIHtcblx0XHRcdFx0XHRcdGVsc1tpXS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbi1ieScsIGhpZGRlbkJ5ICsgJ1snKyB0aGlzLmtleSArJ10nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoKGhpZGRlbkJ5ID09ICdbJysgdGhpcy5rZXkgKyddJyB8fCBocy5mb2N1c0tleSA9PSB3cmFwcGVyS2V5KVxuXHRcdFx0XHRcdFx0JiYgd3JhcHBlcktleSAhPSB0aGlzLmtleSkgeyAvLyBvbiBtb3ZlXG5cdFx0XHRcdFx0ZWxzW2ldLnNldEF0dHJpYnV0ZSgnaGlkZGVuLWJ5JywgJycpO1xuXHRcdFx0XHRcdGVsc1tpXS5zdHlsZVtwcm9wXSA9IGVsc1tpXS5vcmlnUHJvcCB8fCAnJztcblx0XHRcdFx0fSBlbHNlIGlmIChoaWRkZW5CeSAmJiBoaWRkZW5CeS5pbmRleE9mKCdbJysgdGhpcy5rZXkgKyddJykgPiAtMSkge1xuXHRcdFx0XHRcdGVsc1tpXS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbi1ieScsIGhpZGRlbkJ5LnJlcGxhY2UoJ1snKyB0aGlzLmtleSArJ10nLCAnJykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0sXG5cbmZvY3VzIDogZnVuY3Rpb24oKSB7XG5cdHRoaXMud3JhcHBlci5zdHlsZS56SW5kZXggPSBocy56SW5kZXhDb3VudGVyICs9IDI7XG5cdC8vIGJsdXIgb3RoZXJzXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaHMuZXhwYW5kZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGhzLmV4cGFuZGVyc1tpXSAmJiBpID09IGhzLmZvY3VzS2V5KSB7XG5cdFx0XHR2YXIgYmx1ckV4cCA9IGhzLmV4cGFuZGVyc1tpXTtcblx0XHRcdGJsdXJFeHAuY29udGVudC5jbGFzc05hbWUgKz0gJyBoaWdoc2xpZGUtJysgYmx1ckV4cC5jb250ZW50VHlwZSArJy1ibHVyJztcblx0XHRcdGlmIChibHVyRXhwLmlzSW1hZ2UpIHtcblx0XHRcdFx0Ymx1ckV4cC5jb250ZW50LnN0eWxlLmN1cnNvciA9IGhzLmllTHQ3ID8gJ2hhbmQnIDogJ3BvaW50ZXInO1xuXHRcdFx0XHRibHVyRXhwLmNvbnRlbnQudGl0bGUgPSBocy5sYW5nLmZvY3VzVGl0bGU7XHRcblx0XHRcdH1cdFxuXHRcdFx0aHMuZmlyZUV2ZW50KGJsdXJFeHAsICdvbkJsdXInKTtcblx0XHR9XG5cdH1cblx0XG5cdC8vIGZvY3VzIHRoaXNcblx0aWYgKHRoaXMub3V0bGluZSkgdGhpcy5vdXRsaW5lLnRhYmxlLnN0eWxlLnpJbmRleCBcblx0XHQ9IHRoaXMud3JhcHBlci5zdHlsZS56SW5kZXggLSAxO1xuXHR0aGlzLmNvbnRlbnQuY2xhc3NOYW1lID0gJ2hpZ2hzbGlkZS0nKyB0aGlzLmNvbnRlbnRUeXBlO1xuXHRpZiAodGhpcy5pc0ltYWdlKSB7XG5cdFx0dGhpcy5jb250ZW50LnRpdGxlID0gaHMubGFuZy5yZXN0b3JlVGl0bGU7XG5cdFx0XG5cdFx0aWYgKGhzLnJlc3RvcmVDdXJzb3IpIHtcblx0XHRcdGhzLnN0eWxlUmVzdG9yZUN1cnNvciA9IHdpbmRvdy5vcGVyYSA/ICdwb2ludGVyJyA6ICd1cmwoJysgaHMuZ3JhcGhpY3NEaXIgKyBocy5yZXN0b3JlQ3Vyc29yICsnKSwgcG9pbnRlcic7XG5cdFx0XHRpZiAoaHMuaWVMdDcgJiYgaHMudWFWZXJzaW9uIDwgNikgaHMuc3R5bGVSZXN0b3JlQ3Vyc29yID0gJ2hhbmQnO1xuXHRcdFx0dGhpcy5jb250ZW50LnN0eWxlLmN1cnNvciA9IGhzLnN0eWxlUmVzdG9yZUN1cnNvcjtcblx0XHR9XG5cdH1cblx0aHMuZm9jdXNLZXkgPSB0aGlzLmtleTtcdFxuXHRocy5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCB3aW5kb3cub3BlcmEgPyAna2V5cHJlc3MnIDogJ2tleWRvd24nLCBocy5rZXlIYW5kbGVyKTtcdFxuXHRocy5maXJlRXZlbnQodGhpcywgJ29uRm9jdXMnKTtcdFxufSxcbm1vdmVUbzogZnVuY3Rpb24oeCwgeSkge1xuXHR0aGlzLnguc2V0UG9zKHgpO1xuXHR0aGlzLnkuc2V0UG9zKHkpO1xufSxcbnJlc2l6ZSA6IGZ1bmN0aW9uIChlKSB7XG5cdHZhciB3LCBoLCByID0gZS53aWR0aCAvIGUuaGVpZ2h0O1xuXHR3ID0gTWF0aC5tYXgoZS53aWR0aCArIGUuZFgsIE1hdGgubWluKHRoaXMubWluV2lkdGgsIHRoaXMueC5mdWxsKSk7XG5cdGlmICh0aGlzLmlzSW1hZ2UgJiYgTWF0aC5hYnModyAtIHRoaXMueC5mdWxsKSA8IDEyKSB3ID0gdGhpcy54LmZ1bGw7XG5cdGggPSB0aGlzLmlzSHRtbCA/IGUuaGVpZ2h0ICsgZS5kWSA6IHcgLyByO1xuXHRpZiAoaCA8IE1hdGgubWluKHRoaXMubWluSGVpZ2h0LCB0aGlzLnkuZnVsbCkpIHtcblx0XHRoID0gTWF0aC5taW4odGhpcy5taW5IZWlnaHQsIHRoaXMueS5mdWxsKTtcblx0XHRpZiAodGhpcy5pc0ltYWdlKSB3ID0gaCAqIHI7XG5cdH1cblx0dGhpcy5yZXNpemVUbyh3LCBoKTtcbn0sXG5yZXNpemVUbzogZnVuY3Rpb24odywgaCkge1xuXHR0aGlzLnkuc2V0U2l6ZShoKTtcblx0dGhpcy54LnNldFNpemUodyk7XG5cdHRoaXMud3JhcHBlci5zdHlsZS5oZWlnaHQgPSB0aGlzLnkuZ2V0KCd3c2l6ZScpICsncHgnO1xufSxcblxuY2xvc2UgOiBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuaXNDbG9zaW5nIHx8ICF0aGlzLmlzRXhwYW5kZWQpIHJldHVybjtcblx0aWYgKHRoaXMudHJhbnNpdGlvbnNbMV0gPT0gJ2Nyb3NzZmFkZScgJiYgaHMudXBjb21pbmcpIHtcblx0XHRocy5nZXRFeHBhbmRlcihocy51cGNvbWluZykuY2FuY2VsTG9hZGluZygpO1xuXHRcdGhzLnVwY29taW5nID0gbnVsbDtcblx0fVxuXHRpZiAoIWhzLmZpcmVFdmVudCh0aGlzLCAnb25CZWZvcmVDbG9zZScpKSByZXR1cm47XG5cdHRoaXMuaXNDbG9zaW5nID0gdHJ1ZTtcblx0aWYgKHRoaXMuc2xpZGVzaG93ICYmICFocy51cGNvbWluZykgdGhpcy5zbGlkZXNob3cucGF1c2UoKTtcblx0XG5cdGhzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsIHdpbmRvdy5vcGVyYSA/ICdrZXlwcmVzcycgOiAna2V5ZG93bicsIGhzLmtleUhhbmRsZXIpO1xuXHRcblx0dHJ5IHtcblx0XHRpZiAodGhpcy5pc0h0bWwpIHRoaXMuaHRtbFByZXBhcmVDbG9zZSgpO1xuXHRcdHRoaXMuY29udGVudC5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG5cdFx0dGhpcy5jaGFuZ2VTaXplKFxuXHRcdFx0MCwge1xuXHRcdFx0XHR3cmFwcGVyOiB7XG5cdFx0XHRcdFx0d2lkdGggOiB0aGlzLngudCxcblx0XHRcdFx0XHRoZWlnaHQgOiB0aGlzLnkudCxcblx0XHRcdFx0XHRsZWZ0OiB0aGlzLngudHBvcyAtIHRoaXMueC5jYiArIHRoaXMueC50Yixcblx0XHRcdFx0XHR0b3A6IHRoaXMueS50cG9zIC0gdGhpcy55LmNiICsgdGhpcy55LnRiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGNvbnRlbnQ6IHtcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHR3aWR0aDogdGhpcy54LnQsXG5cdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLnkudFxuXHRcdFx0XHR9XG5cdFx0XHR9LCBocy5yZXN0b3JlRHVyYXRpb25cblx0XHQpO1xuXHR9IGNhdGNoIChlKSB7IHRoaXMuYWZ0ZXJDbG9zZSgpOyB9XG59LFxuXG5odG1sUHJlcGFyZUNsb3NlIDogZnVuY3Rpb24oKSB7XG5cdGlmIChocy5nZWNrb01hYykgeyAvLyBiYWQgcmVkcmF3c1xuXHRcdGlmICghaHMubWFzaykgaHMubWFzayA9IGhzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIFxuXHRcdFx0eyBwb3NpdGlvbjogJ2Fic29sdXRlJyB9LCBocy5jb250YWluZXIpO1xuXHRcdGhzLnNldFN0eWxlcyhocy5tYXNrLCB7IHdpZHRoOiB0aGlzLnguc2l6ZSArJ3B4JywgaGVpZ2h0OiB0aGlzLnkuc2l6ZSArJ3B4JywgXG5cdFx0XHRsZWZ0OiB0aGlzLngucG9zICsncHgnLCB0b3A6IHRoaXMueS5wb3MgKydweCcsIGRpc3BsYXk6ICdibG9jaycgfSk7XHRcdFx0XG5cdH1cblx0aWYgKHRoaXMub2JqZWN0VHlwZSA9PSAnc3dmJykgdHJ5IHsgaHMuJCh0aGlzLmJvZHkuaWQpLlN0b3BQbGF5KCk7IH0gY2F0Y2ggKGUpIHt9XG5cdFxuXHRpZiAodGhpcy5vYmplY3RMb2FkVGltZSA9PSAnYWZ0ZXInICYmICF0aGlzLnByZXNlcnZlQ29udGVudCkgdGhpcy5kZXN0cm95T2JqZWN0KCk7XHRcdFxuXHRpZiAodGhpcy5zY3JvbGxlckRpdiAmJiB0aGlzLnNjcm9sbGVyRGl2ICE9IHRoaXMuc2Nyb2xsaW5nQ29udGVudCkgXG5cdFx0dGhpcy5zY3JvbGxlckRpdi5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xufSxcblxuZGVzdHJveU9iamVjdCA6IGZ1bmN0aW9uICgpIHtcblx0aWYgKGhzLmllICYmIHRoaXMuaWZyYW1lKVxuXHRcdHRyeSB7IFxuXHRcdFx0dGhpcy5pZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnOyBcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHR0aGlzLmlmcmFtZS5zcmMgPSAnJztcblx0XHR9XG5cdGlmICh0aGlzLm9iamVjdFR5cGUgPT0gJ3N3ZicpIHN3Zm9iamVjdC5yZW1vdmVTV0YodGhpcy5ib2R5LmlkKTtcblx0dGhpcy5ib2R5LmlubmVySFRNTCA9ICcnO1xufSxcblxuc2xlZXAgOiBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMub3V0bGluZSkgdGhpcy5vdXRsaW5lLnRhYmxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdHRoaXMucmVsZWFzZU1hc2sgPSBudWxsO1xuXHR0aGlzLndyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0dGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XG5cdGhzLnB1c2goaHMuc2xlZXBpbmcsIHRoaXMpO1xufSxcblxuYXdha2UgOiBmdW5jdGlvbigpIHt0cnkge1xuXHRcblx0aHMuZXhwYW5kZXJzW3RoaXMua2V5XSA9IHRoaXM7XG5cdFxuXHRpZiAoIWhzLmFsbG93TXVsdGlwbGVJbnN0YW5jZXMgJiZocy5mb2N1c0tleSAhPSB0aGlzLmtleSkge1x0XG5cdFx0dHJ5IHsgaHMuZXhwYW5kZXJzW2hzLmZvY3VzS2V5XS5jbG9zZSgpOyB9IGNhdGNoIChlKXt9XG5cdH1cblx0XG5cdHZhciB6ID0gaHMuekluZGV4Q291bnRlcisrLCBzdGwgPSB7IGRpc3BsYXk6ICcnLCB6SW5kZXg6IHogfTtcblx0aHMuc2V0U3R5bGVzICh0aGlzLndyYXBwZXIsIHN0bCk7XG5cdHRoaXMuaXNDbG9zaW5nID0gZmFsc2U7XG5cdFxuXHR2YXIgbyA9IHRoaXMub3V0bGluZSB8fCAwO1xuXHRpZiAobykge1xuXHRcdGlmICghdGhpcy5vdXRsaW5lV2hpbGVBbmltYXRpbmcpIHN0bC52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cdFx0aHMuc2V0U3R5bGVzIChvLnRhYmxlLCBzdGwpO1x0XHRcblx0fVxuXHRpZiAodGhpcy5zbGlkZXNob3cpIHtcblx0XHR0aGlzLmluaXRTbGlkZXNob3coKTtcblx0fVxuXHRcdFxuXHR0aGlzLnNob3coKTtcbn0gY2F0Y2ggKGUpIHt9XG5cblxufSxcblxuY3JlYXRlT3ZlcmxheSA6IGZ1bmN0aW9uIChvKSB7XG5cdHZhciBlbCA9IG8ub3ZlcmxheUlkLCBcblx0XHRyZWxUb1ZQID0gKG8ucmVsYXRpdmVUbyA9PSAndmlld3BvcnQnICYmICEvcGFuZWwkLy50ZXN0KG8ucG9zaXRpb24pKTtcblx0aWYgKHR5cGVvZiBlbCA9PSAnc3RyaW5nJykgZWwgPSBocy5nZXROb2RlKGVsKTtcblx0aWYgKG8uaHRtbCkgZWwgPSBocy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGlubmVySFRNTDogby5odG1sIH0pO1xuXHRpZiAoIWVsIHx8IHR5cGVvZiBlbCA9PSAnc3RyaW5nJykgcmV0dXJuO1xuXHRpZiAoIWhzLmZpcmVFdmVudCh0aGlzLCAnb25DcmVhdGVPdmVybGF5JywgeyBvdmVybGF5OiBlbCB9KSkgcmV0dXJuO1xuXHRlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0by5oc0lkID0gby5oc0lkIHx8IG8ub3ZlcmxheUlkOyBcblx0aWYgKHRoaXMudHJhbnNpdGlvbnNbMV0gPT0gJ2Nyb3NzZmFkZScgJiYgdGhpcy5yZXVzZU92ZXJsYXkobywgZWwpKSByZXR1cm47XG5cdHRoaXMuZ2VuT3ZlcmxheUJveCgpO1xuXHR2YXIgd2lkdGggPSBvLndpZHRoICYmIC9eWzAtOV0rKHB4fCUpJC8udGVzdChvLndpZHRoKSA/IG8ud2lkdGggOiAnYXV0byc7XG5cdGlmICgvXihsZWZ0fHJpZ2h0KXBhbmVsJC8udGVzdChvLnBvc2l0aW9uKSAmJiAhL15bMC05XStweCQvLnRlc3Qoby53aWR0aCkpIHdpZHRoID0gJzIwMHB4Jztcblx0dmFyIG92ZXJsYXkgPSBocy5jcmVhdGVFbGVtZW50KFxuXHRcdCdkaXYnLCB7XG5cdFx0XHRpZDogJ2hzSWQnKyBocy5pZENvdW50ZXIrKyxcblx0XHRcdGhzSWQ6IG8uaHNJZFxuXHRcdH0sIHtcblx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdFx0dmlzaWJpbGl0eTogJ2hpZGRlbicsXG5cdFx0XHR3aWR0aDogd2lkdGgsXG5cdFx0XHRkaXJlY3Rpb246IGhzLmxhbmcuY3NzRGlyZWN0aW9uIHx8ICcnLFxuXHRcdFx0b3BhY2l0eTogMFxuXHRcdH0sXG5cdFx0cmVsVG9WUCA/IGhzLnZpZXdwb3J0IDp0aGlzLm92ZXJsYXlCb3gsXG5cdFx0dHJ1ZVxuXHQpO1xuXHRpZiAocmVsVG9WUCkgb3ZlcmxheS5oc0tleSA9IHRoaXMua2V5O1xuXHRcblx0b3ZlcmxheS5hcHBlbmRDaGlsZChlbCk7XG5cdGhzLmV4dGVuZChvdmVybGF5LCB7XG5cdFx0b3BhY2l0eTogMSxcblx0XHRvZmZzZXRYOiAwLFxuXHRcdG9mZnNldFk6IDAsXG5cdFx0ZHVyOiAoby5mYWRlID09PSAwIHx8IG8uZmFkZSA9PT0gZmFsc2UgfHwgKG8uZmFkZSA9PSAyICYmIGhzLmllKSkgPyAwIDogMjUwXG5cdH0pO1xuXHRocy5leHRlbmQob3ZlcmxheSwgbyk7XG5cdFxuXHRcdFxuXHRpZiAodGhpcy5nb3RPdmVybGF5cykge1xuXHRcdHRoaXMucG9zaXRpb25PdmVybGF5KG92ZXJsYXkpO1xuXHRcdGlmICghb3ZlcmxheS5oaWRlT25Nb3VzZU91dCB8fCB0aGlzLm1vdXNlSXNPdmVyKSBcblx0XHRcdGhzLmFuaW1hdGUob3ZlcmxheSwgeyBvcGFjaXR5OiBvdmVybGF5Lm9wYWNpdHkgfSwgb3ZlcmxheS5kdXIpO1xuXHR9XG5cdGhzLnB1c2godGhpcy5vdmVybGF5cywgaHMuaWRDb3VudGVyIC0gMSk7XG59LFxucG9zaXRpb25PdmVybGF5IDogZnVuY3Rpb24ob3ZlcmxheSkge1xuXHR2YXIgcCA9IG92ZXJsYXkucG9zaXRpb24gfHwgJ21pZGRsZSBjZW50ZXInLFxuXHRcdHJlbFRvVlAgPSAob3ZlcmxheS5yZWxhdGl2ZVRvID09ICd2aWV3cG9ydCcpLFxuXHRcdG9mZlggPSBvdmVybGF5Lm9mZnNldFgsXG5cdFx0b2ZmWSA9IG92ZXJsYXkub2Zmc2V0WTtcblx0aWYgKHJlbFRvVlApIHtcblx0XHRocy52aWV3cG9ydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRvdmVybGF5LmhzS2V5ID0gdGhpcy5rZXk7XG5cdFx0aWYgKG92ZXJsYXkub2Zmc2V0V2lkdGggPiBvdmVybGF5LnBhcmVudE5vZGUub2Zmc2V0V2lkdGgpXG5cdFx0XHRvdmVybGF5LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuXHR9IGVsc2Vcblx0aWYgKG92ZXJsYXkucGFyZW50Tm9kZSAhPSB0aGlzLm92ZXJsYXlCb3gpIHRoaXMub3ZlcmxheUJveC5hcHBlbmRDaGlsZChvdmVybGF5KTtcblx0aWYgKC9sZWZ0JC8udGVzdChwKSkgb3ZlcmxheS5zdHlsZS5sZWZ0ID0gb2ZmWCArJ3B4JzsgXG5cdFxuXHRpZiAoL2NlbnRlciQvLnRlc3QocCkpXHRocy5zZXRTdHlsZXMgKG92ZXJsYXksIHsgXG5cdFx0bGVmdDogJzUwJScsXG5cdFx0bWFyZ2luTGVmdDogKG9mZlggLSBNYXRoLnJvdW5kKG92ZXJsYXkub2Zmc2V0V2lkdGggLyAyKSkgKydweCdcblx0fSk7XHRcblx0XG5cdGlmICgvcmlnaHQkLy50ZXN0KHApKSBvdmVybGF5LnN0eWxlLnJpZ2h0ID0gLSBvZmZYICsncHgnO1xuXHRcdFxuXHRpZiAoL15sZWZ0cGFuZWwkLy50ZXN0KHApKSB7IFxuXHRcdGhzLnNldFN0eWxlcyhvdmVybGF5LCB7XG5cdFx0XHRyaWdodDogJzEwMCUnLFxuXHRcdFx0bWFyZ2luUmlnaHQ6IHRoaXMueC5jYiArJ3B4Jyxcblx0XHRcdHRvcDogLSB0aGlzLnkuY2IgKydweCcsXG5cdFx0XHRib3R0b206IC0gdGhpcy55LmNiICsncHgnLFxuXHRcdFx0b3ZlcmZsb3c6ICdhdXRvJ1xuXHRcdH0pO1x0XHQgXG5cdFx0dGhpcy54LnAxID0gb3ZlcmxheS5vZmZzZXRXaWR0aDtcblx0XG5cdH0gZWxzZSBpZiAoL15yaWdodHBhbmVsJC8udGVzdChwKSkge1xuXHRcdGhzLnNldFN0eWxlcyhvdmVybGF5LCB7XG5cdFx0XHRsZWZ0OiAnMTAwJScsXG5cdFx0XHRtYXJnaW5MZWZ0OiB0aGlzLnguY2IgKydweCcsXG5cdFx0XHR0b3A6IC0gdGhpcy55LmNiICsncHgnLFxuXHRcdFx0Ym90dG9tOiAtIHRoaXMueS5jYiArJ3B4Jyxcblx0XHRcdG92ZXJmbG93OiAnYXV0bydcblx0XHR9KTtcblx0XHR0aGlzLngucDIgPSBvdmVybGF5Lm9mZnNldFdpZHRoO1xuXHR9XG5cdHZhciBwYXJPZmYgPSBvdmVybGF5LnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0O1xuXHRvdmVybGF5LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblx0aWYgKHJlbFRvVlAgJiYgb3ZlcmxheS5vZmZzZXRIZWlnaHQgPiBwYXJPZmYpXG5cdFx0b3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBocy5pZUx0NyA/IHBhck9mZiArJ3B4JyA6ICcxMDAlJztcblxuXHRpZiAoL150b3AvLnRlc3QocCkpIG92ZXJsYXkuc3R5bGUudG9wID0gb2ZmWSArJ3B4JzsgXG5cdGlmICgvXm1pZGRsZS8udGVzdChwKSlcdGhzLnNldFN0eWxlcyAob3ZlcmxheSwgeyBcblx0XHR0b3A6ICc1MCUnLCBcblx0XHRtYXJnaW5Ub3A6IChvZmZZIC0gTWF0aC5yb3VuZChvdmVybGF5Lm9mZnNldEhlaWdodCAvIDIpKSArJ3B4J1xuXHR9KTtcdFxuXHRpZiAoL15ib3R0b20vLnRlc3QocCkpIG92ZXJsYXkuc3R5bGUuYm90dG9tID0gLSBvZmZZICsncHgnO1xuXHRpZiAoL15hYm92ZSQvLnRlc3QocCkpIHtcblx0XHRocy5zZXRTdHlsZXMob3ZlcmxheSwge1xuXHRcdFx0bGVmdDogKC0gdGhpcy54LnAxIC0gdGhpcy54LmNiKSArJ3B4Jyxcblx0XHRcdHJpZ2h0OiAoLSB0aGlzLngucDIgLSB0aGlzLnguY2IpICsncHgnLFxuXHRcdFx0Ym90dG9tOiAnMTAwJScsXG5cdFx0XHRtYXJnaW5Cb3R0b206IHRoaXMueS5jYiArJ3B4Jyxcblx0XHRcdHdpZHRoOiAnYXV0bydcblx0XHR9KTtcblx0XHR0aGlzLnkucDEgPSBvdmVybGF5Lm9mZnNldEhlaWdodDtcblx0XG5cdH0gZWxzZSBpZiAoL15iZWxvdyQvLnRlc3QocCkpIHtcblx0XHRocy5zZXRTdHlsZXMob3ZlcmxheSwge1xuXHRcdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0XHRsZWZ0OiAoLSB0aGlzLngucDEgLSB0aGlzLnguY2IpICsncHgnLFxuXHRcdFx0cmlnaHQ6ICgtIHRoaXMueC5wMiAtIHRoaXMueC5jYikgKydweCcsXG5cdFx0XHR0b3A6ICcxMDAlJyxcblx0XHRcdG1hcmdpblRvcDogdGhpcy55LmNiICsncHgnLFxuXHRcdFx0d2lkdGg6ICdhdXRvJ1xuXHRcdH0pO1xuXHRcdHRoaXMueS5wMiA9IG92ZXJsYXkub2Zmc2V0SGVpZ2h0O1xuXHRcdG92ZXJsYXkuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHR9XG59LFxuXG5nZXRPdmVybGF5cyA6IGZ1bmN0aW9uKCkge1x0XG5cdHRoaXMuZ2V0SW5saW5lKFsnaGVhZGluZycsICdjYXB0aW9uJ10sIHRydWUpO1xuXHR0aGlzLmdldE51bWJlcigpO1xuXHRpZiAodGhpcy5jYXB0aW9uKSBocy5maXJlRXZlbnQodGhpcywgJ29uQWZ0ZXJHZXRDYXB0aW9uJyk7XG5cdGlmICh0aGlzLmhlYWRpbmcpIGhzLmZpcmVFdmVudCh0aGlzLCAnb25BZnRlckdldEhlYWRpbmcnKTtcblx0aWYgKHRoaXMuaGVhZGluZyAmJiB0aGlzLmRyYWdCeUhlYWRpbmcpIHRoaXMuaGVhZGluZy5jbGFzc05hbWUgKz0gJyBoaWdoc2xpZGUtbW92ZSc7XG5cdGlmIChocy5zaG93Q3JlZGl0cykgdGhpcy53cml0ZUNyZWRpdHMoKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBocy5vdmVybGF5cy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBvID0gaHMub3ZlcmxheXNbaV0sIHRJZCA9IG8udGh1bWJuYWlsSWQsIHNnID0gby5zbGlkZXNob3dHcm91cDtcblx0XHRpZiAoKCF0SWQgJiYgIXNnKSB8fCAodElkICYmIHRJZCA9PSB0aGlzLnRodW1ic1VzZXJTZXRJZClcblx0XHRcdFx0fHwgKHNnICYmIHNnID09PSB0aGlzLnNsaWRlc2hvd0dyb3VwKSkge1xuXHRcdFx0aWYgKHRoaXMuaXNJbWFnZSB8fCAodGhpcy5pc0h0bWwgJiYgby51c2VPbkh0bWwpKVxuXHRcdFx0dGhpcy5jcmVhdGVPdmVybGF5KG8pO1xuXHRcdH1cblx0fVxuXHR2YXIgb3MgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm92ZXJsYXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIG8gPSBocy4kKCdoc0lkJysgdGhpcy5vdmVybGF5c1tpXSk7XG5cdFx0aWYgKC9wYW5lbCQvLnRlc3Qoby5wb3NpdGlvbikpIHRoaXMucG9zaXRpb25PdmVybGF5KG8pO1xuXHRcdGVsc2UgaHMucHVzaChvcywgbyk7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvcy5sZW5ndGg7IGkrKykgdGhpcy5wb3NpdGlvbk92ZXJsYXkob3NbaV0pO1xuXHR0aGlzLmdvdE92ZXJsYXlzID0gdHJ1ZTtcbn0sXG5nZW5PdmVybGF5Qm94IDogZnVuY3Rpb24oKSB7XG5cdGlmICghdGhpcy5vdmVybGF5Qm94KSB0aGlzLm92ZXJsYXlCb3ggPSBocy5jcmVhdGVFbGVtZW50IChcblx0XHQnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lOiB0aGlzLndyYXBwZXJDbGFzc05hbWVcblx0XHR9LCB7XG5cdFx0XHRwb3NpdGlvbiA6ICdhYnNvbHV0ZScsXG5cdFx0XHR3aWR0aDogKHRoaXMueC5zaXplIHx8ICh0aGlzLnVzZUJveCA/IHRoaXMud2lkdGggOiBudWxsKSBcblx0XHRcdFx0fHwgdGhpcy54LmZ1bGwpICsncHgnLFxuXHRcdFx0aGVpZ2h0OiAodGhpcy55LnNpemUgfHwgdGhpcy55LmZ1bGwpICsncHgnLFxuXHRcdFx0dmlzaWJpbGl0eSA6ICdoaWRkZW4nLFxuXHRcdFx0b3ZlcmZsb3cgOiAnaGlkZGVuJyxcblx0XHRcdHpJbmRleCA6IGhzLmllID8gNCA6ICdhdXRvJ1xuXHRcdH0sXG5cdFx0aHMuY29udGFpbmVyLFxuXHRcdHRydWVcblx0KTtcbn0sXG5zaXplT3ZlcmxheUJveCA6IGZ1bmN0aW9uKGRvV3JhcHBlciwgZG9QYW5lbHMpIHtcblx0dmFyIG92ZXJsYXlCb3ggPSB0aGlzLm92ZXJsYXlCb3gsIFxuXHRcdHggPSB0aGlzLngsXG5cdFx0eSA9IHRoaXMueTtcblx0aHMuc2V0U3R5bGVzKCBvdmVybGF5Qm94LCB7XG5cdFx0d2lkdGg6IHguc2l6ZSArJ3B4JywgXG5cdFx0aGVpZ2h0OiB5LnNpemUgKydweCdcblx0fSk7XG5cdGlmIChkb1dyYXBwZXIgfHwgZG9QYW5lbHMpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3ZlcmxheXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBvID0gaHMuJCgnaHNJZCcrIHRoaXMub3ZlcmxheXNbaV0pO1xuXHRcdFx0dmFyIGllNiA9IChocy5pZUx0NyB8fCBkb2N1bWVudC5jb21wYXRNb2RlID09ICdCYWNrQ29tcGF0Jyk7XG5cdFx0XHRpZiAobyAmJiAvXihhYm92ZXxiZWxvdykkLy50ZXN0KG8ucG9zaXRpb24pKSB7XG5cdFx0XHRcdGlmIChpZTYpIHtcblx0XHRcdFx0XHRvLnN0eWxlLndpZHRoID0gKG92ZXJsYXlCb3gub2Zmc2V0V2lkdGggKyAyICogeC5jYlxuXHRcdFx0XHRcdFx0KyB4LnAxICsgeC5wMikgKydweCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0eVtvLnBvc2l0aW9uID09ICdhYm92ZScgPyAncDEnIDogJ3AyJ10gPSBvLm9mZnNldEhlaWdodDtcblx0XHRcdH1cblx0XHRcdGlmIChvICYmIGllNiAmJiAvXihsZWZ0fHJpZ2h0KXBhbmVsJC8udGVzdChvLnBvc2l0aW9uKSkge1xuXHRcdFx0XHRvLnN0eWxlLmhlaWdodCA9IChvdmVybGF5Qm94Lm9mZnNldEhlaWdodCArIDIqIHkuY2IpICsncHgnO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRpZiAoZG9XcmFwcGVyKSB7XG5cdFx0aHMuc2V0U3R5bGVzKHRoaXMuY29udGVudCwge1xuXHRcdFx0dG9wOiB5LnAxICsncHgnXG5cdFx0fSk7XG5cdFx0aHMuc2V0U3R5bGVzKG92ZXJsYXlCb3gsIHtcblx0XHRcdHRvcDogKHkucDEgKyB5LmNiKSArJ3B4J1xuXHRcdH0pO1xuXHR9XG59LFxuXG5zaG93T3ZlcmxheXMgOiBmdW5jdGlvbigpIHtcblx0dmFyIGIgPSB0aGlzLm92ZXJsYXlCb3g7XG5cdGIuY2xhc3NOYW1lID0gJyc7XG5cdGhzLnNldFN0eWxlcyhiLCB7XG5cdFx0dG9wOiAodGhpcy55LnAxICsgdGhpcy55LmNiKSArJ3B4Jyxcblx0XHRsZWZ0OiAodGhpcy54LnAxICsgdGhpcy54LmNiKSArJ3B4Jyxcblx0XHRvdmVyZmxvdyA6ICd2aXNpYmxlJ1xuXHR9KTtcblx0aWYgKGhzLnNhZmFyaSkgYi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXHR0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQgKGIpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3ZlcmxheXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgbyA9IGhzLiQoJ2hzSWQnKyB0aGlzLm92ZXJsYXlzW2ldKTtcblx0XHRvLnN0eWxlLnpJbmRleCA9IG8uekluZGV4IHx8IDQ7XG5cdFx0aWYgKCFvLmhpZGVPbk1vdXNlT3V0IHx8IHRoaXMubW91c2VJc092ZXIpIHtcblx0XHRcdG8uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblx0XHRcdGhzLnNldFN0eWxlcyhvLCB7IHZpc2liaWxpdHk6ICd2aXNpYmxlJywgZGlzcGxheTogJycgfSk7XG5cdFx0XHRocy5hbmltYXRlKG8sIHsgb3BhY2l0eTogby5vcGFjaXR5IH0sIG8uZHVyKTtcblx0XHR9XG5cdH1cbn0sXG5cbmRlc3Ryb3lPdmVybGF5cyA6IGZ1bmN0aW9uKCkge1xuXHRpZiAoIXRoaXMub3ZlcmxheXMubGVuZ3RoKSByZXR1cm47XG5cdGlmICh0aGlzLnNsaWRlc2hvdykge1xuXHRcdHZhciBjID0gdGhpcy5zbGlkZXNob3cuY29udHJvbHM7XG5cdFx0aWYgKGMgJiYgaHMuZ2V0RXhwYW5kZXIoYykgPT0gdGhpcykgYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vdmVybGF5cy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBvID0gaHMuJCgnaHNJZCcrIHRoaXMub3ZlcmxheXNbaV0pO1xuXHRcdGlmIChvICYmIG8ucGFyZW50Tm9kZSA9PSBocy52aWV3cG9ydCAmJiBocy5nZXRFeHBhbmRlcihvKSA9PSB0aGlzKSBocy5kaXNjYXJkRWxlbWVudChvKTtcblx0fVxuXHRpZiAodGhpcy5pc0h0bWwgJiYgdGhpcy5wcmVzZXJ2ZUNvbnRlbnQpIHtcblx0XHR0aGlzLm92ZXJsYXlCb3guc3R5bGUudG9wID0gJy05OTk5cHgnO1xuXHRcdGhzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXlCb3gpO1xuXHR9IGVsc2Vcblx0aHMuZGlzY2FyZEVsZW1lbnQodGhpcy5vdmVybGF5Qm94KTtcbn0sXG5cblxuXG5jcmVhdGVGdWxsRXhwYW5kIDogZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5zbGlkZXNob3cgJiYgdGhpcy5zbGlkZXNob3cuY29udHJvbHMpIHtcblx0XHR0aGlzLnNsaWRlc2hvdy5lbmFibGUoJ2Z1bGwtZXhwYW5kJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHRoaXMuZnVsbEV4cGFuZExhYmVsID0gaHMuY3JlYXRlRWxlbWVudChcblx0XHQnYScsIHtcblx0XHRcdGhyZWY6ICdqYXZhc2NyaXB0OmhzLmV4cGFuZGVyc1snKyB0aGlzLmtleSArJ10uZG9GdWxsRXhwYW5kKCk7Jyxcblx0XHRcdHRpdGxlOiBocy5sYW5nLmZ1bGxFeHBhbmRUaXRsZSxcblx0XHRcdGNsYXNzTmFtZTogJ2hpZ2hzbGlkZS1mdWxsLWV4cGFuZCdcblx0XHR9XG5cdCk7XG5cdGlmICghaHMuZmlyZUV2ZW50KHRoaXMsICdvbkNyZWF0ZUZ1bGxFeHBhbmQnKSkgcmV0dXJuO1xuXHRcblx0dGhpcy5jcmVhdGVPdmVybGF5KHsgXG5cdFx0b3ZlcmxheUlkOiB0aGlzLmZ1bGxFeHBhbmRMYWJlbCwgXG5cdFx0cG9zaXRpb246IGhzLmZ1bGxFeHBhbmRQb3NpdGlvbiwgXG5cdFx0aGlkZU9uTW91c2VPdXQ6IHRydWUsIFxuXHRcdG9wYWNpdHk6IGhzLmZ1bGxFeHBhbmRPcGFjaXR5XG5cdH0pO1xufSxcblxuZG9GdWxsRXhwYW5kIDogZnVuY3Rpb24gKCkge1xuXHR0cnkge1xuXHRcdGlmICghaHMuZmlyZUV2ZW50KHRoaXMsICdvbkRvRnVsbEV4cGFuZCcpKSByZXR1cm47XG5cdFx0aWYgKHRoaXMuZnVsbEV4cGFuZExhYmVsKSBocy5kaXNjYXJkRWxlbWVudCh0aGlzLmZ1bGxFeHBhbmRMYWJlbCk7XG5cdFx0XG5cdFx0dGhpcy5mb2N1cygpO1xuXHRcdHZhciB4U2l6ZSA9IHRoaXMueC5zaXplLFxuICAgICAgICBcdHlTaXplID0gdGhpcy55LnNpemU7XG4gICAgICAgIHRoaXMucmVzaXplVG8odGhpcy54LmZ1bGwsIHRoaXMueS5mdWxsKTtcbiAgICAgICBcbiAgICAgICAgdmFyIHhwb3MgPSB0aGlzLngucG9zIC0gKHRoaXMueC5zaXplIC0geFNpemUpIC8gMjtcbiAgICAgICAgaWYgKHhwb3MgPCBocy5tYXJnaW5MZWZ0KSB4cG9zID0gaHMubWFyZ2luTGVmdDtcbiAgICAgICBcbiAgICAgICAgdmFyIHlwb3MgPSB0aGlzLnkucG9zIC0gKHRoaXMueS5zaXplIC0geVNpemUpIC8gMjtcbiAgICAgICAgaWYgKHlwb3MgPCBocy5tYXJnaW5Ub3ApIHlwb3MgPSBocy5tYXJnaW5Ub3A7XG4gICAgICAgXG4gICAgICAgIHRoaXMubW92ZVRvKHhwb3MsIHlwb3MpO1xuXHRcdHRoaXMuZG9TaG93SGlkZSgnaGlkZGVuJyk7XG5cdFxuXHR9IGNhdGNoIChlKSB7XG5cdFx0dGhpcy5lcnJvcihlKTtcblx0fVxufSxcblxuXG5hZnRlckNsb3NlIDogZnVuY3Rpb24gKCkge1xuXHR0aGlzLmEuY2xhc3NOYW1lID0gdGhpcy5hLmNsYXNzTmFtZS5yZXBsYWNlKCdoaWdoc2xpZGUtYWN0aXZlLWFuY2hvcicsICcnKTtcblx0XG5cdHRoaXMuZG9TaG93SGlkZSgndmlzaWJsZScpO1x0XG5cdFxuXHRpZiAodGhpcy5pc0h0bWwgJiYgdGhpcy5wcmVzZXJ2ZUNvbnRlbnRcblx0XHRcdCAmJiB0aGlzLnRyYW5zaXRpb25zWzFdICE9ICdjcm9zc2ZhZGUnKSB7XG5cdFx0dGhpcy5zbGVlcCgpO1xuXHR9IGVsc2Uge1xuXHRcdGlmICh0aGlzLm91dGxpbmUgJiYgdGhpcy5vdXRsaW5lV2hpbGVBbmltYXRpbmcpIHRoaXMub3V0bGluZS5kZXN0cm95KCk7XG5cdFx0aWYgKHRoaXMuaWZyYW1lICYmIHRoaXMub2JqZWN0TG9hZFRpbWUgIT0gJ2FmdGVyJykgdGhpcy5kZXN0cm95T2JqZWN0KCk7XG5cdFx0aHMuZGlzY2FyZEVsZW1lbnQodGhpcy53cmFwcGVyKTtcblx0fVxuXHRpZiAoaHMubWFzaykgaHMubWFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR0aGlzLmRlc3Ryb3lPdmVybGF5cygpO1xuXHRpZiAoIWhzLnZpZXdwb3J0LmNoaWxkTm9kZXMubGVuZ3RoKSBocy52aWV3cG9ydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcblx0aWYgKHRoaXMuZGltbWluZ09wYWNpdHkpIGhzLnVuZGltKHRoaXMua2V5KTtcblx0aHMuZmlyZUV2ZW50KHRoaXMsICdvbkFmdGVyQ2xvc2UnKTtcblx0aHMuZXhwYW5kZXJzW3RoaXMua2V5XSA9IG51bGw7XHRcdFxuXHRocy5yZU9yZGVyKCk7XG59XG5cbn07XG5cblxuLy8gaHMuQWpheCBvYmplY3QgcHJvdG90eXBlXG5ocy5BamF4ID0gZnVuY3Rpb24gKGEsIGNvbnRlbnQsIHByZSkge1xuXHR0aGlzLmEgPSBhO1xuXHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHR0aGlzLnByZSA9IHByZTtcbn07XG5cbmhzLkFqYXgucHJvdG90eXBlID0ge1xucnVuIDogZnVuY3Rpb24gKCkge1xuXHR2YXIgeGhyO1xuXHRpZiAoIXRoaXMuc3JjKSB0aGlzLnNyYyA9IGhzLmdldFNyYyh0aGlzLmEpO1xuXHRpZiAodGhpcy5zcmMubWF0Y2goJyMnKSkge1xuXHRcdHZhciBhcnIgPSB0aGlzLnNyYy5zcGxpdCgnIycpO1xuXHRcdHRoaXMuc3JjID0gYXJyWzBdO1xuXHRcdHRoaXMuaWQgPSBhcnJbMV07XG5cdH1cblx0aWYgKGhzLmNhY2hlZEdldHNbdGhpcy5zcmNdKSB7XG5cdFx0dGhpcy5jYWNoZWRHZXQgPSBocy5jYWNoZWRHZXRzW3RoaXMuc3JjXTtcblx0XHRpZiAodGhpcy5pZCkgdGhpcy5nZXRFbGVtZW50Q29udGVudCgpO1xuXHRcdGVsc2UgdGhpcy5sb2FkSFRNTCgpO1xuXHRcdHJldHVybjtcblx0fVxuXHR0cnkgeyB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgfVxuXHRjYXRjaCAoZSkge1xuXHRcdHRyeSB7IHhociA9IG5ldyBBY3RpdmVYT2JqZWN0KFwiTXN4bWwyLlhNTEhUVFBcIik7IH1cblx0XHRjYXRjaCAoZSkge1xuXHRcdFx0dHJ5IHsgeGhyID0gbmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTsgfVxuXHRcdFx0Y2F0Y2ggKGUpIHsgdGhpcy5vbkVycm9yKCk7IH1cblx0XHR9XG5cdH1cblx0dmFyIHBUaGlzID0gdGhpczsgXG5cdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0XHRpZihwVGhpcy54aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG5cdFx0XHRpZiAocFRoaXMuaWQpIHBUaGlzLmdldEVsZW1lbnRDb250ZW50KCk7XG5cdFx0XHRlbHNlIHBUaGlzLmxvYWRIVE1MKCk7XG5cdFx0fVxuXHR9O1xuXHR2YXIgc3JjID0gdGhpcy5zcmM7XG5cdHRoaXMueGhyID0geGhyO1xuXHRpZiAoaHMuZm9yY2VBamF4UmVsb2FkKSBcblx0XHRzcmMgPSBzcmMucmVwbGFjZSgvJC8sICgvXFw/Ly50ZXN0KHNyYykgPyAnJicgOiAnPycpICsnZHVtbXk9JysgKG5ldyBEYXRlKCkpLmdldFRpbWUoKSk7XG5cdHhoci5vcGVuKCdHRVQnLCBzcmMsIHRydWUpO1xuXHR4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuXHR4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXHR4aHIuc2VuZChudWxsKTtcbn0sXG5cbmdldEVsZW1lbnRDb250ZW50IDogZnVuY3Rpb24oKSB7XG5cdGhzLmluaXQoKTtcblx0dmFyIGF0dHJpYnMgPSB3aW5kb3cub3BlcmEgfHwgaHMuaWU2U1NMID8geyBzcmM6ICdhYm91dDpibGFuaycgfSA6IG51bGw7XG5cdFxuXHR0aGlzLmlmcmFtZSA9IGhzLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsIGF0dHJpYnMsIFxuXHRcdHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJy05OTk5cHgnIH0sIGhzLmNvbnRhaW5lcik7XG5cdFx0XG5cdHRoaXMubG9hZEhUTUwoKTtcbn0sXG5cbmxvYWRIVE1MIDogZnVuY3Rpb24oKSB7XG5cdHZhciBzID0gdGhpcy5jYWNoZWRHZXQgfHwgdGhpcy54aHIucmVzcG9uc2VUZXh0LFxuXHRcdHJlZ0JvZHk7XG5cdGlmICh0aGlzLnByZSkgaHMuY2FjaGVkR2V0c1t0aGlzLnNyY10gPSBzO1xuXHRpZiAoIWhzLmllIHx8IGhzLnVhVmVyc2lvbiA+PSA1LjUpIHtcblx0XHRzID0gcy5yZXBsYWNlKG5ldyBSZWdFeHAoJzxsaW5rW14+XSo+JywgJ2dpJyksICcnKVxuXHRcdFx0LnJlcGxhY2UobmV3IFJlZ0V4cCgnPHNjcmlwdFtePl0qPi4qPzwvc2NyaXB0PicsICdnaScpLCAnJyk7XG5cdFx0aWYgKHRoaXMuaWZyYW1lKSB7XG5cdFx0XHR2YXIgZG9jID0gdGhpcy5pZnJhbWUuY29udGVudERvY3VtZW50O1xuXHRcdFx0aWYgKCFkb2MgJiYgdGhpcy5pZnJhbWUuY29udGVudFdpbmRvdykgZG9jID0gdGhpcy5pZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcblx0XHRcdGlmICghZG9jKSB7IC8vIE9wZXJhXG5cdFx0XHRcdHZhciBwVGhpcyA9IHRoaXM7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHRwVGhpcy5sb2FkSFRNTCgpOyB9LCAyNSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGRvYy5vcGVuKCk7XG5cdFx0XHRkb2Mud3JpdGUocyk7XG5cdFx0XHRkb2MuY2xvc2UoKTtcblx0XHRcdHRyeSB7IHMgPSBkb2MuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuaW5uZXJIVE1MOyB9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHRyeSB7IHMgPSB0aGlzLmlmcmFtZS5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5pbm5lckhUTUw7IH0gY2F0Y2ggKGUpIHt9IC8vIG9wZXJhXG5cdFx0XHR9XG5cdFx0XHRocy5kaXNjYXJkRWxlbWVudCh0aGlzLmlmcmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlZ0JvZHkgPSAvKDxib2R5W14+XSo+fDxcXC9ib2R5PikvaWc7XG5cdFx0XHRpZiAocmVnQm9keS50ZXN0KHMpKSBzID0gcy5zcGxpdChyZWdCb2R5KVtocy5pZUx0OSA/IDEgOiAyXTtcblx0XHRcdFxuXHRcdH1cblx0fVxuXHRocy5nZXRFbGVtZW50QnlDbGFzcyh0aGlzLmNvbnRlbnQsICdESVYnLCAnaGlnaHNsaWRlLWJvZHknKS5pbm5lckhUTUwgPSBzO1xuXHR0aGlzLm9uTG9hZCgpO1xuXHRmb3IgKHZhciB4IGluIHRoaXMpIHRoaXNbeF0gPSBudWxsO1xufVxufTtcblxuXG5ocy5TbGlkZXNob3cgPSBmdW5jdGlvbiAoZXhwS2V5LCBvcHRpb25zKSB7XG5cdGlmIChocy5keW5hbWljYWxseVVwZGF0ZUFuY2hvcnMgIT09IGZhbHNlKSBocy51cGRhdGVBbmNob3JzKCk7XG5cdHRoaXMuZXhwS2V5ID0gZXhwS2V5O1xuXHRmb3IgKHZhciB4IGluIG9wdGlvbnMpIHRoaXNbeF0gPSBvcHRpb25zW3hdO1xuXHRpZiAodGhpcy51c2VDb250cm9scykgdGhpcy5nZXRDb250cm9scygpO1xuXHRpZiAodGhpcy50aHVtYnN0cmlwKSB0aGlzLnRodW1ic3RyaXAgPSBocy5UaHVtYnN0cmlwKHRoaXMpO1xufTtcbmhzLlNsaWRlc2hvdy5wcm90b3R5cGUgPSB7XG5nZXRDb250cm9sczogZnVuY3Rpb24oKSB7XG5cdHRoaXMuY29udHJvbHMgPSBocy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGlubmVySFRNTDogaHMucmVwbGFjZUxhbmcoaHMuc2tpbi5jb250cm9scykgfSwgXG5cdFx0bnVsbCwgaHMuY29udGFpbmVyKTtcblx0XG5cdHZhciBidXR0b25zID0gWydwbGF5JywgJ3BhdXNlJywgJ3ByZXZpb3VzJywgJ25leHQnLCAnbW92ZScsICdmdWxsLWV4cGFuZCcsICdjbG9zZSddO1xuXHR0aGlzLmJ0biA9IHt9O1xuXHR2YXIgcFRoaXMgPSB0aGlzO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcblx0XHR0aGlzLmJ0bltidXR0b25zW2ldXSA9IGhzLmdldEVsZW1lbnRCeUNsYXNzKHRoaXMuY29udHJvbHMsICdsaScsICdoaWdoc2xpZGUtJysgYnV0dG9uc1tpXSk7XG5cdFx0dGhpcy5lbmFibGUoYnV0dG9uc1tpXSk7XG5cdH1cblx0dGhpcy5idG4ucGF1c2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0Ly90aGlzLmRpc2FibGUoJ2Z1bGwtZXhwYW5kJyk7XG59LFxuY2hlY2tGaXJzdEFuZExhc3Q6IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5yZXBlYXQgfHwgIXRoaXMuY29udHJvbHMpIHJldHVybjtcblx0dmFyIGV4cCA9IGhzLmV4cGFuZGVyc1t0aGlzLmV4cEtleV0sXG5cdFx0Y3VyID0gZXhwLmdldEFuY2hvckluZGV4KCksIFxuXHRcdHJlID0gL2Rpc2FibGVkJC87XG5cdGlmIChjdXIgPT0gMCkgXG5cdFx0dGhpcy5kaXNhYmxlKCdwcmV2aW91cycpO1xuXHRlbHNlIGlmIChyZS50ZXN0KHRoaXMuYnRuLnByZXZpb3VzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF0uY2xhc3NOYW1lKSlcblx0XHR0aGlzLmVuYWJsZSgncHJldmlvdXMnKTtcblx0aWYgKGN1ciArIDEgPT0gaHMuYW5jaG9ycy5ncm91cHNbZXhwLnNsaWRlc2hvd0dyb3VwIHx8ICdub25lJ10ubGVuZ3RoKSB7XG5cdFx0dGhpcy5kaXNhYmxlKCduZXh0Jyk7XG5cdFx0dGhpcy5kaXNhYmxlKCdwbGF5Jyk7XG5cdH0gZWxzZSBpZiAocmUudGVzdCh0aGlzLmJ0bi5uZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF0uY2xhc3NOYW1lKSkge1xuXHRcdHRoaXMuZW5hYmxlKCduZXh0Jyk7XG5cdFx0dGhpcy5lbmFibGUoJ3BsYXknKTtcblx0fVxufSxcbmVuYWJsZTogZnVuY3Rpb24oYnRuKSB7XG5cdGlmICghdGhpcy5idG4pIHJldHVybjtcblx0dmFyIHNscyA9IHRoaXMsIGEgPSB0aGlzLmJ0bltidG5dLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF0sIHJlID0gL2Rpc2FibGVkJC87XG5cdGEub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdHNsc1tidG5dKCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRpZiAocmUudGVzdChhLmNsYXNzTmFtZSkpIGEuY2xhc3NOYW1lID0gYS5jbGFzc05hbWUucmVwbGFjZShyZSwgJycpO1xufSxcbmRpc2FibGU6IGZ1bmN0aW9uKGJ0bikge1xuXHRpZiAoIXRoaXMuYnRuKSByZXR1cm47XG5cdHZhciBhID0gdGhpcy5idG5bYnRuXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpWzBdO1xuXHRhLm9uY2xpY2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xuXHRpZiAoIS9kaXNhYmxlZCQvLnRlc3QoYS5jbGFzc05hbWUpKSBhLmNsYXNzTmFtZSArPSAnIGRpc2FibGVkJztcbn0sXG5oaXRTcGFjZTogZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmF1dG9wbGF5KSB0aGlzLnBhdXNlKCk7XG5cdGVsc2UgdGhpcy5wbGF5KCk7XG59LFxucGxheTogZnVuY3Rpb24od2FpdCkge1xuXHRpZiAodGhpcy5idG4pIHtcblx0XHR0aGlzLmJ0bi5wbGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0dGhpcy5idG4ucGF1c2Uuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHR9XG5cdFxuXHR0aGlzLmF1dG9wbGF5ID0gdHJ1ZTtcdFxuXHRpZiAoIXdhaXQpIGhzLm5leHQodGhpcy5leHBLZXkpO1xufSxcbnBhdXNlOiBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuYnRuKSB7XG5cdFx0dGhpcy5idG4ucGF1c2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR0aGlzLmJ0bi5wbGF5LnN0eWxlLmRpc3BsYXkgPSAnJztcblx0fVxuXHRcblx0Y2xlYXJUaW1lb3V0KHRoaXMuYXV0b3BsYXkpO1xuXHR0aGlzLmF1dG9wbGF5ID0gbnVsbDtcbn0sXG5wcmV2aW91czogZnVuY3Rpb24oKSB7XG5cdHRoaXMucGF1c2UoKTtcblx0aHMucHJldmlvdXModGhpcy5idG4ucHJldmlvdXMpO1xufSxcbm5leHQ6IGZ1bmN0aW9uKCkge1xuXHR0aGlzLnBhdXNlKCk7XG5cdGhzLm5leHQodGhpcy5idG4ubmV4dCk7XG59LFxubW92ZTogZnVuY3Rpb24oKSB7fSxcbidmdWxsLWV4cGFuZCc6IGZ1bmN0aW9uKCkge1xuXHRocy5nZXRFeHBhbmRlcigpLmRvRnVsbEV4cGFuZCgpO1xufSxcbmNsb3NlOiBmdW5jdGlvbigpIHtcblx0aHMuY2xvc2UodGhpcy5idG4uY2xvc2UpO1xufVxufTtcbmhzLlRodW1ic3RyaXAgPSBmdW5jdGlvbihzbGlkZXNob3cpIHtcblx0ZnVuY3Rpb24gYWRkIChleHApIHtcblx0XHRocy5leHRlbmQob3B0aW9ucyB8fCB7fSwge1xuXHRcdFx0b3ZlcmxheUlkOiBkb20sXG5cdFx0XHRoc0lkOiAndGh1bWJzdHJpcCcsXG5cdFx0XHRjbGFzc05hbWU6ICdoaWdoc2xpZGUtdGh1bWJzdHJpcC0nKyBtb2RlICsnLW92ZXJsYXkgJyArIChvcHRpb25zLmNsYXNzTmFtZSB8fCAnJylcblx0XHR9KTtcblx0XHRpZiAoaHMuaWVMdDcpIG9wdGlvbnMuZmFkZSA9IDA7XG5cdFx0ZXhwLmNyZWF0ZU92ZXJsYXkob3B0aW9ucyk7XG5cdFx0aHMuc2V0U3R5bGVzKGRvbS5wYXJlbnROb2RlLCB7IG92ZXJmbG93OiAnaGlkZGVuJyB9KTtcblx0fTtcblx0XG5cdGZ1bmN0aW9uIHNjcm9sbCAoZGVsdGEpIHtcdFxuXHRcdHNlbGVjdFRodW1iKHVuZGVmaW5lZCwgTWF0aC5yb3VuZChkZWx0YSAqIGRvbVtpc1ggPyAnb2Zmc2V0V2lkdGgnIDogJ29mZnNldEhlaWdodCddICogMC43KSk7XG5cdH07XG5cdFxuXHRmdW5jdGlvbiBzZWxlY3RUaHVtYiAoaSwgc2Nyb2xsQnkpIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSBmb3IgKHZhciBqID0gMDsgaiA8IGdyb3VwLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoZ3JvdXBbal0gPT0gaHMuZXhwYW5kZXJzW3NsaWRlc2hvdy5leHBLZXldLmEpIHtcblx0XHRcdFx0aSA9IGo7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cdFx0dmFyIGFzID0gZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJyksXG5cdFx0XHRhY3RpdmUgPSBhc1tpXSxcblx0XHRcdGNlbGwgPSBhY3RpdmUucGFyZW50Tm9kZSxcblx0XHRcdGxlZnQgPSBpc1ggPyAnTGVmdCcgOiAnVG9wJyxcblx0XHRcdHJpZ2h0ID0gaXNYID8gJ1JpZ2h0JyA6ICdCb3R0b20nLFxuXHRcdFx0d2lkdGggPSBpc1ggPyAnV2lkdGgnIDogJ0hlaWdodCcsXG5cdFx0XHRvZmZzZXRMZWZ0ID0gJ29mZnNldCcgKyBsZWZ0LFxuXHRcdFx0b2Zmc2V0V2lkdGggPSAnb2Zmc2V0JyArIHdpZHRoLFxuXHRcdFx0b3ZlcmxheVdpZHRoID0gZGl2LnBhcmVudE5vZGUucGFyZW50Tm9kZVtvZmZzZXRXaWR0aF0sXG5cdFx0XHRtaW5UYmxQb3MgPSBvdmVybGF5V2lkdGggLSB0YWJsZVtvZmZzZXRXaWR0aF0sXG5cdFx0XHRjdXJUYmxQb3MgPSBwYXJzZUludCh0YWJsZS5zdHlsZVtpc1ggPyAnbGVmdCcgOiAndG9wJ10pIHx8IDAsXG5cdFx0XHR0YmxQb3MgPSBjdXJUYmxQb3MsXG5cdFx0XHRtZ25SaWdodCA9IDIwO1xuXHRcdGlmIChzY3JvbGxCeSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0YmxQb3MgPSBjdXJUYmxQb3MgLSBzY3JvbGxCeTtcblx0XHRcdFxuXHRcdFx0aWYgKG1pblRibFBvcyA+IDApIG1pblRibFBvcyA9IDA7XG5cdFx0XHRpZiAodGJsUG9zID4gMCkgdGJsUG9zID0gMDtcblx0XHRcdGlmICh0YmxQb3MgPCBtaW5UYmxQb3MpIHRibFBvcyA9IG1pblRibFBvcztcblx0XHRcdFxuXHRcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBhcy5sZW5ndGg7IGorKykgYXNbal0uY2xhc3NOYW1lID0gJyc7XG5cdFx0XHRhY3RpdmUuY2xhc3NOYW1lID0gJ2hpZ2hzbGlkZS1hY3RpdmUtYW5jaG9yJztcblx0XHRcdHZhciBhY3RpdmVMZWZ0ID0gaSA+IDAgPyBhc1tpIC0gMV0ucGFyZW50Tm9kZVtvZmZzZXRMZWZ0XSA6IGNlbGxbb2Zmc2V0TGVmdF0sXG5cdFx0XHRcdGFjdGl2ZVJpZ2h0ID0gY2VsbFtvZmZzZXRMZWZ0XSArIGNlbGxbb2Zmc2V0V2lkdGhdICsgXG5cdFx0XHRcdFx0KGFzW2kgKyAxXSA/IGFzW2kgKyAxXS5wYXJlbnROb2RlW29mZnNldFdpZHRoXSA6IDApO1xuXHRcdFx0aWYgKGFjdGl2ZVJpZ2h0ID4gb3ZlcmxheVdpZHRoIC0gY3VyVGJsUG9zKSB0YmxQb3MgPSBvdmVybGF5V2lkdGggLSBhY3RpdmVSaWdodDtcblx0XHRcdGVsc2UgaWYgKGFjdGl2ZUxlZnQgPCAtY3VyVGJsUG9zKSB0YmxQb3MgPSAtYWN0aXZlTGVmdDtcblx0XHR9XG5cdFx0dmFyIG1hcmtlclBvcyA9IGNlbGxbb2Zmc2V0TGVmdF0gKyAoY2VsbFtvZmZzZXRXaWR0aF0gLSBtYXJrZXJbb2Zmc2V0V2lkdGhdKSAvIDIgKyB0YmxQb3M7XG5cdFx0aHMuYW5pbWF0ZSh0YWJsZSwgaXNYID8geyBsZWZ0OiB0YmxQb3MgfSA6IHsgdG9wOiB0YmxQb3MgfSwgbnVsbCwgJ2Vhc2VPdXRRdWFkJyk7XG5cdFx0aHMuYW5pbWF0ZShtYXJrZXIsIGlzWCA/IHsgbGVmdDogbWFya2VyUG9zIH0gOiB7IHRvcDogbWFya2VyUG9zIH0sIG51bGwsICdlYXNlT3V0UXVhZCcpO1xuXHRcdHNjcm9sbFVwLnN0eWxlLmRpc3BsYXkgPSB0YmxQb3MgPCAwID8gJ2Jsb2NrJyA6ICdub25lJztcblx0XHRzY3JvbGxEb3duLnN0eWxlLmRpc3BsYXkgPSAodGJsUG9zID4gbWluVGJsUG9zKSAgPyAnYmxvY2snIDogJ25vbmUnO1xuXHRcdFxuXHR9O1xuXHRcblxuXHQvLyBpbml0aWFsaXplXG5cdHZhciBncm91cCA9IGhzLmFuY2hvcnMuZ3JvdXBzW2hzLmV4cGFuZGVyc1tzbGlkZXNob3cuZXhwS2V5XS5zbGlkZXNob3dHcm91cCB8fCAnbm9uZSddLFxuXHRcdG9wdGlvbnMgPSBzbGlkZXNob3cudGh1bWJzdHJpcCxcblx0XHRtb2RlID0gb3B0aW9ucy5tb2RlIHx8ICdob3Jpem9udGFsJyxcblx0XHRmbG9hdE1vZGUgPSAobW9kZSA9PSAnZmxvYXQnKSxcblx0XHR0cmVlID0gZmxvYXRNb2RlID8gWydkaXYnLCAndWwnLCAnbGknLCAnc3BhbiddIDogWyd0YWJsZScsICd0Ym9keScsICd0cicsICd0ZCddLFxuXHRcdGlzWCA9IChtb2RlID09ICdob3Jpem9udGFsJyksXG5cdFx0ZG9tID0gaHMuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuXHRcdFx0XHRjbGFzc05hbWU6ICdoaWdoc2xpZGUtdGh1bWJzdHJpcCBoaWdoc2xpZGUtdGh1bWJzdHJpcC0nKyBtb2RlLFxuXHRcdFx0XHRpbm5lckhUTUw6XG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJoaWdoc2xpZGUtdGh1bWJzdHJpcC1pbm5lclwiPicrXG5cdFx0XHRcdFx0JzwnKyB0cmVlWzBdICsnPjwnKyB0cmVlWzFdICsnPjwvJysgdHJlZVsxXSArJz48LycrIHRyZWVbMF0gKyc+PC9kaXY+Jytcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImhpZ2hzbGlkZS1zY3JvbGwtdXBcIj48ZGl2PjwvZGl2PjwvZGl2PicrXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJoaWdoc2xpZGUtc2Nyb2xsLWRvd25cIj48ZGl2PjwvZGl2PjwvZGl2PicrXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJoaWdoc2xpZGUtbWFya2VyXCI+PGRpdj48L2Rpdj48L2Rpdj4nXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGRpc3BsYXk6ICdub25lJ1xuXHRcdFx0fSwgaHMuY29udGFpbmVyKSxcblx0XHRkb21DaCA9IGRvbS5jaGlsZE5vZGVzLFxuXHRcdGRpdiA9IGRvbUNoWzBdLFxuXHRcdHNjcm9sbFVwID0gZG9tQ2hbMV0sXG5cdFx0c2Nyb2xsRG93biA9IGRvbUNoWzJdLFxuXHRcdG1hcmtlciA9IGRvbUNoWzNdLFxuXHRcdHRhYmxlID0gZGl2LmZpcnN0Q2hpbGQsXG5cdFx0dGJvZHkgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUodHJlZVsxXSlbMF0sXG5cdFx0dHI7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoaSA9PSAwIHx8ICFpc1gpIHRyID0gaHMuY3JlYXRlRWxlbWVudCh0cmVlWzJdLCBudWxsLCBudWxsLCB0Ym9keSk7XG5cdFx0KGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgYSA9IGdyb3VwW2ldLFxuXHRcdFx0XHRjZWxsID0gaHMuY3JlYXRlRWxlbWVudCh0cmVlWzNdLCBudWxsLCBudWxsLCB0ciksXG5cdFx0XHRcdHBJID0gaTtcblx0XHRcdGhzLmNyZWF0ZUVsZW1lbnQoJ2EnLCB7XG5cdFx0XHRcdGhyZWY6IGEuaHJlZixcblx0XHRcdFx0dGl0bGU6IGEudGl0bGUsXG5cdFx0XHRcdG9uY2xpY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICgvaGlnaHNsaWRlLWFjdGl2ZS1hbmNob3IvLnRlc3QodGhpcy5jbGFzc05hbWUpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0aHMuZ2V0RXhwYW5kZXIodGhpcykuZm9jdXMoKTtcblx0XHRcdFx0XHRyZXR1cm4gaHMudHJhbnNpdChhKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0aW5uZXJIVE1MOiBocy5zdHJpcEl0ZW1Gb3JtYXR0ZXIgPyBocy5zdHJpcEl0ZW1Gb3JtYXR0ZXIoYSkgOiBhLmlubmVySFRNTFxuXHRcdFx0fSwgbnVsbCwgY2VsbCk7XG5cdFx0fSkoKTtcblx0fVxuXHRpZiAoIWZsb2F0TW9kZSkge1xuXHRcdHNjcm9sbFVwLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNjcm9sbCgtMSk7IH07XG5cdFx0c2Nyb2xsRG93bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7IHNjcm9sbCgxKTsgfTtcblx0XHRocy5hZGRFdmVudExpc3RlbmVyKHRib2R5LCBkb2N1bWVudC5vbm1vdXNld2hlZWwgIT09IHVuZGVmaW5lZCA/IFxuXHRcdFx0XHQnbW91c2V3aGVlbCcgOiAnRE9NTW91c2VTY3JvbGwnLCBmdW5jdGlvbihlKSB7ICAgICAgICBcblx0XHRcdHZhciBkZWx0YSA9IDA7XG5cdCAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXHQgICAgICAgIGlmIChlLndoZWVsRGVsdGEpIHtcblx0XHRcdFx0ZGVsdGEgPSBlLndoZWVsRGVsdGEvMTIwO1xuXHRcdFx0XHRpZiAoaHMub3BlcmEpIGRlbHRhID0gLWRlbHRhO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwpIHtcblx0XHRcdFx0ZGVsdGEgPSAtZS5kZXRhaWwvMztcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKGRlbHRhKSBzY3JvbGwoLWRlbHRhICogMC4yKTtcblx0XHRcdGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cdFx0fSwge3Bhc3NpdmU6IHRydWV9KTtcblx0fVxuXHRcblx0cmV0dXJuIHtcblx0XHRhZGQ6IGFkZCxcblx0XHRzZWxlY3RUaHVtYjogc2VsZWN0VGh1bWJcblx0fVxufTtcbmhzLmxhbmdEZWZhdWx0cyA9IGhzLmxhbmc7XG4vLyBoaXN0b3J5XG52YXIgSHNFeHBhbmRlciA9IGhzLkV4cGFuZGVyO1xuaWYgKGhzLmllICYmIHdpbmRvdyA9PSB3aW5kb3cudG9wKSB7XG5cdChmdW5jdGlvbiAoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCgnbGVmdCcpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHNldFRpbWVvdXQoYXJndW1lbnRzLmNhbGxlZSwgNTApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRocy5yZWFkeSgpO1xuXHR9KSgpO1xufVxuaHMuYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBocy5yZWFkeSk7XG5ocy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBocy5yZWFkeSk7XG5cbi8vIHNldCBoYW5kbGVyc1xuaHMuYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ3JlYWR5JywgZnVuY3Rpb24oKSB7XG5cdGlmIChocy5leHBhbmRDdXJzb3IgfHwgaHMuZGltbWluZ09wYWNpdHkpIHtcblx0XHR2YXIgc3R5bGUgPSBocy5jcmVhdGVFbGVtZW50KCdzdHlsZScsIHsgdHlwZTogJ3RleHQvY3NzJyB9LCBudWxsLCBcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdIRUFEJylbMF0pLCBcblx0XHRcdGJhY2tDb21wYXQgPSBkb2N1bWVudC5jb21wYXRNb2RlID09ICdCYWNrQ29tcGF0Jztcblx0XHRcdFxuXHRcdFxuXHRcdGZ1bmN0aW9uIGFkZFJ1bGUoc2VsLCBkZWMpIHtcblx0XHRcdGlmIChocy5pZSAmJiAoaHMudWFWZXJzaW9uIDwgOSB8fCBiYWNrQ29tcGF0KSkge1xuXHRcdFx0XHR2YXIgbGFzdCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2RvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aCAtIDFdO1xuXHRcdFx0XHRpZiAodHlwZW9mKGxhc3QuYWRkUnVsZSkgPT0gXCJvYmplY3RcIikgbGFzdC5hZGRSdWxlKHNlbCwgZGVjKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHNlbCArIFwiIHtcIiArIGRlYyArIFwifVwiKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIGZpeChwcm9wKSB7XG5cdFx0XHRyZXR1cm4gJ2V4cHJlc3Npb24oICggKCBpZ25vcmVNZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC4nKyBwcm9wICtcblx0XHRcdFx0JyA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC4nKyBwcm9wICsnIDogZG9jdW1lbnQuYm9keS4nKyBwcm9wICsnICkgKSArIFxcJ3B4XFwnICk7Jztcblx0XHR9XG5cdFx0aWYgKGhzLmV4cGFuZEN1cnNvcikgYWRkUnVsZSAoJy5oaWdoc2xpZGUgaW1nJywgXG5cdFx0XHQnY3Vyc29yOiB1cmwoJysgaHMuZ3JhcGhpY3NEaXIgKyBocy5leHBhbmRDdXJzb3IgKycpLCBwb2ludGVyICFpbXBvcnRhbnQ7Jyk7XG5cdFx0YWRkUnVsZSAoJy5oaWdoc2xpZGUtdmlld3BvcnQtc2l6ZScsXG5cdFx0XHRocy5pZSAmJiAoaHMudWFWZXJzaW9uIDwgNyB8fCBiYWNrQ29tcGF0KSA/XG5cdFx0XHRcdCdwb3NpdGlvbjogYWJzb2x1dGU7ICcrXG5cdFx0XHRcdCdsZWZ0OicrIGZpeCgnc2Nyb2xsTGVmdCcpICtcblx0XHRcdFx0J3RvcDonKyBmaXgoJ3Njcm9sbFRvcCcpICtcblx0XHRcdFx0J3dpZHRoOicrIGZpeCgnY2xpZW50V2lkdGgnKSArXG5cdFx0XHRcdCdoZWlnaHQ6JysgZml4KCdjbGllbnRIZWlnaHQnKSA6XG5cdFx0XHRcdCdwb3NpdGlvbjogZml4ZWQ7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGxlZnQ6IDA7IHRvcDogMCcpO1xuXHR9XG59KTtcbmhzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgZnVuY3Rpb24oKSB7XG5cdGhzLmdldFBhZ2VTaXplKCk7XG5cdGlmIChocy52aWV3cG9ydCkgZm9yICh2YXIgaSA9IDA7IGkgPCBocy52aWV3cG9ydC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIG5vZGUgPSBocy52aWV3cG9ydC5jaGlsZE5vZGVzW2ldLFxuXHRcdFx0ZXhwID0gaHMuZ2V0RXhwYW5kZXIobm9kZSk7XG5cdFx0ZXhwLnBvc2l0aW9uT3ZlcmxheShub2RlKTtcblx0XHRpZiAobm9kZS5oc0lkID09ICd0aHVtYnN0cmlwJykgZXhwLnNsaWRlc2hvdy50aHVtYnN0cmlwLnNlbGVjdFRodW1iKCk7XG5cdH1cbn0pO1xuaHMuYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpIHtcblx0aHMubW91c2UgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZXHR9O1xufSk7XG5ocy5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnbW91c2Vkb3duJywgaHMubW91c2VDbGlja0hhbmRsZXIpO1xuaHMuYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNldXAnLCBocy5tb3VzZUNsaWNrSGFuZGxlcik7XG5ocy5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAncmVhZHknLCBocy5zZXRDbGlja0V2ZW50cyk7XG5ocy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBocy5wcmVsb2FkSW1hZ2VzKTtcbmhzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGhzLnByZWxvYWRBamF4KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHM7Il0sInNvdXJjZVJvb3QiOiIifQ==