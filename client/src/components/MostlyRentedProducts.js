import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const Products = () => {
    const location = useLocation();
    const { isLoading, products } = useSelector((state) => state.products);

    return (
        <>
            <section className="product spad py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="section-title text-center">Top Products</h2>
                        </div>
                    </div>
                    <div className="row product__filter" style={{ justifyContent: 'center' }}>
                        {isLoading ? <CircularProgress /> :
                            products?.map((p, i) => i < 4 && (
                                <div key={p._id} className="col-lg-3 col-md-4 col-sm-6 mix new-arrivals">
                                    <div className="product__item">
                                        <img
                                            style={{ width: "100%" }}
                                            className="product__item__pic set-bg"
                                            src={process.env.PUBLIC_URL + p?.productImages[0]}
                                            alt={p.productName}
                                        />
                                        <div className="product__item__text">
                                            <h6 style={{
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}>{p.productName}</h6>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="rating">
                                                        {/* <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i> */}
                                                    </div>
                                                </div>
                                                <div className="col-6 px-4">
                                                </div>
                                            </div>
                                            <Link to={`/products/${p.productName}`}><h5 className="primary-btn">View More</h5></Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;
