document.getElementById('withdraw-btn')
    .addEventListener('click', function (){


        const cashoutNumber = getValueFromInput('input-number');      

        if( cashoutNumber.length != 11 ){
            alert('Invalid Agent Number');
            return;
        }   
            
        const cashoutAmount = getValueFromInput('input-amount');    

        const balance = getBalance()
        const newBalance = balance - Number(cashoutAmount);
        console.log(newBalance)
        if( newBalance < 0 ){
            alert("Invalid Amount")
            return;
        }                
        const inputPin = document.getElementById('input-pin');
        const pinNumber = inputPin.value;
        if( pinNumber == "1212" ){            
            alert("Cashout successful");
            setBalance(newBalance)           
        }        
        else(
            alert("Invalid Pin")
        )

    })


    // document.getElementById('withdraw-btn')
    // .addEventListener('click', function (){
    // const inputNumber = document.getElementById('input-number');
    //     const cashoutNumber = inputNumber.value;
    //     console.log(cashoutNumber);

    //     if( cashoutNumber.length != 11 ){
    //         alert('Invalid Agent Number');
    //         return;
    //     }       

    //     const inputAmount = document.getElementById('input-amount');
    //     const cashoutAmount = inputAmount.value;
    //     console.log(cashoutAmount);

    //     const accountBalance = document.getElementById('balance');
    //     const balance = accountBalance.innerText;
    //     console.log(balance);

    //     const newBalance = Number(balance)-Number(cashoutAmount);
    //     console.log(newBalance)
    //     if( newBalance < 0 ){
    //         alert("Invalid Amount")
    //         return;
    //     }
                
    //     const inputPin = document.getElementById('input-pin');
    //     const pinNumber = inputPin.value;
    //     if( pinNumber == "1212" ){            
    //         alert("Cashout successful");
    //         accountBalance.innerText = newBalance;            
    //     }        
    //     else(
    //         alert("Invalid Pin")
    //     )

    // })