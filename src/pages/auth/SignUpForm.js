import React, { useState } from "react";
import { Link } from "react-router-dom";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/SignInUpForm.module.css";
import {
    Form,
    Button,
    Image,
    Col,
    Row,
    Container,
    Alert,
} from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useRedirect } from "../../hooks/useRedirect";



const SignUpForm = () => {
    useRedirect('loggedIn')
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: ""
    })
    const { username, password1, password2 } = signUpData;

    const [errors, setErrors] = useState({})

    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/registration/", signUpData);
            history.push("/signin");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };
    return (
        <Row className={styles.Row}>
            <Col
                md={7}
                className={`my-auto d-none d-md-block p-6 ${styles.SignUpCol}`}>
                <Image
                    className={`${styles.FillerImage}`}
                    src={"https://res.cloudinary.com/dmqu7iqfu/image/upload/v1676112304/friends_jvsfbh.png"}
                />
            </Col>
            <Col className="my-auto py-2 p-md-3" md={4}>
                <Container className={`${styles.Content} p-4 `}>
                    <h1 className={styles.Header}>Sign up</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username </Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={handleChange} />

                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert variant="secondary" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password1">
                            <Form.Label className="d-none">Password </Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Password"
                                name="password1"
                                value={password1}
                                onChange={handleChange} />

                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                            <Alert variant="secondary" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        <Form.Group controlId="password2">
                            <Form.Label className="d-none">Password </Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Confirm Password"
                                name="password2"
                                value={password2}
                                onChange={handleChange} />
                        </Form.Group>
                        {errors.password2?.map((message, idx) => (
                            <Alert variant="secondary" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Light}`} type="submit">
                            Sign up
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="secondary" className="mt-3">
                                {message}
                            </Alert>
                        ))}
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