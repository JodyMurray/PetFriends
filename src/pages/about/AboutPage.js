import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import appStyles from "../../App.module.css";
import styles from "../../styles/About.module.css";


const AboutPage = () => {
  return (
    <Container className={`${appStyles.Content} ${styles.AboutContent} p-5 mt-4`}>
      <Row>
        <Col>
          <div className='d-flex justify-content-center'>
            <h3>Welcome!</h3>
          </div>
          <hr />
          <div className='text-center'>
            <p>We're very happy to have you here!</p>
            <p>Simply put, we're a no humans-allowed social media, pets only!
              All sorts of pets are welcome! From cats, dogs, pigs, birds, ferrets, the list goes on!
              Make your lovely fur friend a profile, set them up with a bio and a profile picture, and start making friends!
              Create a post and start sharing content!
              Save some posts for viewing specifically on your "saved feed". Follow and unfollow as your paw desires!
              You can also upvote or downvote posts, I know some of you cats won't like our canine friend's posts and vice versa!
              So show approval or disapproval as you please, by voting and commenting!
            </p>
            <i className="fa-regular fa-face-grin-tongue"></i>
            <p>We hope you like our website! Fully adaptable for your tablet and mobile viewing!
            </p>
            <p>Get started! Create your pet's profile, add a post, and start making friends!</p>
          </div>
          <hr />
        </Col>
      </Row>
    </Container>
  )
}

export default AboutPage;