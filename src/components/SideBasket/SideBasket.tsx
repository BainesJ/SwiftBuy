import React from 'react';
import s from './sideBasket.module.css';
import {BasketContext} from "@/context/BasketContext/BasketContext";
import ShoppingBasket from "@/components/ShoppingBasket/ShoppingBasket";
import ClearIcon from '@mui/icons-material/Clear';

interface SideBasketProps {
    onClose: () => void;
}

const SideBasket = ({ onClose }: SideBasketProps) => {
    return (
        <div className={s.sideBasketOverlay}>
            <div className={s.sideBasket}>
                <div className={s.basketIcons}>
                    <h2>Basket</h2>
                    <button className={s.closeButton} onClick={onClose}>
                        <ClearIcon />
                    </button>
                </div>
                <BasketContext.Consumer>
                    {(basket) => (
                        <>
                            <ShoppingBasket basket={basket}/>
                        </>
                    )}
                </BasketContext.Consumer>
            </div>
        </div>
    );
};

export default SideBasket;
