import './hero.css'
import logo from '../assets/logo.png'

export default function Hero(){
    return (
        <div className="marketing-hero">
            <img src={logo}></img>
        </div>
    )
}