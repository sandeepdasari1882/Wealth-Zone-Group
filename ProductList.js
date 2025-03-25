import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9898/api/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="products">
      <h2>new arrival items</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img 
                src={product.image ? product.image : "https://via.placeholder.com/200"} 
                alt={product.name} 
              />
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <span className="tag">{product.tag}</span>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </section>
  );
};

export default ProductList;
