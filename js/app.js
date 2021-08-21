/* ---------------------------------------Function of getting elements-------------------------------- */
function getTotalPrice() {
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);
    return totalPriceAmount;

}
/* ---------------------------------------Function of getting elements-------------------------------- */
function getGrandTotal() {
    const grandTotal = document.getElementById('grand-total');
    const grandTotalText = grandTotal.innerText;
    const grandTotalAmount = parseFloat(grandTotalText);
    return grandTotalAmount;
}
/* ---------------------------------------Function of Calculation-------------------------------- */
function calculateTotalPrice() {
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const extraMemoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const extraStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const delivaryCharge = parseFloat(document.getElementById('delivary-charge').innerText);
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCost + delivaryCharge;
    document.getElementById('total-price').innerText = totalPrice;
    calculateGrandTotal();
}

function calculateGrandTotal() {
    const totalPrice = parseFloat(document.getElementById('total-price').innerText);
    document.getElementById('grand-total').innerText = totalPrice;
}
/* ---------------------------------------Memory button------------------------------------------------ */
document.getElementById('base-memory').addEventListener('click', function () {
    const memoryCost = document.getElementById('extra-memory-cost');
    const memoryCostText = memoryCost.innerText;
    const memoryCostAmount = 0;
    memoryCost.innerText = memoryCostAmount;
    calculateTotalPrice();

})
/* ---------------------------------------Extra Memory button------------------------------------------------ */
//16GB unifield memory
document.getElementById('16gb-extra').addEventListener('click', function () {

    const memoryCost = document.getElementById('extra-memory-cost');
    let memoryCostText = memoryCost.innerText;
    const memoryCostAmount = 180;
    memoryCost.innerText = memoryCostAmount;
    calculateTotalPrice();




})


/* --------------------------------------- for 256 GB SSD Storage button----------------------------------- */
document.getElementById('base-storage').addEventListener('click', function () {
    const baseStorageCost = 0;
    const storageCost = document.getElementById('extra-storage-cost');
    const storageCostText = storageCost.innerText;
    const storageCostAmount = parseFloat(storageCostText);
    storageCost.innerText = baseStorageCost;
    calculateTotalPrice();


})


/* --------------------------------------- for 512 GB SSD Storage button----------------------------------- */

document.getElementById('extra-512gb').addEventListener('click', function () {
    const extra512gbStorageCost = 100;
    const storageCost = document.getElementById('extra-storage-cost');
    const storageCostText = storageCost.innerText;
    const storageCostAmount = parseFloat(storageCostText);
    storageCost.innerText = extra512gbStorageCost;
    calculateTotalPrice();


})

/* --------------------------------------- for 1TB SSD Storage button----------------------------------- */
document.getElementById('extra-1tb').addEventListener('click', function () {
    const extra1tbStorageCost = 180;
    const storageCost = document.getElementById('extra-storage-cost');
    const storageCostText = storageCost.innerText;
    const storageCostAmount = parseFloat(storageCostText);
    storageCost.innerText = extra1tbStorageCost;
    calculateTotalPrice();

})


/* --------------------------------------- for free delivery cost button----------------------------------- */

document.getElementById('defult-delivery-cost').addEventListener('click', function () {

    const freeDelivery = 0;
    const deliveryCost = document.getElementById('delivary-charge');
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCostAmount = parseFloat(deliveryCostText);
    deliveryCost.innerText = freeDelivery;
    calculateTotalPrice();
})

/* --------------------------------------- for paid delivery cost button----------------------------------- */

document.getElementById('delivery-paid').addEventListener('click', function () {

    const deliveryCharge = 20;
    const deliveryCost = document.getElementById('delivary-charge');
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCostAmount = parseFloat(deliveryCostText);
    deliveryCost.innerText = deliveryCharge;
    //calculate total price
    calculateTotalPrice();

})
/* --------------------------- calculate grand total price after getting promo code------------------------- */
//
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const totalPrice = document.getElementById('total-price');
    const grandTotal = document.getElementById('grand-total');
    const grandTotalText = grandTotal.innerText;

    let totalPriceText = totalPrice.innerText;
    let totalPriceAmount = parseFloat(totalPriceText);

    if (promoInput.value == 'stevekaku') {

        const discountTotalAmount = totalPriceAmount * 0.2;
        const totalAmount = totalPriceAmount - discountTotalAmount;
        grandTotal.innerText = totalAmount;
    }

    promoInput.value = '';
})
