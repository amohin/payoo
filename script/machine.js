// machine --> input value

function getValueFromInput (id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}


// machine --> balance

function getBalance (){
    const accountBalance = document.getElementById('balance');
        const balance = accountBalance.innerText;
        return Number(balance);
}

// machine --> set balance
 function setBalance (value){
    const accountBalance =  document.getElementById('balance');
    accountBalance.innerText = value;
 }

 // machine id --> hide all --> show id
 function showOnly (id) {
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cashout');

    // hide all
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');

    // show selected 

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
 }