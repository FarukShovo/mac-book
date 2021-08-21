console.log('Bismillahir rahmanir Rahim');



document.getElementById('base-memory').addEventListener('click', function () {
    const memoryCost = document.getElementById('extra-memory-cost');
    const memoryCostText = memoryCost.innerText;
    const memoryCostAmount = 0;
    memoryCost.innerText = memoryCostAmount;
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);
    totalPrice.innerText = totalPriceAmount + memoryCostAmount;

})

document.getElementById('16gb-extra').addEventListener('click', function () {
    const grandTotal = document.getElementById('grand-total');
    const grandTotalText = grandTotal.innerText;
    const grandTotalAmount = parseFloat(grandTotalText);
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);

    const memoryCost = document.getElementById('extra-memory-cost');
    let memoryCostText = memoryCost.innerText;
    const memoryCostAmount = 180;
    memoryCost.innerText = memoryCostAmount;

    totalPrice.innerText = memoryCostAmount + totalPriceAmount;

    grandTotal.innerText = grandTotalAmount + memoryCostAmount



})

// Storage

document.getElementById('base-storage').addEventListener('click', function () {
    const baseStorageCost = 0;
    const storageCost = document.getElementById('extra-storage-cost');
    const storageCostText = storageCost.innerText;
    const storageCostAmount = parseFloat(storageCostText);
    storageCost.innerText = baseStorageCost;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);


    totalPrice.innerText = totalPriceAmount + baseStorageCost;
})

//extra storage

document.getElementById('extra-512gb').addEventListener('click', function () {
    const extra512gbStorageCost = 100;
    const storageCost = document.getElementById('extra-storage-cost');
    const storageCostText = storageCost.innerText;
    const storageCostAmount = parseFloat(storageCostText);
    storageCost.innerText = extra512gbStorageCost;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);

    //grand total
    const grandTotal = document.getElementById('grand-total');
    const grandTotalText = grandTotal.innerText;
    const grandTotalAmount = parseFloat(grandTotalText);
    grandTotal.innerText = grandTotalAmount + extra512gbStorageCost;

    totalPrice.innerText = totalPriceAmount + extra512gbStorageCost;
})

//extra 1TB
document.getElementById('extra-1tb').addEventListener('click', function () {
    const extra1tbStorageCost = 180;
    const storageCost = document.getElementById('extra-storage-cost');
    const storageCostText = storageCost.innerText;
    const storageCostAmount = parseFloat(storageCostText);
    storageCost.innerText = extra1tbStorageCost;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);

    //grand total
    const grandTotal = document.getElementById('grand-total');
    const grandTotalText = grandTotal.innerText;
    const grandTotalAmount = parseFloat(grandTotalText);
    grandTotal.innerText = grandTotalAmount + extra1tbStorageCost;
    totalPrice.innerText = totalPriceAmount + extra1tbStorageCost;
})

//delivery cost free

document.getElementById('defult-delivery-cost').addEventListener('click', function () {
    //console.log('voss delivery paisi see you not for mind')
    const freeDelivery = 0;
    const deliveryCost = document.getElementById('delivary-charge');
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCostAmount = parseFloat(deliveryCostText);
    deliveryCost.innerText = freeDelivery;
})

//with delivery cost 

document.getElementById('delivery-cost').addEventListener('click', function () {
    //console.log('voss delivery paisi see you not for mind')
    const deliveryCharge = 20;
    const deliveryCost = document.getElementById('delivary-charge');
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCostAmount = parseFloat(deliveryCostText);
    deliveryCost.innerText = deliveryCharge;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);

    //grand total
    const grandTotal = document.getElementById('grand-total');
    const grandTotalText = grandTotal.innerText;
    const grandTotalAmount = parseFloat(grandTotalText);
    grandTotal.innerText = grandTotalAmount + deliveryCharge;

    totalPrice.innerText = totalPriceAmount + deliveryCharge;
})

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
