import {
    CartOverlay,
    HeaderComponent as SourceHeaderComponent,
    MyAccountOverlay,
} from 'SourceComponent/Header/Header.component';
import { ReactElement } from 'Type/Common.type';
import MenuIcon from 'Component/MenuIcon';
import MobileMenuComponent from "Component/Header/MobileMenu.component";

export {
    CartOverlay,
    MyAccountOverlay,
};

export class HeaderComponent extends SourceHeaderComponent {
    renderMap: any = {
        burger: this.renderMenuButton.bind(this),
        ...this.renderMap,
    };

    state = {
        isMenuVisible: false,
    };

    toggleMenu = () => {
        this.setState((prevState) => ({
            isMenuVisible: !prevState.isMenuVisible,
        }));

        console.log(this.state.isMenuVisible)
    };

    renderMenuButton(): ReactElement {
        return (
            <button
                block="Header"
                elem="BurgerButton"
                tabIndex={0}
                onClick={this.toggleMenu}
                aria-label="Open menu"
                id="burgerButton"
            >
                <MenuIcon />
            </button>
        );
    }

    render(): ReactElement {
        const {isMenuVisible} = this.state
        return (
            <>
                {super.render()}
                {isMenuVisible && <MobileMenuComponent />}
            </>
        );
    }

}

export default HeaderComponent;
