import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';

const blogPosts = [
    {
        title: '5 Tips to Extend Your Smartphone’s Battery Life',
        snippet: 'Discover easy ways to improve your smartphone’s battery life with these tips...',
        link: '#'
    },
    {
        title: 'How to Protect Your Laptop from Malware',
        snippet: 'Learn the best practices to keep your laptop safe from malware and other threats...',
        link: '#'
    },
    {
        title: 'Common Tablet Issues and How to Fix Them',
        snippet: 'Here are some common issues tablet users face and simple solutions to fix them...',
        link: '#'
    }
];

const BlogPreview = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h2>Latest Blog Posts</h2>
                </Col>
            </Row>
            <Row>
                {blogPosts.map((post, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.snippet}</Card.Text>
                                <Card.Link href={post.link}>Read more</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BlogPreview;
