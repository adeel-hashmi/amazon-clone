import './Header.css'
// import 
import SearchIcon from '@material-ui/icons/';
// import { Grid } from '@material-ui/core/Grid';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" />
            <div className="header__seach">
                <input type="text" className="header__seachIn" />
                <span><SearchIcon className="header__searchIcon" /></span>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span>
                        <div className="header__optionLineOne">Hello</div>
                    </span>
                    <span>
                        <div className="header__optionLinetwo">Sign In</div>
                    </span>
                </div>
                <div className="header__option">
                    <span>
                        <div className="header__optionLineOne">Returns</div>
                    </span>
                    <span>
                        <div className="header__optionLinetwo">& Orders</div>
                    </span>
                </div>
                <div className="header__option">
                    <span>
                        <div className="header__optionLineOne">Your</div>
                    </span>
                    <span>
                        <div className="header__optionLinetwo">Prime</div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
