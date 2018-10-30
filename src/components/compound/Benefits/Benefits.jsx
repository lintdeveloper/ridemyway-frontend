import React from 'react';
import group9 from 'images/Group 9.png';
import group91 from 'images/Group 9.1.png';

const BenefitsComponent = () => (
  <section className="benefits" id="benefits">
    <h1 className="benefits__title text--center text--primary margin--0">
        Benefits
    </h1>
    <div className="benefits__content">
      <div className="row container-fluid">
        <div className="divider--half">
          <div className="thumbnail">
            <img className="thumbnail--img" src={group9} alt="" />
            <div className="caption text--center margin--0">
              <h3 className="caption__title text--secondary">Anywhere, anytime</h3>
              <p className="caption__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, autem.
              </p>
            </div>
          </div>
        </div>
        <div className="divider--half">
          <div className="thumbnail">
            <img className="thumbnail--img" src={group91} alt="" />
            <div className="caption text--center margin--0">
              <h3 className="caption__title text--secondary">Low-cost to luxury </h3>
              <p className="caption__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, animi?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BenefitsComponent;