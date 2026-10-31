function validate() {
    var name = document.getElementById("name").value.trim();
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();

    // 1. Name: alphabets only, at least 6 characters
    var namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(name) || name.length < 6) {
        alert("Name should contain only alphabets and must be at least 6 characters long.");
        return false;
    }

    // 2. Password: at least 6 characters
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // 3. Email: standard pattern name@domain.com
    var emailPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid E-mail id (example: name@domain.com).");
        return false;
    }

    // 4. Phone number: exactly 10 digits
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return false;
    }

    alert("Registration successful!");
    return true;
}