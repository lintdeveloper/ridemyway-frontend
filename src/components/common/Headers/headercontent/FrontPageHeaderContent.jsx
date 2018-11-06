import React from 'react';
import { Link } from 'react-router-dom';

const FrontPageHeaderContent = () => (
  <div className=" container-fluid">
    <div className="row">
      <div className="margin--top--100">
        <div className="header ">
          <div className="header__title typed m--center">
          Get there
          </div>
          <div className="header__content">
          Your day belongs to you
          </div>
          <div className="header__action">
            <Link className="btn btn--white btn--round" to="/login">
            Start Riding Now
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default FrontPageHeaderContent;
