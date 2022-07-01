import React from 'react';
import "./Header.css";
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectory';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{basket}] = useStateValue();
    return (
        <div className="header">
          <Link to="/" style={{ textDecoration:"none" }}>
            <div className="header__logo">
                <StoreMallDirectoryOutlinedIcon className="header__logoImage" fontSize="large"/>
                <h2 className="header__logoTitle">buyStuff</h2>
            </div>
          </Link>

            <div className="header__search">
              <input type="text" className="header__searchInput" />
              <SearchIcon className="header__searchIcon" />
            </div>
      
            <div className="header__nav">
              <Link to="/login" style={{ textDecoration:"none" }}>
              <div className="nav__item">
                <span className="nav__itemLineOne">Hello Guest</span>
                <span className="nav__itemLineTwo">Sign In</span>
              </div>
              </Link>
              {/*<div className="nav__item">
                <span className="nav__itemLineOne">Your</span>
                <span className="nav__itemLineTwo">Shop</span>
              </div>*/}
              <Link to="/checkout" style={{ textDecoration: "none" }}>
              <div className="nav__itemBasket">
                <ShoppingCartOutlinedIcon/>
                <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
              </div>
              </Link>
            </div>

        </div>
    )
}

export default Header;
