document.getElementById("btn-submit").addEventListener("click", function () {
    const email = (document.getElementById("usernme-field")).value;
    const password = (document.getElementById("password-field")).value;

    if (email === "mamun@bank.com" && password === "12345") {
        window.location.href = "bank.html";
    } else {
        alert("Login failed");
    }
});