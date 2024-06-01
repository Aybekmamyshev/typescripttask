"use strict";
const totalPrice = ({ price, discount, isInstallment, months }) => {
    let priceTotal = price * (1 - discount / 100);
    if (isInstallment) {
        return priceTotal / months;
    }
    return priceTotal;
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: false, months: 12 });
console.log(price);
