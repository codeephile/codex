import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/myapp/products/");
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div><br/><br/>
      <section id='product'>
        <div id="product-container">
          {error ? (
            <p>{error}</p>
          ) : (
            products.map((product) => (
              <div className="product" key={product.id}>
                <h2>{product.title}</h2>
                <img
                  src={`http://127.0.0.1:8000${product.image}`}
                  alt={product.title}
                  style={{ width: "100px" }}
                />
                <p>Price: ${product.price}</p>
                <p>{product.description}</p>
              </div>
            ))
          )}
        </div><br/>
      </section>
    </div>
  );
};

export default ProductList;
