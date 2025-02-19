//show pass login
document.getElementById("password").addEventListener("input", function () {
    let a = this.value; // Lấy giá trị từ input

    if (a !== "") {
        document.getElementById("lock").style.display = "none"; // Ẩn icon khóa
        document.getElementById("hide").style.display = "block"; // Hiện icon hide
    } else {
        document.getElementById("lock").style.display = "block"; // Hiện lại icon khóa
        document.getElementById("hide").style.display = "none"; // Ẩn icon hide
    }
});

document.getElementById("hide").addEventListener("click", function(){
    let a= document.getElementById("password")
    a.type="text"
    this.style.display = "none"; // Ẩn "hide"
    document.getElementById("show").style.display = "block"; // Hiện "show"
});

document.getElementById("show").addEventListener("click", function(){
    let a= document.getElementById("password")
    a.type="password"
    this.style.display = "none"; // Ẩn "show"
    document.getElementById("hide").style.display = "block"; // Hiện lại "hide"
});


//show pass register
document.getElementById("password-dk").addEventListener("input", function(){
    let a = this.value;
    if(a!==""){
        document.getElementById("hide-dk").style.display="block";
        document.getElementById("lock-dk").style.display="none";
    }else{
        document.getElementById("hide-dk").style.display="none"
        document.getElementById("lock-dk").style.display="block";
    }
}
)
// kiểm tra xem nhập lại mật khẩu của người dùng
document.getElementById("confirm-password").addEventListener("input", function(){
    let b = this.value;
    let a = document.getElementById("password-dk").value;
    if(a===b&&a!==""){
        document.getElementById("true").style.display="block";
        document.getElementById("false").style.display="none";

    }else{
        document.getElementById("false").style.display="block";
        document.getElementById("true").style.display="none";
    }
});

function anHien(a) {
    let loginForm = document.getElementById("all");
    let registerForm = document.getElementById("register");

    if (a === "login") {
        // Ẩn form đăng nhập và hiện form đăng ký từ trái qua
        loginForm.style.transform = "translateX(-100%)";
        loginForm.style.opacity = "0";

        registerForm.style.transform = "translateX(0)";
        registerForm.style.opacity = "1";
    } else if (a === "register") {
        // Ẩn form đăng ký và hiện form đăng nhập từ phải qua
        loginForm.style.transform = "translateX(0)";
        loginForm.style.opacity = "1";

        registerForm.style.transform = "translateX(100%)";
        registerForm.style.opacity = "0";
        
    }
}



