import React from 'react';

const BrandList = [
    {
        image: './images/brand/Telkomsel.png'
    },
    {
        image: './images/brand/Astra.png'
    },
    {
        image: './images/brand/brand-04.png'
    },
    {
        image: './images/brand/MBI.png'
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
