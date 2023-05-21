import React from 'react';
import { ItemType } from '../../types/types';
import s from './shoppingItem.module.css';

interface ItemProps {
    item: ItemType;
    onAddToBasket: () => void;
}

const ShoppingItem = ({ item, onAddToBasket }: ItemProps) => (
    <div className={s.item}>
        <div className={s.itemNamePrice}>
            <h3>{item.name}</h3>
            <p>£{item.price.toFixed(2)}</p>
        </div>
        <button className={s.addToBasketButton} onClick={onAddToBasket}>Add to Basket</button>
    </div>
);

export default ShoppingItem;
