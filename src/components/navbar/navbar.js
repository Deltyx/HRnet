import './navbar.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg'

export function Navbar() {

    return (
        <nav className='main-nav'>
            <Link to='/' className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Wealth Health Logo"
                />
                <p className='main-nav-title'>Wealth Health HRnet</p>
            </Link>
            <span>
                <Link to='/employee-create' className="main-nav-item">Create Employee</Link>
                <Link to='/employee-list' className="main-nav-item">Employees List</Link>
            </span>
        </nav>
    )
}