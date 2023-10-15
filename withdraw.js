document.getElementById("btn_withdraw").addEventListener("click", function () {
    const current_withdraw_element = document.getElementById("withdraw_amount_field");

    console.log(current_withdraw_element.value);

    // regex for check any alphabate present or not in text field
    const regex = /[a-zA-Z]/;


    if (regex.test(current_withdraw_element.value)) {
        alert("Please enter a valid amount");
        return;
    }


    const current_withdraw_amount = parseFloat(current_withdraw_element.value);
    // console.log(current_withdraw_amount);




    const previous_withdraw_total_text = document.getElementById("total_withdraw");
    const previous_withdraw_total_amount = parseFloat(previous_withdraw_total_text.innerText);

    const previous_balance_text = document.getElementById("balance_total");
    const previous_balance_amount = parseFloat(previous_balance_text.innerText);

    const new_total_withdraw_amount = previous_withdraw_total_amount + current_withdraw_amount;

    current_withdraw_element.value = "";


    // console.log(new_total_withdraw_amount);

    //balance subtracted from previous
    const new_balance_amount = previous_balance_amount - current_withdraw_amount;

    if (new_balance_amount < 0) {
        alert("Insufficient balance!");
        return;
    }
    previous_balance_text.innerText = new_balance_amount;
    previous_withdraw_total_text.innerText = new_total_withdraw_amount;
});