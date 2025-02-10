import React from "react";
import "../styles/elegant-icons.css";
import "../styles/bootstrap.css";
import "../styles/font-awesome.css";
import "../styles/jquery-ui.css";
import "../styles/nice-select.css";
import "../styles/owl.carousel.css";
import "../styles/slicknav.css";
import "../styles/style.css";
import "../reportWebVitals";
import HumbergerMenu from "../components/HumbergerMenu";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProduct from "../components/home/FeaturedProduct";
import LastestProduct from "../components/home/LastestProduct";
import Footer from "../components/Footer";
import BBlog from "../components/home/BBlog";
function Index() {
  return (
    <div>
      <HumbergerMenu />
      <Hero />
      <Categories />
      <FeaturedProduct />
      <LastestProduct />
      <BBlog />
      <Footer />
    </div>
  );
}
export default Index;
