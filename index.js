//console.log('funguju');

/*
const goodbye = () => {
    let email__closingElm = document.querySelector('.email__closing');
    email__closingElm.textContent = 'Na shledanou';
}
*/

const goodbye = (name) => {
    let email__closingElm = document.querySelector('.email__closing');
    email__closingElm.textContent = 'Na shledanou ' + name;
}

const fillSubject = (subject) => {
    let email__subjectElm = document.querySelector('.email__subject');
    email__subjectElm.textContent = subject;
}

/*
const fillBody = (body) => {
    let email__bodyElm = document.querySelector('.email__body');
    email__bodyElm.textContent = body;
}
*/

const fillBody = (body, name) => {
    let email__bodyElm = document.querySelector('.email__body');
    email__bodyElm.textContent = body;

    goodbye(name);
}

const currencyList = { EUR: 24.47,  GBP: 28.09, USD: 24.81, BTC: 478637, };

const convertToCZK = (price, code) => {
    let currencyItem;

    if(code === Object.keys(currencyList)[0]) {
        currencyItem = currencyList.EUR;
    } else if (code === Object.keys(currencyList)[1]) {
        currencyItem = currencyList.GBP;
    } else if (code === Object.keys(currencyList)[2]) {
        currencyItem = currencyList.USD;
    } else if (code === Object.keys(currencyList)[3]) {
        currencyItem = currencyList.BTC;
    } else {
        return null;
    }

    return `${Math.round(price * currencyItem)} CZK`;
}