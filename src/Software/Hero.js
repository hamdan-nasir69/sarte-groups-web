import './hero.css'
import logo from '../assets/Sarte Software Logo No Background.png'

export default function Hero() {
    return (
        <div className="software-hero-main">
            <img
                className="software-hero-logo"
                src={logo}
                alt="Sarte Software Logo"
            />
        </div>
    )
}