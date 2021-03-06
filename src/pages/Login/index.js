import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'
import FrontPageNavbarComponent from '../../components/common/Headers/Navbars/FrontPageNavbar';
import logo from 'images/Group 2.1.png';
import ContactComponent from '../../components/common/contact/Contact';
import { login } from '../../store/actions/auth';

class Login extends Component {

  handleOnsubmit = (event) => {

    const { login, history, loading } =  this.props;
    console.log(loading)
    event.preventDefault();
    const formData = {}
    const FD = new FormData(event.target);
    for(var pair of FD.entries()) {
      formData[pair[0]] = pair[1];
   }
   login(formData, history);
   
  }
  render() {
    const { loading } =  this.props;
    return (
      <div>
        <header className="header__main">
          <div className="header__nav">
            <FrontPageNavbarComponent />
          </div>
        </header>
        (<section className="SignIn padding--bottom--210">
        <div className="SignIn__title">
        <div className="logo--wrapper">
        <img src={logo} alt="Ride my way logo" />
        </div>
        <h4 className="text--center margin--top--10 text--primary">Sign In to Ride</h4>
        </div>
        <div className="SignIn__headline">
        Safe, reliable rides in minutes
        </div>
        <div className="SignIn__content">
        <div className="SignIn__form">
        {(!loading) 
        ?
          <form onSubmit={this.handleOnsubmit}>
            <p className="js__errMsg" />
            {/* group inputs */}
            {/* capture email and phone number */}
            <div className="input--group">
            <input type="text" className="form-control form--control" placeholder="Email address" name="email" />
            <input type="password" className="form-control form--control" placeholder="Password" name="password" />
            </div>
            {/* submit button */}
            <div className="contact__submit">
            <button type="submit" className="btn btn--block bg--color--grey text--color--white">
            <span>Sign In</span>
            </button>
            
            </div>
            <div className="margin--top--10">
            <p className="text--primary">
            Don't have an account?
            <Link to="/signup" className="text--color--grey">Register</Link>
            </p>
            </div>
            </form>
          : <div className="text--center" style={{display: "flex"}}>
            <Loader 
              type="CradleLoader"
              color="#00BFFF"
              height="100"	
              width="100"
            />
          </div>  
        }
            </div>

          </div>
        </section>) 
        <ContactComponent />
      </div>
    );
  }
}

const mapStateToProps = ({ user }, ownProps) => ({
  ...ownProps,
  ...user
})
const mapDispatchToProps = (dispatch) => {
  return ({
    login: (payload, history) => dispatch(login(payload, history))
  });
}
export default connect(mapStateToProps , mapDispatchToProps)(withRouter(Login));

