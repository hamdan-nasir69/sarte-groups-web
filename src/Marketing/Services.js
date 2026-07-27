import '../construction-services.css'
import social from './assets/social.jpg'
import seo from './assets/seo.jpg'
import email from './assets/email.jpg'
import affiliate from './assets/affiliate.jpg'
import copywriting from './assets/copywriting.jpg'
import { useState } from 'react'
import ContactButton from '../ContactButton';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function Services() {

  const [socialShow, toggleSocial] = useState(false);
  const [seoShow, toggleSeo] = useState(false);
  const [emailShow, toggleEmail] = useState(false);
  const [affiliateShow, toggleAffiliate] = useState(false);
  const [copyShow, toggleCopy] = useState(false);

  const socialClick = () => {
    toggleSocial(!socialShow);
  }

  const seoClick = () => {
    toggleSeo(!seoShow);
  }

  const emailClick = () => {
    toggleEmail(!emailShow);
  }

  const affiliateClick = () => {
    toggleAffiliate(!affiliateShow);
  }

  const copyClick = () => {
    toggleCopy(!copyShow);
  }

  return (
    <div className='main-construction-services'>
      <h1>Redefining Brands with Precision & Creativity</h1>

      <div className='services-list'>
        <div className='single-service'>
          <div className='service-img'>
            <img src={social}></img>
          </div>
          <div className='service-description construction-service'>
            <h2>Social Media Marketing</h2>
            <p>Elevating brands through engaging, elegant, and impactful social media storytelling.</p>

            <button onClick={socialClick}>Read More</button>
          </div>
        </div>

        {socialShow && (
          <div className='popup-overlay'>
            <div className='service-popup'>
              <div className='close-div'>
                <button onClick={() => toggleSocial(false)} className="close-btn">
                  &times;
                </button>
              </div>

              <h2 className="proj-heading">Social Media Marketing</h2>
              <div className='service-overview'>
                <h2>Overview</h2>
                <p>
                  At Sarte Marketing, we harness the power of social media to build impactful connections, boost engagement, and drive measurable business growth. Our strategies blend creativity with precision to position your brand where it matters most.
                </p>

                <h2>What We Offer</h2>

                <div className='service-list'>
                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Targeted Campaigns</h2>
                        <p className="description">
                          We design campaigns that reach the right audience with maximum impact.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Content Strategy</h2>
                        <p className="description">
                          We create compelling content that strengthens brand presence and engagement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Channel Oversight</h2>
                        <p className="description">
                          We handle profiles across channels for consistent and professional branding.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Audience Growth</h2>
                        <p className="description">
                          We use proven tactics to expand your reach and attract loyal followers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Insight Tracking</h2>
                        <p className="description">
                          We track results with insights to refine and optimize strategies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Creative Designs</h2>
                        <p className="description">
                          We craft visuals and media that capture attention and drive interaction.
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
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Market Research</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Strategy Development</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Content Creation</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Campaign Execution</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Ongoing Optimization</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Reporting</TimelineContent>
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
            <img src={seo}></img>
          </div>
          <div className='service-description construction-service'>
            <h2>Search Engine Optimization</h2>
            <p>Refining your digital presence to shine at the top of every search.</p>

            <button onClick={seoClick}>Read More</button>
          </div>
        </div>

        {seoShow && (
          <div className='popup-overlay'>
            <div className='service-popup'>
              <div className='close-div'>
                <button onClick={() => toggleSeo(false)} className="close-btn">
                  &times;
                </button>
              </div>

              <h2 className="proj-heading">Search Engine Optimization</h2>
              <div className='service-overview'>
                <h2>Overview</h2>
                <p>
                  At Sarte Marketing, we craft SEO strategies that elevate visibility, boost rankings, and drive organic growth. By blending technical expertise with creative precision, we ensure your brand stands out in search results and reaches the right audience.
                </p>

                <h2>What We Offer</h2>

                <div className='service-list'>
                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Keyword Research</h2>
                        <p className="description">
                          We identify high-value keywords to capture targeted traffic effectively.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Page Structuring</h2>
                        <p className="description">
                          We refine site structure, content, and meta elements for better rankings.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Technical SEO</h2>
                        <p className="description">
                          We enhance speed, indexing, and architecture to improve performance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Content Strategy</h2>
                        <p className="description">
                          We create optimized, engaging content tailored to search intent.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Link Building</h2>
                        <p className="description">
                          We build authoritative backlinks to strengthen domain credibility.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>SEO Analytics</h2>
                        <p className="description">
                          We monitor results with data-driven insights for ongoing growth.
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
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Website Audit</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Keyword Mapping</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Optimization Phase</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Content Development</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Authority Building</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Reporting & Growth</TimelineContent>
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
            <img src={email}></img>
          </div>
          <div className='service-description construction-service'>
            <h2>Email Marketing</h2>
            <p>Crafting elegant messages that captivate inboxes and inspire lasting connections.</p>

            <button onClick={emailClick}>Read More</button>
          </div>
        </div>

        {emailShow && (
          <div className='popup-overlay'>
            <div className='service-popup'>
              <div className='close-div'>
                <button onClick={() => toggleEmail(false)} className="close-btn">
                  &times;
                </button>
              </div>

              <h2 className="proj-heading">Email Marketing</h2>
              <div className='service-overview'>
                <h2>Overview</h2>
                <p>
                  At Sarte Marketing, we design impactful email marketing campaigns that build relationships, nurture leads, and drive measurable conversions. With a balance of creativity and strategy, we turn inboxes into powerful growth channels.
                </p>

                <h2>What We Offer</h2>

                <div className='service-list'>
                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Campaign Strategy</h2>
                        <p className="description">
                          We craft tailored email plans that align with your business objectives.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Content Creation</h2>
                        <p className="description">
                          We design persuasive copy and visuals that engage and convert.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>List Management</h2>
                        <p className="description">
                          We organize and segment audiences for precise targeting.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Automation Flows</h2>
                        <p className="description">
                          We implement smart workflows for consistent, timely communication.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>A/B Testing</h2>
                        <p className="description">
                          We test elements to maximize open rates and conversions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Performance Insights</h2>
                        <p className="description">
                          We track and analyze results to refine strategies for growth.
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
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Audience Research</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Strategic Planning</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Creative Design</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Campaign Execution</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Performance Monitoring</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Ongoing Refinement</TimelineContent>
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
            <img src={affiliate}></img>
          </div>
          <div className='service-description construction-service'>
            <h2>Affiliate Marketing</h2>
            <p>Building refined alliances that turn influence into impact.</p>

            <button onClick={affiliateClick}>Read More</button>
          </div>
        </div>

        {affiliateShow && (
          <div className='popup-overlay'>
            <div className='service-popup'>
              <div className='close-div'>
                <button onClick={() => toggleAffiliate(false)} className="close-btn">
                  &times;
                </button>
              </div>

              <h2 className="proj-heading">Affiliate Marketing</h2>
              <div className='service-overview'>
                <h2>Overview</h2>
                <p>
                  At Sarte Marketing, we build powerful affiliate programs that expand reach, strengthen partnerships, and drive sustainable revenue. By combining strategy and innovation, we help brands unlock new growth channels with measurable results.
                </p>

                <h2>What We Offer</h2>

                <div className='service-list'>
                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Program Strategy</h2>
                        <p className="description">
                          We design tailored affiliate plans to maximize profitability.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Partner Recruitment</h2>
                        <p className="description">
                          We connect your brand with trusted, high-value affiliates.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Content Support</h2>
                        <p className="description">
                          We provide affiliates with engaging content and creatives.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Program Oversight</h2>
                        <p className="description">
                          We oversee partnerships to ensure consistent performance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Ethical Oversight</h2>
                        <p className="description">
                          We maintain ethical practices and safeguard brand integrity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Growth Tracking</h2>
                        <p className="description">
                          We monitor results to optimize campaigns for sustained success.
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
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Market Research</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Program Setup</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Affiliate Onboarding</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Campaign Activation</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Performance Monitoring</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Scaling & Growth</TimelineContent>
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
            <img src={copywriting}></img>
          </div>
          <div className='service-description construction-service'>
            <h2>Copywriting</h2>
            <p>Transforming words into timeless stories that inspire and influence.</p>

            <button onClick={copyClick}>Read More</button>
          </div>
        </div>

        {copyShow && (
          <div className='popup-overlay'>
            <div className='service-popup'>
              <div className='close-div'>
                <button onClick={() => toggleCopy(false)} className="close-btn">
                  &times;
                </button>
              </div>

              <h2 className="proj-heading">Copywriting</h2>
              <div className='service-overview'>
                <h2>Overview</h2>
                <p>
                  At Sarte Marketing, we craft powerful copy that inspires action, builds trust, and elevates brand identity. With precision and creativity, we turn words into impactful tools that connect deeply with audiences.
                </p>

                <h2>What We Offer</h2>

                <div className='service-list'>
                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Brand Messaging</h2>
                        <p className="description">
                          We define clear, consistent messaging that reflects your identity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Ad Copy</h2>
                        <p className="description">
                          We create persuasive ads that capture attention and drive conversions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Website Content</h2>
                        <p className="description">
                          We craft engaging, SEO-friendly content for stronger online presence.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Email Copy</h2>
                        <p className="description">
                          We write compelling campaigns that nurture leads and boost sales.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Content Editing</h2>
                        <p className="description">
                          We refine copy for clarity, tone, and maximum impact.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover-service">
                    <div className="service-box">
                      <div className="box-content">
                        <h2>Storytelling</h2>
                        <p className="description">
                          We build narratives that resonate emotionally with your audience.
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
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Research</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Strategy</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Drafting</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Review</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                      <TimelineConnector sx={{ bgcolor: "#D0B398", height: "7vw" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Client Feedback</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "#F7C986", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Delivery</TimelineContent>
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
  )
}