import Produit from "./Produit";

function Highlights(){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-4">
                    <Produit title="custom produit" />
                </div>
                <div className="col-sm-4">
                    <Produit title="custom produit 2" />
                </div>
                <div className="col-sm-4">
                    <Produit title="custom produit 3" />
                </div>
                
            </div>

        </div>
    );
}


export default Highlights;