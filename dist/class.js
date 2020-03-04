var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cart = (function () {
    function Cart(user) {
        this.user = user;
        this.store = {};
    }
    Cart.prototype.put = function (id, project) {
        this.store[id] = project;
    };
    Cart.prototype.get = function (id) {
        return this.store[id];
    };
    return Cart;
}());
var PromotionCart = (function (_super) {
    __extends(PromotionCart, _super);
    function PromotionCart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PromotionCart.prototype.addPromotion = function () {
    };
    return PromotionCart;
}(Cart));
var cart1 = new Cart({ name: 'john' });
var cart2 = new Cart({ name: 'jay' });
var cart3 = new PromotionCart({ name: 'kk' });
cart3.addPromotion();
//# sourceMappingURL=class.js.map