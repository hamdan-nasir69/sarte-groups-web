import './people.css'
import { Link } from 'react-router-dom'

export default function AboutValue(){
    return (
        <div className='people-about' id='about-people'>
            <div className='mission-div'>
                <div className='people-about-heading'>
                    <h3>Our Values</h3>
                    <h1>Integrity lived,<br></br>responsibility practiced,<br></br>excellence delivered.</h1>
                    
                    <Link to='/values' className='nav-link'>
                        <button>Read more <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></button>
                    </Link>
                </div>

            </div>
        </div>
    )
}