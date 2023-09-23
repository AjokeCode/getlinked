import { Link } from 'react-router-dom';
import './header.css';
import { useContext } from 'react';
import Context from '../context/context';

const Header = ()=>{
    const value = useContext(Context);

    return (
        <header className="header">
            <h1 className="header-1">
                get<span className='header-1-span'>linked</span>
            </h1>
            <ul className="header-list">
                <li className="header-item">
                    Timeline
                </li>
                <li className="header-item">
                    Overview
                </li>
                <li className="header-item">
                    Faqs
                </li>
                <li className="header-item">
                    <Link to={'/contact'} className='header-link'>
                    Contact
                    </Link>
                </li>
                <li className="header-item header-item-2">
                    <Link to={'/register'} className='header-link'>
                    Register
                    </Link>
                </li>
            </ul>
        </header>
    )
}
export default Header;