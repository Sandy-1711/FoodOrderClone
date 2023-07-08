import React from 'react'
import Button from './Button'
const ProductCard = (props) => {
    return (
        <div className='productcard'>

            {/* Product Image */}

            <div className='productimage'><img src={props.src} alt={props.title} /></div>

            {/* Product Price */}

            <div className='productprice'>{props.price}</div>

            {/* Product Title */}

            <h3>{props.title}</h3>

            {/* Button component */}

            <Button action="VIEW OPTIONS"

            />
            {/* Animation icons behind original product */}
            <div className='cardpizza'>
                <img src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/element/shape21.png' alt='cardpizza' />
            </div>
            <div className='cardonion'><img src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/element/shape22.png'
                alt="onion" /></div>
        </div>
    )
}

export default ProductCard