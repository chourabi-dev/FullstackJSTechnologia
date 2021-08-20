/**
 * 
    <input type="text" id="x"> <br> <br>
    <input type="text" id="y"> <br> <br>

    <button id="c"> = </button>

    <span id="res"></span>
 */

/*
    var xInput = document.getElementById('x');
    var yInput = document.getElementById('y');

    var xv = document.getElementById('xv');
    var yv = document.getElementById('yv');
    

    var calculerBTN = document.getElementById('c');
    var resElement = document.getElementById('res');


    /*events*/

    /*function testInput(value){
        return isNaN(value);
    }

    xInput.addEventListener('keyup', (event)=>{
        
        const value = event.target.value;
        if (testInput(value) === false ) {
            xv.innerHTML = value;
        }else{
            xv.innerHTML="please you need to put a number"
        }
    })

    yInput.addEventListener('keyup', (event)=>{
        
        const value = event.target.value;
        if (testInput(value) === false ) {
            yv.innerHTML = value;
        }else{
            yv.innerHTML="please you need to put a number"
        }
    })
    calculerBTN.addEventListener('click',()=>{
        const x = parseFloat(xInput.value);
        const y = parseFloat(yInput.value) ;


        resElement.innerHTML = ( x+y );
        
    })*/


    /** gallery **/

    /**
     *     <div>
        <img width="100%" id="imgBloc" src="" />
    </div>

    <button id="btn-previous">previous</button>
    <button id="btn-next">next</button>
     */

   /* var imgBloc = document.getElementById('imgBloc');
    var btnP = document.getElementById('btn-previous');
    var btnN = document.getElementById('btn-next');
    var gallery = document.getElementById('gallery');

    var images = [
        'https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
        'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg',
        'https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
    ]

    var currentIndex = 0;

    function initGallery(){
        imgBloc.setAttribute('src',images[currentIndex]);
    }

    initGallery();

    btnN.addEventListener('click',()=>{
        currentIndex++;
        /**
         * 0
         * 1
         * 2
         * 3 err
         

        gallery.style.opacity = '0';
        gallery.style.filter = "blur(5px)"


        setTimeout(() => {
            if (currentIndex == images.length) {
                currentIndex = 0;
                initGallery();
            }else{
                initGallery();
            }

            gallery.style.opacity = '1';
        }, 500);
        setTimeout(() => {
            gallery.style.filter = "blur(0px)"  
        }, 700);
    })



    btnP.addEventListener('click',()=>{
        currentIndex--;
        /**
         * -1 err
         * 0 **
         * 1
         * 2
         * 3 err
         

        if (currentIndex == -1) {
            currentIndex =( images.length -1 );
            initGallery();
        }else{
            initGallery();
        }
    })



    document.getElementById('body').addEventListener('keydown',(e)=>{

        switch (e.key) {
            case 'ArrowRight':
                btnN.click();
                break;
            case 'ArrowLeft':

                btnP.click();

                break;    
    
            default:
                break;
        }
    })
    
*/


//SELECTORS

// ID getElementById() // One HTML element
// getElementsByClassName  [ htmlElement ] => parcours !!
// getElementsByTagName [ htmlElement ]
// getElementsByName
/**
 * var ps = document.getElementsByClassName('my-para');

for (let i = 0; i < ps.length; i++) {
    const element = ps[i];

    element.style.color = "red";
    
}
 */


var form = document.getElementById('my-form');
var msg = document.getElementById('msg');
var messagesListElement = document.getElementById('messages');


var messages = [];

function formatDate(d){
    let year = d.getFullYear();
    let month = d.getMonth()+1;
    let day = d.getDate();

    let hours = d.getHours();
    let mins = d.getMinutes();



    return year+'/'+month+'/'+day+' '+hours+':'+mins;

    
}

function updateUi(){
    var tmp ='';

    messages.map((m)=>{ 
        tmp+='<li> <p>'+m.message+'<br>'+formatDate(m.date)+'</p> <li/>'
    })

    messagesListElement.innerHTML=tmp;
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const msgValue = msg.value;
    const message = {
        date: new Date(),
        message:msgValue
    }

    messages.push(message);
    updateUi()
})