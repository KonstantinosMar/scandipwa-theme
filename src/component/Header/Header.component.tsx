import {
    CartOverlay,
    HeaderComponent as SourceHeaderComponent,
    MyAccountOverlay,
} from 'SourceComponent/Header/Header.component';
import { ReactElement } from 'Type/Common.type';
import MobileMenu from "Component/Header/MobileMenu.component";
import MobileMenuButton from "Component/Header/MobileMenuButton.component";
import {MenuProvider} from "Component/Header/MenuContext";

export {
    CartOverlay,
    MyAccountOverlay,
};

export class HeaderComponent extends SourceHeaderComponent {
    renderMap: any = {
        burger: this.renderMenuButton.bind(this),
        ...this.renderMap,
    };

    renderMenuButton(): ReactElement {
        return ( <MobileMenuButton /> );
    }

    renderMenu(): ReactElement {
        const { isCheckout} = this.props;

        if (isCheckout) {
            return null;
        }

        return ( <MobileMenu /> );
    }

    render(): ReactElement {
        return (
            <MenuProvider>
                {super.render()}
            </MenuProvider>
        );
    }
}

export default HeaderComponent;
