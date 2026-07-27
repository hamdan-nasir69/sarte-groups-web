import Navbar from './Navbar'
import Hero from './Marketing/Hero'
import Offer from './Marketing/Offer'
import Services from './Marketing/Services'
import Testimonials from './Marketing/Testimonials'
import Footer from './Footer'
import SEO from './SEO';

export default function Marketing(){
    return (
        <div>
            <SEO 
                title="About Us" 
                description="Learn how Sarte brings together strategy, innovation, and execution to deliver enduring value across industries." 
                url="/about" 
            />
            <Navbar />
            <Hero />
            <Offer />
            <Services />
            <Testimonials />
            <Footer />
        </div>
    )
}