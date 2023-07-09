import React, { useEffect } from 'react'
// importing the header css file
import './Header.scss'
export const Header = () => {


  useEffect(function () {
    var menu = document.querySelector('.menu');
    menu.addEventListener('click', function () {
      menu.classList.toggle('menuopen')
      document.querySelector('.links').classList.toggle('linksmobile');
    })
  })


  return (
    <header>
      <div className='logoImage'>
        <img height='218' width='600' fill='currentColor' src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/img/logo-dark.png' alt='logo' />
      </div>
      <div className='links'>
        <ul >
          <li >
            <div className='menuOuter'
              onClick={function () {

                document.querySelector('.fa-plus').classList.toggle('invisible');
                document.querySelector('.fa-minus').classList.toggle('visible');
                document.querySelector('.homemenu').classList.toggle('showSubmenu')
              }}>

              <span>HOME</span> <i className="fa-solid fa-plus"></i><i
                className='minus' class="fa-solid fa-minus"></i>
            </div>

            {/* Submenu */}
            <div className='homemenu'>
              <ul >
                <li><span>Home 1</span></li>
                <li><span>Home 2</span></li>
                <li><span>Home 3</span></li>
                <li><span>Home 4</span></li>
                <li><span>Home 5</span></li>
                <li><span>Home 6</span></li>
              </ul>
            </div>
          </li>
          <li><div className='menuOuter'
            onClick={function () {

              document.querySelector('.fa-plus').classList.toggle('invisible');
              document.querySelector('.fa-minus').classList.toggle('visible');
              document.querySelector('.foodmenu').classList.toggle('showSubmenu')
            }}>

            <span>MENU</span> <i className="fa-solid fa-plus"></i><i
              className='minus' class="fa-solid fa-minus"></i>
          </div>
            {/* Submenu */}

            <div className='foodmenu'>
              <ul>
                <li><span>Food Menu 01</span></li>
                <li><span>Food Menu 02</span></li>
                <li><span>Food Menu 03</span></li>
                <li><span>Food Menu 04</span></li>
                <li><span>Food Menu 05</span></li>
                <li><span>Food Menu 06</span></li>
              </ul>
            </div>
          </li>

          <li
          ><div className='menuOuter'
            onClick={function () {

              document.querySelector('.fa-plus').classList.toggle('invisible');
              document.querySelector('.fa-minus').classList.toggle('visible');
              document.querySelector('.pages').classList.toggle('showSubmenu')
            }}>

              <span>PAGES</span> <i className="fa-solid fa-plus"></i><i
                className='minus' class="fa-solid fa-minus"></i>
            </div>
            {/* Submenu */}

            <div className='pages'>
              <ul>
                <li><span>Pages</span></li>
                <li><span>Gallery Page</span></li>
                <li><span>Team Page</span></li>
                <li><span>Event Page</span></li>
              </ul>
            </div></li>
          <li
          ><div className='menuOuter' onClick={function () {

            document.querySelector('.fa-plus').classList.toggle('invisible');
            document.querySelector('.fa-minus').classList.toggle('visible');
            document.querySelector('.blogs').classList.toggle('showSubmenu')
          }}>

              <span>BLOG</span> <i className="fa-solid fa-plus"></i><i
                className='minus' class="fa-solid fa-minus"></i>
            </div>
            {/* Submenu */}

            <div className='blogs'>

              <ul>
                <li><span>Blog 1</span></li>
                <li><span>Blog 2</span></li>
                <li><span>Single Blog</span></li>
              </ul>
            </div>
          </li>
          <li
          ><div className='menuOuter' onClick={function () {

            document.querySelector('.fa-plus').classList.toggle('invisible');
            document.querySelector('.fa-minus').classList.toggle('visible');
            document.querySelector('.shops').classList.toggle('showSubmenu')
          }}>

              <span>SHOP</span> <i className="fa-solid fa-plus"></i><i
                className='minus' class="fa-solid fa-minus"></i>
            </div>
            {/* Submenu */}

            <div className='shops'>
              <ul>
                <li><span>Shop</span></li>
                <li><span>Cart</span></li>
                <li><span>Checkout</span></li>
              </ul>
            </div>
          </li>
          <li><div className='menuOuter'>

            <span>CONTACT</span>
          </div>
          </li>
        </ul>
      </div>
      <div className='rightportion'>

        <div className='contact'>
          <div className='icon'>
            <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" /></svg>
          </div>
          <div className='info'>
            <span style={{ color: '5F5F5F' }}>HOT LINE:</span>
            <span style={{
              color: '#f43127',
            }}>+304-779-645</span>
          </div>
        </div>
        <div className='right'>

          <div className='cart'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>

            {/* Dropdown of Cart icon */}

            <div className='cartdropdown'>
              <h2>Cart</h2>
              <p>No items in cart.</p>
            </div>
          </div>
          <span>-$0.00</span>
          <div className='search' onClick={function () {
            document.querySelector('.cross').classList.toggle('searchVisible');

            document.querySelector('.searchIcon').classList.toggle('searchInVisible')
            document.querySelector('.searchBar').classList.toggle('visible')
          }}>
            <svg className='searchIcon' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            <svg className='cross' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>

            {/* Dropdown of Search Icon */}
            <div className='searchBar'>
              <form>
                <input placeholder='Search ..' />
                <div>
                  <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                </div>

              </form>
            </div>
          </div>
        </div>
        {/* Hamburger icon */}
        <div className='menu'>
          <span className='span1'></span>
          <span className='span2'></span>
          <span className='span3'></span>
          <span className='span4'></span>
        </div>
      </div>

    </header >
  )
}
