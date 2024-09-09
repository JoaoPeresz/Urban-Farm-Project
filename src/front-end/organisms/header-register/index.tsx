import { Fragment } from "react";
import styles from "./header-register.module.css";
import ButtonBack from "@/src/front-end/atoms/button-back";
import LogoAgroCidade from "@/src/front-end/atoms/logo-agro-cidade";

type Props = {
    goBackPage : () => void;
}

export default function HeaderRegister({goBackPage} : Props) {
    return (
        <Fragment>
            <div className={styles.headerContainer}>
                <ButtonBack goBackPage={goBackPage}/>
                <div className={styles.headerContent}>
                    <div className={styles.logoContainer}>
                        <LogoAgroCidade />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
