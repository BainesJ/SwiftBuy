import React from 'react';
import { ItemType } from '../../types/types';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import s from './shoppingList.module.css';

interface ShoppingListProps {
    items: ItemType[];
    onAddToBasket: (item: ItemType) => void;
}

const ShoppingList = ({ items, onAddToBasket }: ShoppingListProps) => (
    <div className={s.shoppingList}>
        {items.map((item) => (
            <ShoppingItem key={item.id} item={item} onAddToBasket={() => onAddToBasket(item)} />
        ))}
    </div>
);

export default ShoppingList;
