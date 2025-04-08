// This is the code for the Form Validation Needed to see if the user has inputted the right information

// JScript for SignUp.html

document.getElementById("signupBtn").addEventListener("click", function(){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();

    if (!name || !email || !username) {
        alert("Please fill in the fields");
        return;
    }

    if (!email.endsWith(".com")){
        alert("Email must be valid");
        return;
    }

    sessionStorage.setItem("username", username);

    window.location.href = "index.html";
});

function validateForm() {

}




// Ending for SignUp.html