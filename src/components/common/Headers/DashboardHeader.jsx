import React from 'react';
import DashboardNavbarComponent from './Navbars/DashboardNavbar';
import DashboardHeaderContent from './headercontent/DashboardHeaderContent';


const DashboardHeader = () => (
  <header className="dashboard__header bg--color--white">
    <div className="header__nav">
      <DashboardNavbarComponent />
      <DashboardHeaderContent />
    </div>
  </header>
);

export default DashboardHeader;
