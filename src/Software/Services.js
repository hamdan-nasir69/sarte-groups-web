import '../construction-services.css'
import web from './assets/web.jpg'
import app from './assets/app.jpg'
import software from './assets/software.jpeg'
import ui from './assets/ui.jpg'
import ecommerce from './assets/ecommerce.jpeg'
import { useState } from 'react'
import ContactButton from '../ContactButton';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function Services() {

  const [webShow, toggleWeb] = useState(false);
  const [appShow, toggleApp] = useState(false);
  const [softwareShow, toggleSoftware] = useState(false);
  const [uiShow, toggleUi] = useState(false);
  const [commerceShow, toggleCommerce] = useState(false);

  const webClick = () => {
    toggleWeb(!webShow);
  }

  const appClick = () => {
    toggleApp(!appShow);
  }

  const softwareClick = () => {
    toggleSoftware(!softwareShow);
  }

  const uiClick = () => {
    toggleUi(!uiShow);
  }

  const commerceClick = () => {
    toggleCommerce(!commerceShow);
  }

  return (
    <div className='main-construction-services'>
      <h1>Solutions That Inspire Growth</h1>

      <div className='services-list'>
        <div className='single-service'>
          <div className='service-img'>
            <img src={web}></img>
          </div>
          <div className='service-description construction-service'>
            <h2>Web Development</h2>
            <p>Crafting elegant, seamless digital experiences that captivate and engage every visitor.</p>

            <button onClick={webClick}>Read More</button>
          </div>
        </div>

        {webShow && (
          <div className='popup-overlay'>
            <div className='service-popup'>
              <div className='close-div'>
                <button onClick={() => toggleWeb(false)} className="close-btn">
                  &times;
                </button>
              </div>

              <h2 className="proj-heading">Web Development</h2>
              <div className='service-overview'>
                <h2>Overview</h2>
                <p>
                  At Sarte Tech Studio, we design and develop websites that combine performance, aesthetics, and scalability. With a focus on user experience and modern technologies, we deliver platforms that strengthen brands and drive digital growth.
                </p>

                <h2>What We Offer</h2>

                <div className='service-list'>
                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Custom Websites</h2>
                        <p className="description">
                          We build tailored sites designed to match your brand identity and goals.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Responsive Design</h2>
                        <p className="description">
                          We ensure seamless performance across all devices and screen sizes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>CMS Integration</h2>
                        <p className="description">
                          We implement user-friendly systems for easy content management.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>E-Commerce Development</h2>
                        <p className="description">
                          We create secure, scalable online stores that drive sales.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>SEO-Friendly Builds</h2>
                        <p className="description">
                          We optimize websites for higher visibility and stronger rankings.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Ongoing Support</h2>
                        <p className="description">
                          We provide maintenance and updates to ensure lasting performance.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <h2>Our Process</h2>

                <Timeline position="alternate">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Requirement Analysis</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Planning & Design</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Development Phase</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Testing</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Launch</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Post-Launch Support</TimelineContent>
                  </TimelineItem>
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
            <img src={app}></img>
          </div>
          <div className='service-description construction-service'>
            <h2>App Development</h2>
            <p>Transforming ideas into sleek, immersive apps that delight users and elevate your brand.</p>

            <button onClick={appClick}>Read More</button>
          </div>
        </div>

        {appShow && (
          <div className='popup-overlay'>
            <div className='service-popup'>
              <div className='close-div'>
                <button onClick={() => toggleApp(false)} className="close-btn">
                  &times;
                </button>
              </div>

              <h2 className="proj-heading">App Development</h2>
              <div className='service-overview'>
                <h2>Overview</h2>
                <p>
                  At Sarte Tech Studio, we craft mobile applications that merge functionality, design, and innovation. Our apps are built to deliver seamless experiences, ensuring scalability, performance, and user satisfaction across all platforms.
                </p>

                <h2>What We Offer</h2>

                <div className='service-list'>
                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Custom Apps</h2>
                        <p className="description">
                          We craft tailored solutions designed to meet unique business needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Cross-Platform Apps</h2>
                        <p className="description">
                          We build applications that perform flawlessly on iOS and Android.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>UI/UX Design</h2>
                        <p className="description">
                          We create intuitive and engaging interfaces that enhance user experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Integration Services</h2>
                        <p className="description">
                          Smooth connectivity with APIs, databases, and third-party tools.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>App Optimization</h2>
                        <p className="description">
                          We work on performance tuning for speed, security, and reliability.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Maintenance & Updates</h2>
                        <p className="description">
                          We provide continuous support to keep apps efficient and relevant.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <h2>Our Process</h2>

                <Timeline position="alternate">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Requirement Analysis</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Planning & Design</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Development Phase</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Testing</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Deployment</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Post-Launch Support</TimelineContent>
                  </TimelineItem>
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
            <img src={software}></img>
          </div>
          <div className='service-description construction-service'>
            <h2>Software Development</h2>
            <p>Crafting intelligent, elegant software that empowers businesses to thrive effortlessly.</p>

            <button onClick={softwareClick}>Read More</button>
          </div>
        </div>

        {softwareShow && (
          <div className='popup-overlay'>
            <div className='service-popup'>
              <div className='close-div'>
                <button onClick={() => toggleSoftware(false)} className="close-btn">
                  &times;
                </button>
              </div>

              <h2 className="proj-heading">Software Development</h2>
              <div className='service-overview'>
                <h2>Overview</h2>
                <p>
                  At Sarte Tech Studio, we design and develop software solutions that empower businesses to operate smarter and faster. Our focus is on building scalable, secure, and high-performance systems tailored to unique business needs.
                </p>

                <h2>What We Offer</h2>

                <div className='service-list'>
                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Custom Software</h2>
                        <p className="description">
                          We build solutions tailored to your organization’s requirements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Enterprise Systems</h2>
                        <p className="description">
                          We deliver robust platforms to streamline complex operations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>UI/UX Design</h2>
                        <p className="description">
                          We create intuitive and engaging interfaces that enhance user experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Cloud Integration</h2>
                        <p className="description">
                          We connect software with cloud platforms for flexibility and scalability.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Optimization</h2>
                        <p className="description">
                          We refine performance, security, and efficiency of the softwares.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Support & Upgrades</h2>
                        <p className="description">
                          We provide ongoing maintenance and enhancements.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <h2>Our Process</h2>

                <Timeline position="alternate">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Needs Analysis</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Solution Design</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Agile Development</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Testing</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Deployment</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Continuous Improvement</TimelineContent>
                  </TimelineItem>
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

        <div className='lower-services'>
          <div className='single-service'>
            <div className='service-img'>
              <img src={ui}></img>
            </div>
            <div className='service-description construction-service'>
              <h2>UI/UX Design</h2>
              <p>Creating elegant, seamless digital experiences that captivate and inspire every user.</p>

              <button onClick={uiClick}>Read More</button>
            </div>
          </div>

          {uiShow && (
            <div className='popup-overlay'>
              <div className='service-popup'>
                <div className='close-div'>
                  <button onClick={() => toggleUi(false)} className="close-btn">
                    &times;
                  </button>
                </div>

                <h2 className="proj-heading">UI/UX Design</h2>
                <div className='service-overview'>
                  <h2>Overview</h2>
                  <p>
                    At Sarte Tech Studio, we design intuitive and visually engaging digital experiences that bridge functionality with aesthetics. Our UI/UX solutions focus on usability, accessibility, and brand consistency, ensuring every interaction leaves a lasting impression.
                  </p>

                  <h2>What We Offer</h2>

                  <div className='service-list'>
                    <div className="hover-service">
                      <div className="service-box">
                        <div className="box-content">
                          <h2>User Research</h2>
                          <p className="description">
                            We analyze user behavior to shape meaningful experiences.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hover-service">
                      <div className="service-box">
                        <div className="box-content">
                          <h2>Wireframing & Prototyping</h2>
                          <p className="description">
                            We create clear blueprints for seamless interfaces.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hover-service">
                      <div className="service-box">
                        <div className="box-content">
                          <h2>Responsive Design</h2>
                          <p className="description">
                            We ensure flawless performance across all devices.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hover-service">
                      <div className="service-box">
                        <div className="box-content">
                          <h2>UI Design</h2>
                          <p className="description">
                            We craft visually appealing and brand-aligned digital layouts.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hover-service">
                      <div className="service-box">
                        <div className="box-content">
                          <h2>UX Strategy</h2>
                          <p className="description">
                            We optimize journeys to maximize usability and satisfaction.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hover-service">
                      <div className="service-box">
                        <div className="box-content">
                          <h2>Usability Testing</h2>
                          <p className="description">
                            We validate designs to guarantee efficiency and impact.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <h2>Our Process</h2>

                  <Timeline position="alternate">
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                        <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Discovery & Research</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                        <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Concept Design</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                        <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Visual Development</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                        <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Prototype Testing</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                        <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Final Implementation</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Post-Launch Refinement</TimelineContent>
                    </TimelineItem>
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
              <img src={ecommerce}></img>
            </div>
            <div className='service-description construction-service'>
              <h2>E-Commerce Solutions</h2>
              <p>Crafting elegant online storefronts that elevate your brand presence.</p>

              <button onClick={commerceClick}>Read More</button>
            </div>
          </div>

          {commerceShow && (
            <div className='popup-overlay'>
              <div className='service-popup'>
                <div className='close-div'>
                  <button onClick={() => toggleCommerce(false)} className="close-btn">
                    &times;
                  </button>
                </div>

                <h2 className="proj-heading">E-Commerce Solutions</h2>
                <div className='service-overview'>
                  <h2>Overview</h2>
                  <p>
                    At Sarte Tech Studio, we build robust e-commerce platforms that blend functionality, security, and scalability. Our solutions are designed to provide seamless shopping experiences, streamline operations, and drive sustainable business growth in the digital marketplace.
                  </p>

                  <h2>What We Offer</h2>

                  <div className='service-list'>
                    <div className="hover-service">
                      <div className="service-box">
                        <div className="box-content">
                          <h2>Store Development</h2>
                          <p className="description">
                            We create scalable and feature-rich e-commerce platforms.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hover-service">
                      <div className="service-box">
                        <div className="box-content">
                          <h2>Custom Integrations</h2>
                          <p className="description">
                            We integrate payment gateways, CRMs, and third-party tools.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hover-service">
                      <div className="service-box">
                        <div className="box-content">
                          <h2>Product Management</h2>
                          <p className="description">
                            We simplify catalog organization for smooth navigation.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hover-service">
                      <div className="service-box">
                        <div className="box-content">
                          <h2>Secure Transactions</h2>
                          <p className="description">
                            We ensure safe, reliable, and trusted online payments.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hover-service">
                      <div className="service-box">
                        <div className="box-content">
                          <h2>Performance Optimization</h2>
                          <p className="description">
                            We enhance speed and efficiency for user satisfaction.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hover-service">
                      <div className="service-box">
                        <div className="box-content">
                          <h2>Ongoing Support</h2>
                          <p className="description">
                            We provide continuous monitoring and updates for growth.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <h2>Our Process</h2>

                  <Timeline position="alternate">
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                        <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Needs Assessment</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                        <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Platform Selection</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                        <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Custom Design</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                        <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Integration & Setup</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                        <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Testing & Deployment</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Continuous Growth</TimelineContent>
                    </TimelineItem>
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
    </div>
  )
}