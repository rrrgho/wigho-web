import React from 'react';
import SEO from "../../common/SEO";
import HeaderOne from "../../common/header/HeaderOne";
import {Link} from "react-router-dom";
import {FiArrowRight, FiCheck} from "react-icons/fi";
import FooterTwo from "../../common/footer/FooterTwo";
import ImageBannerLandingPage from '../../assets/images/landing-page.png'
import ServiceOne from "../../elements/service/ServiceOne";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import Separator from "../../elements/separator/Separator";
import CalltoActionFive from "../../elements/calltoaction/CalltoActionFive";
import ServiceFour from "../../elements/service/ServiceFour";
import ServiceTwo from "../../elements/service/ServiceTwo";
import ServiceFive from "../../elements/service/ServiceFive";
import PricingTwo from "../../elements/pricing/PricingTwo";

const LandingPage = () => {
    return (
        <>
            <SEO title="Consult | Wigho Digital Solutions"/>
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small btn-icon round" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent height-750">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-xl-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                <div className="inner text-start">
                                    <span className="subtitle">Stunning Website for Your Company</span>
                                    <h1 className="title theme-gradient display-one">Landing Page.</h1>
                                    <ul className="list-icon">
                                        <li><span className="icon"><FiCheck /></span> SEO Friendly.</li>
                                        <li><span className="icon"><FiCheck /></span> Fast, Secure and Reliable even in High Traffic.</li>
                                        <li><span className="icon"><FiCheck /></span> Mobile Responsive.</li>
                                        <li><span className="icon"><FiCheck /></span> One Time Charge.</li>
                                        <li><span className="icon"><FiCheck /></span> We Code Natively, No Wordpress or Other Free CMS.</li>
                                    </ul>
                                    <div className="button-group mt--40">
                                        <a className="btn-default btn-medium round btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Discuss Your Need <i className="icon"><FiArrowRight /></i></a>
                                        <Link className="btn-default btn-medium btn-border round btn-icon" to="#">Schedule an Appointment <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-6 order-1 order-lg-2">
                                <div className="">
                                    <img src={ImageBannerLandingPage} alt="https://www.freepik.com" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}


                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-pricing-area rn-section-gap" id="pricing">
                    <div className="container">
                        <div className="row mb--35">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Toppings For Your Coffee"
                                    title = "Stunning Website Package"
                                    description = ""
                                />
                            </div>
                        </div>
                        <PricingTwo />
                    </div>
                </div>
                {/* End Elements Area  */}

                <FooterTwo />
            </main>
        </>

    )
}
export default LandingPage
