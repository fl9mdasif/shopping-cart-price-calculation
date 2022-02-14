// iPhone 11 Silicone Case - Black


function updateProductNumber(product, price, isIncreasing) {

    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    //calculate total
    calculateTotal();
}


//function calculate total
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt(productInput.value);
    return phoneNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = tax + subTotal;

    // update sub-total 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}


// for plus button 
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);

})

// for minus button
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);

})

// for i phone 
// for plus button 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);

})
// for minus button 
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);

})