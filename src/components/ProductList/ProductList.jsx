import { useState } from 'react';
import './styles.css';
import { products } from './data';
import Button from '../Button/Button';

function ProductList() {
  const [selectProducts, setSelectProduct] = useState([]);

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
        <Button name="Remove" onButtonClick={() => {}} />
      </div>
    );
  });

  const addProduct = (id) => {
    let searchedEl = products.find((product) => {
      return product.id === id;
    });
    setSelectProduct(searchedEl);
    console.log(searchedEl);
    console.log(selectProducts);
  };

  return (
    <div className="products-list-wrapper">
      <h4>Product List:</h4>
      <div className="product-list">{productsArray}</div>
      <h4>Selected Product:</h4>
      <div className="selected-products"></div>
    </div>
  );
}

export default ProductList;
