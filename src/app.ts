//classes
class Invoice {
constructor(
client:string,
details:string,
amount:number,

){}
format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
}

}

const invOne = new Invoice('mario','work on the website', 250 )
const invTwo = new Invoice('luigi','work on the app', 300 )

let invoices:Invoice[]= [];

invoices.push(invOne)
invoices.push(invTwo)


const form = document.querySelector('.new-item-form') as HTMLFormElement //클래스로 가져옴//

//inputs
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