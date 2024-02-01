import { Metadata } from "next";
import ContactForm from "@/components/form/Form";

import styles from "./contact.module.scss";
import clsx from "clsx";

export const metadata: Metadata = {  
  title: "Portfolio Front-end │ Contact",
};

export default function Contact() {
  
  return (
    <div className={clsx(styles.contact, "container")}>
      <div className={styles.contactField}>
        <div className={styles.contactBackground}>
          <div className={styles.contactTitle}>
            <span>CONTACT</span>
          </div>
          <div className={styles.contactText}>
            <span>Have a question or want to work together?</span>
          </div>
          <div className={styles.contactForm}>
          
            <ContactForm />
       
          </div>
        </div>
      </div>
    </div>
  );
}
