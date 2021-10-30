/* 

function (bill, people) {
    if (people < 0) {
        add error classes
    } else {
        calculate the tip total
        change the innterHTML of required tip totals
    }
}

*/

let totalPeople = 5;
let totalBill = 142.55;
let totalPercentage = 15;

const error = document.querySelector('.js-error-handle');
const peopleTotal = document.querySelector('.people-total');

const peopleTotalHandler = () => {
    if (this.event.target.value < 1) {
        error.style.display = 'block';
        peopleTotal.style.outline = '2px solid tomato';
    } else {
        error.style.display = 'none';
        peopleTotal.style.outline = 'none';

        totalPeople = this.event.target.value;
    }
}

const billHandler = () => {
    if (this.event.target.value > 0) {
        totalBill = this.event.target.value;
        calcTotal(totalBill, totalPeople, totalPercentage);
    }
}

const calcTotal = (bill, people, percent) => {
   
}