import './cart-widget.scss';

const CartWidget = (() => {
    const $self = $('.js-cart-widget');
    let timerAppCartAdd;

    /**
     * Добавляем товар в виджет корзины
     */
    const add = () => {
        $('html, body').animate({ scrollTop: 0 }, 500, 'linear', () => {
            if ($self.hasClass('is-show')) {
                clearTimeout(timerAppCartAdd);
            }
            $self.addClass('is-show');
            timerAppCartAdd = setTimeout(() => {
                $self.removeClass('is-show');
            }, 4000);
        });
    };


    return Object.freeze({
        add,
    });
})();

export default CartWidget;
