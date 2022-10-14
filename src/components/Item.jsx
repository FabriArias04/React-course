import React, {Link} from "react";

const Item = (prod) => {
    return(
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src={prod.imagen} alt={prod.nombre}/>
                <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <h6 className="card-title">{prod.precio}</h6>
                    <Link to="/item:id" className="btn btn-primary">Detalles</Link>
                </div>
            </div>
        </>
    )
}

export default Item;