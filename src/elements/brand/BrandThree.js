import React from 'react';
import ImageTelkomsel from '../../assets/images/Telkomsel.png'
import ImageAstra from '../../assets/images/Astra.png'
import ImageMBI from '../../assets/images/MBI.png'

const BrandList = [
    {
        image: ImageTelkomsel
    },
    {
        image: ImageAstra
    },
    {
        image: ImageMBI
    },

]

const BrandThree = ({brandStyle}) => {
    return (
        <ul className={`brand-list ${brandStyle}`}>
            {BrandList.map((data, index) => (
                <li key={index}>
                    <a href="#"><img src={`${data.image}`} alt="Brand Image" /></a>
                </li>
            ))}
        </ul>
    )
}

export default BrandThree;
