import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Store/Logo.png';
import Twitter from '../Store/Twitter.svg';
import Instagram from '../Store/Instagram.svg';
import Linkedin from '../Store/Linkedin.webp';
import Facebook from '../Store/Facebook.webp';
import "./Footer.css";

export const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-container'>
                <div className='fooTop'>
                    <div className='fooLeft'>
                        <div>
                            <Link to="/" >
                                <img src={Logo} className='fooLogo' alt="Navbar Logo" />
                            </Link>
                            <p>© 2023 TrackingTime, LLC</p>
                            <hr />
                        </div>
                        <div>
                            <ul>
                                <h5>Features</h5>
                                <li><Link to={"/"}>Online Timesheet For Efficient Companies</Link></li>
                                <li><Link to={"/"}>Time Tracker for every business</Link></li>
                                <li><Link to={"/"}>Reports for billing and payroll</Link></li>
                                <li><Link to={"/"}>Attendance tracker for every business</Link></li>
                                <li><Link to={"/"}>Project Management Time Tracking Software</Link></li>
                                <li><Link to={"/"}>Time cards to track your employees hours</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='fooRight'>
                        <ul>
                            <h5>Apps</h5>
                            <li>Web App</li>
                            <li>Time Tracker app for Mac</li>
                            <li>Time Tracker for Windows</li>
                            <li>iPhone App</li>
                            <li>Android App</li>
                            <li>Time Tracking for Chrome</li>
                            <li>Time Tracking for Firefox</li>
                            <li>Time Tracking for Safari</li>
                        </ul>
                        <ul>
                            <h5>Industries</h5>
                            <li>Time tracking for Graphic Designers</li>
                            <li>Time tracking software for Architects</li>
                            <li>Time tracking for Remote Workers</li>
                            <li>Time tracking for Marketing Teams</li>
                            <li>Time tracking for Freelancers</li>
                            <li>Time tracking for Consultants</li>
                            <li>Time Logging for Developers and</li>
                            <li>Programmers</li>
                        </ul>
                        <ul>
                            <h5>Competitors</h5>
                            <li>Toggl vs TrackingTime</li>
                            <li>Clockify vs TrackingTime</li>
                            <li>Timely vs TrackingTime</li>
                            <li>Everhour vs TrackingTime</li>
                            <li>Timecamp vs TrackingTime</li>
                            <li>Hubstaff vs TrackingTime</li>
                        </ul>
                        <ul>
                            <h5>Language</h5>
                            <li>English</li>
                            <li>Deutsch</li>
                            <li>Español</li>
                            <li>Português</li>
                            <li>Français</li>
                            <li>Nederlands</li>
                            <li>Italiano</li>
                            <li>日本語</li>
                            <li>polski</li>
                        </ul>
                        <ul>
                            <h5>Company</h5>
                            <li>About Us</li>
                            <li><Link to="/Blog">Blog</Link></li>
                            <li>Media Kit</li>
                            <li>DMCA Policy</li>
                            <li>Impressum</li>
                        </ul>
                        <ul>
                            <h5>Help & Support</h5>
                            <li>Help Center</li>
                            <li>Developers</li>
                            <li>Contact us</li>
                        </ul>
                        <ul>
                            <h5>Product</h5>
                            <li>Plans & Pricing</li>
                            <li><Link to="/Integrations">Integrations</Link></li>
                            <li>Product Updates</li>
                            <li>Slack Bot</li>
                            <li>Microsoft Teams</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='fooBottom'>
                    <div>
                        <Link to="/" >
                            <img src={Twitter} className='socialLogo' alt="Twitter Logo" />
                        </Link>
                        <Link to="/" >
                            <img src={Instagram} className='socialLogo' alt="Instagram Logo" />
                        </Link>
                        <Link to="/" >
                            <img src={Linkedin} className='socialLogo' alt="Navbar Logo" />
                        </Link>
                        <Link to="/" >
                            <img src={Facebook} className='socialLogo' alt="Facebook Logo" />
                        </Link>
                    </div>
                    <div>
                        <p className='fooBottomRight'><Link to={"/"}>Privacy Policy</Link> | <Link to={"/"}>Terms of service</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}