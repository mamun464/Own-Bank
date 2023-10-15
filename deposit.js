document.getElementById("btn_submit").addEventListener("click", function () {
    const current_deposit_element = document.getElementById("deposit_amount");
    const current_deposit_amount_string = current_deposit_element.value;
    const current_deposit_amount = parseFloat(current_deposit_amount_string);
    // regex for check any alphabate present or not in text field
    const regex = /[a-zA-Z]/;

    current_deposit_element.value = "";

    if (regex.test(current_deposit_amount_string)) {
        alert("Please enter a valid amount");
        return;
    }




    // console.log(current_deposit_amount);

    const previous_deposit_total_text = document.getElementById("total_deposit");
    const previous_deposit_total_amount = parseFloat(previous_deposit_total_text.innerText);
    // console.log(previous_deposit_total_amount);
    const new_total_deposit_amount = previous_deposit_total_amount + current_deposit_amount;

    previous_deposit_total_text.innerText = new_total_deposit_amount;

    //balace add
    const previous_balance_text = document.getElementById("balance_total");
    const previous_balance_amount = parseFloat(previous_balance_text.innerText);

    const new_balance_amount = previous_balance_amount + current_deposit_amount;
    previous_balance_text.innerText = new_balance_amount;

});