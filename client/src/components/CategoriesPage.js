import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CategoriesPage.css';

const CategoriesPage = () => {
    const { categories, subCategories } = useSelector((state) => state.category);
    const navigate = useNavigate();

    const [width, setWidth] = useState(window.innerWidth);
    const [openCategory, setOpenCategory] = useState(null);

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

    const handleCategoryClick = (categoryName, hasSubCategories) => {
        if (hasSubCategories) {
            setOpenCategory(openCategory === categoryName ? null : categoryName);
        } else {
            navigate(`/products?category=${categoryName}`);
        }
    };

    const getCategoryRows = () => {
        const rows = [];
        let currentRow = [];
        categories.forEach((c, index) => {
            currentRow.push(c);
            if ((index + 1) % 3 === 0 || index === categories.length - 1) {
                rows.push(currentRow);
                currentRow = [];
            }
        });
        return rows;
    };

    const categoryRows = getCategoryRows();

    const highlightColor = '#d0e1f9'; // Lighter version of #141D37

    return (
        <section className="product spad py-3 bg2" id="service">
            <div className="container" style={{ backgroundColor: 'white' }}>
                <h2 className="section-title text-black">Products and Services</h2>
                {categoryRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="row product__filter justify-content-center">
                        {row.map((c) => (
                            <div
                                key={c.categoryName}
                                className=""
                                style={{ width: '30%', marginRight: '1.5%', marginLeft: '1.5%' }}
                            >
                                <div
                                    className="card mb-3"
                                    style={{
                                        height: '90%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        backgroundColor: openCategory === c.categoryName ? highlightColor : 'white',
                                        color: openCategory === c.categoryName ? 'white' : 'black',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => handleCategoryClick(c.categoryName, subCategories.some(sc => sc.categoryId === c.categoryName))}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <img src={c.categoryImage.url} alt={c.categoryName} style={{ flexGrow: 1, objectFit: 'contain' }} />
                                        <h5 className="text-center my-categories" style={{ marginTop: 'auto' }}>{c.categoryName}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {openCategory && row.some(c => c.categoryName === openCategory) && (
                            <div className="row product__filter justify-content-center" style={{ width: '97%', margin: '1.5%' }}>
                                <div className="card mb-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '10px' }}>
                                        {subCategories.filter(sc => sc.categoryId === openCategory).map(sc => (
                                            <div key={sc.subCategoryName} style={{ width: '97%', margin: '1.5%', padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '10px', backgroundColor: 'white', textAlign: 'center', cursor: 'pointer', border: '0.5px solid #141D37' }} onClick={() => navigate(`/products?subCategory=${sc.subCategoryName}`)}>
                                                <h5 className="subcategory-name" style={{ margin: '0' }}>{sc.subCategoryName}</h5>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoriesPage;
