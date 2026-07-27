import './services.css';
import construction from './assets/construction.jpg';
import marketing from './assets/marketing.jpg';
import software from './assets/software.jpg';
import { Link } from 'react-router-dom';
import SEO from './SEO';

export default function Services() {
    return (
        <div className='main-services'>
            <SEO 
                title="Our Services" 
                description="Innovation in every dimension. Explore Sarte's Construction, Marketing, and Software Solutions." 
                url="/services" 
            />
            
            <h1>Innovation in Every Dimension.</h1>
            
            <div className='services-list'>
                <div className='service-slide'>
                    <div className='service-img'>
                        <img src={construction} alt="Sarte Construction Services" loading="lazy" />
                    </div>
                    
                    <div className='service-description'>
                        <h2>Sarte Constructions</h2>
                        <p>From Concept to Completion, We Deliver Structures That Endure.</p>
                        <Link to='/construction' className='browse-button'>
                            Browse
                        </Link>
                    </div>
                </div>

                <div className='service-slide'>
                    <div className='service-img'>
                        <img src={marketing} alt="Sarte Marketing Solutions" loading="lazy" />
                    </div>
                    
                    <div className='service-description'>
                        <h2>Sarte Marketing</h2>
                        <p>Driving growth through creativity, strategy, and actionable insight.</p>
                        <Link to='/marketing' className='browse-button'>
                            Browse
                        </Link>
                    </div>
                </div>
                
                <div className='service-slide'>
                    <div className='service-img'>
                        <img src={software} alt="Sarte Tech Studio Software Solutions" loading="lazy" />
                    </div>
                    
                    <div className='service-description'>
                        <h2>Sarte Tech Studio</h2>
                        <p>Designing Intelligent, Scalable, and Future-Ready Software Solutions.</p>
                        <Link to='/software' className='browse-button'>
                            Browse
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}