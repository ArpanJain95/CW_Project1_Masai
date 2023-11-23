import React from 'react'
import '../HomeComponents/Comp5.css';
import { Link } from 'react-router-dom';
import Comp5Img1 from '../Store/Comp5Img1.webp';

export const Comp5 = () => {
    return (
        <div className='comp5-wrapper'>
            <div className='comp5Container'>
                <div className='comp5Top'>
                    <h2>TIME TRACKING APP</h2>
                    <h3>Track Time, Not People</h3>
                </div>
                <div className='comp5Bottom'>
                    <div className='comp5Left'>
                        <ul>
                            <li>
                                <div className='comp5Span'>
                                    <span class="material-symbols-outlined">list</span>
                                </div>
                                <div>
                                    <h2>Timesheets</h2>
                                    <p>Comply with internal processes without having to fill out unnecessary paperwork or process time data manually.</p>
                                    <Link to={"/integrations"}>More on Employee Timesheets <span class="material-symbols-outlined">chevron_right</span></Link>
                                </div>
                            </li>
                            <li>
                                <div className='comp5Span'>
                                    <span class="material-symbols-outlined">article</span>
                                </div>
                                <div>
                                    <h2>Project Tracking</h2>
                                    <p>Stay on top of each project and visualize progress in the way that works best for you. Allocate time and resources wisely to hit deadlines.</p>
                                    <Link to={"/integrations"}>More on Project Management <span class="material-symbols-outlined">chevron_right</span></Link>
                                </div>
                            </li>
                            <li>
                                <div className='comp5Span'>
                                    <span class="material-symbols-outlined">target</span>
                                </div>
                                <div>
                                    <h2>Business Reporting</h2>
                                    <p>Gather accurate and detailed time data and obtain professional branded reports to share with clients and support internal processes.</p>
                                    <Link to={"/integrations"}>More on Time Reports <span class="material-symbols-outlined">chevron_right</span></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='comp5Right'>
                        <div>
                            <img src={Comp5Img1} alt="Comp5 Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}