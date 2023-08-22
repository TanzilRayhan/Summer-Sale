let itemTotal = 0.00;
let discountCode = 200.00;
let finalPrice = 0.00;

function clickToPurchase(target) {
    const selectedArea = document.getElementById('selectedItems');
    const itemName = target.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedArea.appendChild(li)

    const itemPrice = target.parentNode.childNodes[3].innerText.split(" ")[0];
    itemTotal = parseFloat(itemTotal) + parseFloat(itemPrice);
    const totalPrice = document.getElementById('price').innerText = itemTotal;

    const finalPrice = target.parentNode.childNodes[3].innerText.split(" ")[0];
    final = parseFloat(itemTotal) + parseFloat(itemPrice);
    const finalTotal = document.getElementById('total').innerText = itemTotal;

    document.getElementById('purchase').removeAttribute('disabled');
}

 // COUPON 
function applyCoupon(target) {
    const couponField = document.getElementById('coupon-code');
    const coupon = couponField.value;
    if (coupon === 'SELL200') {
        const discountPrice = target.parentNode.childNodes[3].innerText.split(" ")[0];
        discountCode = parseFloat(discountCode);
        const discount = document.getElementById('discount').innerText = discountCode;
        if(itemTotal > 200){
            const finalTotal = document.getElementById('total').innerText = itemTotal - discountCode;
        }
        else{
            alert('Purchase More than 200 to apply coupon');
        }
    }
    else {
        alert('Invalid Coupon!! Try Again');
    }

}
