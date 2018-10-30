import React from 'react';
import FrontPageNavbarComponent from 'components/common/Headers/Navbars/FrontPageNavbar';
import ContactComponent from '../../components/common/contact/Contact';

const NotFound = props => (
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
              Not Found
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="benefits">
      <h1 className="benefits__title text--center text--primary margin--0">
      Whoops.... 404
      </h1>
      <div className="benefits__content">
        <div className="row container-fluid">
          <div className="">
            <div className="thumbnail">

              <div className="caption text--center margin--0">
                <p className="caption__text">
                The page you're looking for was not found
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

export default NotFound;
