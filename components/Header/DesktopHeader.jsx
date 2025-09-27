import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline, IoPerson, IoSunny } from "react-icons/io5";
import './Header.css';

function DekstopHeader() {
    return(
        <header>
            <div className='logo'></div>
            <div className='home-search'>
                <span className='home'>
                    <GoHomeFill className='icon' />
                </span>
                <div className='search'>
                    <IoSearchOutline className='search-icon' />
                    <input className='search-input' type="text" placeholder='What do you want to play?' required />
                </div>
            </div>
            <div className='theme_profile'>
                <span className='person-icon'>
                    <IoPerson className='icon' />
                </span>
                <div className='theme'>
                    <IoSunny/>
                </div>
            </div>
        </header>
    )
}

export default DekstopHeader