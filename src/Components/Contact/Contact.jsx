import React from 'react';
import styles from './Content.module.scss';
import { Row, Col } from 'reactstrap';

const Contact = () => {
  return (
    <div className={styles.main_contact}>
      <Row className={`${styles.style} g-0`}>
        <Col sm={12} md={6}>
          <div className={styles.content}>
            <p className={styles.get_in_touch}>
              Get in <span>Touch</span>
            </p>
            <p>contact@metadolphin.io</p>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className={styles.form}>
            <div>
              <span>Name</span>
              <input type='text' name='' id='' placeholder='Enter your name' />
            </div>
            <div>
              <span>Email</span>
              <input type='text' name='' id='' placeholder='Enter your email' />
            </div>
            <div>
              <span>Subject</span>
              <input type='text' name='' id='' placeholder='Type the subject' />
            </div>
            <div>
              <span>Message</span>
              <input
              className={styles.textarea}
                type='text'
                name=''
                id=''
                placeholder='Type your message here...'
              />
            </div>
            <div>
            <a href="mailto: contact@metadolphin.io">
            <button >Submit</button>
              </a>
              
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
