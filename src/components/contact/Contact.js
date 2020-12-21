import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import './contact.css';

export const Success = () => {
    return (
      <Fragment>
        <div className="success">
          <h1>Success</h1>
          <p>Your information is submitted</p>
          <Link to="/home"><button>Go Home</button></Link>
        </div>
      </Fragment>
    )
  }

const ContactChildElement = (props) => {
    const [formElement, setFormElement] = useState("");
    const [formElementError, setFormElementError] = useState(false);

    useEffect(() => {
        if (formElement === "") {
            return;
        }
    
        if (formElement.match(props.rgx)) {
            props.validate(true);
            setFormElementError(false);
        } else {
            props.validate(false);
            setFormElementError(true);
        }
      }, [formElement, setFormElementError, props, props.rgx, props.validate]);

    return (
        <Fragment>
            <div className="child-container">
                <label className="child-label">
                    <h2>{props.children}</h2>
                </label>
                <input
                    className="child-input"
                    value={formElement}
                    placeholder={`${props.hint}`}
                    onChange={(e) => {
                        setFormElement(e.target.value);
                    }}
                    type={props.type}
                    name={props.name}
                    required="required"
                />
            </div>

            {formElementError === true ? (<span className="error" style={{ color: "#e50914" }}>{props.errorMessage}</span>) : (<span className="error"></span>)}
        </Fragment>
    )
}

export const Contact = () => {
    const [firstNameValid, setFirstNameValid] = useState(false);
    const [lastNameValid, setLastNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [mobileValid, setMobileValid] = useState(false);
    const [valid, setValid] = useState(false);

    const nameRgx = /^[a-zA-Z]+$/;
    const emailRgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const mobileRgx = /^\w{9,9}$/;

    const submit = (e) => {
        e.preventDefault();
        if (firstNameValid && lastNameValid && emailValid && mobileValid) {
            console.log("It works");
            setValid(true);
        } else {
            console.log("It does not works");
            setValid(false);
        }
    }

    const changeFirstNameValid = useCallback((valid) => {
        setFirstNameValid(valid);
    }, [setFirstNameValid]);

    const changeLastNameValid = useCallback((valid) => {
        setLastNameValid(valid);
    }, [setLastNameValid]);

    const changeEmailValid = useCallback((valid) => {
        setEmailValid(valid);
    }, [setEmailValid]);

    const changeMobileValid = useCallback((valid) => {
        setMobileValid(valid);
    }, [setMobileValid]);

    useEffect(() => {
        console.log("First Name - " + firstNameValid);
        console.log("Last Name - " + lastNameValid);
        console.log("Email - " + lastNameValid);
        console.log("Mobile - " + mobileValid);
    }, [firstNameValid, lastNameValid, emailValid, mobileValid])

    return (
        <Fragment>
            {!valid && <form onSubmit={submit}>
                <div className="contact">
                    <ContactChildElement
                        validate={changeFirstNameValid}
                        name="firstname"
                        type="text"
                        hint="Enter your first name"
                        rgx={/^[a-zA-Z]+$/}
                        errorMessage="It must only contain letters">
                        First Name
                    </ContactChildElement>

                    <ContactChildElement
                        validate={changeLastNameValid}
                        name="lastname"
                        type="text"
                        hint="Enter your last name"
                        rgx={nameRgx}
                        errorMessage="It must only contain letters">
                        Last Name
                    </ContactChildElement>

                    <ContactChildElement
                        validate={changeEmailValid}
                        name="email"
                        type="email"
                        hint="Enter your email"
                        rgx={emailRgx}
                        errorMessage="It must be valid email address">
                            E-Mail
                    </ContactChildElement>

                    <ContactChildElement
                        validate={changeMobileValid}
                        name="mobile"
                        type="number"
                        hint="Enter your mobile number"
                        rgx={mobileRgx}
                        errorMessage="It must be valid mobile number">
                            Mobile
                    </ContactChildElement>

                    <label className="child-label"><h2>Subject</h2></label>
                    <input className="child-input" id="subject" name="subject" placeholder="Enter your subject" required="required" />

                    <label className="child-label"><h2>Message</h2></label>
                    <textarea className="message" id="message" name="message" rows="4" cols="50" placeholder="Enter your message" required="required" />
                    <button className="submit-button">Submit</button>
                </div>
            </form>}
            {valid && <Success />}
            <Footer />
        </Fragment>
    )
}

export default Contact;