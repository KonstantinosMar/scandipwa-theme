import React, { createContext, useState, ReactNode } from 'react';

interface MenuContextProps {
    isMenuVisible: boolean;
    setIsMenuVisible: (isVisible: boolean) => void;
}

export const MenuContext = createContext<MenuContextProps>({
    isMenuVisible: false,
    setIsMenuVisible: () => {},
});

interface MenuProviderProps {
    children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <MenuContext.Provider value={{ isMenuVisible, setIsMenuVisible }}>
            {children}
        </MenuContext.Provider>
    );
};
