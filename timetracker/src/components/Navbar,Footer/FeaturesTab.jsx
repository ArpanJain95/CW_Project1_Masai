import React, {useState} from 'react';
import {featuresList} from "./AllFeatures";
import { Link } from 'react-router-dom';
import "./FeaturesTab.css";

export const FeaturesTab = () => {
    const [featurestab, setFeaturestab] = useState(false);
    return (
        <>
            <ul className={featurestab ? 'featuresSubmenu clicked' : 'featuresSubmenu'} onClick={() => setFeaturestab(!featurestab)}>
                {featuresList.map(item =>{
                    return(
                        <li key={item.id}>
                            <Link to={item.path} className={item.cName} onClick={() => setFeaturestab(false)}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}