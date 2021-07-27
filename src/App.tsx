import React from 'react';

import data from './mocks/products/products.json';
import {ProductList} from './components/products/list/ProductList';

function App() {
  return (
    <div className="page">
      <h1 className="page__title">Awesome Product List</h1>
      <ProductList products={data.products} />
    </div>
  );
}

export default App;
