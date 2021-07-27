import React from 'react';

import './styles/product-item.style.scss'

export type ProductType = 'new' | 'free' | 'default';

interface ProductItemProps {
  name: string;
  description: string;
  type: ProductType;
  className?: string;
}

export const ProductItem = ({name, description, type, className}: ProductItemProps) => {
  return (
    <li className={`${className ? `${className} ` : ''}list-item`}>
      {type !== 'default' &&
        <div className={`list-item__flag list-item__flag--${type}`}>
          <span className="list-item__flag-text">{type}</span>
        </div>
      }
      <h2 className="list-item__title">{name}</h2>
      <p className="list-item__description">{description}</p>
    </li>
  )
}
