import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RentalCategories = () => {
    const { categories } = useSelector((state) => state.category);

    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const isMobile = width <= 700;

    return (
        <section className="product spad py-3 bg2" id="service">
            <div className="container">
                <h2 className="section-title text-white">Products and Services</h2>
                <div className="row product__filter justify-content-center">
                    {categories?.map((c) => c.categoryImage.url && (
                        <div
                            key={c._id}
                            className=""
                            style={isMobile ? 
                                { width: '40%', margin: '3%' } : 
                                { width: '20%', margin: '2%' }
                            }
                        >
                            <div className="card mb-3" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Link to={`/products/search?category=${c.categoryName}`} style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <img 
                                        src={process.env.PUBLIC_URL + c.categoryImage.url} 
                                        alt={c.categoryName} 
                                        style={{ flexGrow: 0, maxHeight: '150px', objectFit: 'contain' }} 
                                    />
                                    <h5 
                                        className="text-center my-categories" 
                                        style={{ marginTop: '10px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                                    >
                                        {c.categoryName}
                                    </h5>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RentalCategories;
