import React, { useEffect, useState } from "react";
import Card from "./Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let url = "http://localhost:5000/api/products/getAllProducts";
    const data = await fetch(url);
    const parsedData = await data.json();

    setProducts(parsedData);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-3" key={product._id}>
            <Card
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image[0]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
