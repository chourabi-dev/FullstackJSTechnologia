var btn = document.getElementById('btn');
var app = document.getElementById('my-app');

if (localStorage.getItem('mode')) {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
        app.classList.add("dark-mode")
    }else{
        app.classList.add("white-mode")
    }
}else{
  // ?  
}


btn.addEventListener('click',()=>{
   if (localStorage.getItem('mode') === null) {
    localStorage.setItem('mode','dark')
   }else{
       app.className ="";
       if (localStorage.getItem('mode') === 'dark') {
        localStorage.setItem('mode','white')
        app.classList.add("white-mode")
       }else{
        localStorage.setItem('mode','dark')
        app.classList.add("dark-mode")
       }
   }
})