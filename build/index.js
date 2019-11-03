(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./frontend/assets/blocks/banner-widget/banner-widget.js":
/*!***************************************************************!*\
  !*** ./frontend/assets/blocks/banner-widget/banner-widget.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _scripts_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~scripts/common/app */ "./frontend/assets/scripts/common/app.js");
/* harmony import */ var _banner_widget_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner-widget.scss */ "./frontend/assets/blocks/banner-widget/banner-widget.scss");
/* harmony import */ var _banner_widget_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_banner_widget_scss__WEBPACK_IMPORTED_MODULE_1__);


var $bannerWidget = $('.js-banner-widget');

if ($bannerWidget.length > 0) {
  (function (_root) {
    var self = {
      carousel: _root.find('.owl-carousel')
    };
    self.carousel.owlCarousel({
      rtl: _scripts_common_app__WEBPACK_IMPORTED_MODULE_0__["default"].isRtl,
      // center: true,
      nav: false,
      dots: false,
      loop: true,
      // autoWidth: true,
      margin: 25,
      items: 3,
      responsive: {
        0: {
          dots: true,
          items: 1
        },
        980: {
          dots: false,
          margin: 25,
          items: 3
        }
      }
    });
  })($bannerWidget);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./frontend/assets/blocks/banner-widget/banner-widget.scss":
/*!*****************************************************************!*\
  !*** ./frontend/assets/blocks/banner-widget/banner-widget.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/assets/blocks/gallery-widget-carousel/gallery-widget-carousel.js":
/*!***********************************************************************************!*\
  !*** ./frontend/assets/blocks/gallery-widget-carousel/gallery-widget-carousel.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _scripts_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~scripts/common/app */ "./frontend/assets/scripts/common/app.js");
/* harmony import */ var _gallery_widget_carousel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-widget-carousel.scss */ "./frontend/assets/blocks/gallery-widget-carousel/gallery-widget-carousel.scss");
/* harmony import */ var _gallery_widget_carousel_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gallery_widget_carousel_scss__WEBPACK_IMPORTED_MODULE_1__);
// import $ from 'jquery';


var $galleryWidgetCarousel = $('.js-gallery-widget-carousel');

if ($galleryWidgetCarousel.length > 0) {
  (function (_root) {
    var self = {
      root: _root,
      carousel: _root.find('.owl-carousel'),
      nextBtn: _root.find('.js-nav-next'),
      prevBtn: _root.find('.js-nav-prev')
    };
    self.carousel.owlCarousel({
      rtl: _scripts_common_app__WEBPACK_IMPORTED_MODULE_0__["default"].isRtl,
      center: true,
      nav: false,
      dots: false,
      loop: true,
      autoWidth: true,
      margin: 2
    });
    self.nextBtn.click(function () {
      self.carousel.trigger('next.owl.carousel');
    });
    self.prevBtn.click(function () {
      self.carousel.trigger('prev.owl.carousel');
    });
  })($galleryWidgetCarousel);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./frontend/assets/blocks/gallery-widget-carousel/gallery-widget-carousel.scss":
/*!*************************************************************************************!*\
  !*** ./frontend/assets/blocks/gallery-widget-carousel/gallery-widget-carousel.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/assets/blocks/gallery-widget-grid/gallery-widget-grid.js":
/*!***************************************************************************!*\
  !*** ./frontend/assets/blocks/gallery-widget-grid/gallery-widget-grid.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gallery_widget_grid_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-widget-grid.scss */ "./frontend/assets/blocks/gallery-widget-grid/gallery-widget-grid.scss");
/* harmony import */ var _gallery_widget_grid_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gallery_widget_grid_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./frontend/assets/blocks/gallery-widget-grid/gallery-widget-grid.scss":
/*!*****************************************************************************!*\
  !*** ./frontend/assets/blocks/gallery-widget-grid/gallery-widget-grid.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/assets/blocks/homepage-text-additional/homepage-text-additional.js":
/*!*************************************************************************************!*\
  !*** ./frontend/assets/blocks/homepage-text-additional/homepage-text-additional.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage_text_additional_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage-text-additional.scss */ "./frontend/assets/blocks/homepage-text-additional/homepage-text-additional.scss");
/* harmony import */ var _homepage_text_additional_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homepage_text_additional_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./frontend/assets/blocks/homepage-text-additional/homepage-text-additional.scss":
/*!***************************************************************************************!*\
  !*** ./frontend/assets/blocks/homepage-text-additional/homepage-text-additional.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/assets/blocks/homepage-text-main/homepage-text-main.js":
/*!*************************************************************************!*\
  !*** ./frontend/assets/blocks/homepage-text-main/homepage-text-main.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage_text_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage-text-main.scss */ "./frontend/assets/blocks/homepage-text-main/homepage-text-main.scss");
/* harmony import */ var _homepage_text_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homepage_text_main_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./frontend/assets/blocks/homepage-text-main/homepage-text-main.scss":
/*!***************************************************************************!*\
  !*** ./frontend/assets/blocks/homepage-text-main/homepage-text-main.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/assets/blocks/instagram-widget/instagram-widget.js":
/*!*********************************************************************!*\
  !*** ./frontend/assets/blocks/instagram-widget/instagram-widget.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _scripts_base_load_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~scripts/base/load.component */ "./frontend/assets/scripts/base/load.component.js");
/* harmony import */ var _scripts_base_lazy_images_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~scripts/base/lazy-images.component */ "./frontend/assets/scripts/base/lazy-images.component.js");
/* harmony import */ var _scripts_components_photoswipe_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~scripts/components/photoswipe.wrapper */ "./frontend/assets/scripts/components/photoswipe.wrapper.js");
/* harmony import */ var _instagram_widget_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instagram-widget.scss */ "./frontend/assets/blocks/instagram-widget/instagram-widget.scss");
/* harmony import */ var _instagram_widget_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_instagram_widget_scss__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Подтягиваем картинки с инсты
 *
 * Хтмлка:
    <div class="instagram-widget-carousel js-instagram-widget-carousel">
        <div class="instagram-widget-carousel__list js-instagram-widget-carousel-list" id="instafeed">
            // тут будут выводиться фотки
        </div>
    </div>
 */

if ($('.js-instagram-widget').length) {
  window.addEventListener('DOMContentLoaded', function () {
    Object(_scripts_base_load_component__WEBPACK_IMPORTED_MODULE_0__["loadScript"])('https://matthewelsom.com/assets/js/libs/instafeed.min.js').then(function () {
      var _window = window,
          Instafeed = _window.Instafeed;
      var userFeed = new Instafeed({
        get: 'user',
        userId: '8188155449',
        clientId: '8064acdcdd3541e1a2598c30c75974d4',
        accessToken: '8188155449.8064acd.592a4300c35e430e9ede1941a9e1505c',
        resolution: 'standard_resolution',
        template: '<div class="instagram-widget__item"><a href="{{image}}" data-size="{{width}}x{{height}}" class="instagram-widget__item-img"><img src="assets/images/placeholder.svg" data-src="{{image}}" class="lazy" /></a></div>',
        sortBy: 'most-recent',
        limit: 8,
        links: false,
        after: function after() {
          _scripts_components_photoswipe_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"].init('.js-instagram-widget-list', 'a:not(.no-photoswipe)');
          _scripts_base_lazy_images_component__WEBPACK_IMPORTED_MODULE_1__["default"].add([].slice.call(document.querySelectorAll('.js-instagram-widget-list img.lazy')));
        }
      });
      userFeed.run();
      return true;
    }).catch();
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./frontend/assets/blocks/instagram-widget/instagram-widget.scss":
/*!***********************************************************************!*\
  !*** ./frontend/assets/blocks/instagram-widget/instagram-widget.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/assets/blocks/reviews-widget/reviews-widget.js":
/*!*****************************************************************!*\
  !*** ./frontend/assets/blocks/reviews-widget/reviews-widget.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _scripts_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~scripts/common/app */ "./frontend/assets/scripts/common/app.js");
/* harmony import */ var _reviews_widget_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews-widget.scss */ "./frontend/assets/blocks/reviews-widget/reviews-widget.scss");
/* harmony import */ var _reviews_widget_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reviews_widget_scss__WEBPACK_IMPORTED_MODULE_1__);


var $tempalteCarousel = $('.js-reviews-widget');

if ($tempalteCarousel.length > 0) {
  (function (_root) {
    var self = {
      carousel: _root.find('.owl-carousel'),
      nextBtn: _root.find('.js-nav-next'),
      prevBtn: _root.find('.js-nav-prev')
    };
    self.carousel.owlCarousel({
      rtl: _scripts_common_app__WEBPACK_IMPORTED_MODULE_0__["default"].isRtl,
      nav: false,
      dots: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 1,
      onInitialized: function onInitialized() {
        self.carousel.addClass('is-initialized');
      }
    });
    self.nextBtn.click(function () {
      self.carousel.trigger('next.owl.carousel');
    });
    self.prevBtn.click(function () {
      self.carousel.trigger('prev.owl.carousel');
    });
  })($tempalteCarousel);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./frontend/assets/blocks/reviews-widget/reviews-widget.scss":
/*!*******************************************************************!*\
  !*** ./frontend/assets/blocks/reviews-widget/reviews-widget.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/assets/blocks/slider-header/slider-header.js":
/*!***************************************************************!*\
  !*** ./frontend/assets/blocks/slider-header/slider-header.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _scripts_base_resize_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~scripts/base/resize.component */ "./frontend/assets/scripts/base/resize.component.js");
/* harmony import */ var _scripts_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~scripts/common/app */ "./frontend/assets/scripts/common/app.js");
/* harmony import */ var _slider_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider-header.scss */ "./frontend/assets/blocks/slider-header/slider-header.scss");
/* harmony import */ var _slider_header_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider_header_scss__WEBPACK_IMPORTED_MODULE_2__);



var $sliderHeader = $('.js-slider-header');

if ($sliderHeader.length > 0) {
  // Slider init only on desktop
  // Slider is replaced by image on mobile (use css)
  _scripts_base_resize_component__WEBPACK_IMPORTED_MODULE_0__["default"].addMediaQuery({
    min: 480,
    max: 10000,
    onFirstEnter: function onFirstEnter() {
      (function (_root) {
        var self = {
          root: _root,
          carousel: _root.find('.js-slider'),
          nextBtn: _root.find('.js-nav-next'),
          prevBtn: _root.find('.js-nav-prev'),
          counter: _root.find('.js-nav-counter'),
          animation: 'flipInX'
        };

        function renderCounter(slideCount, currentSlide) {
          self.counter.html("<span>".concat(currentSlide, "</span>/").concat(slideCount));
        }

        if (self.carousel.find('.item').length > 1) {
          self.carousel.addClass('owl-carousel');
          self.carousel.owlCarousel({
            rtl: _scripts_common_app__WEBPACK_IMPORTED_MODULE_1__["default"].isRtl,
            nav: false,
            dots: true,
            // must be enabled for slide counter
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            items: 1,
            onInitialized: function onInitialized(event) {
              self.root.addClass('is-initialized');
              renderCounter(event.item.count, 1);
            },
            onChanged: function onChanged(event) {
              renderCounter(event.item.count, event.page.index + 1);
            }
          });
          self.nextBtn.click(function () {
            self.carousel.trigger('next.owl.carousel');
          });
          self.prevBtn.click(function () {
            self.carousel.trigger('prev.owl.carousel');
          });
        } else {
          self.nextBtn.remove();
          self.prevBtn.remove();
        }
      })($sliderHeader);
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./frontend/assets/blocks/slider-header/slider-header.scss":
/*!*****************************************************************!*\
  !*** ./frontend/assets/blocks/slider-header/slider-header.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/assets/blocks/template-carousel/template-carousel.js":
/*!***********************************************************************!*\
  !*** ./frontend/assets/blocks/template-carousel/template-carousel.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _scripts_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~scripts/common/app */ "./frontend/assets/scripts/common/app.js");
/* harmony import */ var _template_carousel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-carousel.scss */ "./frontend/assets/blocks/template-carousel/template-carousel.scss");
/* harmony import */ var _template_carousel_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_carousel_scss__WEBPACK_IMPORTED_MODULE_1__);
// import $ from 'jquery';
// import 'owl.carousel';


var $tempalteCarousel = $('.js-template-carousel');

if ($tempalteCarousel.length > 0) {
  (function (_root) {
    var self = {
      carousel: _root.find('.owl-carousel'),
      nextBtn: _root.find('.js-nav-next'),
      prevBtn: _root.find('.js-nav-prev')
    };
    self.carousel.owlCarousel({
      rtl: _scripts_common_app__WEBPACK_IMPORTED_MODULE_0__["default"].isRtl,
      nav: false,
      dots: false,
      loop: true,
      items: 4,
      margin: 20,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 2
        },
        768: {
          items: 3
        },
        1024: {
          items: 4
        }
      }
    });
    self.nextBtn.click(function () {
      self.carousel.trigger('next.owl.carousel');
    });
    self.prevBtn.click(function () {
      self.carousel.trigger('prev.owl.carousel');
    });
  })($tempalteCarousel);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./frontend/assets/blocks/template-carousel/template-carousel.scss":
/*!*************************************************************************!*\
  !*** ./frontend/assets/blocks/template-carousel/template-carousel.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/assets/blocks/template-list/template-list.js":
/*!***************************************************************!*\
  !*** ./frontend/assets/blocks/template-list/template-list.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~scripts/common/app */ "./frontend/assets/scripts/common/app.js");
/* harmony import */ var _template_list_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-list.scss */ "./frontend/assets/blocks/template-list/template-list.scss");
/* harmony import */ var _template_list_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_list_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./frontend/assets/blocks/template-list/template-list.scss":
/*!*****************************************************************!*\
  !*** ./frontend/assets/blocks/template-list/template-list.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/assets/blocks/template-parallax-mouse/template-parallax-mouse.js":
/*!***********************************************************************************!*\
  !*** ./frontend/assets/blocks/template-parallax-mouse/template-parallax-mouse.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_components_parallax_on_mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~scripts/components/parallax-on-mouse */ "./frontend/assets/scripts/components/parallax-on-mouse.js");
/* harmony import */ var _template_parallax_mouse_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-parallax-mouse.scss */ "./frontend/assets/blocks/template-parallax-mouse/template-parallax-mouse.scss");
/* harmony import */ var _template_parallax_mouse_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_parallax_mouse_scss__WEBPACK_IMPORTED_MODULE_1__);


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.js-parallax-on-mouse').forEach(function (element) {
    new _scripts_components_parallax_on_mouse__WEBPACK_IMPORTED_MODULE_0__["default"](element);
  });
});

/***/ }),

/***/ "./frontend/assets/blocks/template-parallax-mouse/template-parallax-mouse.scss":
/*!*************************************************************************************!*\
  !*** ./frontend/assets/blocks/template-parallax-mouse/template-parallax-mouse.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/assets/blocks/template-parallax-scroll/template-parallax-scroll.js":
/*!*************************************************************************************!*\
  !*** ./frontend/assets/blocks/template-parallax-scroll/template-parallax-scroll.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_components_parallax_on_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~scripts/components/parallax-on-scroll */ "./frontend/assets/scripts/components/parallax-on-scroll.js");
/* harmony import */ var _template_parallax_scroll_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-parallax-scroll.scss */ "./frontend/assets/blocks/template-parallax-scroll/template-parallax-scroll.scss");
/* harmony import */ var _template_parallax_scroll_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_parallax_scroll_scss__WEBPACK_IMPORTED_MODULE_1__);


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.js-parallax-on-scroll').forEach(function (element) {
    new _scripts_components_parallax_on_scroll__WEBPACK_IMPORTED_MODULE_0__["default"](element);
  });
});

/***/ }),

/***/ "./frontend/assets/blocks/template-parallax-scroll/template-parallax-scroll.scss":
/*!***************************************************************************************!*\
  !*** ./frontend/assets/blocks/template-parallax-scroll/template-parallax-scroll.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/assets/scripts/base/request-animation-frame.component.js":
/*!***************************************************************************!*\
  !*** ./frontend/assets/scripts/base/request-animation-frame.component.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Компонент обёртка для requestAnimationFrame и формирования очереди
 *
 * Example:
 * requestAnimationFrameComponent.add(functionName);
 *
 * @method {{ add}}
 */
var requestAnimationFrameComponent = function () {
  var self = {
    callbacks: []
  };
  /**
   * добавляем новый колбэк в очередь
   * @param {{callback: function}} callback
   */

  var add = function add(callback) {
    self.callbacks.push(callback);
  };

  function init() {
    self.callbacks.forEach(function (element) {
      element();
    });
    requestAnimationFrame(init);
  }

  requestAnimationFrame(init); // PUBLIC ==========================================================================================================

  return Object.freeze({
    add: add
  });
}();

/* harmony default export */ __webpack_exports__["default"] = (requestAnimationFrameComponent);

/***/ }),

/***/ "./frontend/assets/scripts/components/parallax-on-mouse.js":
/*!*****************************************************************!*\
  !*** ./frontend/assets/scripts/components/parallax-on-mouse.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParallaxOnMouse; });
/* harmony import */ var _scripts_base_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~scripts/base/utils */ "./frontend/assets/scripts/base/utils.js");
/* harmony import */ var _scripts_base_request_animation_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~scripts/base/request-animation-frame.component */ "./frontend/assets/scripts/base/request-animation-frame.component.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ParallaxOnMouse =
/*#__PURE__*/
function () {
  function ParallaxOnMouse(_root, _options) {
    _classCallCheck(this, ParallaxOnMouse);

    this.root = _root;
    this.imgs = _toConsumableArray(this.root.querySelectorAll('[data-parallax-on-mouse]'));
    this.pos = {
      x: 0,
      y: 0
    };
    this.posCurr = {
      x: 0,
      y: 0
    };
    this.rootSize = {
      x: this.root.clientWidth,
      y: this.root.clientHeight
    };
    this.defaults = {
      koef: 0.3,
      friction: 0.1,
      inversion: true
    };
    this.settings = Object(_scripts_base_utils__WEBPACK_IMPORTED_MODULE_0__["mergeDeep"])(this.defaults, _options);
    this.init();
  }

  _createClass(ParallaxOnMouse, [{
    key: "init",
    value: function init() {
      var self = this;
      self.resize();
      window.addEventListener('resize', function () {
        self.resize();
        self.update();
      });
      self.root.addEventListener('mousemove', function (event) {
        self.pos = {
          x: (event.offsetX - self.rootSize.x / 2) * self.settings.koef,
          y: (event.offsetY - self.rootSize.y / 2) * self.settings.koef
        };
      });
      _scripts_base_request_animation_frame_component__WEBPACK_IMPORTED_MODULE_1__["default"].add(function () {
        self.render(self.imgs, self.posCurr, self.settings.inversion);
        self.update();
      });
    }
  }, {
    key: "update",
    value: function update() {
      var offsetX = (this.pos.x - this.posCurr.x) * this.settings.friction;
      var offsetY = (this.pos.y - this.posCurr.y) * this.settings.friction;
      this.posCurr.x += Math.abs(offsetX) > 0.5 ? offsetX : 0;
      this.posCurr.y += Math.abs(offsetY) > 0.5 ? offsetY : 0;
    }
  }, {
    key: "render",
    value: function render(imgs, posCurr, isInversion) {
      imgs.forEach(function (element) {
        var depth = element.dataset.depth ? element.dataset.depth : 1;
        var direction = isInversion ? -1 : 1;
        element.style.transform = "translate3d(".concat(posCurr.x * depth * direction, "px, ").concat(posCurr.y * depth * direction, "px,0)");
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      this.rootSize = {
        x: this.root.clientWidth,
        y: this.root.clientHeight
      };
    }
  }]);

  return ParallaxOnMouse;
}();



/***/ }),

/***/ "./frontend/assets/scripts/components/parallax-on-scroll.js":
/*!******************************************************************!*\
  !*** ./frontend/assets/scripts/components/parallax-on-scroll.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParallaxOnScroll; });
/* harmony import */ var _scripts_base_scroll_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~scripts/base/scroll.component */ "./frontend/assets/scripts/base/scroll.component.js");
/* harmony import */ var _scripts_base_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~scripts/base/utils */ "./frontend/assets/scripts/base/utils.js");
/* harmony import */ var _scripts_base_request_animation_frame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~scripts/base/request-animation-frame.component */ "./frontend/assets/scripts/base/request-animation-frame.component.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ParallaxOnScroll =
/*#__PURE__*/
function () {
  function ParallaxOnScroll(_root, _options) {
    _classCallCheck(this, ParallaxOnScroll);

    this.root = _root;
    this.interval = {
      start: 0,
      end: 0,
      length: 0
    };
    this.imgs = _toConsumableArray(this.root.querySelectorAll('[data-parallax-on-scroll]'));
    this.pos = 0;
    this.defaults = {
      friction: 0.1,
      inversion: false
    };
    this.settings = Object(_scripts_base_utils__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(this.defaults, _options);
    this.init();
  }

  _createClass(ParallaxOnScroll, [{
    key: "init",
    value: function init() {
      var self = this;
      self.resize();
      window.addEventListener('resize', function () {
        self.resize();
        self.update();
      });
      _scripts_base_request_animation_frame_component__WEBPACK_IMPORTED_MODULE_2__["default"].add(function () {
        if (!(scroll < self.interval.start || scroll > self.interval.end)) {
          self.render(self.imgs, self.pos, self.settings.inversion);
          self.update();
        }
      });
    }
  }, {
    key: "update",
    value: function update() {
      var scroll = _scripts_base_scroll_component__WEBPACK_IMPORTED_MODULE_0__["default"].current();
      this.pos = (scroll - this.interval.start) / this.interval.length;
    }
  }, {
    key: "render",
    value: function render(imgs, posCurr, isInversion) {
      var rootHeight = this.root.clientHeight;
      imgs.forEach(function (element) {
        var depth = element.dataset.depth ? element.dataset.depth : 1;
        var direction = isInversion ? 1 : -1;
        var offset = element.clientHeight - rootHeight;
        element.style.transform = "translateX(-50%) translateY(".concat(posCurr * offset * depth * direction, "px)");
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      var rootHeight = this.root.clientHeight;
      var rootOffsetTop = Object(_scripts_base_utils__WEBPACK_IMPORTED_MODULE_1__["getElementCoords"])(this.root).top;
      var screenHeight = window.innerHeight;
      var rootEnd = rootOffsetTop + rootHeight;
      this.interval.start = rootOffsetTop - screenHeight;
      this.interval.end = rootEnd;
      this.interval.length = this.interval.end - this.interval.start;
    }
  }]);

  return ParallaxOnScroll;
}();



/***/ }),

/***/ "./frontend/assets/scripts/index.js":
/*!******************************************!*\
  !*** ./frontend/assets/scripts/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~styles/app.scss */ "./frontend/assets/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~scripts/common */ "./frontend/assets/scripts/common.js");
/* harmony import */ var _blocks_main_menu_main_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~blocks/main-menu/main-menu */ "./frontend/assets/blocks/main-menu/main-menu.js");
/* harmony import */ var _blocks_template_list_template_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~blocks/template-list/template-list */ "./frontend/assets/blocks/template-list/template-list.js");
/* harmony import */ var _blocks_template_carousel_template_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~blocks/template-carousel/template-carousel */ "./frontend/assets/blocks/template-carousel/template-carousel.js");
/* harmony import */ var _blocks_template_parallax_scroll_template_parallax_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~blocks/template-parallax-scroll/template-parallax-scroll */ "./frontend/assets/blocks/template-parallax-scroll/template-parallax-scroll.js");
/* harmony import */ var _blocks_template_parallax_mouse_template_parallax_mouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~blocks/template-parallax-mouse/template-parallax-mouse */ "./frontend/assets/blocks/template-parallax-mouse/template-parallax-mouse.js");
/* harmony import */ var _blocks_slider_header_slider_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~blocks/slider-header/slider-header */ "./frontend/assets/blocks/slider-header/slider-header.js");
/* harmony import */ var _blocks_homepage_text_main_homepage_text_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~blocks/homepage-text-main/homepage-text-main */ "./frontend/assets/blocks/homepage-text-main/homepage-text-main.js");
/* harmony import */ var _blocks_homepage_text_additional_homepage_text_additional__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~blocks/homepage-text-additional/homepage-text-additional */ "./frontend/assets/blocks/homepage-text-additional/homepage-text-additional.js");
/* harmony import */ var _blocks_product_list_item_product_list_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~blocks/product-list-item/product-list-item */ "./frontend/assets/blocks/product-list-item/product-list-item.js");
/* harmony import */ var _blocks_product_widget_carousel_product_widget_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~blocks/product-widget-carousel/product-widget-carousel */ "./frontend/assets/blocks/product-widget-carousel/product-widget-carousel.js");
/* harmony import */ var _blocks_product_list_product_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~blocks/product-list/product-list */ "./frontend/assets/blocks/product-list/product-list.js");
/* harmony import */ var _blocks_gallery_widget_carousel_gallery_widget_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~blocks/gallery-widget-carousel/gallery-widget-carousel */ "./frontend/assets/blocks/gallery-widget-carousel/gallery-widget-carousel.js");
/* harmony import */ var _blocks_gallery_widget_grid_gallery_widget_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~blocks/gallery-widget-grid/gallery-widget-grid */ "./frontend/assets/blocks/gallery-widget-grid/gallery-widget-grid.js");
/* harmony import */ var _blocks_instagram_widget_instagram_widget__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~blocks/instagram-widget/instagram-widget */ "./frontend/assets/blocks/instagram-widget/instagram-widget.js");
/* harmony import */ var _blocks_banner_widget_banner_widget__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~blocks/banner-widget/banner-widget */ "./frontend/assets/blocks/banner-widget/banner-widget.js");
/* harmony import */ var _blocks_reviews_widget_reviews_widget__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~blocks/reviews-widget/reviews-widget */ "./frontend/assets/blocks/reviews-widget/reviews-widget.js");
/* harmony import */ var _blocks_cart_widget_cart_widget__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~blocks/cart-widget/cart-widget */ "./frontend/assets/blocks/cart-widget/cart-widget.js");
// import $ from 'jquery';
 // import 'simplebar';
// import './base/polyfills.js';


/**
 * Import common scripts
 */


/**
 * Import blocks
 */

 // import '~blocks/template-masonry/template-masonry'; 










 // import '~blocks/product-sorting/product-sorting';
// import '~blocks/product-filter/product-filter';
// import '~blocks/product-compare/product-compare';
// import '~blocks/product-show/product-show';


 // import '~blocks/gallery-albums/gallery-albums';
// import '~blocks/gallery-show/gallery-show';


 // import '~blocks/publication-list/publication-list';

 // import '~blocks/reviews-list/reviews-list';
// import '~blocks/subsections/subsections';

 // import '~blocks/pagination/pagination';

$(document).ready(function () {
  var str = "link to docs http://frontend-docs.dev.darvins.ru/docs/get-started.html";
  console.log(str);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./frontend/assets/scripts/index.js","runtime","common"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hc3NldHMvYmxvY2tzL2Jhbm5lci13aWRnZXQvYmFubmVyLXdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hc3NldHMvYmxvY2tzL2Jhbm5lci13aWRnZXQvYmFubmVyLXdpZGdldC5zY3NzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Fzc2V0cy9ibG9ja3MvZ2FsbGVyeS13aWRnZXQtY2Fyb3VzZWwvZ2FsbGVyeS13aWRnZXQtY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXNzZXRzL2Jsb2Nrcy9nYWxsZXJ5LXdpZGdldC1jYXJvdXNlbC9nYWxsZXJ5LXdpZGdldC1jYXJvdXNlbC5zY3NzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Fzc2V0cy9ibG9ja3MvZ2FsbGVyeS13aWRnZXQtZ3JpZC9nYWxsZXJ5LXdpZGdldC1ncmlkLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Fzc2V0cy9ibG9ja3MvZ2FsbGVyeS13aWRnZXQtZ3JpZC9nYWxsZXJ5LXdpZGdldC1ncmlkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXNzZXRzL2Jsb2Nrcy9ob21lcGFnZS10ZXh0LWFkZGl0aW9uYWwvaG9tZXBhZ2UtdGV4dC1hZGRpdGlvbmFsLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Fzc2V0cy9ibG9ja3MvaG9tZXBhZ2UtdGV4dC1hZGRpdGlvbmFsL2hvbWVwYWdlLXRleHQtYWRkaXRpb25hbC5zY3NzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Fzc2V0cy9ibG9ja3MvaG9tZXBhZ2UtdGV4dC1tYWluL2hvbWVwYWdlLXRleHQtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hc3NldHMvYmxvY2tzL2hvbWVwYWdlLXRleHQtbWFpbi9ob21lcGFnZS10ZXh0LW1haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hc3NldHMvYmxvY2tzL2luc3RhZ3JhbS13aWRnZXQvaW5zdGFncmFtLXdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hc3NldHMvYmxvY2tzL2luc3RhZ3JhbS13aWRnZXQvaW5zdGFncmFtLXdpZGdldC5zY3NzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Fzc2V0cy9ibG9ja3MvcmV2aWV3cy13aWRnZXQvcmV2aWV3cy13aWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXNzZXRzL2Jsb2Nrcy9yZXZpZXdzLXdpZGdldC9yZXZpZXdzLXdpZGdldC5zY3NzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Fzc2V0cy9ibG9ja3Mvc2xpZGVyLWhlYWRlci9zbGlkZXItaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Fzc2V0cy9ibG9ja3Mvc2xpZGVyLWhlYWRlci9zbGlkZXItaGVhZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXNzZXRzL2Jsb2Nrcy90ZW1wbGF0ZS1jYXJvdXNlbC90ZW1wbGF0ZS1jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hc3NldHMvYmxvY2tzL3RlbXBsYXRlLWNhcm91c2VsL3RlbXBsYXRlLWNhcm91c2VsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXNzZXRzL2Jsb2Nrcy90ZW1wbGF0ZS1saXN0L3RlbXBsYXRlLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXNzZXRzL2Jsb2Nrcy90ZW1wbGF0ZS1saXN0L3RlbXBsYXRlLWxpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hc3NldHMvYmxvY2tzL3RlbXBsYXRlLXBhcmFsbGF4LW1vdXNlL3RlbXBsYXRlLXBhcmFsbGF4LW1vdXNlLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Fzc2V0cy9ibG9ja3MvdGVtcGxhdGUtcGFyYWxsYXgtbW91c2UvdGVtcGxhdGUtcGFyYWxsYXgtbW91c2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hc3NldHMvYmxvY2tzL3RlbXBsYXRlLXBhcmFsbGF4LXNjcm9sbC90ZW1wbGF0ZS1wYXJhbGxheC1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXNzZXRzL2Jsb2Nrcy90ZW1wbGF0ZS1wYXJhbGxheC1zY3JvbGwvdGVtcGxhdGUtcGFyYWxsYXgtc2Nyb2xsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXNzZXRzL3NjcmlwdHMvYmFzZS9yZXF1ZXN0LWFuaW1hdGlvbi1mcmFtZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9wYXJhbGxheC1vbi1tb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3BhcmFsbGF4LW9uLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hc3NldHMvc2NyaXB0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyIkYmFubmVyV2lkZ2V0IiwiJCIsImxlbmd0aCIsIl9yb290Iiwic2VsZiIsImNhcm91c2VsIiwiZmluZCIsIm93bENhcm91c2VsIiwicnRsIiwiQXBwIiwiaXNSdGwiLCJuYXYiLCJkb3RzIiwibG9vcCIsIm1hcmdpbiIsIml0ZW1zIiwicmVzcG9uc2l2ZSIsIiRnYWxsZXJ5V2lkZ2V0Q2Fyb3VzZWwiLCJyb290IiwibmV4dEJ0biIsInByZXZCdG4iLCJjZW50ZXIiLCJhdXRvV2lkdGgiLCJjbGljayIsInRyaWdnZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZFNjcmlwdCIsInRoZW4iLCJJbnN0YWZlZWQiLCJ1c2VyRmVlZCIsImdldCIsInVzZXJJZCIsImNsaWVudElkIiwiYWNjZXNzVG9rZW4iLCJyZXNvbHV0aW9uIiwidGVtcGxhdGUiLCJzb3J0QnkiLCJsaW1pdCIsImxpbmtzIiwiYWZ0ZXIiLCJwaG90b3N3aXBlV3JhcHBlciIsImluaXQiLCJsYXp5SW1hZ2VDb21wb25lbnQiLCJhZGQiLCJzbGljZSIsImNhbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJydW4iLCJjYXRjaCIsIiR0ZW1wYWx0ZUNhcm91c2VsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVRpbWVvdXQiLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJvbkluaXRpYWxpemVkIiwiYWRkQ2xhc3MiLCIkc2xpZGVySGVhZGVyIiwicmVzaXplQ29tcG9uZW50IiwiYWRkTWVkaWFRdWVyeSIsIm1pbiIsIm1heCIsIm9uRmlyc3RFbnRlciIsImNvdW50ZXIiLCJhbmltYXRpb24iLCJyZW5kZXJDb3VudGVyIiwic2xpZGVDb3VudCIsImN1cnJlbnRTbGlkZSIsImh0bWwiLCJldmVudCIsIml0ZW0iLCJjb3VudCIsIm9uQ2hhbmdlZCIsInBhZ2UiLCJpbmRleCIsInJlbW92ZSIsImZvckVhY2giLCJlbGVtZW50IiwiUGFyYWxsYXhPbk1vdXNlIiwiUGFyYWxsYXhPblNjcm9sbCIsInJlcXVlc3RBbmltYXRpb25GcmFtZUNvbXBvbmVudCIsImNhbGxiYWNrcyIsImNhbGxiYWNrIiwicHVzaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIk9iamVjdCIsImZyZWV6ZSIsIl9vcHRpb25zIiwiaW1ncyIsInBvcyIsIngiLCJ5IiwicG9zQ3VyciIsInJvb3RTaXplIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJkZWZhdWx0cyIsImtvZWYiLCJmcmljdGlvbiIsImludmVyc2lvbiIsInNldHRpbmdzIiwibWVyZ2VEZWVwIiwicmVzaXplIiwidXBkYXRlIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJyZW5kZXIiLCJNYXRoIiwiYWJzIiwiaXNJbnZlcnNpb24iLCJkZXB0aCIsImRhdGFzZXQiLCJkaXJlY3Rpb24iLCJzdHlsZSIsInRyYW5zZm9ybSIsImludGVydmFsIiwic3RhcnQiLCJlbmQiLCJzY3JvbGwiLCJzY3JvbGxDb21wb25lbnQiLCJjdXJyZW50Iiwicm9vdEhlaWdodCIsIm9mZnNldCIsInJvb3RPZmZzZXRUb3AiLCJnZXRFbGVtZW50Q29vcmRzIiwidG9wIiwic2NyZWVuSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJyb290RW5kIiwicmVhZHkiLCJzdHIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyxDQUFDLENBQUMsbUJBQUQsQ0FBdkI7O0FBQ0EsSUFBSUQsYUFBYSxDQUFDRSxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzFCLEdBQUMsVUFBQ0MsS0FBRCxFQUFXO0FBQ1IsUUFBTUMsSUFBSSxHQUFHO0FBQ1RDLGNBQVEsRUFBRUYsS0FBSyxDQUFDRyxJQUFOLENBQVcsZUFBWDtBQURELEtBQWI7QUFJQUYsUUFBSSxDQUFDQyxRQUFMLENBQWNFLFdBQWQsQ0FBMEI7QUFDdEJDLFNBQUcsRUFBRUMsMkRBQUcsQ0FBQ0MsS0FEYTtBQUV0QjtBQUNBQyxTQUFHLEVBQUUsS0FIaUI7QUFJdEJDLFVBQUksRUFBRSxLQUpnQjtBQUt0QkMsVUFBSSxFQUFFLElBTGdCO0FBTXRCO0FBQ0FDLFlBQU0sRUFBRSxFQVBjO0FBUXRCQyxXQUFLLEVBQUUsQ0FSZTtBQVN0QkMsZ0JBQVUsRUFBRTtBQUNSLFdBQUc7QUFDQ0osY0FBSSxFQUFFLElBRFA7QUFFQ0csZUFBSyxFQUFFO0FBRlIsU0FESztBQUtSLGFBQUs7QUFDREgsY0FBSSxFQUFFLEtBREw7QUFFREUsZ0JBQU0sRUFBRSxFQUZQO0FBR0RDLGVBQUssRUFBRTtBQUhOO0FBTEc7QUFUVSxLQUExQjtBQXFCSCxHQTFCRCxFQTBCR2YsYUExQkg7QUEyQkgsQzs7Ozs7Ozs7Ozs7O0FDaENELHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1pQixzQkFBc0IsR0FBR2hCLENBQUMsQ0FBQyw2QkFBRCxDQUFoQzs7QUFDQSxJQUFJZ0Isc0JBQXNCLENBQUNmLE1BQXZCLEdBQWdDLENBQXBDLEVBQXVDO0FBQ25DLEdBQUMsVUFBQ0Ms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RUE7O0NBSUE7O0FBR0FuSCxDQUFDLENBQUM4QyxRQUFELENBQUQsQ0FBWWtGLEtBQVosQ0FBa0IsWUFBTTtBQUNwQixNQUFNQyxHQUFHLDJFQUFUO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0gsQ0FIRCxFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICd+c2NyaXB0cy9jb21tb24vYXBwJztcbmltcG9ydCAnLi9iYW5uZXItd2lkZ2V0LnNjc3MnO1xuXG5jb25zdCAkYmFubmVyV2lkZ2V0ID0gJCgnLmpzLWJhbm5lci13aWRnZXQnKTtcbmlmICgkYmFubmVyV2lkZ2V0Lmxlbmd0aCA+IDApIHtcbiAgICAoKF9yb290KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB7XG4gICAgICAgICAgICBjYXJvdXNlbDogX3Jvb3QuZmluZCgnLm93bC1jYXJvdXNlbCcpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGYuY2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgcnRsOiBBcHAuaXNSdGwsXG4gICAgICAgICAgICAvLyBjZW50ZXI6IHRydWUsXG4gICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgLy8gYXV0b1dpZHRoOiB0cnVlLFxuICAgICAgICAgICAgbWFyZ2luOiAyNSxcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA5ODA6IHtcbiAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjUsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KSgkYmFubmVyV2lkZ2V0KTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQXBwIGZyb20gJ35zY3JpcHRzL2NvbW1vbi9hcHAnO1xuaW1wb3J0ICcuL2dhbGxlcnktd2lkZ2V0LWNhcm91c2VsLnNjc3MnO1xuXG5jb25zdCAkZ2FsbGVyeVdpZGdldENhcm91c2VsID0gJCgnLmpzLWdhbGxlcnktd2lkZ2V0LWNhcm91c2VsJyk7XG5pZiAoJGdhbGxlcnlXaWRnZXRDYXJvdXNlbC5sZW5ndGggPiAwKSB7XG4gICAgKChfcm9vdCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxmID0ge1xuICAgICAgICAgICAgcm9vdDogX3Jvb3QsXG4gICAgICAgICAgICBjYXJvdXNlbDogX3Jvb3QuZmluZCgnLm93bC1jYXJvdXNlbCcpLFxuICAgICAgICAgICAgbmV4dEJ0bjogX3Jvb3QuZmluZCgnLmpzLW5hdi1uZXh0JyksXG4gICAgICAgICAgICBwcmV2QnRuOiBfcm9vdC5maW5kKCcuanMtbmF2LXByZXYnKSxcbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmLmNhcm91c2VsLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIHJ0bDogQXBwLmlzUnRsLFxuICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZi5uZXh0QnRuLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuY2Fyb3VzZWwudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucHJldkJ0bi5jbGljaygoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmNhcm91c2VsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9KSgkZ2FsbGVyeVdpZGdldENhcm91c2VsKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9nYWxsZXJ5LXdpZGdldC1ncmlkLnNjc3MnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2hvbWVwYWdlLXRleHQtYWRkaXRpb25hbC5zY3NzJztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9ob21lcGFnZS10ZXh0LW1haW4uc2Nzcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBsb2FkU2NyaXB0IH0gZnJvbSAnfnNjcmlwdHMvYmFzZS9sb2FkLmNvbXBvbmVudCc7XG5pbXBvcnQgbGF6eUltYWdlQ29tcG9uZW50IGZyb20gJ35zY3JpcHRzL2Jhc2UvbGF6eS1pbWFnZXMuY29tcG9uZW50JztcbmltcG9ydCBwaG90b3N3aXBlV3JhcHBlciBmcm9tICd+c2NyaXB0cy9jb21wb25lbnRzL3Bob3Rvc3dpcGUud3JhcHBlcic7XG5pbXBvcnQgJy4vaW5zdGFncmFtLXdpZGdldC5zY3NzJztcblxuLyoqXG4gKiDQn9C+0LTRgtGP0LPQuNCy0LDQtdC8INC60LDRgNGC0LjQvdC60Lgg0YEg0LjQvdGB0YLRi1xuICpcbiAqINCl0YLQvNC70LrQsDpcbiAgICA8ZGl2IGNsYXNzPVwiaW5zdGFncmFtLXdpZGdldC1jYXJvdXNlbCBqcy1pbnN0YWdyYW0td2lkZ2V0LWNhcm91c2VsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnN0YWdyYW0td2lkZ2V0LWNhcm91c2VsX19saXN0IGpzLWluc3RhZ3JhbS13aWRnZXQtY2Fyb3VzZWwtbGlzdFwiIGlkPVwiaW5zdGFmZWVkXCI+XG4gICAgICAgICAgICAvLyDRgtGD0YIg0LHRg9C00YPRgiDQstGL0LLQvtC00LjRgtGM0YHRjyDRhNC+0YLQutC4XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICovXG5cbmlmICgkKCcuanMtaW5zdGFncmFtLXdpZGdldCcpLmxlbmd0aCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBsb2FkU2NyaXB0KCdodHRwczovL21hdHRoZXdlbHNvbS5jb20vYXNzZXRzL2pzL2xpYnMvaW5zdGFmZWVkLm1pbi5qcycpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBJbnN0YWZlZWQgfSA9IHdpbmRvdztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJGZWVkID0gbmV3IEluc3RhZmVlZCh7XG4gICAgICAgICAgICAgICAgZ2V0OiAndXNlcicsXG4gICAgICAgICAgICAgICAgdXNlcklkOiAnODE4ODE1NTQ0OScsXG4gICAgICAgICAgICAgICAgY2xpZW50SWQ6ICc4MDY0YWNkY2RkMzU0MWUxYTI1OThjMzBjNzU5NzRkNCcsXG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46ICc4MTg4MTU1NDQ5LjgwNjRhY2QuNTkyYTQzMDBjMzVlNDMwZTllZGUxOTQxYTllMTUwNWMnLFxuICAgICAgICAgICAgICAgIHJlc29sdXRpb246ICdzdGFuZGFyZF9yZXNvbHV0aW9uJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJpbnN0YWdyYW0td2lkZ2V0X19pdGVtXCI+PGEgaHJlZj1cInt7aW1hZ2V9fVwiIGRhdGEtc2l6ZT1cInt7d2lkdGh9fXh7e2hlaWdodH19XCIgY2xhc3M9XCJpbnN0YWdyYW0td2lkZ2V0X19pdGVtLWltZ1wiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5zdmdcIiBkYXRhLXNyYz1cInt7aW1hZ2V9fVwiIGNsYXNzPVwibGF6eVwiIC8+PC9hPjwvZGl2PicsXG4gICAgICAgICAgICAgICAgc29ydEJ5OiAnbW9zdC1yZWNlbnQnLFxuICAgICAgICAgICAgICAgIGxpbWl0OiA4LFxuICAgICAgICAgICAgICAgIGxpbmtzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhZnRlcigpIHtcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9zd2lwZVdyYXBwZXIuaW5pdCgnLmpzLWluc3RhZ3JhbS13aWRnZXQtbGlzdCcsICdhOm5vdCgubm8tcGhvdG9zd2lwZSknKTtcbiAgICAgICAgICAgICAgICAgICAgbGF6eUltYWdlQ29tcG9uZW50LmFkZChbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1pbnN0YWdyYW0td2lkZ2V0LWxpc3QgaW1nLmxhenknKSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVzZXJGZWVkLnJ1bigpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pLmNhdGNoKFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0luc3RhZmVlZCcpXG4gICAgICAgICk7XG4gICAgfSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgQXBwIGZyb20gJ35zY3JpcHRzL2NvbW1vbi9hcHAnO1xuaW1wb3J0ICcuL3Jldmlld3Mtd2lkZ2V0LnNjc3MnO1xuXG5jb25zdCAkdGVtcGFsdGVDYXJvdXNlbCA9ICQoJy5qcy1yZXZpZXdzLXdpZGdldCcpO1xuaWYgKCR0ZW1wYWx0ZUNhcm91c2VsLmxlbmd0aCA+IDApIHtcbiAgICAoKF9yb290KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB7XG4gICAgICAgICAgICBjYXJvdXNlbDogX3Jvb3QuZmluZCgnLm93bC1jYXJvdXNlbCcpLFxuICAgICAgICAgICAgbmV4dEJ0bjogX3Jvb3QuZmluZCgnLmpzLW5hdi1uZXh0JyksXG4gICAgICAgICAgICBwcmV2QnRuOiBfcm9vdC5maW5kKCcuanMtbmF2LXByZXYnKSxcbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmLmNhcm91c2VsLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIHJ0bDogQXBwLmlzUnRsLFxuICAgICAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXG4gICAgICAgICAgICBpdGVtczogMSxcbiAgICAgICAgICAgIG9uSW5pdGlhbGl6ZWQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhcm91c2VsLmFkZENsYXNzKCdpcy1pbml0aWFsaXplZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZi5uZXh0QnRuLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuY2Fyb3VzZWwudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZi5wcmV2QnRuLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuY2Fyb3VzZWwudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgfSk7XG4gICAgfSkoJHRlbXBhbHRlQ2Fyb3VzZWwpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHJlc2l6ZUNvbXBvbmVudCBmcm9tICd+c2NyaXB0cy9iYXNlL3Jlc2l6ZS5jb21wb25lbnQnO1xuaW1wb3J0IEFwcCBmcm9tICd+c2NyaXB0cy9jb21tb24vYXBwJztcbmltcG9ydCAnLi9zbGlkZXItaGVhZGVyLnNjc3MnO1xuXG5jb25zdCAkc2xpZGVySGVhZGVyID0gJCgnLmpzLXNsaWRlci1oZWFkZXInKTtcbmlmICgkc2xpZGVySGVhZGVyLmxlbmd0aCA+IDApIHtcbiAgICAvLyBTbGlkZXIgaW5pdCBvbmx5IG9uIGRlc2t0b3BcbiAgICAvLyBTbGlkZXIgaXMgcmVwbGFjZWQgYnkgaW1hZ2Ugb24gbW9iaWxlICh1c2UgY3NzKVxuICAgIHJlc2l6ZUNvbXBvbmVudC5hZGRNZWRpYVF1ZXJ5KHtcbiAgICAgICAgbWluOiA0ODAsXG4gICAgICAgIG1heDogMTAwMDAsXG4gICAgICAgIG9uRmlyc3RFbnRlcjogKCkgPT4ge1xuICAgICAgICAgICAgKChfcm9vdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3Q6IF9yb290LFxuICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbDogX3Jvb3QuZmluZCgnLmpzLXNsaWRlcicpLFxuICAgICAgICAgICAgICAgICAgICBuZXh0QnRuOiBfcm9vdC5maW5kKCcuanMtbmF2LW5leHQnKSxcbiAgICAgICAgICAgICAgICAgICAgcHJldkJ0bjogX3Jvb3QuZmluZCgnLmpzLW5hdi1wcmV2JyksXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IF9yb290LmZpbmQoJy5qcy1uYXYtY291bnRlcicpLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246ICdmbGlwSW5YJyxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVuZGVyQ291bnRlcihzbGlkZUNvdW50LCBjdXJyZW50U2xpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb3VudGVyLmh0bWwoYDxzcGFuPiR7Y3VycmVudFNsaWRlfTwvc3Bhbj4vJHtzbGlkZUNvdW50fWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhcm91c2VsLmZpbmQoJy5pdGVtJykubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhcm91c2VsLmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhcm91c2VsLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0bDogQXBwLmlzUnRsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsIC8vIG11c3QgYmUgZW5hYmxlZCBmb3Igc2xpZGUgY291bnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkluaXRpYWxpemVkOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJvb3QuYWRkQ2xhc3MoJ2lzLWluaXRpYWxpemVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ291bnRlcihldmVudC5pdGVtLmNvdW50LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZWQ6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNvdW50ZXIoZXZlbnQuaXRlbS5jb3VudCwgZXZlbnQucGFnZS5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5uZXh0QnRuLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2Fyb3VzZWwudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcmV2QnRuLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2Fyb3VzZWwudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5uZXh0QnRuLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByZXZCdG4ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoJHNsaWRlckhlYWRlcik7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gaW1wb3J0ICdvd2wuY2Fyb3VzZWwnO1xuaW1wb3J0IEFwcCBmcm9tICd+c2NyaXB0cy9jb21tb24vYXBwJztcbmltcG9ydCAnLi90ZW1wbGF0ZS1jYXJvdXNlbC5zY3NzJztcblxuY29uc3QgJHRlbXBhbHRlQ2Fyb3VzZWwgPSAkKCcuanMtdGVtcGxhdGUtY2Fyb3VzZWwnKTtcbmlmICgkdGVtcGFsdGVDYXJvdXNlbC5sZW5ndGggPiAwKSB7XG4gICAgKChfcm9vdCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxmID0ge1xuICAgICAgICAgICAgY2Fyb3VzZWw6IF9yb290LmZpbmQoJy5vd2wtY2Fyb3VzZWwnKSxcbiAgICAgICAgICAgIG5leHRCdG46IF9yb290LmZpbmQoJy5qcy1uYXYtbmV4dCcpLFxuICAgICAgICAgICAgcHJldkJ0bjogX3Jvb3QuZmluZCgnLmpzLW5hdi1wcmV2JyksXG4gICAgICAgIH07XG4gICAgICBcbiAgICAgICAgc2VsZi5jYXJvdXNlbC5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICBydGw6IEFwcC5pc1J0bCxcbiAgICAgICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBpdGVtczogNCxcbiAgICAgICAgICAgIG1hcmdpbjogMjAsXG4gICAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAgICAgMDogeyBpdGVtczogMSB9LFxuICAgICAgICAgICAgICAgIDQ4MDogeyBpdGVtczogMiB9LFxuICAgICAgICAgICAgICAgIDc2ODogeyBpdGVtczogMyB9LFxuICAgICAgICAgICAgICAgIDEwMjQ6IHsgaXRlbXM6IDQgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLm5leHRCdG4uY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5jYXJvdXNlbC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wcmV2QnRuLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuY2Fyb3VzZWwudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH0pKCR0ZW1wYWx0ZUNhcm91c2VsKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBBcHAgZnJvbSAnfnNjcmlwdHMvY29tbW9uL2FwcCc7XG5cbmltcG9ydCAnLi90ZW1wbGF0ZS1saXN0LnNjc3MnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBQYXJhbGxheE9uTW91c2UgZnJvbSAnfnNjcmlwdHMvY29tcG9uZW50cy9wYXJhbGxheC1vbi1tb3VzZSc7XG5pbXBvcnQgJy4vdGVtcGxhdGUtcGFyYWxsYXgtbW91c2Uuc2Nzcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXBhcmFsbGF4LW9uLW1vdXNlJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBuZXcgUGFyYWxsYXhPbk1vdXNlKGVsZW1lbnQpO1xuICAgIH0pO1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUGFyYWxsYXhPblNjcm9sbCBmcm9tICd+c2NyaXB0cy9jb21wb25lbnRzL3BhcmFsbGF4LW9uLXNjcm9sbCc7XG5pbXBvcnQgJy4vdGVtcGxhdGUtcGFyYWxsYXgtc2Nyb2xsLnNjc3MnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1wYXJhbGxheC1vbi1zY3JvbGwnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIG5ldyBQYXJhbGxheE9uU2Nyb2xsKGVsZW1lbnQpO1xuICAgIH0pO1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqINCa0L7QvNC/0L7QvdC10L3RgiDQvtCx0ZHRgNGC0LrQsCDQtNC70Y8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lINC4INGE0L7RgNC80LjRgNC+0LLQsNC90LjRjyDQvtGH0LXRgNC10LTQuFxuICpcbiAqIEV4YW1wbGU6XG4gKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDb21wb25lbnQuYWRkKGZ1bmN0aW9uTmFtZSk7XG4gKlxuICogQG1ldGhvZCB7eyBhZGR9fVxuICovXG5jb25zdCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDb21wb25lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHNlbGYgPSB7XG4gICAgICAgIGNhbGxiYWNrczogW10sXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINC00L7QsdCw0LLQu9GP0LXQvCDQvdC+0LLRi9C5INC60L7Qu9Cx0Y3QuiDQsiDQvtGH0LXRgNC10LTRjFxuICAgICAqIEBwYXJhbSB7e2NhbGxiYWNrOiBmdW5jdGlvbn19IGNhbGxiYWNrXG4gICAgICovXG4gICAgY29uc3QgYWRkID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIHNlbGYuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBzZWxmLmNhbGxiYWNrcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50KCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaW5pdCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGluaXQpO1xuXG4gICAgLy8gUFVCTElDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGFkZCxcbiAgICB9KTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RBbmltYXRpb25GcmFtZUNvbXBvbmVudDtcbiIsImltcG9ydCB7IG1lcmdlRGVlcCB9IGZyb20gJ35zY3JpcHRzL2Jhc2UvdXRpbHMnO1xuaW1wb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZUNvbXBvbmVudCBmcm9tICd+c2NyaXB0cy9iYXNlL3JlcXVlc3QtYW5pbWF0aW9uLWZyYW1lLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFsbGF4T25Nb3VzZSB7XG4gICAgY29uc3RydWN0b3IoX3Jvb3QsIF9vcHRpb25zKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IF9yb290O1xuICAgICAgICB0aGlzLmltZ3MgPSBbLi4udGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhcmFsbGF4LW9uLW1vdXNlXScpXTtcbiAgICAgICAgdGhpcy5wb3MgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wb3NDdXJyID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucm9vdFNpemUgPSB7XG4gICAgICAgICAgICB4OiB0aGlzLnJvb3QuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICB5OiB0aGlzLnJvb3QuY2xpZW50SGVpZ2h0LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAga29lZjogMC4zLFxuICAgICAgICAgICAgZnJpY3Rpb246IDAuMSxcbiAgICAgICAgICAgIGludmVyc2lvbjogdHJ1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldHRpbmdzID0gbWVyZ2VEZWVwKHRoaXMuZGVmYXVsdHMsIF9vcHRpb25zKTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLnJlc2l6ZSgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5yZXNpemUoKTtcbiAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGYucm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNlbGYucG9zID0ge1xuICAgICAgICAgICAgICAgIHg6IChldmVudC5vZmZzZXRYIC0gKHNlbGYucm9vdFNpemUueCAvIDIpKSAqIHNlbGYuc2V0dGluZ3Mua29lZixcbiAgICAgICAgICAgICAgICB5OiAoZXZlbnQub2Zmc2V0WSAtIChzZWxmLnJvb3RTaXplLnkgLyAyKSkgKiBzZWxmLnNldHRpbmdzLmtvZWYsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDb21wb25lbnQuYWRkKCgpID0+IHtcbiAgICAgICAgICAgIHNlbGYucmVuZGVyKHNlbGYuaW1ncywgc2VsZi5wb3NDdXJyLCBzZWxmLnNldHRpbmdzLmludmVyc2lvbik7XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldFggPSAodGhpcy5wb3MueCAtIHRoaXMucG9zQ3Vyci54KSAqIHRoaXMuc2V0dGluZ3MuZnJpY3Rpb247XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSAodGhpcy5wb3MueSAtIHRoaXMucG9zQ3Vyci55KSAqIHRoaXMuc2V0dGluZ3MuZnJpY3Rpb247XG4gICAgICAgIHRoaXMucG9zQ3Vyci54ICs9IChNYXRoLmFicyhvZmZzZXRYKSA+IDAuNSkgPyBvZmZzZXRYIDogMDtcbiAgICAgICAgdGhpcy5wb3NDdXJyLnkgKz0gKE1hdGguYWJzKG9mZnNldFkpID4gMC41KSA/IG9mZnNldFkgOiAwO1xuICAgIH1cblxuICAgIHJlbmRlcihpbWdzLCBwb3NDdXJyLCBpc0ludmVyc2lvbikge1xuICAgICAgICBpbWdzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlcHRoID0gKGVsZW1lbnQuZGF0YXNldC5kZXB0aCkgPyBlbGVtZW50LmRhdGFzZXQuZGVwdGggOiAxO1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gKGlzSW52ZXJzaW9uKSA/IC0xIDogMTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7cG9zQ3Vyci54ICogZGVwdGggKiBkaXJlY3Rpb259cHgsICR7cG9zQ3Vyci55ICogZGVwdGggKiBkaXJlY3Rpb259cHgsMClgO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNpemUoKSB7XG4gICAgICAgIHRoaXMucm9vdFNpemUgPSB7XG4gICAgICAgICAgICB4OiB0aGlzLnJvb3QuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICB5OiB0aGlzLnJvb3QuY2xpZW50SGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCBzY3JvbGxDb21wb25lbnQgZnJvbSAnfnNjcmlwdHMvYmFzZS9zY3JvbGwuY29tcG9uZW50JztcbmltcG9ydCB7IGdldEVsZW1lbnRDb29yZHMsIG1lcmdlRGVlcCB9IGZyb20gJ35zY3JpcHRzL2Jhc2UvdXRpbHMnO1xuaW1wb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZUNvbXBvbmVudCBmcm9tICd+c2NyaXB0cy9iYXNlL3JlcXVlc3QtYW5pbWF0aW9uLWZyYW1lLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFsbGF4T25TY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKF9yb290LCBfb3B0aW9ucykge1xuICAgICAgICB0aGlzLnJvb3QgPSBfcm9vdDtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwLFxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmltZ3MgPSBbLi4udGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhcmFsbGF4LW9uLXNjcm9sbF0nKV07XG4gICAgICAgIHRoaXMucG9zID0gMDtcblxuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgZnJpY3Rpb246IDAuMSxcbiAgICAgICAgICAgIGludmVyc2lvbjogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG1lcmdlRGVlcCh0aGlzLmRlZmF1bHRzLCBfb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi5yZXNpemUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYucmVzaXplKCk7XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDb21wb25lbnQuYWRkKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghKHNjcm9sbCA8IHNlbGYuaW50ZXJ2YWwuc3RhcnQgfHwgc2Nyb2xsID4gc2VsZi5pbnRlcnZhbC5lbmQpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5yZW5kZXIoc2VsZi5pbWdzLCBzZWxmLnBvcywgc2VsZi5zZXR0aW5ncy5pbnZlcnNpb24pO1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsID0gc2Nyb2xsQ29tcG9uZW50LmN1cnJlbnQoKTtcbiAgICAgICAgdGhpcy5wb3MgPSAoc2Nyb2xsIC0gdGhpcy5pbnRlcnZhbC5zdGFydCkgLyB0aGlzLmludGVydmFsLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZW5kZXIoaW1ncywgcG9zQ3VyciwgaXNJbnZlcnNpb24pIHtcbiAgICAgICAgY29uc3Qgcm9vdEhlaWdodCA9IHRoaXMucm9vdC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGltZ3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwdGggPSAoZWxlbWVudC5kYXRhc2V0LmRlcHRoKSA/IGVsZW1lbnQuZGF0YXNldC5kZXB0aCA6IDE7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSAoaXNJbnZlcnNpb24pID8gMSA6IC0xO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQgLSByb290SGVpZ2h0O1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKCR7cG9zQ3VyciAqIG9mZnNldCAqIGRlcHRoICogZGlyZWN0aW9ufXB4KWA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgY29uc3Qgcm9vdEhlaWdodCA9IHRoaXMucm9vdC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHJvb3RPZmZzZXRUb3AgPSBnZXRFbGVtZW50Q29vcmRzKHRoaXMucm9vdCkudG9wO1xuICAgICAgICBjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHJvb3RFbmQgPSByb290T2Zmc2V0VG9wICsgcm9vdEhlaWdodDtcblxuICAgICAgICB0aGlzLmludGVydmFsLnN0YXJ0ID0gcm9vdE9mZnNldFRvcCAtIHNjcmVlbkhlaWdodDtcbiAgICAgICAgdGhpcy5pbnRlcnZhbC5lbmQgPSByb290RW5kO1xuICAgICAgICB0aGlzLmludGVydmFsLmxlbmd0aCA9IHRoaXMuaW50ZXJ2YWwuZW5kIC0gdGhpcy5pbnRlcnZhbC5zdGFydDtcbiAgICB9XG59XG4iLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdvd2wuY2Fyb3VzZWwnO1xuLy8gaW1wb3J0ICdzaW1wbGViYXInO1xuLy8gaW1wb3J0ICcuL2Jhc2UvcG9seWZpbGxzLmpzJztcblxuaW1wb3J0ICd+c3R5bGVzL2FwcC5zY3NzJzsgXG5cbi8qKlxuICogSW1wb3J0IGNvbW1vbiBzY3JpcHRzXG4gKi9cbmltcG9ydCAnfnNjcmlwdHMvY29tbW9uJztcblxuLyoqXG4gKiBJbXBvcnQgYmxvY2tzXG4gKi9cblxuaW1wb3J0ICd+YmxvY2tzL21haW4tbWVudS9tYWluLW1lbnUnO1xuXG4vLyBpbXBvcnQgJ35ibG9ja3MvdGVtcGxhdGUtbWFzb25yeS90ZW1wbGF0ZS1tYXNvbnJ5JzsgXG5pbXBvcnQgJ35ibG9ja3MvdGVtcGxhdGUtbGlzdC90ZW1wbGF0ZS1saXN0JztcbmltcG9ydCAnfmJsb2Nrcy90ZW1wbGF0ZS1jYXJvdXNlbC90ZW1wbGF0ZS1jYXJvdXNlbCc7XG5pbXBvcnQgJ35ibG9ja3MvdGVtcGxhdGUtcGFyYWxsYXgtc2Nyb2xsL3RlbXBsYXRlLXBhcmFsbGF4LXNjcm9sbCc7XG5pbXBvcnQgJ35ibG9ja3MvdGVtcGxhdGUtcGFyYWxsYXgtbW91c2UvdGVtcGxhdGUtcGFyYWxsYXgtbW91c2UnO1xuXG5pbXBvcnQgJ35ibG9ja3Mvc2xpZGVyLWhlYWRlci9zbGlkZXItaGVhZGVyJztcblxuaW1wb3J0ICd+YmxvY2tzL2hvbWVwYWdlLXRleHQtbWFpbi9ob21lcGFnZS10ZXh0LW1haW4nO1xuaW1wb3J0ICd+YmxvY2tzL2hvbWVwYWdlLXRleHQtYWRkaXRpb25hbC9ob21lcGFnZS10ZXh0LWFkZGl0aW9uYWwnO1xuXG5pbXBvcnQgJ35ibG9ja3MvcHJvZHVjdC1saXN0LWl0ZW0vcHJvZHVjdC1saXN0LWl0ZW0nO1xuaW1wb3J0ICd+YmxvY2tzL3Byb2R1Y3Qtd2lkZ2V0LWNhcm91c2VsL3Byb2R1Y3Qtd2lkZ2V0LWNhcm91c2VsJztcbmltcG9ydCAnfmJsb2Nrcy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0Jztcbi8vIGltcG9ydCAnfmJsb2Nrcy9wcm9kdWN0LXNvcnRpbmcvcHJvZHVjdC1zb3J0aW5nJztcbi8vIGltcG9ydCAnfmJsb2Nrcy9wcm9kdWN0LWZpbHRlci9wcm9kdWN0LWZpbHRlcic7XG4vLyBpbXBvcnQgJ35ibG9ja3MvcHJvZHVjdC1jb21wYXJlL3Byb2R1Y3QtY29tcGFyZSc7XG4vLyBpbXBvcnQgJ35ibG9ja3MvcHJvZHVjdC1zaG93L3Byb2R1Y3Qtc2hvdyc7XG5cbmltcG9ydCAnfmJsb2Nrcy9nYWxsZXJ5LXdpZGdldC1jYXJvdXNlbC9nYWxsZXJ5LXdpZGdldC1jYXJvdXNlbCc7XG5pbXBvcnQgJ35ibG9ja3MvZ2FsbGVyeS13aWRnZXQtZ3JpZC9nYWxsZXJ5LXdpZGdldC1ncmlkJztcbi8vIGltcG9ydCAnfmJsb2Nrcy9nYWxsZXJ5LWFsYnVtcy9nYWxsZXJ5LWFsYnVtcyc7XG4vLyBpbXBvcnQgJ35ibG9ja3MvZ2FsbGVyeS1zaG93L2dhbGxlcnktc2hvdyc7XG5cbmltcG9ydCAnfmJsb2Nrcy9pbnN0YWdyYW0td2lkZ2V0L2luc3RhZ3JhbS13aWRnZXQnO1xuaW1wb3J0ICd+YmxvY2tzL2Jhbm5lci13aWRnZXQvYmFubmVyLXdpZGdldCc7XG5cbi8vIGltcG9ydCAnfmJsb2Nrcy9wdWJsaWNhdGlvbi1saXN0L3B1YmxpY2F0aW9uLWxpc3QnO1xuXG5pbXBvcnQgJ35ibG9ja3MvcmV2aWV3cy13aWRnZXQvcmV2aWV3cy13aWRnZXQnO1xuLy8gaW1wb3J0ICd+YmxvY2tzL3Jldmlld3MtbGlzdC9yZXZpZXdzLWxpc3QnO1xuXG4vLyBpbXBvcnQgJ35ibG9ja3Mvc3Vic2VjdGlvbnMvc3Vic2VjdGlvbnMnO1xuXG5pbXBvcnQgJ35ibG9ja3MvY2FydC13aWRnZXQvY2FydC13aWRnZXQnO1xuXG4vLyBpbXBvcnQgJ35ibG9ja3MvcGFnaW5hdGlvbi9wYWdpbmF0aW9uJztcblxuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICAgY29uc3Qgc3RyID0gYGxpbmsgdG8gZG9jcyBodHRwOi8vZnJvbnRlbmQtZG9jcy5kZXYuZGFydmlucy5ydS9kb2NzL2dldC1zdGFydGVkLmh0bWxgO1xuICAgIGNvbnNvbGUubG9nKHN0cik7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=