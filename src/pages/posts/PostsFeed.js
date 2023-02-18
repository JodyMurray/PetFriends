import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";

function PostsFeed() {


    return (
        <Row className="h-100">
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                Popular profiles for desktop
            </Col>
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <p>Profiles</p>
                <p>Post placeholder</p>
                <Container className={appStyles.Content}>
                    Comments..
                </Container>
            </Col>
        </Row>
    );
}

export default PostsFeed;