import { Link } from 'react-router-dom';
import './cta-button.css';

export default function ContactButton() {
    return (
        <Link to="/contact" className="cta-button">
            Get in Touch
        </Link>
    );
}