function totalSum() {
    //connection with inputs
    var price = document.myForm.price.value;
    var quantity = document.myForm.quantity.value;
    var discount = document.myForm.discout.value;
    var vat = document.myForm.vat.value;
    //calculations
    var total = price * quantity;
    var discountAmount = total - (total * discount / 100);
    var grandTotal = discountAmount + (discountAmount * vat / 100);
    //connect afterVatAmount with the last'number'input
    document.myForm.totalForm.value = grandTotal;
    //print to the Result container
    document.getElementById("Result").innerHTML =
        "<div class='Element'>Total : £" + total +
        "<br>" + "Discount amount : £" + (total * discount / 100) +
        "<br>" + "Total after Discount : £" + discountAmount +
        "<br>" + "VAT Amount: £" + (discountAmount * vat / 100) +
        "<br>" + "Grand Total : £" + grandTotal;
}


