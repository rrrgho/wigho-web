import React from 'react';
import SEO from "../../common/SEO";
import HeaderOne from "../../common/header/HeaderOne";
import Typed from "react-typed";
import {Link} from "react-router-dom";
import {FiArrowRight, FiMail} from "react-icons/fi";
import ImageBannerQuestion from '../../assets/images/question-flat.png'
import FooterTwo from "../../common/footer/FooterTwo";
import {FaWhatsapp} from "react-icons/all";
import AccordionOne from "../../elements/accordion/AccordionOne";
import AccordionTwo from "../../elements/accordion/AccordionTwo";

const Consult = () => {
    return (
        <>
            <SEO title="Consult | Wigho Digital Solutions"/>
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small btn-icon round" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent variation-2 height-750">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                <div className="inner text-start">
                                    <h1 className="title theme-gradient display-one">Having questions? {" "} <br/>
                                        <Typed
                                            strings={[
                                                "Contact Us.",
                                                "Discuss.",
                                                "Get Your Deal.",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                    </h1>
                                    <p className="description">We help our clients succeed by creating brand identities, digital experiences, and print materials.</p>
                                    <div className="button-group">
                                        <a className="btn-default btn-medium btn-border round btn-icon" target="_blank" href="https://wa.me/+6285186897566/?text=Hi,%20I%20Want%20to%20Consult%20with%20WighoDigital%20Support%20Team">Whatsapp <i className="icon"><FaWhatsapp /></i></a>
                                        {/*<a className="btn-default btn-medium btn-border round btn-icon" href="#">Email Us <i className="icon"><FiMail /></i></a>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2">
                                <div className="thumbnail">
                                    <img src={ImageBannerQuestion} alt="https://www.freepik.com/free-vector/flat-people-asking-questions_13561931.htm#query=flat%20design%20question&position=49&from_view=search&track=ais" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <div className="p-3 p-md-0">

                    {/* Start FAQ Area */}
                    <div className="rn-company-mission-are rn-section-gap">
                        <div className="container">
                            <div className="row row--30">
                                <div className="col-lg-6">
                                    <div className="mission-title">
                                        <h2 className="title">Frequently Ask Question <br /> {" "}
                                        </h2>
                                        <p>
                                            Our mission is to empower your business to succeed in the digital age. We are dedicated to helping you grow your business and thrive in today's digital landscape.
                                        </p>

                                        <p>
                                            As a digital-first company, we are committed to helping businesses like yours thrive in the digital world. Helping you achieve your business goals by providing innovative solutions and expert guidance.
                                        </p>

                                        <div className="read-more-btn mt--50">
                                            <Link className="btn-default btn-icon" to="#">More FAQs <i className="icon"><FiArrowRight /></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt_md--30 mt_sm--30">
                                    <AccordionTwo customStyle="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End FAQ Area */}
                </div>

                <FooterTwo />
            </main>
        </>

    )
}
export default Consult
