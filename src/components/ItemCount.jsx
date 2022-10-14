import React, { useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(props.initial);
  const sumar = () => {
    count < props.stock && setCount(count + 1);
  };
  const restar = () => {
    count > props.initial && setCount(count - 1);
  };

  return (
      <div>
        <button disabled={count === props.stock} className='btn btn-primary' onClick={sumar}>
          +
        </button>
        <button disabled='true' className='btn btn-primary'>
          {count}
        </button>
        <button disabled={count === props.initial} className='btn btn-primary' onClick={restar}>
          -
        </button>
        <button className='btn btn-success'>
          <h6>Agregar al carrito</h6>
        </button>
      </div>
  );
};

export default ItemCount;
