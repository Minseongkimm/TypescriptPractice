"use strict";
//classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the website', 250);
var invTwo = new Invoice('luigi', 'work on the app', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
var form = document.querySelector('.new-item-form'); //클래스로 가져옴//
//inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
