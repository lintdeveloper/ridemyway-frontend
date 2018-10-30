import React from 'react';
import FooterComponent from '../footer/FooterComponent';

const ContactComponent = () => (
  <section className="contact gradient">
    <div className="container">
      <div className="contact__title text--color--white">Get In Touch</div>
      <div className="contact__form">
        <form action="/contact" method="POST">
          <div className="input--group">
            <input type="text" className="form-control form--control" placeholder="Your name" />
            <input type="text" className="form-control form--control" placeholder="Email address" />
            <input type="text" className="form-control form--control" placeholder="phone" />
          </div>

          <div className="text__area p--0">
            <textarea name="" className="form-control" rows="3" required="required" placeholder="Your message" />
          </div>

          <div className="contact__submit">
            <button type="submit" className="btn btn--block">
              <span>Send</span>
            </button>

          </div>
        </form>
      </div>

    </div>
    <FooterComponent />
  </section>
);

export default ContactComponent;
