const displayMsg = (msg, id, colorName) => {
    document.getElementById(id).innerHTML = msg
    document.getElementById(id).style.color = colorName
}

const fnamevalidation = () => {
    const fname = document.getElementById("fname").value
    if (fname == "") {
        displayMsg('firstname is mandatory', 'fnameMsg', 'red')
        return false
    }
    else if (!fname.match(/^([A-Z])[a-zA-Z]+$/)) {
        displayMsg('invalid name', 'fnameMsg', 'red')
        return false
    }
    else if (fname.length <2) {
        displayMsg('firstname should be more than 2 letters', 'fnameMsg', 'red')
        return false
    }
    else {
        displayMsg('valid name', 'fnameMsg', 'green')
        return true
    }
}

const lnamevalidation = () => {
    const lname = document.getElementById("lname").value
    if (lname == "") {
        displayMsg('lastname is mandatory', 'lnameMsg', 'red')
        return false
    }
    else if (!lname.match(/^([A-Z])[a-zA-Z]+$/)) {
        displayMsg('invalid lastname', 'lnameMsg', 'red')
        return false
    }
    else if (lname.length <2) {
        displayMsg('firstname should be more than 2 letters', 'lnameMsg', 'red')
        return false
    }
    else {
        displayMsg('valid lastname', 'lnameMsg', 'green')
        return true
    }
}

const emailvalidation = () => {
    const email = document.getElementById("email").value
    if (email == "") {
        displayMsg('email is mandatory', 'emailMsg', 'red')
        return false
    }
    else if (!email.match(/^([a-z0-9])[a-z0-9\.\_]+\@([a-z])+\.([a-z])+$/)) {
        displayMsg('invalid email', 'emailMsg', 'red')
        return false
    }
    else if (email.length <= 3) {
        displayMsg('email should be more than 3 letters', 'emailMsg', 'red')
        return false
    }
    else {
        displayMsg('valid email', 'emailMsg', 'green')
        return true
    }
}

const pswvalidation = () => {
    const psw = document.getElementById("psw").value
    if (psw == "") {
        displayMsg('password is mandatory', 'pswMsg', 'red')
        return false
    }
    else if (!psw.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$_>!]).{8,100}$/)) {
        displayMsg('weak password & password should be like this: Abc@123# and must contain at least 8 character', 'pswMsg', 'red')
        return false
    }
    else {
        displayMsg('valid password', 'pswMsg', 'green')
        return true
    }
}

const cpswvalidation = () => {
    const psw = document.getElementById("psw").value
    const cpsw = document.getElementById("cpsw").value
    if (cpsw == "") {
        displayMsg('confirm password is mandatory', 'cpswMsg', 'red')
        return false
    }
    else if (cpsw !== psw) {
        displayMsg('Password and confirm password doesnot match', 'cpswMsg', 'red')
        return false
    }
    else {
        displayMsg('valid password', 'cpswMsg', 'green')
        return true
    }
}

const validForm=()=>{
    if(fnamevalidation() && lnamevalidation() && emailvalidation() && pswvalidation() && cpswvalidation())
    {
        return true
    }
    else{
        return false
    }
}
