import React, {useContext} from 'react';
import Menu from 'Component/Menu';
import {MenuContext} from "Component/Header/MenuContext";
import './Header.override.style.scss'

const MobileMenu = () => {
    const { isMenuVisible } = useContext(MenuContext);

    console.log(isMenuVisible)
    return (
        <div className={`Header-MobileMenu ${isMenuVisible ? 'Header-MobileMenu_display' : ''}`}>
            {<Menu />}
        </div>
    );
};

export default MobileMenu;