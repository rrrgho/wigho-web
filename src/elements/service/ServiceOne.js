import React from 'react';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import {BsCodeSlash} from "react-icons/all";

const ServiceList = [
    {
        icon: <BsCodeSlash />,
        title: 'Clean Code',
        description: 'Our product will be easy to maintenance with our Experience by developing software in Clean Code'
    },
    {
        icon: <FiCast />,
        title: 'Agile Methodology',
        description: 'We use a perfect Agile system in working to make sure everything Well-Driven and Well-Delivered'
    },
    {
        icon: <FiMap />,
        title: 'Documentation',
        description: 'We make sure that what we develop will be easy to maintenance continuously even if you are out of us'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;
