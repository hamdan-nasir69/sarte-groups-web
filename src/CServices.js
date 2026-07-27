import './construction-services.css'
import design from './assets/design.jpg'
import home from './assets/home.jpg'
import renovation from './assets/renovation.jpg'
import road from './assets/road.jpg'
import water from './assets/water.jpg'
import sewage from './assets/sewage.jpg'
import solar from './assets/solar.jpg'
import soceity from './assets/soceity.jpg'
import interior from './assets/interior.jpg'
import { useState } from 'react'
import ContactButton from './ContactButton';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SEO from './SEO';

export default function CServices() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [designShow, toggleDesign] = useState(false);
    const [homeShow, toggleHome] = useState(false);
    const [renovationShow, toggleRenovation] = useState(false);
    const [roadShow, toggleRoad] = useState(false);
    const [waterShow, toggleWater] = useState(false);
    const [irrigationShow, toggleIrrigation] = useState(false);
    const [solarShow, toggleSolar] = useState(false);
    const [societyShow, toggleSociety] = useState(false);
    const [interiorShow, toggleInterior] = useState(false);

    const designClick = () => { toggleDesign(!designShow) }
    const homeClick = () => { toggleHome(!homeShow) }
    const renovationClick = () => { toggleRenovation(!renovationShow) }
    const roadClick = () => { toggleRoad(!roadShow); }
    const waterClick = () => { toggleWater(!waterShow) }
    const irrigationClick = () => { toggleIrrigation(!irrigationShow) }
    const solarClick = () => { toggleSolar(!solarShow) }
    const soceityClick = () => { toggleSociety(!societyShow) }
    const interiorClick = () => { toggleInterior(!interiorShow) }

    const dotSx = { bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" };
    const connectorSx = { bgcolor: "#D0B398", minHeight: { xs: "60px", md: "7vw" } };
    const contentSx = { fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' };
    const timelinePosition = isMobile ? "right" : "alternate";

    return (
        <div className="main-construction-services">
            <SEO
                title="About Us"
                description="Learn how Sarte brings together strategy, innovation, and execution to deliver enduring value across industries."
                url="/about"
            />
            <h1>Services That Define Our Legacy</h1>

            <div className='services-list'>
                <div className='single-service'>
                    <div className='service-img'>
                        <img src={design} alt="Design"></img>
                    </div>
                    <div className='service-description construction-service'>
                        <h2>Design and Consultancy</h2>
                        <p>Delivering innovative, functional, and client-focused solutions through expert guidance and creative precision.</p>
                        <button onClick={designClick}>Read More</button>
                    </div>
                    {designShow && (
                        <div className='popup-overlay'>
                            <div className='service-popup'>
                                <div className='close-div'>
                                    <button onClick={() => toggleDesign(false)} className="close-btn">
                                        &times;
                                    </button>
                                </div>

                                <h2 className="proj-heading">Design and Consultancy</h2>
                                <div className='service-overview'>
                                    <h2>Overview</h2>
                                    <p>At Sarte Constructions, our Design and Consultancy services go beyond aesthetics to deliver strategic, functional, and sustainable solutions tailored to every client’s vision. We work closely with our clients from the very first stage, transforming ideas into practical designs that balance creativity with technical excellence. Our expert consultants provide end-to-end guidance—covering feasibility studies, material selection, structural planning, and innovative design concepts—ensuring every project is not only visually compelling but also efficient, cost-effective, and future-ready. With a focus on precision, collaboration, and innovation, we lay the foundation for projects that stand the test of time and exceed expectations.</p>

                                    <h2>What We Offer</h2>
                                    <div className='service-list'>
                                        <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Bespoke Design Solutions</h2><p className="description">We create tailored design concepts that align with your unique vision and project requirements.</p></div></div></div>
                                        <div className="hover-service"><div className="service-box"><div className="box-content"><h2>End-to-End Consultancy</h2><p className="description">We guide you from concept to execution, ensuring clarity and confidence at every step.</p></div></div></div>
                                        <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Strategic Project Planning</h2><p className="description">We develop efficient, cost-effective, and timely strategies to bring your project to life.</p></div></div></div>
                                        <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Green Commitment</h2><p className="description">We integrate environmentally conscious methods to design spaces that endure responsibly.</p></div></div></div>
                                        <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Smart Solutions</h2><p className="description">We apply modern techniques and technologies to deliver designs that are future-ready.</p></div></div></div>
                                        <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Unmatched Quality</h2><p className="description">We pay meticulous attention to detail, ensuring every outcome reflects quality and reliability.</p></div></div></div>
                                    </div>

                                    <h2>Our Process</h2>
                                    <Timeline position={timelinePosition}>
                                        <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Insight & Discovery</TimelineContent></TimelineItem>
                                        <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Strategic Planning</TimelineContent></TimelineItem>
                                        <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Innovative Design</TimelineContent></TimelineItem>
                                        <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Seamless Execution</TimelineContent></TimelineItem>
                                        <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Quality Assurance</TimelineContent></TimelineItem>
                                        <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Collaborative Partnership</TimelineContent></TimelineItem>
                                    </Timeline>

                                    <div className='work-with-us-section'>
                                        <h2>Work With Us</h2>
                                        <p>Ready to start your next project? Let's build something extraordinary together.</p>
                                        <ContactButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className='single-service'>
                    <div className='service-img'>
                        <img src={home} alt="Home"></img>
                    </div>
                    <div className='service-description construction-service'>
                        <h2>Homes & Business Solutions</h2>
                        <p>Crafting modern living spaces and functional commercial environments that embody quality, elegance, and long-term value.</p>
                        <button onClick={homeClick}>Read More</button>
                    </div>
                </div>

                {homeShow && (
                    <div className='popup-overlay'>
                        <div className='service-popup'>
                            <div className='close-div'>
                                <button onClick={() => toggleHome(false)} className="close-btn">
                                    &times;
                                </button>
                            </div>

                            <h2 className="proj-heading">Homes & Business Solutions</h2>
                            <div className='service-overview'>
                                <h2>Overview</h2>
                                <p>At Sarte, we understand that homes and businesses are more than just spaces — they are foundations of life and growth. Our Homes & Business Solutions are crafted to deliver environments that balance aesthetics, functionality, and long-term value. We work closely with clients to design tailored solutions that reflect their unique vision, while ensuring every detail supports comfort, efficiency, and future sustainability. Whether creating welcoming homes or empowering business spaces, we bring innovation and precision to every project.</p>

                                <h2>What We Offer</h2>
                                <div className='service-list'>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Custom Spaces</h2><p className="description">We design homes that reflect your lifestyle, blending comfort, elegance, and practicality.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Efficient Business Environments</h2><p className="description">We create workspaces that maximize productivity while leaving a lasting impression.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Seamless Integration</h2><p className="description">We ensure every element, from layout to finish, works in harmony for a balanced experience.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Innovative Planning</h2><p className="description">We build with adaptability and sustainability in mind, ensuring long-term value.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Expert Guidance</h2><p className="description">We collaborate closely, guiding you through every decision with expertise and clarity.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Unmatched Quality</h2><p className="description">We deliver solutions that stand the test of time, offering durability without compromising aesthetics.</p></div></div></div>
                                </div>

                                <h2>Our Process</h2>
                                <Timeline position={timelinePosition}>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Discovery</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Conceptualization</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Design Development</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Collaboration</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Execution Planning</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Final Delivery</TimelineContent></TimelineItem>
                                </Timeline>

                                <div className='work-with-us-section'>
                                    <h2>Work With Us</h2>
                                    <p>Ready to start your next project? Let's build something extraordinary together.</p>
                                    <ContactButton />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className='single-service'>
                    <div className='service-img'>
                        <img src={renovation} alt="Renovation"></img>
                    </div>
                    <div className='service-description construction-service'>
                        <h2>Renovation & Remodelling</h2>
                        <p>Elevating spaces with timeless design, superior craftsmanship, and modern sophistication.</p>
                        <button onClick={renovationClick}>Read More</button>
                    </div>
                </div>

                {renovationShow && (
                    <div className='popup-overlay'>
                        <div className='service-popup'>
                            <div className='close-div'>
                                <button onClick={() => toggleRenovation(false)} className="close-btn">
                                    &times;
                                </button>
                            </div>

                            <h2 className="proj-heading">Renovation & Remodelling</h2>
                            <div className='service-overview'>
                                <h2>Overview</h2>
                                <p>At Sarte, we believe renovation is more than just updating spaces — it’s about transforming them with vision, precision, and care. Our Renovation & Remodelling services breathe new life into existing structures, enhancing both functionality and aesthetics while preserving what matters most. From modern upgrades to complete transformations, we work hand in hand with clients to reimagine spaces that align with their evolving needs. Every detail is handled with craftsmanship and innovation, ensuring results that feel refreshed, timeless, and built to last.</p>

                                <h2>What We Offer</h2>
                                <div className='service-list'>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Space Renewal</h2><p className="description">We transform spaces for maximum functionality and refined style.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Modern Refresh</h2><p className="description">We update interiors and exteriors with contemporary design solutions.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Structural Excellence</h2><p className="description">We execute renovations with safety, durability, and care to meet your needs.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Custom Solutions</h2><p className="description">We customize every project to reflect your unique vision, requirements, and style preferences.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Attention to Detail</h2><p className="description">We perfect materials, finishes, and all essential elements to achieve flawless results.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Seamless Execution</h2><p className="description">We manage the entire process efficiently, ensuring smooth coordination and timely delivery.</p></div></div></div>
                                </div>

                                <h2>Our Process</h2>
                                <Timeline position={timelinePosition}>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Initial Assessment</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Vision Planning</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Design Development</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Material & Resource Selection</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Project Coordination</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Final Delivery</TimelineContent></TimelineItem>
                                </Timeline>

                                <div className='work-with-us-section'>
                                    <h2>Work With Us</h2>
                                    <p>Ready to start your next project? Let's build something extraordinary together.</p>
                                    <ContactButton />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className='single-service'>
                    <div className='service-img'>
                        <img src={road} alt="Road"></img>
                    </div>
                    <div className='service-description construction-service'>
                        <h2>Road & Highway Construction</h2>
                        <p>Delivering durable, high-quality infrastructure with precision engineering and modern standards.</p>
                        <button onClick={roadClick}>Read More</button>
                    </div>
                </div>

                {roadShow && (
                    <div className='popup-overlay'>
                        <div className='service-popup'>
                            <div className='close-div'>
                                <button onClick={() => toggleRoad(false)} className="close-btn">
                                    &times;
                                </button>
                            </div>

                            <h2 className="proj-heading">Road & Highway Construction</h2>
                            <div className='service-overview'>
                                <h2>Overview</h2>
                                <p>At Sarte Constructions, we specialize in building durable and efficient roads and highways that connect communities and drive economic growth. From initial planning to final execution, our projects are engineered with precision, quality, and safety in mind. We combine modern construction techniques, innovative materials, and meticulous project management to deliver infrastructure that stands the test of time while meeting the evolving needs of our clients and society.</p>

                                <h2>What We Offer</h2>
                                <div className='service-list'>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Strategic Planning</h2><p className="description">We design routes and layouts that optimize connectivity, efficiency, and long-term performance.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Structural Mastery</h2><p className="description">We apply advanced engineering methods to ensure strength, durability, and performance.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Quality Materials</h2><p className="description">We use high-grade materials and modern technologies to enhance longevity and reliability of the road.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Sustainable Practices</h2><p className="description">We minimize environmental impact while maintaining superior construction standards.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Project Oversight</h2><p className="description">We manage every phase with attention to timelines, budgets, and stakeholder requirements.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Long-Term Care</h2><p className="description">We provide systems and guidance for maintenance, safety, and sustained performance.</p></div></div></div>
                                </div>

                                <h2>Our Process</h2>
                                <Timeline position={timelinePosition}>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Feasibility Assessment</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Design & Surveying</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Material Selection</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Construction Management</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Safety Implementation</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Final Inspection</TimelineContent></TimelineItem>
                                </Timeline>

                                <div className='work-with-us-section'>
                                    <h2>Work With Us</h2>
                                    <p>Ready to start your next project? Let's build something extraordinary together.</p>
                                    <ContactButton />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className='single-service'>
                    <div className='service-img'>
                        <img src={water} alt="Water"></img>
                    </div>
                    <div className='service-description construction-service'>
                        <h2>Water & Sanitation Systems</h2>
                        <p>Providing reliable, sustainable, and efficient solutions for clean water and modern sanitation.</p>
                        <button onClick={waterClick}>Read More</button>
                    </div>
                </div>

                {waterShow && (
                    <div className='popup-overlay'>
                        <div className='service-popup'>
                            <div className='close-div'>
                                <button onClick={() => toggleWater(false)} className="close-btn">
                                    &times;
                                </button>
                            </div>

                            <h2 className="proj-heading">Water & Sanitation Systems</h2>
                            <div className='service-overview'>
                                <h2>Overview</h2>
                                <p>At Sarte Constructions, we provide reliable and sustainable water and sanitation solutions that enhance communities and support public health. From design to implementation, our projects are engineered with precision, efficiency, and environmental responsibility. We integrate modern technologies, high-quality materials, and meticulous planning to deliver systems that are safe, durable, and designed to meet both present and future needs.</p>

                                <h2>What We Offer</h2>
                                <div className='service-list'>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>System Planning</h2><p className="description">We design layouts that ensure efficiency, reliability, and compliance while handling your needs.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Hydraulic Mastery</h2><p className="description">We apply advanced techniques to guarantee safety, durability, and optimal system performance.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Quality Materials</h2><p className="description">We use premium materials and modern technologies for long-lasting, dependable systems.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Sustainable Solutions</h2><p className="description">We incorporate eco-friendly practices to minimize environmental impact while maintaining functionality.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Project Oversight</h2><p className="description">We manage each phase carefully to ensure timelines, budgets, and quality standards.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Long-Term Care</h2><p className="description">We provide structured guidance and strategies to ensure long-term upkeep, reliability, and performance.</p></div></div></div>
                                </div>

                                <h2>Our Process</h2>
                                <Timeline position={timelinePosition}>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Needs Assessment</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Design & Planning</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Material Selection</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Construction Management</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Testing & Commissioning</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Operation Support</TimelineContent></TimelineItem>
                                </Timeline>

                                <div className='work-with-us-section'>
                                    <h2>Work With Us</h2>
                                    <p>Ready to start your next project? Let's build something extraordinary together.</p>
                                    <ContactButton />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className='single-service'>
                    <div className='service-img'>
                        <img src={sewage} alt="Sewage"></img>
                    </div>
                    <div className='service-description construction-service'>
                        <h2>Irrigation & Drainage Systems</h2>
                        <p>Designing efficient, sustainable networks for optimal water management and agricultural productivity.</p>
                        <button onClick={irrigationClick}>Read More</button>
                    </div>
                </div>

                {irrigationShow && (
                    <div className='popup-overlay'>
                        <div className='service-popup'>
                            <div className='close-div'>
                                <button onClick={() => toggleIrrigation(false)} className="close-btn">
                                    &times;
                                </button>
                            </div>

                            <h2 className="proj-heading">Irrigation & Drainage Systems</h2>
                            <div className='service-overview'>
                                <h2>Overview</h2>
                                <p>At Sarte Constructions, we design and implement efficient irrigation and drainage systems that optimize water management for agriculture, landscapes, and infrastructure. Combining modern engineering, durable materials, and sustainable practices, our solutions enhance productivity, protect resources, and ensure long-term reliability.</p>

                                <h2>What We Offer</h2>
                                <div className='service-list'>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Strategic Planning</h2><p className="description">We design layouts tailored for efficient water flow and usage.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>System Precision</h2><p className="description">We ensure reliable performance through accurate execution.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Quality Materials</h2><p className="description">We use durable and high-grade materials for long-lasting systems.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Sustainable Solutions</h2><p className="description">We incorporate eco-friendly practices to minimize environmental impact while maintaining functionality.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Project Oversight</h2><p className="description">We manage each phase carefully to ensure timelines, budgets, and quality standards.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Long-Term Care</h2><p className="description">We provide structured guidance and strategies to ensure long-term upkeep, reliability, and performance.</p></div></div></div>
                                </div>

                                <h2>Our Process</h2>
                                <Timeline position={timelinePosition}>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Assessment</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Design & Layout</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Material Selection</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Installation</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Testing</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Support & Maintenance</TimelineContent></TimelineItem>
                                </Timeline>

                                <div className='work-with-us-section'>
                                    <h2>Work With Us</h2>
                                    <p>Ready to start your next project? Let's build something extraordinary together.</p>
                                    <ContactButton />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className='single-service'>
                    <div className='service-img'>
                        <img src={solar} alt="Solar"></img>
                    </div>
                    <div className='service-description construction-service'>
                        <h2>Solar Energy Solutions</h2>
                        <p>Harnessing the power of the sun with innovative, sustainable, and cost-efficient energy systems.</p>
                        <button onClick={solarClick}>Read More</button>
                    </div>
                </div>

                {solarShow && (
                    <div className='popup-overlay'>
                        <div className='service-popup'>
                            <div className='close-div'>
                                <button onClick={() => toggleSolar(false)} className="close-btn">
                                    &times;
                                </button>
                            </div>

                            <h2 className="proj-heading">Solar Energy Solutions</h2>
                            <div className='service-overview'>
                                <h2>Overview</h2>
                                <p>At Sarte Constructions, we provide innovative solar energy solutions that harness the power of the sun to deliver clean, cost-effective, and reliable energy. Our approach focuses on efficiency, sustainability, and long-term value for both residential and commercial projects.</p>

                                <h2>What We Offer</h2>
                                <div className='service-list'>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Customized Solar Design</h2><p className="description">We create tailored systems optimized for maximum energy efficiency and long-term performance.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>High-Quality Components</h2><p className="description">We use certified, durable equipment to ensure reliability and consistent energy output.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Sustainable Energy Solutions</h2><p className="description">We integrate eco-friendly practices that reduce carbon footprints and support a greener future.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Installation</h2><p className="description">We handle every step of installation with precision for safe, smooth, and efficient deployment.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Performance Monitoring</h2><p className="description">We provide advanced monitoring tools to track energy production and ensure system effectiveness.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Maintenance</h2><p className="description">We offer continuous support and maintenance to keep your system running at peak performance.</p></div></div></div>
                                </div>

                                <h2>Our Process</h2>
                                <Timeline position={timelinePosition}>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Consulation</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>System Design</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Material Procurement</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Installation</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Testing & Activation</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Long-Term Support</TimelineContent></TimelineItem>
                                </Timeline>

                                <div className='work-with-us-section'>
                                    <h2>Work With Us</h2>
                                    <p>Ready to start your next project? Let's build something extraordinary together.</p>
                                    <ContactButton />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className='single-service'>
                    <div className='service-img'>
                        <img src={soceity} alt="Society"></img>
                    </div>
                    <div className='service-description construction-service'>
                        <h2>Society Planning & Projects</h2>
                        <p>Creating well-structured, sustainable, and modern communities with premium infrastructure and design.</p>
                        <button onClick={soceityClick}>Read More</button>
                    </div>
                </div>

                {societyShow && (
                    <div className='popup-overlay'>
                        <div className='service-popup'>
                            <div className='close-div'>
                                <button onClick={() => toggleSociety(false)} className="close-btn">
                                    &times;
                                </button>
                            </div>

                            <h2 className="proj-heading">Society Planning & Projects</h2>
                            <div className='service-overview'>
                                <h2>Overview</h2>
                                <p>At Sarte Constructions, we specialize in society planning and large-scale development projects that shape thriving communities. With a focus on innovation, sustainability, and precision, we design modern, well-structured societies that enhance living standards and ensure long-term growth.</p>

                                <h2>What We Offer</h2>
                                <div className='service-list'>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Master Planning</h2><p className="description">We design comprehensive layouts that balance functionality, aesthetics, and sustainability.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Infrastructure Development</h2><p className="description">We create durable roadways, utilities, and facilities for seamless community living.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Green Spaces</h2><p className="description">We integrate parks and landscapes that promote healthy, vibrant lifestyles.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Modern Facilities</h2><p className="description">We plan essential amenities that meet residential and commercial needs effectively.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Policy Adherence</h2><p className="description">We ensure projects meet legal, environmental, and urban development standards.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Sustainable Growth</h2><p className="description">We design societies with future-ready infrastructure for long-lasting value.</p></div></div></div>
                                </div>

                                <h2>Our Process</h2>
                                <Timeline position={timelinePosition}>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Requirement Analysis</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Conceptual Planning</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Design Development</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Execution Strategy</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Implementation</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Final Handover</TimelineContent></TimelineItem>
                                </Timeline>

                                <div className='work-with-us-section'>
                                    <h2>Work With Us</h2>
                                    <p>Ready to start your next project? Let's build something extraordinary together.</p>
                                    <ContactButton />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className='single-service'>
                    <div className='service-img'>
                        <img src={interior} alt="Interior"></img>
                    </div>
                    <div className='service-description construction-service'>
                        <h2>Interior & Exterior Finishing</h2>
                        <p>Delivering elegant, high-quality finishes that blend aesthetics with durability for lasting impressions.</p>
                        <button onClick={interiorClick}>Read More</button>
                    </div>
                </div>

                {interiorShow && (
                    <div className='popup-overlay'>
                        <div className='service-popup'>
                            <div className='close-div'>
                                <button onClick={() => toggleInterior(false)} className="close-btn">
                                    &times;
                                </button>
                            </div>

                            <h2 className="proj-heading">Interior & Exterior Finishing</h2>
                            <div className='service-overview'>
                                <h2>Overview</h2>
                                <p>At Sarte Constructions, we transform spaces with refined interior and exterior finishing that reflects elegance, durability, and precision. From modern interiors to striking facades, our finishing solutions enhance aesthetics while ensuring long-lasting quality.</p>

                                <h2>What We Offer</h2>
                                <div className='service-list'>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Elegant Interiors</h2><p className="description">We craft stylish, functional interiors tailored to your unique lifestyle.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Durable Exteriors</h2><p className="description">We deliver weather-resistant exteriors that combine strength and appeal.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Premium Materials</h2><p className="description">We use high-grade materials for finishes that stand the test of time.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Attention to Detail</h2><p className="description">We ensure flawless execution with meticulous design precision.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Customized Designs</h2><p className="description">We provide solutions that align with your vision and preferences.</p></div></div></div>
                                    <div className="hover-service"><div className="service-box"><div className="box-content"><h2>Sustainable Growth</h2><p className="description">We apply eco-friendly methods for efficient and responsible finishing.</p></div></div></div>
                                </div>

                                <h2>Our Process</h2>
                                <Timeline position={timelinePosition}>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Concept Discussion</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Material Selection</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Design Planning</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Execution Phase</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /><TimelineConnector sx={connectorSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Quality Check</TimelineContent></TimelineItem>
                                    <TimelineItem><TimelineSeparator><TimelineDot sx={dotSx} /></TimelineSeparator><TimelineContent sx={contentSx}>Final Touches</TimelineContent></TimelineItem>
                                </Timeline>

                                <div className='work-with-us-section'>
                                    <h2>Work With Us</h2>
                                    <p>Ready to start your next project? Let's build something extraordinary together.</p>
                                    <ContactButton />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}