import React from 'react';
import FrontPageNavbarComponent from 'components/common/Headers/Navbars/FrontPageNavbar';
import ContactComponent from '../../components/common/contact/Contact';

const AboutPageCOmponent = () => (
  <div>
    <header className="header__main">
      <div className="header__nav">
        <FrontPageNavbarComponent />
      </div>
      <div className=" container-fluid">
        <div className="row">
          <div className="">
            <div className="header p--0">
              <div className="header__content m--center text-center">
              Ride-my Way is a carpooling application that provides drivers with the....
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="benefits">
      <h1 className="benefits__title text--center text--primary margin--0">
      About this App
      </h1>
      <div className="benefits__content">
        <div className="row container-fluid">
          <div className="">
            <div className="thumbnail">

              <div className="caption text--center margin--0">
                <p className="caption__text">
                Ride-my App is a carpooling application that provides
                drivers with the ability to create ride offers and
                passengers to join
                available ride offers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <ContactComponent />
  </div>
);

export default AboutPageCOmponent;
