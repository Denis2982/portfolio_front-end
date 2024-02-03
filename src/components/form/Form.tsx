"use client";

import emailjs from "@emailjs/browser";
import styles from "./Form.module.scss";
import { MutableRefObject, useRef, useState } from "react";
import { HashLoader } from "react-spinners";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ContactForm = () => {
  const MySwal = withReactContent(Swal);

  const [spinner, setSpinner] = useState(false);
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSpinner(true);
    emailjs
      .sendForm(
        "service_9vs9qbd",
        "template_sqjc4yu",
        formRef.current,
        "pfg--HlZEFV2BUwVs"
      )
      .then(
        (result) => {
          setSpinner(false);
          MySwal.fire({
            icon: "success",
            iconColor: "green",
            title: "Send!",
            showConfirmButton: false,
            timer: 3000,
          });
        },
        (error) => {
          setSpinner(false);
          MySwal.fire({
            icon: "error",
            iconColor: "red",
            title: false,
            text: "Error send!",
            timer: 3000,
          });
        }
      );

    formRef.current.reset();
  };

  return (
    <form className={styles.form} onSubmit={sendEmail} ref={formRef}>
      <div className={styles.form__block}>
        <label htmlFor="name" className={styles.form__label}>
          Your Full Name
        </label>
        <input
          name="fullName"
          type="text"
          id="name"
          required
          className={styles.form__input}
          placeholder="Jacob Jonson"
        />
      </div>
      <div className={styles.form__block}>
        <label htmlFor="email" className={styles.form__label}>
          Email Address
        </label>
        <input
          name="email"
          type="email"
          id="email"
          required
          className={styles.form__input}
          placeholder="jacob@google.com"
        />
      </div>
      <div className={styles.form__block}>
        <label htmlFor="message" className={styles.form__label}>
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          className={styles.form__input}
          placeholder="Your Message"
        />
      </div>
      <button type="submit" className={styles.btn}>
        {spinner ? (
          <HashLoader color="rgb(3, 5, 58)" size={40} />
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
