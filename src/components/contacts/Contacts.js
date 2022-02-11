import React from "react";
import "./Contacts.scss";
const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
      <div className="left">
        <img
          src="assets/shake.svg"
          alt="contacts-img"
          className="contacts-img"
        />
      </div>
      <div className="right">
        <h2 className="form-title">Contact</h2>
        <form className="contacts-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="button" className="btn form-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
