import React from 'react';
import {Accordion, Card, Col, Container, Row} from 'react-bootstrap';

const faqItems = [
    {
        question: 'What types of devices do you repair?',
        answer: 'We repair smartphones, laptops, tablets, and game consoles.'
    },
    {question: 'How long does a typical repair take?', answer: 'Most repairs are completed within 1-2 days.'},
    {question: 'Do you offer a warranty on repairs?', answer: 'Yes, we offer a 90-day warranty on all repairs.'}
];

const FAQ = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h2>Frequently Asked Questions</h2>
                    <Accordion defaultActiveKey="0">
                        {faqItems.map((item, index) => (
                            <Card key={index}>
                                <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                                    {item.question}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={index.toString()}>
                                    <Card.Body>{item.answer}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))}
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default FAQ;
