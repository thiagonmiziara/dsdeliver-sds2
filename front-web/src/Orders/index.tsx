import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api";
import ProductsList from "./ProductsList";
import StepsHeadaer from "./StepsHeadaer";
import "./styles.css";
import { Product } from "./types";

const Orders = () => {
  const [products, setProducts] = useState<Product[]>([]);
   
  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeadaer />
      <ProductsList products={products} />
    </div>
  );
};

export default Orders;
