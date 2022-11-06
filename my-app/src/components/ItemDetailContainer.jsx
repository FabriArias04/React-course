import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "../mock/products";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const mostrarProducto = () => {
      return new Promise((res, rej) => {
        const producto = products.find((prod) => prod.id === id);
        res(producto);
      });
    };
    mostrarProducto()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <main>
      <div>
        <ItemDetail item={item} />
      </div>
    </main>
  );
};

export default ItemDetailContainer;
