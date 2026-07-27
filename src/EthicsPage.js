import './ethicspage.css'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO';
import principles from './assets/principles.jpg'
import compliance from './assets/compliance.jpg'
import speaking from './assets/speaking.jpg'
import community from './assets/community.png'

export default function EthicsPage(){
    return (
        <div>
            <SEO 
                title="About Us" 
                description="Learn how Sarte brings together strategy, innovation, and execution to deliver enduring value across industries." 
                url="/about" 
            />
            <Navbar />

            <div className='main-ethics-page'>
                <div className='ethics-page-heading'>
                    <h1>Ethics & Compliance</h1>
                </div>

                <div className='ethics-page-exp'>
                    <p>At Sarte Groups, integrity is not just a value we uphold — it is the cornerstone of everything 
                        we do. Our business decisions, partnerships, and day-to-day operations are guided by a deep 
                        commitment to honesty, fairness, and responsibility. We see ethical conduct and compliance not 
                        merely as policies to follow, but as a lasting promise to our clients, partners, employees, and 
                        the communities we serve. By holding ourselves to the highest standards, we ensure that trust 
                        remains at the heart of every relationship and every achievement.</p>
                </div>

                <div className='guiding-exp'>
                    <h2>Our Guiding Principles</h2>

                    <div className='exp-img-container'>
                        <div className='exp-container'>
                            <p>
                                At Sarte Groups, our guiding principles are the foundation of who we are and the standards by which we operate. They serve as the compass that shapes every decision, action, and relationship, ensuring that our growth is built on trust and responsibility.

                                Integrity comes first, serving as the cornerstone of our reputation. We uphold the highest standards of honesty and fairness, ensuring that every choice we make reflects the trust our clients, partners, employees, and communities place in us.

                                We embrace accountability at every level of the organization. Accountability means taking ownership, being transparent in our processes, and delivering on our commitments — building confidence and strengthening long-lasting relationships.

                                With respect and fairness, we value the dignity of every individual. Diversity and inclusivity enrich our culture, broaden our perspectives, and enable us to create solutions that reflect the needs of a global community.

                                And above all, we pursue excellence with compliance. Innovation and growth drive us forward, but never at the cost of ethical or legal responsibility. By aligning ambition with integrity, we ensure progress that is both responsible and sustainable.

                                Together, these guiding principles define our culture, safeguard our reputation, and guide our future as a trusted and visionary partner.
                            </p>
                        </div>

                        <div className='img-container'>
                            <img src={principles}></img>
                        </div>
                    </div>
                </div>

                <div className='guiding-exp'>
                    <h2>Compliance Commitment</h2>

                    <div className='exp-img-container'>
                        <div className='img-container'>
                            <img src={compliance}></img>
                        </div>

                        <div className='exp-container'>
                            <p>
                                At Sarte Groups, compliance is not optional — it is a non-negotiable part of our identity. We strictly adhere to local and international regulations, ensuring that every aspect of our operations aligns with industry standards, laws, and global best practices. Our stance on anti-corruption and fair business practices is unwavering, with zero tolerance for unethical or unlawful conduct in any form. We also place the highest priority on data privacy and security, safeguarding the confidentiality and integrity of all information entrusted to us. This commitment reflects not only our dedication to ethical responsibility but also our promise to protect the trust of our clients, partners, and communities.
                            </p>
                        </div>

                    </div>                    
                </div>

                <div className='guiding-exp'>
                    <h2>Speaking Up</h2>

                    <div className='exp-img-container'>

                        <div className='exp-container'>
                            <p>
                                At Sarte Groups, compliance is not optional — it is a non-negotiable part of our identity. We strictly adhere to local and international regulations, ensuring that every aspect of our operations aligns with industry standards, laws, and global best practices. Our stance on anti-corruption and fair business practices is unwavering, with zero tolerance for unethical or unlawful conduct in any form. We also place the highest priority on data privacy and security, safeguarding the confidentiality and integrity of all information entrusted to us. This commitment reflects not only our dedication to ethical responsibility but also our promise to protect the trust of our clients, partners, and communities.
                            </p>
                        </div>

                        <div className='img-container'>
                            <img src={speaking}></img>
                        </div>

                    </div>                    
                </div>

                <div className='guiding-exp'>
                    <h2>Community Responsibility</h2>

                    <div className='exp-img-container'>


                        <div className='exp-container'>
                            <p>
                                At Sarte Groups, compliance is a non-negotiable part of our identity. We adhere to local and international regulations, ensuring that every operation aligns with industry standards and global best practices. Our stance on anti-corruption and fair business practices is uncompromising, with zero tolerance for unethical conduct.

                                We also place the highest priority on data privacy and security, protecting the confidentiality and integrity of all information entrusted to us. For us, compliance is more than following rules — it is a promise to uphold responsibility, protect trust, and sustain our reputation for the future.
                                    
                                This commitment is woven into our culture, guiding how we work, make decisions, and build relationships. By embedding compliance into every level of our organization, we create an environment where ethical behavior thrives, risks are minimized, and long-term value is secured for our clients, partners, and communities.
                            </p>
                        </div>

                        <div className='img-container'>
                            <img src={community}></img>
                        </div>

                    </div>                    
                </div>

            </div>

            <Footer />
        </div>
    )
}