function login() {
    let user = document.getElementById("user").value;
    let pwd = document.getElementById("pwd").value;
    if(user === "admin" && pwd === "hatdog"){
        alert("Successfully logged in");
    }else{
        alert("Invalid Credentials");
    }

}

