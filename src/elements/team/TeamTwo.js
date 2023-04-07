import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import RianImage from '../../assets/images/team/rian-ceo.png'


const TeamTwo = ({data, column , teamStyle, justify}) => {
    return (
        <div className={`row justify-content-${justify ?? 'around'} row--15`}>
            {data && data.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`rn-team ${teamStyle}`}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={data.image} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <h2 className="title">{data.name}</h2>
                                    <h6 className="theme-gradient" style={{fontSize:30}}>{data.designation}</h6>
                                    {/*{data.location &&*/}
                                    {/*    <span className="team-form">*/}
                                    {/*    <img src="./images/team/location.svg" alt="Corporate React Template" />*/}
                                    {/*    <span className="location">{data.location}</span>*/}
                                    {/*</span>*/}
                                    {/*}*/}
                                    {/*<p className="description">{data.description}</p>*/}

                                    {/*<ul className="social-icon social-default icon-naked mt--20" >*/}
                                    {/*    {data.socialNetwork.map((social, index) =>*/}
                                    {/*        <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>*/}
                                    {/*    )}*/}
                                    {/*</ul>*/}
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}

export default TeamTwo;
