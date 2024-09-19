import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { subCategories, categories } = useSelector((state) => state.category);

    const [cop, setCop] = useState("");
    const handleClick = (e) => {
        e?.preventDefault();
        cop === "active" ? setCop("") : setCop("active");
    };

    const [search, setSearch] = useState("");
    const [openCategories, setOpenCategories] = useState({});

    return (
        <>
            <header>
                {/* Offcanvas Menu Begin */}
                <div onClick={handleClick} className={`offcanvas-menu-overlay ${cop}`}></div>
                <div className={`offcanvas-menu-wrapper ${cop}`}>
                    <div id="mobile-menu-wrap" className="mobile-menu">
                        <ul className="dropdown" style={{ listStyleType: "none", margin: "0px", padding: "0px", border: "0px", display: 'flex', flexDirection: 'column', alignItems: "flex-start" }}>
                            <li>
                                <Link className="list-group-item list-group-item-action" onClick={(e)=>{handleClick(e);navigate('/products-services')}} style={{ borderColor: "#FFF", paddingLeft:'0' }} to="/products-services">Products and Services</Link>
                            </li>
                            <li>
                                <div>
                                    <form className="d-flex" onSubmit={(e) => { e.preventDefault(); navigate(`/products/search?searchQuery=${search || 'none'}`) }}>
                                        <input className="form-control me-2" type="text" placeholder="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                        <button className="btn" type="submit" style={{ backgroundColor: "#141D37", color:'white' }}>Search</button>
                                    </form>
                                </div>
                            </li>
                            <li>
                                <Link className="list-group-item list-group-item-action" onClick = {(e)=>{handleClick(e); navigate("/contact-us")}} style={{ borderColor: "#FFF", paddingLeft:'0' }} to="/contact-us">Contact Us</Link>
                            </li>
                            <li>
                                <Link className="list-group-item list-group-item-action" onClick = {(e)=>{handleClick(e); navigate("/about-us")}} style={{ borderColor: "#FFF", paddingLeft:'0' }} to="/about-us">About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Offcanvas Menu End */}

                {/* Header Section Begin */}
                <header className="header">
                    <div className="header__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-7">
                                    <div className='header__top__left'>
                                        <ul className="text-white">
                                            <li className="fa fa-whatsapp header-social"></li>
                                            <li className="fa fa-facebook header-social"></li>
                                            <li className="fa fa-twitter header-social"></li>
                                            <li className="fa fa-instagram header-social"></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-nav">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="header__logo">
                                    <Link to="/"><img src={process.env.PUBLIC_URL + "/img/noblelogo-2.jpg"} alt="Hello" style={{ height: '80px' }} /></Link>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                                <nav className="header__menu mobile-menu" style={{ float: 'left' }}>
                                    <ul>
                                        <li><Link to="#">Products and Services</Link>
                                            <ul className='dropdown'>
                                                {categories?.map((c) => (
                                                    <li key={c._id}>
                                                        <Link to={`/products?category=${c.categoryName}`}>{c.categoryName}</Link>
                                                        <ul className='dropdown-submenu'>
                                                            {subCategories?.map((sc) => (sc.categoryId === c.categoryName) && (
                                                                <li key={sc._id}> <Link to={`/products?subCategory=${sc.subCategoryName}`}> {sc.subCategoryName} </Link> </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li>
                                            <SearchBar />
                                        </li>
                                        <li>
                                            <Link to="/contact-us">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">About Us</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="canvas__open" onClick={handleClick}><i className="fa fa-bars"></i></div>
                    </div>
                </header>
                {/* Header Section End */}
            </header>
        </>
    );
};

export default Header;
