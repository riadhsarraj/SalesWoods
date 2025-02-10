import React from 'react'
import images from "../../js/images";
import "../../styles/elegant-icons.css";
import "../../styles/bootstrap.css";
import "../../styles/font-awesome.css";
import "../../styles/jquery-ui.css";
import "../../styles/nice-select.css";
import "../../styles/owl.carousel.css";
import "../../styles/slicknav.css";
import "../../styles/style.css";
import "../../reportWebVitals";
function Categories() {
  return (
    <div>
      <section className="categories">
        <div className="container">
          <div className="row">
            <div className="categories__slider owl-carousel">
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  
                >
                  <h5>
                    <a href="#">Fresh Fruit </a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{ backgroundImage: `url(${images.cat2})` }}
                >
                  <h5>
                    <a href="#">Dried Fruit</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{ backgroundImage: `url(${images.cat3})` }}
                >
                  <h5>
                    <a href="#">Vegetables</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{ backgroundImage: `url(${images.cat4})` }}
                >
                  <h5>
                    <a href="#">drink fruits</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{ backgroundImage: `url(${images.cat5})` }}
                >
                  <h5>
                    <a href="#">drink fruits</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Categories
