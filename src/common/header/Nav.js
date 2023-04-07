import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li><a href="/">Home</a></li>

            <li className="has-droupdown"><a href="#">Our Products</a>
                <ul className="submenu">
                    <li><Link to="/product/software-development">Software Development</Link></li>
                    <li><Link to="/product/landing-page">Landing Page</Link></li>
                    <li><Link to="/product/it-consulting">IT Consulting</Link></li>
                    <li><Link to="/product/resource-outsourcing">Resource Outsourcing</Link></li>
                    <li><Link to="/product/it-training">IT Training</Link></li>
                </ul>
            </li>

            {/*<li><a href="/#pricing">Pricing</a></li>*/}
        </ul>
    )
}
export default Nav;
