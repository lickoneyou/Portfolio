import React from "react";
import styles from "./Contacts.module.css";
import Btn from "../../Btn/Btn";

const Contacts = ({ language }) => {
  return (
    <section
      className={styles.contacts}
      style={{ backgroundImage: "url(./assets/img/contacts.jpg)" }}
    >
      <div className={styles.contactsWrapper}>
        <h2>{language["contact-me"]}</h2>
        <input type="email" placeholder={language["e-mail"]} />
        <input type="tel" placeholder={language["phone"]} />
        <textarea placeholder={language["message"]}></textarea>
        <Btn title={language["send-message"]} bg={true} />
      </div>
    </section>
  );
};

export default Contacts;
