import React, {useState} from 'react';
import {useRouter} from 'next/router';
import s from './navbar.module.css';
import SideBasket from "@/components/SideBasket/SideBasket";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
    const router = useRouter();
    const [showSideBasket, setShowSideBasket] = useState(false);

    const handleClick = () => {
        router.push('/');
    };

    const toggleSideBasket = () => {
        setShowSideBasket(!showSideBasket);
    };

    return (
        <>
            <nav className={s.navbar}>
                <button className={s.navbarButton} onClick={handleClick}>
                    <HomeIcon />
                </button>
                <button className={s.basketButton} onClick={toggleSideBasket}>
                    <ShoppingBasketIcon />
                </button>
            </nav>
            {showSideBasket && <SideBasket onClose={toggleSideBasket}/>}
        </>
    );
};

export default Navbar;