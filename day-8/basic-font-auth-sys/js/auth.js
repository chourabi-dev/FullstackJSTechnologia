var username = document.getElementById("username");
var password = document.getElementById("password");

var form = document.getElementById("connect-form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const usernameValue = username.value;
    const passwordValue = password.value;

    // HTTP  = > server { username password } => res true false
    // admin admin
    if ( usernameValue === 'admin' && passwordValue == 'admin' ) {
        // reday to connect
        // genearte ACCESS TOKEN ?
        let token  = new Date().getTime();
        localStorage.setItem('token',token);
        // redirect to home !!!
        window.location = "home.html";

    }else{
        alert("Wrong username or password")
    }
    
})

