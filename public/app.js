"use strict";
// const anchor = document.querySelector('a')!;
// if(anchor){
// }
// console.log(anchor.href);
// const form = document.querySelector('form')! //! :이건 Null이 아니다!//
var form = document.querySelector('.new-item-form'); //클래스로 가져옴//
// console.log(form.children);
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
