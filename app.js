let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

console.log("eyeicon" , eyeicon);
console.log("password" , password);

eyeicon.onclick = function () {
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "eye-open.png";
    }else {
        password.type = "password";
        eyeicon.src = "eye-close.png";
    }
}