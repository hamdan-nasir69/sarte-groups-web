import './ethics.css'
import { Link } from 'react-router-dom';

export default function AboutEthics(){
    return (
        <div className='main-about-ethics'>
            <div className='ethics-div'>
                <div className='ethics-about-heading'>
                    <h3>Ethics & Compliance</h3>
                    <h1>Upholding the highest standards of ethics and compliance in every decision, every action, every partnership.</h1>
                
                    <Link to='/ethics' className='nav-link'>
                        <button>Read more <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}