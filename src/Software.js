import Navbar from './Navbar'
import Hero from './Software/Hero'
import Offers from './Software/Offer'
import Services from './Software/Services'
import Testimonials from './Software/Testimonials'
import Footer from './Footer'
import SEO from './SEO';

export default function Software(){
    return (
        <div>
            <SEO 
                title="About Us" 
                description="Learn how Sarte brings together strategy, innovation, and execution to deliver enduring value across industries." 
                url="/about" 
            />
            <Navbar />
            <Hero />
            <Offers />
            <Services />
            <Testimonials />s
            <Footer />
        </div>
    )
}