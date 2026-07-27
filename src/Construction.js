import './App.css'
import CHero from './CHero'
import COffers from './COffers'
import CServices from './CServices'
import Navbar from './Navbar'
import Testimonials from './Testimonials'
import Footer from './Footer'
import SEO from './SEO';

export default function Construction(){
    return (
        <div>
            <SEO 
                title="About Us" 
                description="Learn how Sarte brings together strategy, innovation, and execution to deliver enduring value across industries." 
                url="/about" 
            />
            <Navbar />
            <CHero />
            <COffers />
            <CServices />
            <Testimonials />
            <Footer />
        </div>
    )
}