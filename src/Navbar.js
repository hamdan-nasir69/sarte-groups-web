import { useState,useEffect } from 'react'
import logo from './assets/logo.png'
import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar(){
    const [isScrolled,setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
              setIsScrolled(true);
            } else {
              setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }

    function hideSidebar(e){
        e.preventDefault();

        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }

    return (
        <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            {!isScrolled && (
              <div className="top-nav hideOnMobile">
                <ul>
                  <li className='hideOnMobile'>
                    <Link to="/about">About</Link>
                  </li>
                  <li className='hideOnMobile'>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            )}
           <nav>
                <ul className="sidebar">
                    <li onClick = {hideSidebar}><a href = "/" className='x-logo'><svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill="#F7C986"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                    <Link to='/construction'><li><a href = "#">Construction</a></li></Link>
                    <Link to='/marketing'><li><a href = "#">Marketing</a></li></Link>
                    <Link to='/software'><li><a href = "#">Software</a></li></Link>
                    <Link to='/about'><li><a href='#'>About</a></li></Link>
                    <Link to='/contact'><li><a href='#'>Contact</a></li></Link>
                </ul>

                <li onClick = {showSidebar} className = "menuBtn"><a href = "#"><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#F7C986"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>

                <ul>
                    <Link to='/'><img src={logo} alt='sarte-logo' className='sarte-logo'></img></Link>
                    <Link to='/construction'><li className='hideOnMobile'><a href='#'>Construction</a></li></Link>
                    <Link to='/marketing'><li className='hideOnMobile'><a href='#'>Marketing</a></li></Link>
                    <Link to='/software'><li className='hideOnMobile'><a href='#'>Software</a></li></Link>
                </ul>
           </nav>

        </div>
    )
}