import { Link } from 'react-router-dom';
import './header.css';
import { useState } from 'react';
import {BsListNested} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';

const Header = ()=>{
    const [isClick, setIsClick]= useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <header className="header">
            <h1 className="header-1">
                get<span className='header-1-span'>linked</span>
            </h1>
            <ul className="header-list">
                <li className="header-item" onClick={scrollToTop}>
                    <Link to={'/timeline'} className='header-link'>
                    Timeline
                    </Link>
                </li>
                <li className="header-item" onClick={scrollToTop}>
                    <Link to={'/overview'} className='header-link'>Overview</Link>
                </li>
                <li className="header-item" onClick={scrollToTop}>
                    <Link to={'/faqs'} className='header-link'>Faqs</Link>
                </li>
                <li className="header-item" onClick={scrollToTop}>
                    <Link to={'/contact'} className='header-link'>
                    Contact
                    </Link>
                </li>
                <li className="header-item header-item-2" onClick={scrollToTop}>
                    <Link to={'/register'} className='header-link'>
                    Register
                    </Link>
                </li>
            </ul>
            
               <BsListNested className='open' onClick={()=> setIsClick(true)}/>
               {isClick ?
                <>
              <div className='ham-div'>
              <AiOutlineClose className='close' onClick={()=> setIsClick(false)}/>
                <ul className="header-lists">
                <li className="header-items" onClick={scrollToTop}>
                <Link to={'/timeline'} className='header-link'>
                    Timeline
                    </Link>
                </li>
                <li className="header-items" onClick={scrollToTop}>
                <Link to={'/overview'} className='header-link'>Overview</Link>
                </li>
                <li className="header-items" onClick={scrollToTop}>
                <Link to={'/faqs'} className='header-link'>Faqs</Link>
                </li>
                <li className="header-items" onClick={scrollToTop}>
                    <Link to={'/contact'} className='header-link'>
                    Contact
                    </Link>
                </li>
                <li className="header-items header-items-2" onClick={scrollToTop}>
                    <Link to={'/register'} className='header-link'>
                    Register
                    </Link>
                </li>
            </ul>
            </div>
            </> : ''}
        </header>
    )
}
export default Header;