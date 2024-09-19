import React from 'react'
import Banner from './Banner'
import MostlyRentedProducts from './MostlyRentedProducts'
import BecomeButton from './BecomeButton.js'
import RentalCategories from './RentalCategories'
import { Helmet } from 'react-helmet-async'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Noble Solutions</title>
                <meta
                    name="description"
                    content="One stop for all office needs"
                />
            </Helmet>
            <Banner />
            <RentalCategories />
            <BecomeButton />
            <MostlyRentedProducts />
        </>
    )
}

export default Home
