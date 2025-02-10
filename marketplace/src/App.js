import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./pages/index";
import BlogDetails from "./components/blogDetails/BlogDetails";
import Blog from "./components/blog/Blog";
import Chekout from "./components/chekout/Chekout";
import Contact from "./components/contact/Contact";
import ShopDetails from "./components/ShopDetails/ShopDetails";
import ShopGrid from "./components/ShopGrid/ShopGrid";
import ShopCart from "./components/ShopCart/ShopCart";
import HumbergerMenu from "./components/HumbergerMenu";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/index"
          element={
            <>
              <Index></Index>
            </>
          }
        />
        <Route
          path="/blogDetails"
          element={
            <>
              <BlogDetails></BlogDetails>
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Blog></Blog>
            </>
          }
        />
        <Route
          path="/chekout"
          element={
            <>
              <Chekout></Chekout>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact></Contact>
            </>
          }
        />
        <Route
          path="/shopDetails"
          element={
            <>
              <ShopDetails></ShopDetails>
            </>
          }
        />
        <Route
          path="/shopGrid"
          element={
            <>
              <ShopGrid></ShopGrid>
            </>
          }
        />
        <Route
          path="/shopCart"
          element={
            <>
              <ShopCart></ShopCart>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
