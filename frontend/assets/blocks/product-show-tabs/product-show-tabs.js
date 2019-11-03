import App from '~scripts/common/app';
import resizeComponent from '~scripts/base/resize.component';
import '~scripts/components/tabs.jquery';
import './product-show-tabs.scss';

/**
 * PRODUCTS SHOW
 */
const $productsShowTabs = $('.product-show-tabs');
if ($productsShowTabs.length > 0) {
    (function productsShowTabs($root) {
        const $self = $root;
        const tabsMobileBreakpoint = 820;

        if ($self) {
            $self.tabs();

            resizeComponent.addMediaQuery({
                min: 0,
                max: tabsMobileBreakpoint,
                onEnter() {
                    $self.find('.tabs__content-item').each((index, element) => {
                        const $tab = $(element);
                        const tabId = $tab.data('tabId');
                        const tabNum = $tab.data('tabNum');
                        $tab.insertAfter(`.tabs__nav-item[data-tab-id="${tabId}"][data-tab-num="${tabNum}"]`);
                    });
                },
                onExit() {
                    $self.find('.tabs__content-item').each((index, element) => {
                        const $tab = $(element);
                        const tabId = $tab.data('tabId');
                        $tab.appendTo(`.tabs[data-tab-id="${tabId}"] > .tabs__content`);
                    });
                },
            });
        }
    }($productsShowTabs));
}
