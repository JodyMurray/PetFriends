import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

function PostCreateForm() {

    const [errors, setErrors] = useState({});


    const textFields = (
        <div className="text-center">
            <Button className={`${btnStyles.Button} ${btnStyles.Light}`} type="submit">
                create
            </Button>
            <Button
                className={`${btnStyles.Button} ${btnStyles.Light}`}
                onClick={() => { }}
            >
                cancel
            </Button>
        </div>
    );
    return (
        <Form>
            <Row>

                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-4">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
                <Col className="py-2 p-0 p-md-4" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">
                            <Form.Label
                                className="d-flex justify-content-center"
                                htmlFor="image-upload"
                            >
                                <Asset src={Upload} message="Upload an image here!" />
                            </Form.Label>
                        </Form.Group>
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
            </Row>
        </Form>
    );
}

export default PostCreateForm;