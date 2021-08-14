// const anchor = document.querySelector('a')!;

// if(anchor){
// }

// console.log(anchor.href);


// const form = document.querySelector('form')! //! :이건 Null이 아니다!//
const form = document.querySelector('.new-item-form') as HTMLFormElement //클래스로 가져옴//
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber,

    )
})