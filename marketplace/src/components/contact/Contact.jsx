import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/elegant-icons.css";
import "../../styles/bootstrap.css";
import "../../styles/font-awesome.css";
import "../../styles/jquery-ui.css";
import "../../styles/nice-select.css";
import "../../styles/owl.carousel.css";
import "../../styles/slicknav.css";
import "../../styles/style.css";
import "../../reportWebVitals";
function Contact() {
  const [click, setClick] = useState(false); 
  const closeMenu = () => setClick(false); 
  return (
    <div>
      <div className="humberger__menu__overlay"></div>
      <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
          <a href="#">
            <img src="img/logo.png" alt="" />
          </a>
        </div>
        <div className="humberger__menu__cart">
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
        <div className="humberger__menu__widget">
          <div className="header__top__right__language">
            <img src="img/language.png" alt="" />
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
        <nav className="humberger__menu__nav mobile-menu">
          <ul>
            <li className="active">
              <Link to="/contact" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <a href="./shop-grid.html">Shop</a>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul className="header__menu__dropdown">
                <li>
                  <a href="./shop-details.html">Shop Details</a>
                </li>
                <li>
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
        <div id="mobile-menu-wrap"></div>
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
        <div className="humberger__menu__contact">
          <ul>
            <li>
              <i className="fa fa-envelope"></i> hello@colorlib.com
            </li>
            <li>Free Shipping for all Order of $99</li>
          </ul>
        </div>
      </div>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-envelope"></i> hello@colorlib.com
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
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
                  <div className="header__top__right__language">
                    <img src="img/language.png" alt="" />
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
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li>
                    <a href="./index.html">Home</a>
                  </li>
                  <li>
                    <a href="./shop-grid.html">Shop</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="header__menu__dropdown">
                      <li>
                        <a href="./shop-details.html">Shop Details</a>
                      </li>
                      <li>
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
                  <li className="active">
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
      <section className="hero hero-normal">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars"></i>
                  <span>All departments</span>
                </div>
                <ul>
                  <li>
                    <a href="#">Fresh Meat</a>
                  </li>
                  <li>
                    <a href="#">Vegetables</a>
                  </li>
                  <li>
                    <a href="#">Fruit & Nut Gifts</a>
                  </li>
                  <li>
                    <a href="#">Fresh Berries</a>
                  </li>
                  <li>
                    <a href="#">Ocean Foods</a>
                  </li>
                  <li>
                    <a href="#">Butter & Eggs</a>
                  </li>
                  <li>
                    <a href="#">Fastfood</a>
                  </li>
                  <li>
                    <a href="#">Fresh Onion</a>
                  </li>
                  <li>
                    <a href="#">Papayaya & Crisps</a>
                  </li>
                  <li>
                    <a href="#">Oatmeal</a>
                  </li>
                  <li>
                    <a href="#">Fresh Bananas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down"></span>
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Contact Us</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Contact Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_phone"></span>
                <h4>Phone</h4>
                <p>+01-3-8888-6868</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_pin_alt"></span>
                <h4>Address</h4>
                <p>60-49 Road 11378 New York</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_clock_alt"></span>
                <h4>Open time</h4>
                <p>10:00 am to 23:00 pm</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_mail_alt"></span>
                <h4>Email</h4>
                <p>hello@colorlib.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          height="500"
          style={{ border: "0" }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
        <div className="map-inside">
          <i className="icon_pin"></i>
          <div className="inside-widget">
            <h4>New York</h4>
            <ul>
              <li>Phone: +12-345-6789</li>
              <li>Add: 16 Creek Ave. Farmingdale, NY</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contact-form spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact__form__title">
                <h2>Leave Message</h2>
              </div>
            </div>
          </div>
          <form action="#">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <input type="text" placeholder="Your name" />
              </div>
              <div className="col-lg-6 col-md-6">
                <input type="text" placeholder="Your Email" />
              </div>
              <div className="col-lg-12 text-center">
                <textarea placeholder="Your message"></textarea>
                <button type="submit" className="site-btn">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className="footer spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__about__logo">
                  <a href="./index.html">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
                <ul>
                  <li>Address: 60-49 Road 11378 New York</li>
                  <li>Phone: +65 11.188.888</li>
                  <li>Email: hello@colorlib.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
              <div className="footer__widget">
                <h6>Useful Links</h6>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">About Our Shop</a>
                  </li>
                  <li>
                    <a href="#">Secure Shopping</a>
                  </li>
                  <li>
                    <a href="#">Delivery infomation</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Our Sitemap</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Who We Are</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Innovation</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="footer__widget">
                <h6>Join Our Newsletter Now</h6>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <form action="#">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit" className="site-btn">
                    Subscribe
                  </button>
                </form>
                <div className="footer__widget__social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__copyright">
                <div className="footer__copyright__text">
                  <p>
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                  </p>
                </div>
                <div className="footer__copyright__payment">
                  <img src="img/payment-item.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
