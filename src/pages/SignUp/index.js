import React from 'react';
import { Link } from 'react-router-dom';
import FrontPageNavbarComponent from 'components/common/Headers/Navbars/FrontPageNavbar';
import logo from 'images/Group 2.1.png';
import ContactComponent from '../../components/common/contact/Contact';


const handleOnsubmit = (event) => {
  event.preventDefault();
  const FD =  new FORM
  console.log('event :', event.target);
};
const SignUp = () => (
  <div>
    <header className="header__main">
      <div className="header__nav">
        <FrontPageNavbarComponent />
      </div>
    </header>

    <section className="CreateAccount">
      <div className="CreateAccount__title">
        <div className="logo--wrapper">
          <img src={logo} alt="Ride my way logo" />
        </div>
        <h4 className="text--center margin--top--10 text--primary">Sign Up to Ride</h4>
      </div>
      <div className="CreateAccount__headline">
Safe, reliable rides in minutes
      </div>
      <div className="CreateAccount__content">
        <div className="CreateAccount__form">
          <form id="signUp" onSubmit={handleOnsubmit}>
            <p className="js__errMsg" />
            <div className="input--group">
              <input type="text" className="form-control form--control" placeholder="First Name" name="firstName" />
              <input type="text" className="form-control form--control" placeholder="Last Name" name="lastName" />
            </div>
            <div className="input--group">
              <input type="text" className="form-control form--control" placeholder="Email address" name="email" />
              <input type="text" className="form-control form--control" placeholder="Phone number" name="phone" />
            </div>
            <div className="input--group">
              <input type="password" className="form-control form--control" placeholder="Password" name="password" />
              <input type="password" className="form-control form--control" placeholder="Confirm Password" name="confirmPassword" />
            </div>
            <div className="input--group">
              <input type="text" className="form-control form--control" placeholder="Address" name="address" />
              <input type="text" className="form-control form--control" placeholder="City" name="city" />
            </div>
            <div className="input--group">
              <input type="text" className="form-control form--control bd--none" placeholder="Zip code" name="zipCode" />
            </div>

            <div className="contact__submit">
              <button type="submit" className="btn btn--block bg--color--grey text--color--white">
                <span>Register</span>
              </button>

            </div>
            <div className="margin--top--10">
              <p className="text--primary">
Already have an account?
                <Link to="/login" className="text--color--grey">Sign In</Link>
              </p>
            </div>
          </form>
        </div>

      </div>
    </section>
    <ContactComponent />
  </div>
);

export default SignUp;
