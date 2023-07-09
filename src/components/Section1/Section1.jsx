import React, { useEffect } from 'react'
import './Section1.scss'
import Button from '../Button'


const Section1 = () => {



    useEffect(function () {


        // script to move onions on mouse movement


        var element = document.getElementsByClassName("home")[0];
        element.addEventListener("mousemove", function (event) {
            var mouseX = event.clientX;
            var elementX = element.getBoundingClientRect().left;
            var offsetX = mouseX - elementX;

            // Condition so that animation does not happen on smaller devices that do not have mouse

            if (window.innerWidth >= 480) {

                document.getElementsByClassName('onion1')[0].style.transform = "translateX(" + -(offsetX / 10) + "px)";
                document.getElementsByClassName('onion2')[0].style.transform = "translateX(" + (offsetX / 3) + "px)";
            }
        });

        element.addEventListener("mouseleave", function () {
            document.getElementsByClassName('onion1')[0].style.transform = "translateX(0)";
            document.getElementsByClassName('onion2')[0].style.transform = "translateX(0)";

        });

        //  carousel script 


        const carouselInner = document.querySelector(".section1");
        const prevBtn = document.querySelector(".leftbutton");
        const nextBtn = document.querySelector(".rightbutton");
        const carouselItems = document.querySelectorAll(".home");
        // console.log((document.querySelector('.active').getAttribute('var')));
        const numItems = carouselItems.length;
        const itemWidth = carouselItems[0].clientWidth;

        let currentIndex = document.querySelector('.active').getAttribute('var');
        prevBtn.addEventListener("click", function () {
            currentIndex = document.querySelector('.active').getAttribute('var')
            console.log(currentIndex);

            carouselItems[currentIndex].classList.toggle('active')
            currentIndex = currentIndex - 1;
            if (currentIndex < 0) {
                currentIndex = numItems - 1;
            }
            carouselItems[currentIndex].classList.toggle('active')

        });

        nextBtn.addEventListener("click", function () {
            carouselItems[currentIndex].classList.toggle('active')
            currentIndex++;
            if (currentIndex === numItems) {
                currentIndex = 0;
            }
            carouselItems[currentIndex].classList.toggle('active')

        });
        setInterval(function () {
            console.log('interval');
            carouselItems[currentIndex].classList.toggle('active')
            currentIndex++;

            if (currentIndex === numItems) {
                currentIndex = 0;
            }
            carouselItems[currentIndex].classList.toggle('active')
        }, 10000)


    })



    return (
        <div className='section1'>

            <div className='home active' var='0'>
                {/* <div className='corouselbutton leftbutton' >
                    <svg fill='currentColor' viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                </div>
                <div className='corouselbutton rightbutton'>
                    <svg fill='currentColor' viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                </div> */}
                <img className='tomato' src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_shape_05.png' alt='tomato' />

                <img className='redSpot' src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_shape_09.png' alt='redSpot' />

                <img className='glow' src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_shape_08.png' alt='glow' />

                <img className='onion1' src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_shape_06.png' alt='onion' />

                <img className='onion2' src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_shape_06.png' alt='onion' />

                <img className='slider' src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slide02-1.png' alt='pizza1' />

                <div className='intro'>
                    <h1 className='bigitalian'>BIG ITALIAN</h1>
                    <h1 >CHEES PIZZA</h1>

                </div>
                <p>Additional charge for premium toppings are fixed Minumum of 2 required.</p>

                {/* Button Component  */}

                <Button action="ORDER NOW" />
            </div>
            <div className='home' var='1'>

                <img className='tomato' src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_shape_05.png' alt='tomato' />

                <img className='redSpot' src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_shape_09.png' alt='redSpot' />

                <img className='glow' src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_shape_08.png' alt='glow' />

                <img className='onion1' src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_shape_06.png' alt='onion' />

                <img className='onion2' src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_shape_06.png' alt='onion' />

                <img className='slider' src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slide02-1.png' alt='pizza1' />

                <div className='intro'>
                    <h1 className='bigitalian'>BIG ITALIAN</h1>
                    <h1 >CHEES PIZZA</h1>

                </div>
                <p>Additional charge for premium toppings are fixed Minumum of 2 required.</p>

                {/* Button Component  */}

                <Button action="ORDER NOW" />
            </div>
            <div className='corouselbutton leftbutton' >
                <svg fill='currentColor' viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
            </div>
            <div className='corouselbutton rightbutton'>
                <svg fill='currentColor' viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
            </div>
        </div>
    )
}

export default Section1