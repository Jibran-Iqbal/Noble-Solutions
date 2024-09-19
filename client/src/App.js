import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleProduct from "./components/SingleProduct";
import Products from "./components/Products";
import CategoriesPage from "./components/CategoriesPage";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";


function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='products-services' element={<CategoriesPage/>}/>
          <Route path='contact-us' element={<ContactUs/>}/>
          <Route path='about-us' element={<AboutUs/>}/>
          <Route path='products'>
            <Route index element={<Products/>}/>
            <Route path='search' element={<Products/>}/>
            <Route path=":productName" element={<SingleProduct/>}/>
          </Route>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
