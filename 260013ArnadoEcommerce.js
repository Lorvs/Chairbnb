function signIn() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email == "" || password == "") {
        alert("Please fill in all fields.");
    } else {
        alert("Sign in successful!");
    }
}


function signUp() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (name == "" || email == "" || password == "" || confirmPassword == "") {
        alert("Please fill in all fields.");
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters.");
    } else if (password != confirmPassword) {
        alert("Passwords do not match.");
    } else {
        alert("Account created successfully!");
    }
}


function zoomImage(image) {

    let modal = document.getElementById("imageModal");
    let zoomedImage = document.getElementById("zoomedImage");

    modal.style.display = "flex";
    zoomedImage.src = image.src;
}


function closeImage() {

    document.getElementById("imageModal").style.display = "none";
}


function inquireProduct(productName) {

    window.location.href =
        "260013ArnadoInquiry.html?product=" +
        encodeURIComponent(productName);
}


function sendInquiry() {

    let name = document.getElementById("inquiryName").value;
    let email = document.getElementById("inquiryEmail").value;
    let product = document.getElementById("product").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || product == "" || message == "") {

        alert("Please fill in all fields.");

    } else {

        let subject = "Chairbnb Furniture Inquiry";

        let body =
            "Name: " + name +
            "\nEmail: " + email +
            "\nFurniture: " + product +
            "\n\nMessage:\n" + message;

        window.location.href =
            "mailto:chairbnb@gmail.com?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(body);
    }
}


function addToCart(product) {

    alert(product + " has been added to your cart!");

}


function buyNow(product) {

    alert("You selected " + product + ". Please contact us to complete your order.");

}