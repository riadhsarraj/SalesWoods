import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../js/images";
import "../styles/elegant-icons.css";
import "../styles/bootstrap.css";
import "../styles/font-awesome.css";
import "../styles/jquery-ui.css";
import "../styles/nice-select.css";
import "../styles/owl.carousel.css";
import "../styles/slicknav.css";
import "../styles/style.css";
import "../reportWebVitals";
function HumbergerMenu() {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  return (
    <div>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-envelope"></i> hello@colorlib.com
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </div>
                  <div
                    className="header__top__right__language"
                    style={{ backgroundImage: `url(${images.language})` }}
                  >
                    <div>English</div>
                    <span className="arrow_carrot-down"></span>
                    <ul>
                      <li>
                        <a href="#">Spanis</a>
                      </li>
                      <li>
                        <a href="#">English</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <a href="#">
                      <i className="fa fa-user"></i> Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="./index.html">
                  <img src={images.logo} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li className="active">
                    <Link to="/index" className="nav-links" onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shopGrid"
                      className="nav-links"
                      onClick={closeMenu}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="header__menu__dropdown">
                      <li>
                        <Link
                          to="/shopDetails"
                          className="nav-links"
                          onClick={closeMenu}
                        >
                          Shop Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shopCart"
                          className="nav-links"
                          onClick={closeMenu}
                        >
                          Shoping Cart
                        </Link>
                        <a href="./shoping-cart.html">Shoping Cart</a>
                      </li>
                      <li>
                        <a href="./checkout.html">Check Out</a>
                      </li>
                      <li>
                        <a href="./blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="./contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-heart"></i> <span>1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-bag"></i> <span>3</span>
                    </a>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HumbergerMenu;
