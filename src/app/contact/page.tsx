import { Metadata } from "next";
import styles from "./contact.module.scss";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Portfolio Front-end │ Contact",
};

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactField}>
        <div className={styles.contactBackground}>
          <div className={styles.contactTitle}>
            <span>CONTACT</span>
          </div>
          <div className={styles.contactText}>
            <span>Have a question or want to work together?</span>
          </div>
          <div className={styles.contactForm}>
            <form
              method="POST"
              action="sendmail/sendmail.php"
              id="form"
              className={styles.form}
            >
              <div className={clsx(styles.field, styles.nameField)}>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  className={styles._req}
                />
              </div>
              <div className={clsx(styles.field, styles.emailField)}>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className={clsx(styles._req, styles._email)}
                />
              </div>
              <div className={clsx(styles.field, styles.messageField)}>
                <textarea
                  className={styles.contact__inputArea}
                  name="message"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className={clsx(styles.field, styles.buttonField)}>
                <button className={clsx(styles.button, styles.buttonContact)} type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
