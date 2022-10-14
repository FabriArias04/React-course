import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
      <div>
        <div className='col-6'>
          <img fluid src={item.imagen} alt={item.nombre} />
        </div>
        <div>
          <h2>{item.nombre}</h2>
          <p>${item.precio}</p>
          <ItemCount stock={item.stock} initial={1} />
        </div>
      </div>
  );
};

export default ItemDetail;