export interface ItemType {
    id: string;
    name: string;
    price: number;
    coordinate: number[];
}

export interface BasketType {
    items: ItemType[];
    addItem: (item: ItemType) => void;
    removeItem: (itemId: string) => void;
}
