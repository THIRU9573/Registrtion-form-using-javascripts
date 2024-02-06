function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate form fields
    var name = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;

    if (name === "" || mobile === "" || email === "") {
        errorPopup();
    } else {
        // Form is valid, show success popup
        openPopup();
    }
}

function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

function closePopup() {
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}

function errorPopup() {
    let popup = document.getElementById("errorpopup");
    popup.classList.add("error-popup");
}

function errorClosePopup() {
    let popup = document.getElementById("errorpopup");
    popup.classList.remove("error-popup");
}
