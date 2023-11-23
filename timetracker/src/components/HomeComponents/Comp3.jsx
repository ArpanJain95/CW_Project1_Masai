import React from 'react';
import '../HomeComponents/Comp3.css';
import CompanyLogos_SSL from '../Store/CompanyLogos_SSL.svg';
import CompanyLogos_MCI from '../Store/CompanyLogos_MCI.svg';
import CompanyLogos_Moma from '../Store/CompanyLogos_Moma.svg';
import CompanyLogos_OpenStax from '../Store/CompanyLogos_OpenStax.svg';
import CompanyLogos_Playpass from '../Store/CompanyLogos_Playpass.svg';
import CompanyLogos_Smartsheet from '../Store/CompanyLogos_Smartsheet.svg';

export const Comp3 = () => {
    return (
        <div className='comp3-wrapper'>
            <div className='comp3Title'>
                <h2>TRUSTED BY COMPANIES OF ALL SHAPES AND SIZES</h2>
            </div>
            <div className='comp3Box'>
                <div>
                    <ul>
                        <li>
                            <img src={CompanyLogos_SSL} alt="SSL Logo" />
                        </li>
                        <li>
                            <img src={CompanyLogos_MCI} alt="MCI Logo" />
                        </li>
                        <li>
                            <img src={CompanyLogos_Moma} alt="Moma Logo" />
                        </li>
                        <li>
                            <img src={CompanyLogos_OpenStax} alt="OpenStax Logo" />
                        </li>
                        <li>
                            <img src={CompanyLogos_Playpass} alt="Playpass Logo" />
                        </li>
                        <li>
                            <img src={CompanyLogos_Smartsheet} alt="Smartsheet Logo" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}