  //Code for Sign Up button 
  document.getElementById("signUpButton").addEventListener("click", function routenewUser(e) {
    e.preventDefault()
    window.location = "/newUser.html"; 
  });

  //Code for Sign In button
  document.getElementById("form1").addEventListener("submit", function routenewUser(e) {
    e.preventDefault()
    var username = document.getElementById('usrname').value;
    var password = document.getElementById('pwd').value;
    var import_password = localStorage.getItem(username);
    
    if (import_password!==null){;
      if (import_password===password){;
        window.location = "/home.html";
        console.log("hi");  
      }
      else{
        alert("Invalid login");
      }
    }
      else{
        alert("Invalid login");
      }  
  });
