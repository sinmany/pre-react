import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router";

export default function Product() {
  const [products, setProducts] = React.useState([]);
  console.log(products);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      ))}
    </div>
  );
}
