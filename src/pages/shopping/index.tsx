import React, {useEffect, useState} from "react";
import {ItemType} from "@/types/types";
import {getShopItems} from "@/utils/itemPopulator";
import SearchBar from "@/components/SearchBar/SearchBar";
import {BasketContext} from "@/context/BasketContext/BasketContext";
import ShoppingList from "@/components/ShoppingList/ShoppingList";
import Link from "next/link";

const ShoppingPage = () => {
    const [items, setItems] = useState<ItemType[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            const fetchedItems = await getShopItems();
            setItems(fetchedItems);
        };

        fetchItems();
    }, []);

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1>Shopping List</h1>
            <div>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <BasketContext.Consumer>
                    {(basket) => (
                        <>
                            <ShoppingList items={filteredItems} onAddToBasket={basket.addItem}/>
                        </>
                    )}
                </BasketContext.Consumer>
            </div>
            <Link href="/shopping-path" className="createRouteButton">
                <div>Create Shopping Route</div>
            </Link>
        </>
    )
}

export default ShoppingPage;