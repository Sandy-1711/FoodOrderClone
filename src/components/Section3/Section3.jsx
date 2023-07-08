import React from 'react'
import './Section3.scss'
import products from './products'
import ProductCard from '../ProductCard'
const Section3 = () => {
    return (
        <div className='section3'>
            <div className='container'>

                <p>FRESH FROM PANPIE</p>

                <h2>We Offer People Best Pizza</h2>

                <div className='pizzaslice'>
                    <img src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape28.png' alt='pizzaslice' />
                </div>

                <div className='tacoslice'>
                    <img src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape27.png' alt='tacoslice' />
                </div>

                <div className='frenchfries'>
                    <img src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape34.png' alt='frenchfries' />
                </div>

                <div className='onion'>
                    <img src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape36.png' alt='onion' />
                </div>

                <div className='productContainerContainer'>

                    <div className='productContainer'>

                        {/* ProductCard Function returning individual product cards */}
                        {/* products array contains details of all the products */}

                        {products.map(ProductCard)}



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3