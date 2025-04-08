window.addEventListner("DOMContentLoaded", () =>{
    const username = sessionStorage.getItem("username");

    if (username){
        document.getElementById("Welcome").innerText= 'Welcome, ${username}!';
    }

});