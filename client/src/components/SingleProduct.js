import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, CircularProgress, Paper } from '@mui/material';
import Carousel from "react-material-ui-carousel";

const SingleProduct = () => {
  const { productName } = useParams(); // Get the productName from the URL
  const { isLoading, products } = useSelector((state) => state.products);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate()

  useEffect(() => {
    if (products.length > 0) {
      // Find the product with the matching name
      const foundProduct = products.find((p) => p.productName === productName);
      setProduct(foundProduct);
    }
  }, [products, productName]);

  if (isLoading || !product) {
    return (
      <Paper elevation={6}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="breadcrumb-title">{product.productName}</h1>
          </div>
        </div>
      </section>

      <section className="shop-details">
        <div className="product__details__content">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 py-4">
                <Carousel>
                  {product.productImages &&
                    product.productImages.map((item, i) => (
                      <img
                        style={{ width: '100%' }}
                        key={i}
                        src={process.env.PUBLIC_URL + item}
                        alt={`${i} Slide`}
                      />
                    ))}
                </Carousel>
              </div>
              <div className="col-md-6 py-4">
                <div className="product__details__text">
                  <h2>{product.productName}</h2>
                  <p>{product.description}</p>
                  <div className="product__details__cart__option">
                    <label style={{ fontSize: '22px' }}>Quantity :&nbsp;</label>
                    <div className="quantity">
                      <div className="pro-qty">
                        <input
                          style={{ color: '#333' }}
                          type="number"
                          min={1}
                          max={product.stock}
                          onChange={(e) =>
                            setQuantity(
                              +e.target.value < product.noOfStock
                                ? e.target.value
                                : product.noOfStock
                            )
                          }
                          value={quantity}
                        />
                      </div>
                    </div>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: '#253f4b', marginLeft: '5%' }}
                      color="primary"
                      onClick={() => navigate('/contact-us')}
                    >
                      Contact sales
                    </Button>
                  </div>

                  <div className="product__details__last__option">
                    <ul>
                      {/* Add additional product details here */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
