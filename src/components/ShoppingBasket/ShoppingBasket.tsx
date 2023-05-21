import React from 'react';
import { BasketType, ItemType } from '@/types/types';
import s from './ShoppingBasket.module.css';

interface BasketProps {
    basket: BasketType;
    hideRemoveButton?: boolean;
}

const ShoppingBasket = ({ basket, hideRemoveButton }: BasketProps) => (
    <div className={s.basket}>
        <ul>
            {basket.items.map((item, index) => (
                <li key={`${item.id}-${index}`} className={s.basketItem}>
                    <div className={s.basketItemNamePrice}>
                        <span>{item.name}</span>
                        <span>£{item.price.toFixed(2)}</span>
                    </div>
                    {!hideRemoveButton && (
                        <button
                            className={s.removeButton}
                            onClick={() => basket.removeItem(item.id)}
                        >
                            Remove
                        </button>
                    )}
                </li>
            ))}
        </ul>
    </div>
);

export default ShoppingBasket;