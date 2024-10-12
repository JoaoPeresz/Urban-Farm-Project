import { Fragment } from "react";
import styles from "./footer-about-us.module.css";

export default function FooterAboutUs() {
    return (
        <Fragment>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <h2 className={styles.companyName}>FAZENDA URBANA AGROCIDADE</h2>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <img src="/path/to/whatsapp-icon.png" alt="WhatsApp" className={styles.icon} />
                            <span>9999-9999</span>
                        </div>
                        <div className={styles.contactItem}>
                            <img src="/path/to/email-icon.png" alt="Email" className={styles.icon} />
                            <span>agrocidade@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <hr className={styles.divider} />
                    <p className={styles.copyright}>
                        Copyright ©2024, AgroCidade LTDA
                    </p>
                </div>
            </footer>
        </Fragment>
    );
}