import React from 'react';
import {nanoid} from 'nanoid';

import {ProductsObject} from './../../../mocks/products/products.model';
import {ProductItem, ProductType} from './ProductItem';

import './styles/product-list.style.scss';

interface ProductListProps {
  products: ProductsObject[];
}

export const ProductList = ({products}: ProductListProps) => {
  return (
    <ul className="product-list">
      {products.map((product: ProductsObject) => {
        let productType: ProductType = 'default'
        if (product.new) productType = 'new';
        if (product.free) productType = 'free';
        return (
          <ProductItem key={nanoid()} className="product-list__item" name={product.name} description={product.description} type={productType} />
        )})}
      </ul>
  )
}
