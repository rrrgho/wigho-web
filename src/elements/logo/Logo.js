import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";
import Radium, { StyleRoot } from 'radium';

const Logo = ({image, image2}) => {
    const style = {
        width: '130px',
        height:'100px !important',

        // Adding media query..
        '@media (max-width: 500px)': {
            width: '100px',
            height:'80px !important',
        },
    };
    return(
        <StyleRoot>
        <div className="logo">
            <Link to={process.env.PUBLIC_URL + "/"}>
                <img style={style}  className="logo-light" src={process.env.PUBLIC_URL + image} alt="Corporate Logo" />
                <img style={style} className="logo-dark" src={process.env.PUBLIC_URL + image2} alt="Corporate Logo" />
            </Link>
        </div>
        </StyleRoot>
    )
}
Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
