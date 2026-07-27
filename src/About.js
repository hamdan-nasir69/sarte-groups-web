import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './about.css'
import AboutEnvironment from './AboutEnvironment'
import AboutEthics from './AboutEthics'
import AboutHero from './AboutHero'
import AboutSecond from './AboutSecond'
import AboutThird from './AboutThird'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutValue from './AboutValue'
import SEO from './SEO';

export default function About() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const targetId = hash.replace('#', '');
            const element = document.getElementById(targetId);
            
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash]);

    return (
        <div>
            <SEO 
                title="About Us" 
                description="Learn how Sarte brings together strategy, innovation, and execution to deliver enduring value across industries." 
                url="/about" 
            />
            <Navbar />
            <AboutHero />
            <AboutSecond />
            
            <div id="about-third">
                <AboutThird />
            </div>
            
            <AboutValue />
            
            <div id="about-ethics">
                <AboutEthics />
            </div>
            
            <div id="about-environment">
                <AboutEnvironment />
            </div>
            
            <Footer />
        </div>
    )
}