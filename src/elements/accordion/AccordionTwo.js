import React from 'react';
import {Accordion, Button, Card} from "react-bootstrap";

const AccordionTwo = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        What is Wigho Digital?
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        Wigho Digital is a leading provider of IT solutions, specializing in IT consulting, software development, and IT outsourcing services. We pride ourselves on delivering cutting-edge solutions that help businesses achieve their goals and stay ahead of the competition.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        How can I get the customer support?
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        We are available to assist you through multiple channels, including email, phone, and live chat. Please feel free to reach out to us in whatever way is most convenient for you.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        How do I make payment?
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        You can make payment directly to our company, and please look very closely that we have no second hand to accept payment, but only via our company's bank account
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        How can I meet up with WighoDigital Support Team?
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        You can just easily contact us by lines we provided, we are always available to having some coffee with You.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}

export default AccordionTwo
