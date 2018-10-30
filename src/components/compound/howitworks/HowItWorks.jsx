import React from 'react';

const HowItWorks = () => (
  <section id="howitworks" className="how-it-works">
    <div className="container-fluid">
      <h1 className="how__title text--primary text--center">
      How it Works
      </h1>
      <p className="how__headline">One, Two, Three steps to a new riding experience</p>
      <div className="how__content">
        <div className="card">
          <div className="card__content">
            <div className="card--content__title">
            Create an Account
            </div>
          </div>
        </div>
        <div className="arrow__right">
          <i className="fa fa-angle-double-right text--primary" />
        </div>
        <div className="card">
          <div className="card__content">
            <div className="card--content__title">
            Request For Rides
            </div>
          </div>
        </div>
        <div className="arrow__right">
          <i className="fa fa-angle-double-right text--primary" />
        </div>
        <div className="card">
          <div className="card__content">
            <div className="card--content__title">
            Offer Rides
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
