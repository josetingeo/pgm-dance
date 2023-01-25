let username = document.getElementById("name");
let password = document.getElementById("pwd");
let passwordconfirm =  document.getElementById("pwdcfm");

function validate(){
if (username.value == ""){
    alert("Username cannot be blank");
    return false;
}
else if(password.value == ""){
    alert("Password cannot be blank");
    return false;
}
else if(password.value.length<8){
    alert("Minimum password length is 8 characters")
    return false;
}  
else if(passwordconfirm.value == ""){
    alert("Password cannot be blank");
    return false;
}
else if(passwordconfirm.value.length<8){
    alert("Minimum password length is 8 characters")
    return false;
}
}