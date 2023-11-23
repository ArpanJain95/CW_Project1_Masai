import React from 'react'
import '../HomeComponents/Comp4.css';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import AsanaLogo from '../Store/AsanaLogo.png';
import SlackLogo from '../Store/SlackLogo.png';
import TeamsLogo from '../Store/TeamsLogo.png';
import GoogleLogo from '../Store/GoogleLogo.png';
import TrelloLogo from '../Store/TrelloLogo.png';
import GoogleSheetsLogo from '../Store/GoogleSheetsLogo.png';
import SmartSheetLogo from '../Store/SmartSheetLogo.png';
import MicrosoftPlannerLogo from '../Store/MicrosoftPlannerLogo.png';
import '@splidejs/react-splide/css';

export const Comp4 = () => {
    return (
        <div className='comp4-wrapper'>
            <div className='comp4Top'>
                <h2>INTEGRATIONS</h2>
                <h3>Add Time Tracking to the Apps You Use Every Day</h3>
                <p>Sync TrackingTime with the tools your team uses every day to fit their work habits. This way, they can keep track of every minute without switching between apps.</p>
                <Link to={"/integrations"}>Check out +50 integrations <span class="material-symbols-outlined">chevron_right</span></Link>
            </div>
            <div className='comp4Bottom'>
                <Splide aria-labelledby="My Favorite Images" options={{
                    perPage: 6,
                    perMove: 1,
                    arrows: false,
                    autoplay: true,
                    type: "loop",
                    drag: "free"
                }}>
                    <SplideSlide>
                        <Link to={"/"} className='imageBox'>
                            <img src={AsanaLogo} className='img12' alt="Image 1"/>
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"/"} className='imageBox'>
                            <img src={SlackLogo} className='img13' alt="Image 2"/>
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"/"} className='imageBox'>
                            <img src={TeamsLogo} alt="Image 2"/>
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"/"} className='imageBox'>
                            <img src={GoogleLogo} alt="Image 2"/>
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"/"} className='imageBox'>
                            <img src={SmartSheetLogo} alt="Image 2"/>
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"/"} className='imageBox'>
                            <img src={MicrosoftPlannerLogo} alt="Image 2"/>
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"/"} className='imageBox'>
                            <img src={TrelloLogo} alt="Image 2"/>
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"/"} className='imageBox'>
                            <img src={GoogleSheetsLogo} alt="Image 2"/>
                        </Link>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}