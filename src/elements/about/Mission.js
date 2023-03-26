import React from 'react';
import Typed from 'react-typed';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AccordionOne from '../accordion/AccordionOne';

const mission = () => {
    return (
        <div className="rn-company-mission-are rn-section-gap">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-6">
                        <div className="mission-title">
                            <h2 className="title">Unique Mission <br /> {" "}
                                <Typed className="theme-gradient"
                                    strings={[
                                        "Consulting.",
                                        "Vission.",
                                        "Agency.",
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={5}
                                    backDelay={1000}
                                    loop
                                />
                            </h2>
                            <p>
                                Our mission is to empower your business to succeed in the digital age. We are dedicated to helping you grow your business and thrive in today's digital landscape.
                            </p>

                            <p>
                                As a digital-first company, we are committed to helping businesses like yours thrive in the digital world. Helping you achieve your business goals by providing innovative solutions and expert guidance.
                            </p>

                            <div className="read-more-btn mt--50">
                                <Link className="btn-default btn-icon" to="/consult">Learn More <i className="icon"><FiArrowRight /></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <AccordionOne customStyle="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default mission;
