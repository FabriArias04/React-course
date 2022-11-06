import { useContext } from "react";
import { CartContext } from './CartContext';

const Cart = () => {
    const { cart, deleteAll, deleteOne } = useContext(CartContext);

    if (cart.length === 0) {
        return <h1 className='h1-vacio'>Carrito vacío</h1>;
    }
    return (
        <div className="cart-container">
            {cart.map((prod) => (
                <div className="cart-detail" key={prod.id}>
                    <img src={prod.img} alt={prod.nombre} className="img-item" />
                    <div className="cart-detail-info">
                        <h2>{prod.nombre}</h2>
                        <h3>Cantidad: {prod.cantidad}</h3>
                        <h3>Precio: ${prod.precio}.-</h3>
                        <h4>Subtotal: ${prod.precio * prod.cantidad}.-</h4>
                    </div>
                    <button onClick={() => deleteOne(prod.id)}>Borrar producto</button>
                </div>
            ))}
            <button onClick={deleteAll}>Eliminar todo</button>
        </div>
    );
};

export default Cart;
