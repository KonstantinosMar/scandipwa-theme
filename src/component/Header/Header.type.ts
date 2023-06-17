import {
    HeaderContainerMapStateProps as SourceHeaderContainerMapStateProps,
    HeaderContainerPropsKeys as SourceHeaderContainerPropsKeys,
    HeaderMapDispatchToProps as SourceHeaderMapDispatchToProps,
} from 'SourceComponent/Header/Header.type';
import { NavigationAbstractComponentProps } from 'Component/NavigationAbstract/NavigationAbstract.type';

export interface HeaderContainerMapStateProps extends SourceHeaderContainerMapStateProps {}

export interface HeaderMapDispatchToProps extends SourceHeaderMapDispatchToProps {}

declare module 'SourceComponent/Header/Header.type' {
    export interface HeaderContainerMapStateProps {}

    export interface HeaderMapDispatchToProps {}

    export interface HeaderContainerFunctions {
        onBurgerMenuClick: () => void;
    }

    export interface HeaderContainerProps {}

    export interface HeaderContainerState {
        isMenuOpen: boolean;
    }

    export interface HeaderComponentProps {
        isMenuOpen: boolean;
    }

    export interface HeaderComponentProps extends NavigationAbstractComponentProps {
        onBurgerMenuClick: () => void;
    }
}

export type HeaderContainerPropsKeys = SourceHeaderContainerPropsKeys;