import React from 'react';
import { Link } from 'react-router-dom';
import FrontPageNavbarComponent from './Navbars/FrontPageNavbar';
import FrontPageHeaderContent from './headercontent/FrontPageHeaderContent';


const FrontPageHeaderComponent = () => (
  <header className="header__main">
    <div className="header__nav">
      <FrontPageNavbarComponent />
    </div>
    <FrontPageHeaderContent />
  </header>
);

export default FrontPageHeaderComponent;
