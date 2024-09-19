import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const { categories } = useSelector((state) => state.category);
    const navigate = useNavigate();

    const handleNavigation = (event, path) => {
        event.preventDefault(); // Prevent the default link behavior
        window.scrollTo(0, 0); // Scroll to the top
        navigate(path); // Navigate to the desired route
    };

    return (
        <>
            <footer>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer__about">
                                    <div className="footer__logo">
                                        <a href="/" onClick={(event) => handleNavigation(event, '/')}>
                                            <img src={process.env.PUBLIC_URL + "/img/noble-solutions.png"} alt="" />
                                        </a>
                                    </div>
                                    <p>
                                        Noble SolutionsTrading Established was established in 2022 with spirit to serve specially in
                                        computers, Toner Cartridge and Information Technology industry at large. Exploring the needs of Saudi
                                        market in information industry Noble has tried it&#39;s best to give presence at professional heights and
                                        proved its professionalism, dedication, trust and fame
                                        Noble Solutions Trading Established with professional &amp; best quality services at affordable prices.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 justify-content-center">
                                <div className="footer__widget">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><a href="/" onClick={(event) => handleNavigation(event, '/')}>Home</a></li>
                                        <li><a href="/about-us" onClick={(event) => handleNavigation(event, '/about-us')}>About Us</a></li>
                                        <li><a href="/contact-us" onClick={(event) => handleNavigation(event, '/contact-us')}>Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="footer__widget">
                                    <h4>Products and Services</h4>
                                    <ul>
                                        {categories.map((c) => (
                                            <li key={c.categoryName}>
                                                <a href={`/products?category=${c.categoryName}`} onClick={(event) => handleNavigation(event, `/products?category=${c.categoryName}`)}>
                                                    {c.categoryName}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer__widget">
                                    <h4>Policies</h4>
                                    <ul>
                                        <li><a href="/shipping-policy" onClick={(event) => handleNavigation(event, '/shipping-policy')}>Shipping Policy</a></li>
                                        <li><a href="/cancellation-return-policy" onClick={(event) => handleNavigation(event, '/cancellation-return-policy')}>Cancellation & Return Policy</a></li>
                                        <li><a href="/privacy-policy" onClick={(event) => handleNavigation(event, '/privacy-policy')}>Privacy policy</a></li>
                                        <li><a href="/terms-conditions" onClick={(event) => handleNavigation(event, '/terms-conditions')}>Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="search-model">
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="search-close-switch">+</div>
                        <form className="search-model-form">
                            <input style={{ color: '#333' }} type="text" id="search-input" placeholder="Search here....." />
                        </form>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;