import { ItemType } from "@/types/types";

export const getShopItems = async (): Promise<ItemType[]> => {
    const items: ItemType[] = [
        {
            id: '1',
            name: 'Apple',
            price: 0.5,
            coordinate: [0, 1],
        },
        {
            id: '2',
            name: 'Banana',
            price: 0.3,
            coordinate: [2, 1],
        },
        {
            id: '3',
            name: 'Carrot',
            price: 0.8,
            coordinate: [6, 3],
        },
        {
            id: '4',
            name: 'Broccoli',
            price: 1.2,
            coordinate: [4, 2],
        },
        {
            id: '5',
            name: 'Milk',
            price: 2.5,
            coordinate: [0, 4],
        },
        {
            id: '6',
            name: 'Bread',
            price: 1.5,
            coordinate: [5, 3],
        },
        {
            id: '7',
            name: 'Eggs',
            price: 2.0,
            coordinate: [2, 4],
        },
        {
            id: '8',
            name: 'Cheese',
            price: 3.0,
            coordinate: [1, 5],
        },
        // Additional items with manually set random prices and coordinates
        {
            id: '9',
            name: 'Tomato',
            price: 0.9,
            coordinate: [3, 0],
        },
        {
            id: '10',
            name: 'Lettuce',
            price: 0.7,
            coordinate: [1, 2],
        },
        {
            id: '11',
            name: 'Orange',
            price: 0.6,
            coordinate: [6, 4],
        },
        {
            id: '12',
            name: 'Potato',
            price: 1.1,
            coordinate: [3, 5],
        },
        {
            id: '13',
            name: 'Chicken',
            price: 2.3,
            coordinate: [4, 1],
        },
        {
            id: '14',
            name: 'Fish',
            price: 2.1,
            coordinate: [0, 3],
        },
        {
            id: '15',
            name: 'Rice',
            price: 1.8,
            coordinate: [2, 6],
        },
        {
            id: '16',
            name: 'Pasta',
            price: 1.7,
            coordinate: [5, 2],
        },
        {
            id: '17',
            name: 'Onion',
            price: 0.4,
            coordinate: [4, 6],
        },
    ];

    return items;
};