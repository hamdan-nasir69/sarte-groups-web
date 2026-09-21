import './hero.css'
import logo from '../assets/Sarte Software Logo No Background.png'

export default function Hero(){
    return (
        <div>
            <div className="software-hero-main">
                <img src={logo}></img>
            </div>
        </div>
    )
}