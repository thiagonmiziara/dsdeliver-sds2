import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api";
import { OrderLocationdata, Product } from "./types";
import OrderLocation from "./OrderLocation";
import ProductsList from "./ProductsList";
import StepsHeadaer from "./StepsHeadaer";
import "./styles.css";

const Orders = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();
   
  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeadaer />
      <ProductsList products={products} />
      <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
    </div>
  );
};

export default Orders;
