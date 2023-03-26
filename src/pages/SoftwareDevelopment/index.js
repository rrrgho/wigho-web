import React from 'react';
import SEO from "../../common/SEO";
import HeaderOne from "../../common/header/HeaderOne";
import Typed from "react-typed";
import {Link} from "react-router-dom";
import {FiArrowRight, FiCheck, FiMail} from "react-icons/fi";
import ImageBannerQuestion from '../../assets/images/question-flat.png'
import FooterTwo from "../../common/footer/FooterTwo";
import {FaWhatsapp} from "react-icons/all";
import AccordionOne from "../../elements/accordion/AccordionOne";
import AccordionTwo from "../../elements/accordion/AccordionTwo";
import ImageBannerSoftwareDevelopment from '../../assets/images/software-development-flat.png'
import ServiceOne from "../../elements/service/ServiceOne";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import Separator from "../../elements/separator/Separator";
import CalltoActionFive from "../../elements/calltoaction/CalltoActionFive";

const SoftwareDevelopment = () => {
    return (
        <>
            <SEO title="Consult | Wigho Digital Solutions"/>
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small btn-icon round" HeaderSTyle="header-transparent" />

                <div className="p-3 p-md-0">
                    {/* Start Slider Area  */}
                    <div className="slider-area slider-style-1 bg-transparent height-750">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-xl-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                    <div className="inner text-start">
                                        <span className="subtitle">Work Tech Integration</span>
                                        <h1 className="title theme-gradient display-one">Software Development.</h1>
                                        <ul className="list-icon">
                                            <li><span className="icon"><FiCheck /></span> Best Programmer from Big Tech Company.</li>
                                            <li><span className="icon"><FiCheck /></span> Working with Agile Methodology.</li>
                                            <li><span className="icon"><FiCheck /></span> Prioritize the Perfect Result & Return Value.</li>
                                        </ul>
                                        <div className="button-group mt--40">
                                            <a className="btn-default btn-medium round btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Discuss Your Need <i className="icon"><FiArrowRight /></i></a>
                                            <Link className="btn-default btn-medium btn-border round btn-icon" to="#">Schedule an Appointment <i className="icon"><FiArrowRight /></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-xl-6 order-1 order-lg-2">
                                    <div className="">
                                        <img src={ImageBannerSoftwareDevelopment} alt="https://www.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_25559969.htm#query=flat%20design%20software&position=21&from_view=search&track=ais" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Slider Area  */}


                    <Separator />

                    {/* Start Service Area  */}
                    <div className="rn-service-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "We Serve Better Ever"
                                        title = "Why are We Best."
                                        description = "Our team is used to working in Big Tech Company with very good culture"
                                    />
                                </div>
                            </div>
                            <ServiceOne
                                serviceStyle = "service__style--1 bg-color-blackest radius mt--25"
                                textAlign = "text-center"
                            />
                        </div>
                    </div>
                    {/* End Service Area  */}

                    {/* Start Call To Action Area  */}
                    <div className="rwt-callto-action-area rn-section-gapBottom">
                        <div className="wrapper">
                            <CalltoActionFive />
                        </div>
                    </div>
                    {/* End Call To Action Area  */}
                </div>

                <FooterTwo />
            </main>
        </>

    )
}
export default SoftwareDevelopment
