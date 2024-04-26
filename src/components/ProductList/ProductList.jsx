import { useState } from 'react';
import './styles.css';
import { products } from './data';
import Button from '../Button/Button';

function ProductList() {
  const [chosenProducts, setChosenProducts] = useState([]);

  const productsArray = products.map((product) => {
    return (
      <div key={product.id} className="list-entry">
        <p>{product.name}</p>
        <Button
          name="Add"
          onButtonClick={() => {
            addProduct(product.id);
          }}
        />
        <Button
          name="Remove"
          onButtonClick={() => {
            removeProduct(product.id);
          }}
        />
      </div>
    );
  });

  const addProduct = (id) => {
    let searchedEl = products.find((product) => {
      return product.id === id;
    });
    setChosenProducts((prevProducts) => [...prevProducts, searchedEl]);
  };

  const removeProduct = (id) => {
    let  filteredProducts = chosenProducts.filter((selectedItems)=>selectedItems.id !== id)

    setChosenProducts(filteredProducts)
  };

  const selectedItems = chosenProducts.map((product) => {
    return (
      <p key={product.id} className="list-entry">
        {product.name}
      </p>
    );
  });

  return (
    <div className="products-list-wrapper">
      <h4>Product List:</h4>
      <div className="product-list">{productsArray}</div>
      <h4>Selected Product:</h4>
      <div className="selected-products">{selectedItems}</div>
    </div>
  );
}

export default ProductList;
