import {
    CartOverlay,
    HeaderComponent as SourceHeaderComponent,
    MyAccountOverlay,
} from 'SourceComponent/Header/Header.component';
import { ReactElement } from 'Type/Common.type';
import Menu from 'Component/Menu';
import MenuIcon from 'Component/MenuIcon';

export {
    CartOverlay,
    MyAccountOverlay,
};

export class HeaderComponent extends SourceHeaderComponent {
    renderMap: any = {
        burger: this.renderMenuButton.bind(this),
        ...this.renderMap,
    };

    renderMenu(): ReactElement {
        const { isMenuOpen } = this.props;

        if (!isMenuOpen) {
            return null;
        }

        return <Menu />;
    }

    renderMenuButton(): ReactElement {
        const { onBurgerMenuClick } = this.props;

        return (
            <button
                block="Header"
                elem="BurgerButton"
                tabIndex={0}
                onClick={onBurgerMenuClick}
                aria-label="Open menu"
                id="burgerButton"
            >
                <MenuIcon />
            </button>
        );
    }
}

export default HeaderComponent;
