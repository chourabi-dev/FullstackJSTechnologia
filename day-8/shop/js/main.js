/**
 *                         <div class="mb-2">
                            <label for=""><strong>Keywords</strong></label>
                            <input type="text" class="form-control" id="query">
                        </div>

                        <div class="mb-2">
                            <label for=""><strong>Price</strong>  0$ - 1200$  </label>
                            <input type="range" class="form-control" id="price">
                        </div>
                        
                        <div class="mb-2">
                            <label for=""><strong>Keywords</strong></label>
                            <select class="form-control" id="category">
                                <option value="-1">Please choose a category</option>

                            </sele
 */
// HTML ELEMENT
var query = document.getElementById('query');
var price = document.getElementById('price');
var category = document.getElementById('category');
var listing = document.getElementById('listing');

var queryValue = '';
var priceValue = 0;
var categoryValue = '-1'
var moneySearch = 0;

// on change

query.addEventListener('keyup', (e) => { queryValue = e.target.value.trim(); searchFor(); });
price.addEventListener('change', (e) => { 
    
    priceValue = e.target.value; console.log(priceValue); searchFor(); 
    
    let searchPrice = ( (Number(priceValue) * maxPrice()) / 100  );

    moneySearch = searchPrice;

    console.log(budget);

    document.getElementById('budget').innerHTML =moneySearch+'$';


});
category.addEventListener('change', (e) => { categoryValue = e.target.value; console.log(categoryValue); searchFor(); });



var products = [
    { title: "Samsung A50", price: 700, category: '1', photoURL: 'https://images.samsung.com/is/image/samsung/africa-fr-galaxy-a50-a505-sm-a505fzwpxfe-frontwhite-152058840?$720_576_PNG$' },
    { title: "Iphone X", price: 1800, category: '1', photoURL: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-silver?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1579299535944' },
    { title: "Smart TV samsung 50", price: 3500, category: '2', photoURL: 'https://www.mega.tn/assets/uploads/img/pr_televiseurs/1599312648_921.jpg' },
    { title: "LG smart 50", price: 4000, category: '2', photoURL: 'https://m.media-amazon.com/images/I/71NP8sijeNL._AC_SY355_.jpg' },

];


var categories = [
    { id: '1', name: 'SMART PHONE' },
    { id: '2', name: 'TV' },

];

function initCategories() {
    let blocHTML = '<option value="-1">Please choose a category</option>';
    categories.map((c) => {
        blocHTML += '<option value="' + c.id + '">' + c.name + '</option>';
    })

    category.innerHTML = blocHTML;
}

initCategories();


function initListProducts() {
    console.log("new call");
    let blocHTML = '';

    products.map((p) => {
        blocHTML += '<div class="col-sm-4 mb-2">';

        blocHTML += '<div class="card">';
        blocHTML += '   <img src="' + p.photoURL + '" class="card-img-top" >';
        blocHTML += '   <div class="card-body">';
        blocHTML += '     <h5 class="card-title">' + p.title + '</h5>';
        blocHTML += '     <p class="card-text"> <strong>' + p.price + '$</strong><br/>' + p.category + ' </p>';

        blocHTML += '    </div>';
        blocHTML += '  </div>';

        blocHTML += '</div>';
    })

    listing.innerHTML = blocHTML;
}


function searchFor() {

    let blocHTML = '';

    products.map((p) => {


        if (p.title.toLowerCase().indexOf(queryValue.toLowerCase()) != -1) {
            if (p.price <= moneySearch ) {
                if (p.category == categoryValue && categoryValue != -1) {
                    blocHTML += '<div class="col-sm-4 mb-2">';
    
                    blocHTML += '<div class="card">';
                    blocHTML += '   <img src="' + p.photoURL + '" class="card-img-top" >';
                    blocHTML += '   <div class="card-body">';
                    blocHTML += '     <h5 class="card-title">' + p.title + '</h5>';
                    blocHTML += '     <p class="card-text"> <strong>' + p.price + '$</strong><br/>' + p.category + ' </p>';
    
                    blocHTML += '    </div>';
                    blocHTML += '  </div>';
    
                    blocHTML += '</div>';
                } else if(categoryValue == -1) {
                    blocHTML += '<div class="col-sm-4 mb-2">';
    
                    blocHTML += '<div class="card">';
                    blocHTML += '   <img src="' + p.photoURL + '" class="card-img-top" >';
                    blocHTML += '   <div class="card-body">';
                    blocHTML += '     <h5 class="card-title">' + p.title + '</h5>';
                    blocHTML += '     <p class="card-text"> <strong>' + p.price + '$</strong><br/>' + p.category + ' </p>';
    
                    blocHTML += '    </div>';
                    blocHTML += '  </div>';
    
                    blocHTML += '</div>';
                }
            }
        }
    })

    listing.innerHTML = blocHTML;
}


function maxPrice(){
    var max = 0;
    products.map((p)=>{
        if (p.price > max) {
            max = p.price
        }
    })

    return max;
}

initListProducts();



document.getElementById("max").innerHTML = maxPrice();