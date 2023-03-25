import React from 'react';
import {Link} from "react-router-dom";
import CalltoActionSeven from "../../elements/calltoaction/CalltoActionSeven";
import footerOne from "../../data/footer/footerOne.json";
import ScrollTop from "./ScrollTop";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import Separator from "../../elements/separator/Separator";

const footerIntem =  footerOne[0];
const footerIntemOne =  footerOne[1];
const footerIntemTwo =  footerOne[2];
const footerIntemThree =  footerOne[3];
const footerIntemFour =  footerOne[4];
const footerIntemFive =  footerOne[5];


const indexOneLink = (footerIntemOne.quicklink);
const indexTwoLink = (footerIntemTwo.quicklink);
const indexThreeLink = (footerIntemThree.quicklink);

const FooterTwo = () => {
    return (
        <>
            <footer className="rn-footer footer-style-default variation-two p-3 p-md-0">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* Start Single Widget  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemOne.title}</h4>
                                    <h6 className="subtitle">{footerIntemOne.subtitle}</h6>
                                </div>
                            </div>
                            {/* End Single Widget  */}



                            {/* Start Single Widget  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemTwo.title}</h4>
                                    <h6 className="subtitle">{footerIntemTwo.support1} <br/> {footerIntemTwo.support2}</h6>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemFive.title}</h4>
                                    <div className="inner">
                                        <h6 className="subtitle">{footerIntemFive.subtitle}</h6>
                                        <ul className="social-icon social-default justify-content-start">
                                            <li><a target="_blank" href="https://www.instagram.com/wighodigital/"><FiFacebook /></a></li>
                                            <li><a target="_blank" href="https://www.instagram.com/wighodigital/"><FiTwitter /></a></li>
                                            <li><a target="_blank" href="https://www.instagram.com/wighodigital/"><FiInstagram /></a></li>
                                            <li><a target="_blank" href="https://www.instagram.com/wighodigital/"><FiLinkedin /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            <Separator />

                            <div className="copyright-area copyright-style-one no-border">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="copyright-left">
                                                <ul className="ft-menu link-hover">
                                                    <li><a href="#">Privacy Policy</a></li>
                                                    <li><a href="#">Terms And Condition</a></li>
                                                    <li><a href="/contact">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="copyright-right text-center text-md-end">
                                                <p className="copyright-text">© PT Wigho Digital Solutions {new Date().getFullYear()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollTop />
        </>
    )
}

export default FooterTwo;
