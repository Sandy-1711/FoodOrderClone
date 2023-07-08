import React from 'react'
import './Section2.scss'
const Section2 = () => {
    return (
        <div className='section2'>

            {/* Poster element containing all images */}

            <div className='posters'>

                <img src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add01.jpg' alt='1' />

                <div className='threeposters'>

                    <div className='twoposters'>

                        <img src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add02.jpg' alt='2' />

                        <img src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add03.jpg' alt='3' />

                    </div>

                    <img src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add04.jpg' alt='4' />

                </div>
            </div>
        </div>
    )
}

export default Section2