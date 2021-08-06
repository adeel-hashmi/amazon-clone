import './Header.css'
// import 
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
// import { Grid } from '@material-ui/core/Grid';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <span><SearchIcon className="header__searchIcon" /></span>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span>
                        <div className="header__optionLineOne">Hello</div>
                    </span>
                    <span>
                        <div className="header__optionLineTwo">Sign In</div>
                    </span>
                </div>
                <div className="header__option">
                    <span>
                        <div className="header__optionLineOne">Returns</div>
                    </span>
                    <span>
                        <div className="header__optionLineTwo">& Orders</div>
                    </span>
                </div>
                <div className="header__option">
                    <span>
                        <div className="header__optionLineOne">Your</div>
                    </span>
                    <span>
                        <div className="header__optionLineTwo">Prime</div>
                    </span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasket className="header__basketIcon" />
                    <span className="header_optionLineTwo header_basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
