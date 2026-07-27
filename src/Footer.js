import './footer.css'
import logo from './assets/logo.png'
import linkedin from './assets/linkedin-icon.svg'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
    return (
        <div className="main-footer">
            <div className='left-footer'>
                <img src={logo}></img>
                <p>Sarte is a diversified solutions company with expertise in construction, marketing, and software.
                    We bring together strategy, innovation, and execution to deliver enduring value across
                    industries. Guided by excellence and responsibility, we help shape businesses, build infrastructure,
                    and drive digital transformation.</p>

                <img src={linkedin} className='icon'></img>
            </div>
            <div className='right-footer'>
                <div className='right-footer-part'>
                    <h5>Our Services</h5>

                    <ul>
                        <li><Link to="/construction">Construction</Link></li>
                        <li><Link to="/marketing">Marketing</Link></li>
                        <li><Link to="/software">Software Solutions</Link></li>
                    </ul>
                </div>

                <div className='right-footer-part'>
                    <h5>How Sarte Operates</h5>

                    <ul>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to="/about#about-third">What sets us apart</Link></li>
                        <li><Link to="/about#about-ethics">Ethics and Compliance</Link></li>
                        <li><Link to="/about#about-environment">Environmental Impact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}