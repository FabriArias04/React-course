import ItemCount from "./ItemCount";
import { Link } from "react-router-dom"
import { useState, useContext } from "react";
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
  const [unidades, setUnidades] = useState(0);
  const { addToCart, getProductQuantity } = useContext(CartContext);

  const prueba = (numero) => {
    setUnidades(numero);
    addToCart(item, numero);
  };
  const quantity = getProductQuantity(item.id);
  return (
      <div>
        <div className='col-6'>
          <img fluid src={item.img} alt={item.nombre} />
        </div>
        <div>
          <h2>{item.nombre}</h2>
          <p>${item.precio}</p>
          <button onClick={addToCart}>Agregar</button>
        </div>
        {unidades === 0 ? (
                    item.stock === 0 ? (
                        <h1>No tiene stock</h1>
                    ) : (
                        <ItemCount prueba={prueba} stock={item.stock} initial={quantity}/>
                    )
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}
      </div>
  );
};

export default ItemDetail;