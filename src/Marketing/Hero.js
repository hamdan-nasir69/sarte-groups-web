import './hero.css'
import logo from '../assets/Sarte Marketing Logo No Background.png'

export default function Hero(){
    return (
        <div className="marketing-hero">
            <img src={logo} alt='Sarte Marketing Logo'></img>
        </div>
    )
}