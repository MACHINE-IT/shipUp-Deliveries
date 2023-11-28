import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='first'>
                    <div className='footer-info'>
                        <div className='heading-shipup'>
                            <span className='ship'>Ship</span>
                            <span className='up'>Up</span>
                        </div>
                        <div className='info'>ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint</div>
                    </div>
                    <div className='footer-explore'>
                        <div className='heading'>Explore</div>
                        <ul className='info'>
                            <li>About Us</li>
                            <li>Our Warehouses</li>
                            <li>Blog</li>
                            <li>News and Media</li>
                        </ul>
                    </div>
                    <div className='footer-legal'>
                        <div className='heading'>Legal</div>
                        <ul className='info'>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className='footer-social'>
                        <div className='heading'>Social Media</div>
                        <ul className='info'>
                            <li>
                                <FaFacebookF />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                            <li>
                                <FaWhatsapp />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='second'>
                    <p className='company-text'>
                        Ship
                        <span className='up'>Up</span>
                        <span className='ng'>.ng</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;