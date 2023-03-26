import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import ImageAgile from '../../assets/images/Agile.png'
import ImageUpdatedTech from '../../assets/images/Updated Tech.png'
import {Link} from "react-router-dom";

const TimelineData = [
    {
        id: "1",
        date: "Step-1",
        title: "We Work in Agility.",
        description: "Agile methodology is a flexible and iterative approach to project management and software development that prioritizes collaboration, continuous improvement, and customer satisfaction. It emphasizes working in short cycles, called sprints, to quickly deliver small increments of working software and gather feedback from stakeholders. This approach allows teams to respond to changes and adapt to evolving requirements quickly.",
        image: ImageAgile,
        workingStep: [
            {
                stepTitle: "Gain your works",
                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
            },
            {
                stepTitle: "Working process",
                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
            },
        ]
    },
    {
        id: "2",
        date: "Step-2",
        title: "Use the Newest Technology",
        description: "At Wigho Digital, we are committed to staying at the forefront of technology. We use the latest and most advanced tools and technologies to provide our clients with innovative solutions and exceptional service.",
        image: ImageUpdatedTech,
        workingStep: [
            {
                stepTitle: "Follow this process",
                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
            },
            {
                stepTitle: "Working experience",
                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
            },
        ]
    },
]

const TimelineOne = () => {
    return (
        <div className="rn-timeline-wrapper timeline-style-one position-relative">
            <div className="timeline-line"></div>
            {/* Start Single Timeline  */}

            {TimelineData.map((data, index) =>(
                <div className="single-timeline mt--50" key={index}>
                    <div className="timeline-dot">
                        <div className="time-line-circle"></div>
                    </div>
                    <div className="single-content">
                        <div className="inner">
                            <div className="row row--30 align-items-center">
                                <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                                    <div className="content">
                                        <ScrollAnimation
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <h2 className="title">{data.title}</h2>
                                        </ScrollAnimation>

                                        <ScrollAnimation
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <p className="description">{data.description}</p>
                                        </ScrollAnimation>

                                        <div className="read-morebtn">
                                            <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                                <Link className="btn-default btn-large round" to="/consult"><span>Get Started Now</span></Link>
                                            </ScrollAnimation>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-lg-2 col-lg-6">
                                    <div className="thumbnail">
                                        <img className="w-100" src={data.image} alt="Corporate React Template" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* End Single Timeline  */}
        </div>
    )
}

export default TimelineOne;
