import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const blogPosts = [
    { title: "Repair Tips", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Common Problems", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "New Technology", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
];

const BlogPage = () => {
    return (
        <Container className="py-5">
            <Row>
                {blogPosts.map((post, index) => (
                    <Col md={4} key={index}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BlogPage;
