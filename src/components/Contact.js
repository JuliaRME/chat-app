import React from "react";

import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/men/48.jpg"
        alt="Anita"
      />
      <div>
        <h3 className="name">Anita Sutton</h3>
        <div className="status">
          <p>
            <span className="status-online"></span>online
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
