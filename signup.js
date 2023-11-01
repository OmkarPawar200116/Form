function firstname(){
    let fname = document.getElementById('fname').value;

    let fnameRegex = /^[A-Z][a-zA-Z ]{4,14}$/;
    if(fnameRegex.test(fname)){
        document.getElementById('fname').style.border = "2px solid green"
        document.getElementById('fname-error').style.display = "none"
    }else{
        document.getElementById('fname').style.border = "2px solid red"
        document.getElementById('fname-error').innerHTML = "Name should contain 5-15 characters";
        document.getElementById('fname-error').style.color = "red"
    }
}

function username(){
    let uname = document.getElementById('uname').value;

    let unameRegex = /^[A-Za-z0-9 ]{5,12}$/;
    if(unameRegex.test(uname)){
        document.getElementById('uname').style.border = "2px solid green"
        document.getElementById('uname-error').style.display = "none"
    }else{
        document.getElementById('uname').style.border = "2px solid red"
        document.getElementById('uname-error').innerHTML = "Name should contain 5-12 characters";
        document.getElementById('uname-error').style.color = "red"
    }
}

function email(){
    let email = document.getElementById('mail').value;

    let emailRegex = /^.+@[^@]+\.(com|in)$/;
    if(emailRegex.test(email)){
        document.getElementById('mail').style.border = "2px solid green"
        document.getElementById('mail-error').style.display = "none"
    }else{
        document.getElementById('mail').style.border = "2px solid red"
        document.getElementById('mail-error').innerHTML = "Email should be a valid address, e.g. me@mydomain.com";
        document.getElementById('mail-error').style.color = "red"
    }
}

function password(){
    let pswd = document.getElementById('psw').value;

    let pswdRegex = /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[@*#].*).{8,20}/gm;
    if(pswdRegex.test(pswd)){
        document.getElementById('psw').style.border = "2px solid green"
        document.getElementById('psw-error').style.display = "none"
    }else{
        document.getElementById('psw').style.border = "2px solid red"
        document.getElementById('psw-error').innerHTML = "Password should alphanumeric(@,_and-are also allowed and between 8-20 charecters";
        document.getElementById('psw-error').style.color = "red"
    }
}

function tel(){
    let tel = document.getAnimations('mobno').value;

    let teRegex = /^[6-9]\d{9}$/;
    if(teRegex.test(tel)){
        document.getElementById('mobno').style.border = "2px solid green"
        document.getElementById('mobno-error').style.display = "none"
    }else{
        document.getElementById('mobno').style.border = "2px solid red"
        document.getElementById('mobno-error').innerHTML = "Phone number should be a valid indian Phone number (10 digits)";
        document.getElementById('mobno-error').style.color = "red"
    }
}

function pan(){
    let pan = document.getElementById('panno').value;

    let pannoRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if(pannoRegex.test(pan)){
        document.getElementById('panno').style.border = "2px solid green"
        document.getElementById('panno-error').style.display = "none"
    }else{
        document.getElementById('panno').style.border = "2px solid red"
        document.getElementById('panno-error').innerHTML = "Must be a valid panCard Number";
        document.getElementById('panno-error').style.color = "red"
    }
}