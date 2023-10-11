import { Link } from 'react-router-dom';
import './header.css';
import { useState } from 'react';
import {BsListNested} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

const Header = ()=>{
    const location = useLocation();
    const [isClick, setIsClick]= useState(false);
    const [close, setClose] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    const handleClicks=()=>{
        setIsClick(true)
        setClose(true)
    }
    const handleifClick=()=>{
        setIsClick(false)
        setClose(false)
    }

    return (
        <header className="header">
            <h1 className="header-1">
                get<span className='header-1-span'>linked</span>
            </h1>
            <ul className="header-list">
                <li className="header-item" onClick={scrollToTop}>
                    <Link to={'/'}  className={` ${
              location.pathname === '/' ? 'color' : 'header-link'
            }`} >
                    Home
                    </Link>
                </li>
                <li className="header-item" onClick={scrollToTop}>
                    <Link to={'/overview'}  className={` ${
              location.pathname === '/overview' ? 'color' : 'header-link'
            }`}>Overview</Link>
                </li>
                <li className="header-item" onClick={scrollToTop}>
                    <Link to={'/faqs'}  className={` ${
              location.pathname === '/faqs' ? 'color' : 'header-link'
            }`}>Faqs</Link>
                </li>
                <li className="header-item" onClick={scrollToTop}>
                    <Link to={'/contact'}  className={` ${
              location.pathname === '/contact' ? 'color' : 'header-link'
            }`}>
                    Contact
                    </Link>
                </li>
                <li className="header-item header-item-2" onClick={scrollToTop}>
                    <Link to={'/register'}  className={` ${
              location.pathname === '/register' ? 'color' : 'header-link'
            }`}>
                    Register
                    </Link>
                </li>
            </ul>
            
               {
                !close? (
                    <BsListNested className='open' onClick={handleClicks}/>
                ): ''
               }
               
               {isClick ?
                <>
              <div className='ham-div'>
              <AiOutlineClose className='close' onClick={handleifClick}/>
                <ul className="header-lists">
                <li className="header-items" onClick={scrollToTop}>
                <Link to={'/'}  className={` ${
              location.pathname === '/' ? 'color' : 'header-link'
            }`}>
                    Home
                    </Link>
                </li>
                <li className="header-items" onClick={scrollToTop}>
                <Link to={'/overview'}  className={` ${
              location.pathname === '/overview' ? 'color' : 'header-link'
            }`}>Overview</Link>
                </li>
                <li className="header-items" onClick={scrollToTop}>
                <Link to={'/faqs'}  className={` ${
              location.pathname === '/faqs' ? 'color' : 'header-link'
            }`}>Faqs</Link>
                </li>
                <li className="header-items" onClick={scrollToTop}>
                    <Link to={'/contact'}  className={` ${
              location.pathname === '/contact' ? 'color' : 'header-link'
            }`}>
                    Contact
                    </Link>
                </li>
                <li className="header-items header-items-2" onClick={scrollToTop}>
                    <Link to={'/register'}  className={` ${
              location.pathname === '/register' ? 'color' : 'header-link'
            }`}>
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