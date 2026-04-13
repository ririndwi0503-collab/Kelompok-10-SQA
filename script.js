function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (user === savedUser && pass === savedPass) {
        alert("Login berhasil!");
        
        // 🔥 Kriteria 9
        window.location.href = "home.html";
    } else {
        alert("Username atau password salah!");
    }
}
