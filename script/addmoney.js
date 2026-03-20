document.getElementById('add-money-btn')
.addEventListener('click', function(){
    const selectBank = getValueFromInput('add-money-bank');
    console.log(selectBank);
    if( selectBank == "Select the bank"){
        alert("please select a bank");
        return;
    }

    // get bank account number
    const accno = getValueFromInput('add-money-number');
    console.log(accno);
    if( accno.length != 11 ){
        alert("invalid account number");
        return;
    }

    // get ammout

    const amount = getValueFromInput('amonut-add-money');
    console.log(amount);

    const newBalance = getBalance() + Number(amount);
    console.log(newBalance);

    const addMoneyPin = getValueFromInput('add-money-pin');
    console.log(addMoneyPin);
    if( addMoneyPin == 1212 ){
        alert(`Add money successfull From ${selectBank}`)
        setBalance(newBalance);
    }else{
        alert('Invalid Pin');
        return;
    }
})