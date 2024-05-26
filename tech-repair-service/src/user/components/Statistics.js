import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {motion} from 'framer-motion';

const statistics = [
    {value: '10,000+', label: 'Devices Repaired'},
    {value: '98%', label: 'Customer Satisfaction'},
    {value: '24/7', label: 'Support'}
];

const Statistics = () => {
    return (
        <Container className="py-5">
            <Row>
                {statistics.map((stat, index) => (
                    <Col md={4} key={index} className="text-center">
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: index * 0.2}}
                        >
                            <h2>{stat.value}</h2>
                            <p>{stat.label}</p>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Statistics;
