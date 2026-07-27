import './values.css'
import Navbar from './Navbar'
import progress from './assets/progress.jpg'
import trust from './assets/trust.jpg'
import excellence from './assets/excellence.jpg'
import integrity from './assets/integrity.jpg'
import promise from './assets/promise.jpg'
import Footer from './Footer'

export default function Values(){
    return (
        <div>
            <Navbar />
            <div className="main-values">
                <div className='main-values-heading'>
                    <h1>Our Values</h1>
                </div>

                <div className='main-values-exp'>
                    <p>At Sarte Groups, our values are more than words on a page — they are the foundation 
                        of who we are and the compass that guides every decision we make. They define our 
                        culture, shape our partnerships, and ensure that we grow with integrity, 
                        responsibility, and vision.</p>
                </div>

                <div className='main-values-exp'>
                    <h2>Inspiring Progress</h2>

                    <div className='exp-img-container'>
                        <div className='exp-container'>
                            <p>We believe that true progress stems from more than ambition — it is rooted in clarity of 
                            purpose and guided by vision. At Sarte Groups, progress means pushing beyond boundaries, 
                            reimagining possibilities, and creating pathways that inspire sustainable growth. Every 
                            project we undertake is designed not only to meet expectations but to establish new 
                            benchmarks of innovation, performance, and impact. Our forward-thinking approach ensures we 
                            remain one step ahead, transforming challenges into opportunities and aspirations into 
                            realities. By combining purposeful ambition with precision execution, we shape a future that 
                            is both dynamic and enduring, where progress is not a destination but a continuous journey.
                        </p>
                        </div>
                        
                        <div className='img-container'>
                            <img src={progress}></img>
                        </div>
                    </div>
                        
                </div>

                <div className='main-values-exp'>
                    <h2>Sustaining Trust</h2>

                    <div className='exp-img-container'>
                        <div className='img-container'>
                            <img src={trust}></img>
                        </div>

                        <div className='exp-container'>
                            <p>Trust is the cornerstone of lasting relationships and the very essence of how we do business. At Sarte Groups, we recognize that trust cannot be demanded — it must be earned through consistent actions that reflect honesty, fairness, and transparency. By committing to these principles in every interaction, we strengthen the confidence of our clients, partners, employees, and communities. Trust, for us, is not a one-time achievement but a continuous responsibility — something to be built with care, protected with diligence, and sustained with integrity over time. It is the foundation that allows us to grow, collaborate, and create enduring value together.
                        </p>
                        </div>
                        
                    </div>
                        
                </div>

                <div className='main-values-exp'>
                    <h2>Defining Excellence</h2>

                    <div className='exp-img-container'>
                        <div className='exp-container'>
                            <p>Excellence is not a destination — it is a continuous pursuit that defines who we are and how we operate. At Sarte Groups, we hold ourselves to the highest standards in everything we do, from the smallest detail to the largest initiative. For us, excellence is not about achieving perfection once; it is about building consistency, discipline, and dedication into every process, every decision, and every outcome. We believe that true excellence lies in doing things right the first time, every time — ensuring efficiency, reliability, and quality that endures. By embedding excellence into the fabric of our culture, we create outcomes that stand the test of time — outcomes that inspire confidence today and shape a legacy for tomorrow.
                        </p>
                        </div>
                        
                        <div className='img-container'>
                            <img src={excellence}></img>
                        </div>
                    </div>
                        
                </div>

                <div className='main-values-exp'>
                    <h2>Living Integrity</h2>

                    <div className='exp-img-container'>
                        <div className='img-container'>
                            <img src={integrity}></img>
                        </div>

                        <div className='exp-container'>
                            <p>Integrity is the guiding principle behind every decision we make and every action we take. At Sarte Groups, we believe that success without integrity is not success at all. That is why we remain unwavering in our commitment to honesty, fairness, and ethical responsibility, no matter the circumstances. Integrity means doing the right thing even when it is difficult, and ensuring that our words and actions are always aligned. By upholding transparency and accountability, we create an environment where trust can thrive and where every stakeholder knows that they can rely on us. For us, integrity is not situational — it is the standard that defines our culture, strengthens our reputation, and sustains our future.
                        </p>
                        </div>
                        
                    </div>
                        
                </div>

                <div className='main-values-exp'>
                    <h2>Our Promise</h2>

                    <div className='exp-img-container'>

                        <div className='exp-container'>
                            <p>At Sarte Groups, our promise is more than a statement — it is a responsibility we uphold every day. We promise to lead with integrity, deliver with excellence, and act with accountability in every project, partnership, and decision. This commitment extends beyond business performance to the way we treat our clients, support our employees, and contribute to our communities.

                                We believe that a promise kept is the strongest foundation for trust, and we work tirelessly to ensure that every assurance we make is honored with precision and care. Our promise means delivering consistently, standing firm in challenges, and ensuring that stakeholders can depend on us without hesitation. It reflects our dedication to long-term value, sustainable impact, and relationships built on credibility and respect.

                                By embedding this promise into everything we do, we go beyond meeting expectations — we set new standards, create confidence, and reinforce the reputation of Sarte Groups as a partner that always delivers.
                        </p>
                        </div>
                        
                        <div className='img-container'>
                            <img src={promise}></img>
                        </div>
                    </div>
                        
                </div>
            </div>

            <Footer />
        </div>
    )
}