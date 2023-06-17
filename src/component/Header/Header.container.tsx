import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
    DEFAULT_HEADER_STATE as SOURCE_DEFAULT_HEADER_STATE,
    HeaderContainer as SourceHeaderContainer,
    mapDispatchToProps as sourceMapDispatchToProps,
    mapStateToProps as sourceMapStateToProps,
} from 'SourceComponent/Header/Header.container';
import { RootState } from 'Util/Store/Store.type';
import { HeaderContainerFunctions, HeaderContainerProps } from 'Component/Header/Header.type';

export const DEFAULT_HEADER_STATE = SOURCE_DEFAULT_HEADER_STATE;

export const mapStateToProps = (state: RootState) => ({
    ...sourceMapStateToProps(state),
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    ...sourceMapDispatchToProps(dispatch),
});

export class HeaderContainer extends SourceHeaderContainer {
    constructor(props: HeaderContainerProps) {
        super(props);
        this.state = {
            ...this.state,
            isMenuOpen: false,
        };
    }

    onBurgerMenuClick = (): void => {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen,
        }));
    };

    containerFunctions: HeaderContainerFunctions = {
        ...this.containerFunctions,
        onBurgerMenuClick: this.onBurgerMenuClick.bind(this),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
