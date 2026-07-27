import './hero.css'
import logo from '../assets/logo.png'

export default function Hero(){
    return (
        <div>
            <div className="software-hero-main">
                <img src={logo}></img>
            </div>
        </div>
    )
}