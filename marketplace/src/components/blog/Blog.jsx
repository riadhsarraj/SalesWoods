import React from "react";
import "../../styles/elegant-icons.css";
import "../../styles/bootstrap.css";
import "../../styles/font-awesome.css";
import "../../styles/jquery-ui.css";
import "../../styles/nice-select.css";
import "../../styles/owl.carousel.css";
import "../../styles/slicknav.css";
import "../../styles/style.css";
import "../../reportWebVitals";
function Blog() {
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
                  <li className="active">
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
                <h2>Blog</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="blog__sidebar">
                <div className="blog__sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <span className="icon_search"></span>
                    </button>
                  </form>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">Beauty (20)</a>
                    </li>
                    <li>
                      <a href="#">Food (5)</a>
                    </li>
                    <li>
                      <a href="#">Life Style (9)</a>
                    </li>
                    <li>
                      <a href="#">Travel (10)</a>
                    </li>
                  </ul>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Recent News</h4>
                  <div className="blog__sidebar__recent">
                    <a href="#" className="blog__sidebar__recent__item">
                      <div className="blog__sidebar__recent__item__pic">
                        <img src="img/blog/sidebar/sr-1.jpg" alt="" />
                      </div>
                      <div className="blog__sidebar__recent__item__text">
                        <h6>
                          09 Kinds Of Vegetables
                          <br /> Protect The Liver
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                    <a href="#" className="blog__sidebar__recent__item">
                      <div className="blog__sidebar__recent__item__pic">
                        <img src="img/blog/sidebar/sr-2.jpg" alt="" />
                      </div>
                      <div className="blog__sidebar__recent__item__text">
                        <h6>
                          Tips You To Balance
                          <br /> Nutrition Meal Day
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                    <a href="#" className="blog__sidebar__recent__item">
                      <div className="blog__sidebar__recent__item__pic">
                        <img src="img/blog/sidebar/sr-3.jpg" alt="" />
                      </div>
                      <div className="blog__sidebar__recent__item__text">
                        <h6>
                          4 Principles Help You Lose <br />
                          Weight With Vegetables
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Search By</h4>
                  <div className="blog__sidebar__item__tags">
                    <a href="#">Apple</a>
                    <a href="#">Beauty</a>
                    <a href="#">Vegetables</a>
                    <a href="#">Fruit</a>
                    <a href="#">Healthy Food</a>
                    <a href="#">Lifestyle</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item">
                    <div className="blog__item__pic">
                      <img src="img/blog/blog-2.jpg" alt="" />
                    </div>
                    <div className="blog__item__text">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i className="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="#">6 ways to prepare breakfast for 30</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="#" className="blog__btn">
                        READ MORE <span className="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item">
                    <div className="blog__item__pic">
                      <img src="img/blog/blog-3.jpg" alt="" />
                    </div>
                    <div className="blog__item__text">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i className="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="#">Visit the clean farm in the US</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="#" className="blog__btn">
                        READ MORE <span className="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item">
                    <div className="blog__item__pic">
                      <img src="img/blog/blog-1.jpg" alt="" />
                    </div>
                    <div className="blog__item__text">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i className="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="#">Cooking tips make cooking simple</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="#" className="blog__btn">
                        READ MORE <span className="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item">
                    <div className="blog__item__pic">
                      <img src="img/blog/blog-4.jpg" alt="" />
                    </div>
                    <div className="blog__item__text">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i className="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="#">Cooking tips make cooking simple</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="#" className="blog__btn">
                        READ MORE <span className="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item">
                    <div className="blog__item__pic">
                      <img src="img/blog/blog-4.jpg" alt="" />
                    </div>
                    <div className="blog__item__text">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i className="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="#">
                          The Moment You Need To Remove Garlic From The Menu
                        </a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="#" className="blog__btn">
                        READ MORE <span className="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item">
                    <div className="blog__item__pic">
                      <img src="img/blog/blog-6.jpg" alt="" />
                    </div>
                    <div className="blog__item__text">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i className="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="#">Cooking tips make cooking simple</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="#" className="blog__btn">
                        READ MORE <span className="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="product__pagination blog__pagination">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">
                      <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                    <script>document.write(new Date().getFullYear());</script>{" "}
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

export default Blog;
