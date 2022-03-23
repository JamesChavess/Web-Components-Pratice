const btn = document.getElementById("btn");
btn.addEventListener('click', ()=> {
    emailValidation();
})

function emailValidation() {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let email = document.getElementById('email');
    console.log(email.value)
    val = regEx.test(email.value);
    if (val == false || email.value != '') {
        let error = document.getElementById('error')
        error.classList.remove('hide');
        email.classList.add('err');
    }else{
        const success = document.getElementById('success');
        success.classList.remove('hide')
    }
   }
