import './constructionHero.css'
import logo from './assets/logo.png'

export default function CHero() {
    return (
        <section className="construction-hero-main">
            <img
                className="construction-hero-logo"
                src={logo}
                alt="Company Logo"
            />
        </section>
    )
}