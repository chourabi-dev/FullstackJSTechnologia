function Produit(props){
    const title = props.title;

    return (
        <div>
            <div class="card"  >
                <img src="https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    );
}


export default Produit;