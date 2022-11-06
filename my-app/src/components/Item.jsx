import React from "react";
import {Link} from "react-router-dom"

const Item = ({ prod }) => {
    return(
        <>
            <div className="card card-item" style={{width: "18rem"}}>
                <img src={prod.img} alt={prod.nombre} className="img-item"/>
                <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <h6 className="card-title">{prod.precio}</h6>
                    <Link to={`/item/${prod.id}`} className="btn btn-primary">Detalles</Link>
                </div>
            </div>
        </>
    )
}

export default Item;