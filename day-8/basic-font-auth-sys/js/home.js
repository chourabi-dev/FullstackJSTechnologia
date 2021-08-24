// test auth
if (localStorage.getItem('token') == null ) {
    // not connected 
    // does not have an access token !!
    window.location = "signin.html";
}else{
    // make a call to the serevr to test the validity of the token
}


document.getElementById('sign-out').addEventListener('click',()=>{
    if( confirm('do you really want to sign out ?') ){
        localStorage.removeItem('token');
        window.location = "signin.html";
    }
})