import React from 'react'
import  '../SmallComp/AcoSlider.css'
import Comp2Img1 from '../../Store/Comp2Img1.png';
import Comp2Img2 from '../../Store/Comp2Img2.png';
import Comp2Img3 from '../../Store/Comp2Img3.png';
import Comp2Img4 from '../../Store/Comp2Img4.png';
import Comp2Img5 from '../../Store/Comp2Img5.png';
import Comp2Img6 from '../../Store/Comp2Img6.png';

export const AcoSlider = ({activeAccordionIndex, className}) => {
    const images =[
        Comp2Img1,
        Comp2Img2,
        Comp2Img3,
        Comp2Img4,
        Comp2Img5,
        Comp2Img6,
    ];
    return (
        <div className={`acoSlider-wrapper ${className}`}>
            {images.map((img, index)=>(
                <img
                    key={index}
                    src={img}
                    alt={`Accordion Image ${index + 1}`}
                    style={{ display: index === activeAccordionIndex ? 'block' : 'none' }}
                />
            ))}
        </div>
    )
}