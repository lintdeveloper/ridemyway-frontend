import React from 'react';
import FrontPageHeaderComponent from '../../components/common/Headers/FrontPageHeader';
import HowItWorks from '../../components/compound/howitworks/HowItWorks';
import CallToAction from '../../components/compound/highlight/Highlight';
import BenefitsComponent from '../../components/compound/Benefits/Benefits';
import ContactComponent from '../../components/common/contact/Contact';

export const HomeComponent = () => (
  <div>
    <FrontPageHeaderComponent />
    <HowItWorks />
    <CallToAction />
    <BenefitsComponent />
    <ContactComponent />
  </div>
);

export default HomeComponent;
