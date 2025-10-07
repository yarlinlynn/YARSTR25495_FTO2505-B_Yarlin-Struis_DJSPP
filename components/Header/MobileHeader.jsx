import { useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import {
  BsThreeDotsVertical,
  BsX,
  BsSearch, BsSearchHeartFill,
  BsHouseDoor, BsHouseDoorFill,
  BsHeart, BsHeartFill,
  BsCollection,
  BsFolder2Open, BsFolderFill,
  BsSun, BsMoon
} from 'react-icons/bs';
import './Header.css';

function MobileHeader() {

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <header className='mobile-header'>
            {/* <div className='podcast-logo'>
                <h1>🎙️ Podcast App</h1>
            </div> */}

            <nav className='nav-list'>
                <Link to="/" className={`nav-item ${currentPath === '/' ? 'active' : ''}`}>
                    {/* home button */}
                    {currentPath === '/' ? <BsHouseDoorFill /> : <BsHouseDoor />}
                </Link>
                <Link to="/search" className={`nav-item ${currentPath === '/search' ? 'active' : ''}`}>
                    {/* search icon */}
                    {currentPath === '/search' ? <BsSearchHeartFill /> : <BsSearch />}
                </Link>
                <Link to="/lbrary" className={`nav-item ${currentPath === '/library' ? 'active' : ''}`}>
                    {/* my library icon */}
                    {currentPath === '/library' ? <BsFolderFill /> : <BsFolder2Open />}
                </Link>
                <Link to="/favourites" className={`nav-item ${currentPath === '/favourites' ? 'active' : ''}`}>
                    {/* favourite episode */}
                    {currentPath === '/favourites' ? <BsHeart /> : <BsHeartFill />}
                </Link>
                <button className='theme-btn'>
                    <BsSun />
                    {/* <BsMoon /> */}
                </button>
            </nav> 
        </header>
    )
}

export default MobileHeader