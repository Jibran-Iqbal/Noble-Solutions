import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Button, Drawer, IconButton } from '@mui/material';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { FilterList } from '@mui/icons-material';
import './Products.css';

const Products = () => {
  const { isLoading, products } = useSelector((state) => state.products);
  const { categories, subCategories } = useSelector((state) => state.category);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedBrands, setSelectedBrands] = useState(['Brother']);
  const [sortOption, setSortOption] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [productsState, setProductsState] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    const searchQuery = searchParams.get('searchQuery');
    const brands = searchParams.get('brands')?.split(',').filter(Boolean) || [];
    const category = searchParams.get('category') || '';
    const subCategory = searchParams.get('subCategory') || '';

    setSelectedBrands(brands);

    let filteredProducts = products;

    // Filter by search query
    if (searchQuery) {
      filteredProducts = filteredProducts.filter(product =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by brands
    if (brands.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        brands.includes(product.brand)
      );
    }

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(product =>
        product.category?.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by subCategory
    if (subCategory) {
      filteredProducts = filteredProducts.filter(product =>
        product.subCategory?.toLowerCase() === subCategory.toLowerCase()
      );
    }

    // Apply any additional sorting if needed (e.g., alphabetical or most purchased)
    switch (sortOption) {
      case 'mostPurchased':
        filteredProducts.sort((a, b) => b.purchases - a.purchases);
        break;
      case 'recentlyArrived':
        filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'alphabetical':
        filteredProducts.sort((a, b) => a.productName.localeCompare(b.productName));
        break;
      default:
        break;
    }

    // Set the filtered and sorted products to the state
    setProductsState(filteredProducts);
  }, [searchParams, products, sortOption]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value === sortOption ? '' : event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(''); // Reset subcategory when category is selected
  };

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setSelectedCategory(''); // Reset category when subcategory is selected
  };

  const applyFilters = () => {
    const params = {
      searchQuery: searchParams.get('searchQuery') || '',
      brands: selectedBrands.join(','),
    };

    if (selectedCategory) {
      params.category = selectedCategory;
    }

    if (selectedSubCategory) {
      params.subCategory = selectedSubCategory;
    }

    setSearchParams(params);
    setIsDrawerOpen(false);
    navigate(`/products/search?${new URLSearchParams(params).toString()}`);
  };

  return (
    <>
      <section className="product spad py-3">
        <div className="container" style={{ maxWidth: '100vw' }}>
          {isMobile && (
            <div onClick={() => setIsDrawerOpen(true)} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '10px' }}>
              <IconButton>
                <FilterList />
              </IconButton>
              <span style={{ marginLeft: '10px' }}>Sort & Filter</span>
            </div>
          )}
          <div className="row" style={{ display: 'flex' }}>
            {!isMobile && (
              <div className="col-lg-3" style={{ flex: '0 0 20%' }}>
                <div className="sidebar">
                  <div className="filter-options">
                    <h5 style={{ fontSize: '1rem' }}>Sort By</h5>
                    <div className="form-check">
                      <input
                        className="form-check-input custom-checkbox"
                        type="checkbox"
                        id="mostPurchased"
                        value="mostPurchased"
                        checked={sortOption === 'mostPurchased'}
                        onChange={handleSortChange}
                      />
                      <label className="form-check-label" htmlFor="mostPurchased">
                        Most Purchased
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input custom-checkbox"
                        type="checkbox"
                        id="recentlyArrived"
                        value="recentlyArrived"
                        checked={sortOption === 'recentlyArrived'}
                        onChange={handleSortChange}
                      />
                      <label className="form-check-label" htmlFor="recentlyArrived">
                        Recently Arrived
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input custom-checkbox"
                        type="checkbox"
                        id="alphabetical"
                        value="alphabetical"
                        checked={sortOption === 'alphabetical'}
                        onChange={handleSortChange}
                      />
                      <label className="form-check-label" htmlFor="alphabetical">
                        Alphabetical
                      </label>
                    </div>
                    <h5 style={{ fontSize: '1rem', marginTop: '1rem' }}>Filter By Category</h5>
                    {categories.map((category) => (
                      <div className="form-check" key={category.categoryName}>
                        <input
                          className="form-check-input custom-checkbox"
                          type="checkbox"
                          id={`category-${category.categoryName}`}
                          value={category.categoryName}
                          checked={selectedCategory === category.categoryName}
                          onChange={() => handleCategoryChange(category.categoryName)}
                        />
                        <label className="form-check-label" htmlFor={`category-${category.categoryName}`}>
                          {category.categoryName}
                        </label>
                      </div>
                    ))}
                    <h5 style={{ fontSize: '1rem', marginTop: '1rem' }}>Filter By SubCategory</h5>
                    {subCategories.map((subCategory) => (
                      <div className="form-check" key={subCategory.subCategoryName}>
                        <input
                          className="form-check-input custom-checkbox"
                          type="checkbox"
                          id={`subCategory-${subCategory.subCategoryName}`}
                          value={subCategory.subCategoryName}
                          checked={selectedSubCategory === subCategory.subCategoryName}
                          onChange={() => handleSubCategoryChange(subCategory.subCategoryName)}
                        />
                        <label className="form-check-label" htmlFor={`subCategory-${subCategory.subCategoryName}`}>
                          {subCategory.subCategoryName}
                        </label>
                      </div>
                    ))}
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={applyFilters}
                        style={{ marginTop: '10px', fontSize: '0.8rem', padding: '5px', backgroundColor: '#141D37' }} // Custom button color
                      >
                        Apply filter
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className={isMobile ? "col-12" : "col-lg-9"} style={{ flex: '1' }}>
              <div className="product__filter">
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  productsState?.map((p) => (
                    <div
                      key={p._id}
                      className="product__item"
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: isMobile ? '20px 0px' : '20px',
                        margin: '10px 0',
                        width: '100%',
                        alignItems: isMobile ? 'flex-start' : 'center'
                      }}
                    >
                      <img
                        style={{ width: isMobile ? '120px' : '200px', height: isMobile ? '120px' : '200px', objectFit: 'fill', borderRadius: '5px' }}
                        src={process.env.PUBLIC_URL + p?.productImages[0]}
                        alt=""
                      />
                      <div style={{ flex: '1', marginLeft: '20px' }}>
                        <h6>{p.productName}</h6>
                        <p>{p.brand}</p>
                        <p>{p.description.slice(0, 100)}...</p>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ backgroundColor: '#e74c3c' }}
                          component={Link}
                          to={`/products/${p.productName}`}
                        >
                          View More
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Drawer anchor="bottom" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className="sidebar" style={{ padding: '20px' }}>
          <div className="filter-options">
            <h5 style={{ fontSize: '1rem' }}>Sort By</h5>
            <div className="form-check">
              <input
                className="form-check-input custom-checkbox"
                type="checkbox"
                id="mostPurchased"
                value="mostPurchased"
                checked={sortOption === 'mostPurchased'}
                onChange={handleSortChange}
              />
              <label className="form-check-label" htmlFor="mostPurchased">
                Most Purchased
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input custom-checkbox"
                type="checkbox"
                id="recentlyArrived"
                value="recentlyArrived"
                checked={sortOption === 'recentlyArrived'}
                onChange={handleSortChange}
              />
              <label className="form-check-label" htmlFor="recentlyArrived">
                Recently Arrived
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input custom-checkbox"
                type="checkbox"
                id="alphabetical"
                value="alphabetical"
                checked={sortOption === 'alphabetical'}
                onChange={handleSortChange}
              />
              <label className="form-check-label" htmlFor="alphabetical">
                Alphabetical
              </label>
            </div>
            <h5 style={{ fontSize: '1rem', marginTop: '1rem' }}>Filter By Brand (Non-functional)</h5>
            <div className="form-check">
              <input
                className="form-check-input custom-checkbox"
                type="checkbox"
                id="brand-Brother"
                value="Brother"
                checked={selectedBrands.includes('Brother')}
                disabled
              />
              <label className="form-check-label" htmlFor="brand-Brother">
                Brother
              </label>
            </div>
            <h5 style={{ fontSize: '1rem', marginTop: '1rem' }}>Filter By Category</h5>
            {categories.map((category) => (
              <div className="form-check" key={category.categoryName}>
                <input
                  className="form-check-input custom-checkbox"
                  type="checkbox"
                  id={`category-${category.categoryName}`}
                  value={category.categoryName}
                  checked={selectedCategory === category.categoryName}
                  onChange={() => handleCategoryChange(category.categoryName)}
                />
                <label className="form-check-label" htmlFor={`category-${category.categoryName}`}>
                  {category.categoryName}
                </label>
              </div>
            ))}
            <h5 style={{ fontSize: '1rem', marginTop: '1rem' }}>Filter By SubCategory</h5>
            {subCategories.map((subCategory) => (
              <div className="form-check" key={subCategory.subCategoryName}>
                <input
                  className="form-check-input custom-checkbox"
                  type="checkbox"
                  id={`subCategory-${subCategory.subCategoryName}`}
                  value={subCategory.subCategoryName}
                  checked={selectedSubCategory === subCategory.subCategoryName}
                  onChange={() => handleSubCategoryChange(subCategory.subCategoryName)}
                />
                <label className="form-check-label" htmlFor={`subCategory-${subCategory.subCategoryName}`}>
                  {subCategory.subCategoryName}
                </label>
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={applyFilters}
                style={{ marginTop: '10px', fontSize: '0.8rem', padding: '5px', backgroundColor: '#141D37' }} // Custom button color
              >
                Apply filter
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default Products;
