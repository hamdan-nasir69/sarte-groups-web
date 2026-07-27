import './contact.css'
import ContactDetails from './ContactDetails'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO';

export default function Contact(){
    return (
        <div>
            <SEO 
                title="About Us" 
                description="Learn how Sarte brings together strategy, innovation, and execution to deliver enduring value across industries." 
                url="/about" 
            />
            <Navbar />
            <ContactDetails />
            <Footer />
        </div>
    )
}