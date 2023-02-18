import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function PostsFeed() {
    const {id} = useParams();
    const [post, setPost] = useState();

    return (
        <Row className="h-100">
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                placeholder
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