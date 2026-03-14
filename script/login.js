document.getElementById('login-btn')
.addEventListener('click', function(){
    const inputNumber = document.getElementById('input-number');
    const contactNumber = inputNumber.value;
    console.log(contactNumber)


    const pinNumber = document.getElementById('input-pin');
    const pin = pinNumber.value;
    console.log(pin);
    if( contactNumber == "01314764194" && pin == "1313" ){
        alert("login success");
        // window.location.replace("./home.html");
        window.location.assign("./home.html");
    }
    else{
        alert("login failed");
        return;
    }
})