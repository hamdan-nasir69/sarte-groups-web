import Hero from './Hero';
import Services from './Services';
import Mission from './Mission';
import Owners from './Owners';
import Footer from './Footer';
import Navbar from './Navbar';
import SEO from './SEO';

export default function All(){
    return (
        <div>
            <SEO 
                title="About Us" 
                description="Learn how Sarte brings together strategy, innovation, and execution to deliver enduring value across industries." 
                url="/about" 
            />
            <Navbar />
            <Hero />
            <Services />
            <Mission />
            <Owners />
            <Footer />
        </div>
    )
}