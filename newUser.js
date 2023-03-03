//Code for creating a new user
function newReg(){
    var regUsrname = document.getElementById('newUsrname').value;
    var regPwd = document.getElementById('newPwd').value;
    localStorage.setItem(regUsrname,regPwd);
    window.location = "/index.html";
    alert("New user created!!!\nPress Login page");
}

//Code for go to the index.html when click the Login Page button
function loginPage(){
    window.location = "/index.html";
}


