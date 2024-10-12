import {Fragment} from "react";
import styles from "./footer-default.module.css"
import WhatsAppSection from "../../molecules/whats-app-section";
import EmailSection from "@/src/front-end/molecules/email-section";

type Props = {}

export default function FooterDefault({}: Props) {

    return (
        <Fragment>
            <footer className={styles.footer}>
                <div className={styles.containerBox}>
                    <h1 className={styles.title}>FAZENDA URBANA AGROCIDADE</h1>
                    <WhatsAppSection/>
                    <EmailSection/>
                    <div className={styles.borderBottom}/>
                    <h1 className={styles.copyright}>Copyright @2024, AgroCidade LTDA</h1>
                </div>
            </footer>
        </Fragment>
    )
}