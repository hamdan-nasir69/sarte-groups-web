import { useState } from 'react'
import './contact.css'

export default function ContactDetails() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMessage] = useState('');

    const submitClick = (e) => {
        e.preventDefault();

        const phoneNumber = "923155666688";
        
        const whatsappMessage = `Hi! This is ${name}. ${msg}%0A%0AYou can reach me back at ${phone} or ${email}. Looking forward to hearing from you!`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        window.open(whatsappUrl, '_blank');

        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }

    return (
        <div className='main-contact'>
            <h1 className='main-heading'>Your Next Big Step Starts Here</h1>

            <div className='contact-container'>
                <div className='contact-form'>
                    <div className='form-header'>
                        <h2>Contact Us</h2>
                        <p>Our team combines innovation and discipline to deliver seamless support for your vision.</p>
                    </div>

                    <form className='input-area' onSubmit={submitClick}>
                        <div className='input-field'>
                            <input 
                                type="text"
                                placeholder='Your name' 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                            />
                        </div>

                        <div className='input-field'>
                            <input 
                                type="email"
                                placeholder='Your email address' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>

                        <div className='input-field'>
                            <input 
                                type="tel"
                                placeholder='Your phone number' 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required 
                            />
                        </div>

                        <div className='input-field'>
                            <textarea 
                                placeholder='Your message' 
                                value={msg}
                                onChange={(e) => setMessage(e.target.value)}
                                required 
                            ></textarea>
                        </div>

                        <button type="submit" className='submit-btn'>Send message</button>
                    </form>
                </div>

                <div className='contact-details'>
                    <h2>Reach Out Anytime</h2>
                    <p className='details-desc'>
                        At Sarte Groups, we value every connection. Whether you’re looking for tailored solutions, expert insights, or new opportunities to collaborate, our team is ready to respond with professionalism and care. Reach out today and let’s build something exceptional together.
                    </p>

                    <div className='credential-field'>
                        <h3>Begin the Dialogue</h3>
                        <div className='contact-list'>
                            <div className='contact-item'>
                                <div className='icon-wrapper'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6B4226"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                                </div>
                                <p>+92 315 5666688</p>
                            </div>
                            
                            <div className='contact-item'>
                                <div className='icon-wrapper'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6B4226"><path d="m480-920 362 216q18 11 28 30t10 40v434q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-434q0-21 10-40t28-30l362-216Zm0 466 312-186-312-186-312 186 312 186Zm0 94L160-552v352h640v-352L480-360Zm0 160h320-640 320Z"/></svg>
                                </div>
                                <p>sartegroups10@gmail.com</p>
                            </div>

                            <div className='contact-item'>
                                <div className='icon-wrapper'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6B4226"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q152 0 263.5 98T876-538q-20-10-41.5-15.5T790-560q-19-73-68.5-130T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q11 0 20.5 5.5T595-459q-17 27-26 57t-9 62q0 63 32.5 117T659-122q-41 20-86 31t-93 11Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm340 82q-7 0-12-4t-7-10q-11-35-31-65t-43-59q-21-26-34-57t-13-65q0-58 41-99t99-41q58 0 99 41t41 99q0 34-13.5 64.5T873-218q-23 29-43 59t-31 65q-2 6-7 10t-12 4Zm0-113q10-17 22-31.5t23-29.5q14-19 24.5-40.5T860-340q0-33-23.5-56.5T780-420q-33 0-56.5 23.5T700-340q0 24 10.5 45.5T735-254q12 15 23.5 29.5T780-193Zm0-97q-21 0-35.5-14.5T730-340q0-21 14.5-35.5T780-390q21 0 35.5 14.5T830-340q0 21-14.5 35.5T780-290Z"/></svg>
                                </div>
                                <p>Quetta, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}