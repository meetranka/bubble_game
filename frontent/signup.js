const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e);
    
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;


    let users = localStorage.getItem("users");
    if(users)
    {
        let u = JSON.parse(users);
        u[email] = password;
        localStorage.setItem("users", JSON.stringify(u));
    }
    else
    {
        let u = {};
        u[email] = password;
        localStorage.setItem("users", JSON.stringify(u));
    }
    localStorage.setItem("email", email);
    location.href = "http://127.0.0.1:5500/frontent/";
});