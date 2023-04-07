import React from 'react';
import Typed from 'react-typed';
import {FiArrowRight} from "react-icons/fi";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import SEO from "../../common/SEO";
import HeaderOne from '../../common/header/HeaderOne';
import {BannerActivation} from "../../utils/script";
import Separator from "../../elements/separator/Separator";
import ServiceFour from "../../elements/service/ServiceFour";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import FooterTwo from '../../common/footer/FooterTwo';
import BlogClassicData from '../../data/blog/BlogList.json';
import BrandOne from "../../elements/brand/BrandOne";
import Mission from "../../elements/about/Mission";
import BrandThree from "../../elements/brand/BrandThree";
import TimelineOne from "../../elements/timeline/TimelineOne";
import PricingTwo from "../../elements/pricing/PricingTwo";
import BannerImage from '../../assets/images/banner-min.png'

const BannerData = [
    {
        image: "/images/app/banner1.jpg",
        title: "Transform Your Business with <br/> Expert IT Consulting Services",
        description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
    },
]


const Home = () => {
    return (
        <>
            <SEO title="Wigho Digital Solutions" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small btn-icon round" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                {/*<Slider className="slider-area slider-style-4 variation-2 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>*/}
                {/*    {BannerData.map((data, index) => (*/}
                {/*        <div key={index} className="single-slide">*/}
                {/*            <div className="height-950 bg-overlay bg_image" style={{backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})`}}>*/}
                {/*                <div className="container">*/}
                {/*                    <div className="row row--30 align-items-center">*/}
                {/*                        <div className="col-lg-12">*/}
                {/*                            <div className="inner text-center">*/}
                {/*                                <h1 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h1>*/}
                {/*                                <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p>*/}
                {/*                                <div className="button-group mt--30">*/}
                {/*                                    <Link className="btn-default btn-large round" to="/consult">Get started now</Link>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</Slider>*/}
                {/* End Slider Area  */}


                <div className="p-3 p-md-0">
                    {/* Start About Area  */}
                    <div className="slider-area slider-style-1 bg-transparent height-850">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <div className="inner text-center text-lg-start">
                                        <span className="subtitle">WIGHO DIGITAL SOLUTIONS</span>
                                        <h1 className="title theme-gradient display-one d-none d-md-block">One Stop IT Solution <br /> {" "}
                                            <Typed
                                                strings={[
                                                    "Consulting.",
                                                    "Software Development.",
                                                    "Resource Outsourcing.",
                                                    "IT Training.",
                                                ]}
                                                typeSpeed={80}
                                                backSpeed={5}
                                                backDelay={1000}
                                                loop
                                            />
                                        </h1>
                                        <h2 className="title theme-gradient d-block d-md-none">One Stop IT Solution <br /> {" "}
                                            <Typed
                                                strings={[
                                                    "Consulting.",
                                                    "Software Development.",
                                                    "Resource Outsourcing.",
                                                    "IT Training.",
                                                ]}
                                                typeSpeed={80}
                                                backSpeed={5}
                                                backDelay={1000}
                                                loop
                                            />
                                        </h2>
                                        <p className="description">We specialize in providing innovative <br/> and customized solutions to businesses seeking <br/> to leverage technology to achieve their strategic goals.</p>
                                        <div className="button-group">
                                            <Link className="btn-default bounce btn-medium round btn-icon" to="/consult">Schedule an Appointment <i className="icon"><FiArrowRight /></i></Link>
                                            {/*<Link className="btn-default btn-medium btn-border round btn-icon" to="#">Contact Us <i className="icon"><FiArrowRight /></i></Link>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_25001216.htm#query=programming%20flat%20design&position=36&from_view=search&track=ais">
                                        <img className="zoom-in-out-effect" src={BannerImage} alt="https://www.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_25001216.htm#query=programming%20flat%20design&position=36&from_view=search&track=ais" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End About Area  */}

                    {/*<Separator />*/}
                    {/*/!* Start Elements Area  *!/*/}
                    {/*<div className="rwt-team-area rn-section-gap">*/}
                    {/*    <div className="container">*/}
                    {/*        <div className="row">*/}
                    {/*            <div className="col-lg-12">*/}
                    {/*                <SectionTitle*/}
                    {/*                    textAlign = "text-center"*/}
                    {/*                    radiusRounded = ""*/}
                    {/*                    subtitle = "Our Experts."*/}
                    {/*                    title = "Our Company Experts."*/}
                    {/*                    description = "We provide company and finance service for <br /> startups and company business."*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <TeamTwo data={Team} column="col-lg-4 col-md-6 col-12" teamStyle="style-two" />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/* End Elements Area  */}


                    <Separator />
                    {/* Start Service Area  */}
                    <div className="rn-service-area rn-section-gap" id="service">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "What we can do for you"
                                        title = "Services provide for you."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <ServiceFour
                                serviceStyle = "service__style--1 icon-circle-style with-working-process"
                                textAlign = "text-center"
                            />
                        </div>
                    </div>
                    {/* End Service Area  */}


                    <Separator />
                    <div className="rwt-timeline-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Working Process"
                                        title = "Our Working Procedure"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 mt--50">
                                    <TimelineOne classVar="no-gradient"  />
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* Start Project Area */}
                    <Separator />
                    <div className="rwt-brand-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Awesome Project"
                                        title = "Our Awesome Project."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mt--40">
                                    <BrandOne brandStyle="brand-style-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Project Area */}

                    {/* Start Company Client Area */}
                    <Separator />
                    <div className="rwt-brand-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Reliable Programmers Joining Big Tech Company"
                                        title = "Where Our Team Member Work For"
                                        description = "Experiencing good culture of work at Big Tech Company makes <br/> our team better in handling variety of project"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mt--40">
                                    <BrandThree brandStyle="brand-style-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Company Client Area */}



                    {/* Mission */}
                    <Mission />

                    <Separator />
                    {/* Start Elements Area  */}
                    <div className="rwt-pricing-area rn-section-gap" id="pricing">
                        <div className="container">
                            <div className="row mb--35">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Stunning Website Package"
                                        title = "Sweet Appetizer for You"
                                        description = "Stunning landing page for your company profile looks better, <br /> we're not joking that these prices give everything you need"
                                    />
                                </div>
                            </div>
                            <PricingTwo />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                </div>

                <FooterTwo />
            </main>
        </>
    )
}

export default Home;
