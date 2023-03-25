import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import ImageService1 from '../../assets/images/service-1.png';
import ImageService2 from '../../assets/images/service-2.png';
import ImageService3 from '../../assets/images/service-3.png';

const ServiceList = [
    {
        icon: '1',
        title: 'Software Development',
        description: 'Designing, creating, and maintaining computer programs and applications.',
        image: ImageService1,
        imageAttr: 'Vecteezy.com',
    },
    {
        icon: '2',
        title: 'IT Consulting',
        description: 'Provides expert advice to businesses on how to best leverage technology.',
        image: ImageService2,
        imageAttr: 'Vecteezy.com',
    },
    {
        icon: '3',
        title: 'Resource Outsourcing',
        description: 'We provide professional talent to your business needs',
        image: ImageService3,
        imageAttr: 'Vecteezy.com',
    },
    {
        icon: '4',
        title: 'IT Training',
        description: 'Variations There variations of Lorem Ipsum.',
        image: ImageService2,
        imageAttr: 'Vecteezy.com',
    },
]

const ServiceFour = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div>
                                <img src={val.image} alt={val.imageAttr} style={{width:250, height:150}}/>
                            </div>
                            <div className="content">
                                <h4 className="title"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceFour;
