import React, {useContext} from 'react';
import MenuIcon from "Component/MenuIcon";
import {MenuContext} from "Component/Header/MenuContext";

const MobileMenuButton = () => {
    const { isMenuVisible, setIsMenuVisible } = useContext(MenuContext);

    const toggleMenuVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    console.log(isMenuVisible)

    return (
        <button
            block="Header"
            elem="BurgerButton"
            tabIndex={0}
            aria-label="Open menu"
            id="burgerButton"
            onClick={toggleMenuVisibility}
        >
            <MenuIcon/>
        </button>
    );
};

export default MobileMenuButton;