import React, { useEffect, useState, useParams } from "react";
import ItemList from "./ItemList";
import { products } from "../mock/products";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const traerProductos = () => {
      return new Promise((res, rej) => {
        const prodFiltrados = products.filter(
          (prod) => prod.category === categoryName
        );
        const prod = categoryName ? prodFiltrados : products;
        setTimeout(() => {
          res(prod);
        }, 500);
      });
    };
    traerProductos()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
