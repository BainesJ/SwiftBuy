import React, { createContext, useState } from 'react';
import { ItemType, BasketType } from '../../types/types';

const defaultBasket: BasketType = {
    items: [],
    addItem: () => {},
    removeItem: () => {},
};

export const BasketContext = createContext<BasketType>(defaultBasket);

export const BasketProvider = ({ children }) => {
    const [items, setItems] = useState<ItemType[]>([]);

    const addItem = (item: ItemType) => {
        setItems([...items, item]);
    };

    const removeItem = (itemId: string) => {
        setItems(items.filter((item) => item.id !== itemId));
    };

    return (
        <BasketContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </BasketContext.Provider>
    );
};
