const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e);
    
    const password = e.target.elements.password.value;
    const email = e.target.elements.email.value;


    let users = localStorage.getItem("users");
    users = JSON.parse(users);
    console.log(users);

    if(users)
    {
        if(users[email])
        {
            if(users[email] == password)
            {
                alert("logged in");
                localStorage.setItem("logged", "true");
                location.href = "http://127.0.0.1:5500/frontent/";
                localStorage.setItem("email", email);
            }
            else
            {
                alert("Wrong password");
            }
        }
        else
        {
            setTimeout(() => {
                location.href = "http://127.0.0.1:5500/frontent/signup.html";
            }, 3000);
            alert("Please sign up first");
        }
    }
    else
    {   
        setTimeout(() => {
            location.href = "http://127.0.0.1:5500/frontent/signup.html";
        }, 3000);
        alert("Please sign up first");
    }
});