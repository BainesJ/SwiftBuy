import {BasketContext} from "@/context/BasketContext/BasketContext";
import React from "react";
import NavigationDisplay from "@/components/NavigationDisplay/NavigationDisplay";

export default function pathingPage() {
    return (
        <div>
            <BasketContext.Consumer>
            {(basket) => (
                <NavigationDisplay basket={basket.items} />
            )}
            </BasketContext.Consumer>

        </div>
    );
};