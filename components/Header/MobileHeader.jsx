import { IoSearchOutline, IoLibraryOutline, IoPerson, IoSunny } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import './Header.css';

function MobileHeader() {
    return (
        <>
            <nav className='mobile-header'>
                <ul className='nav-container'>
                    <li className='nav-link' >
                        <GoHomeFill />
                        <span>Home</span>
                    </li>
                    <li className='nav-link' >
                        <IoSearchOutline />
                        <span>Search</span>
                    </li>
                    <li className='nav-link' >
                        <IoLibraryOutline />
                        <span>Library</span>
                    </li>
                </ul>
            </nav>

            <div className='header-container'>
                <div className="profile">
                    <IoPerson />
                </div>
                <div className="theme-btn">
                    <IoSunny />
                </div>
            </div>
        </>
    )
}

export default MobileHeader