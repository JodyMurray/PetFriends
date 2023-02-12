import React from "react";
import { Link } from "react-router-dom";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/SignInUpForm.module.css";
import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";



const SignUpForm = () => {
    return (
        <Row className={styles.Row}>
            <Col
                md={8}
                className={`my-auto d-none d-md-block p-6 ${styles.SignUpCol}`}>
                <Image
                    className={`${styles.FillerImage}`}
                    src={"https://res.cloudinary.com/dmqu7iqfu/image/upload/v1676112304/friends_jvsfbh.png"}
                />
            </Col>
            <Col className="my-auto py-2 p-md-2" md={4}>
                <Container className={`${styles.Content} p-4 `}>
                    <h1 className={styles.Header}>Sign up</h1>
                    <Form>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username </Form.Label>
                            <Form.Control className={styles.Input} type="text" placeholder="Username" name="username" />

                        </Form.Group>

                        <Form.Group controlId="password1">
                            <Form.Label className="d-none">Password </Form.Label>
                            <Form.Control className={styles.Input} type="password" placeholder="Password" name="password1" />
                        </Form.Group>
                        <Form.Group controlId="password2">
                            <Form.Label className="d-none">Password </Form.Label>
                            <Form.Control className={styles.Input} type="password" placeholder="Confirm Password" name="password2" />
                        </Form.Group>
                        <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Light}`} type="submit">
                            Sign up
                        </Button>
                    </Form>
                </Container>
                <Container className={`mt-3 ${styles.Content}`}>
                    <Link className={styles.Link} to="/signin">
                        Already have an account? <span>Sign in</span>
                    </Link>
                </Container>
            </Col>

        </Row>
    );
};

export default SignUpForm;