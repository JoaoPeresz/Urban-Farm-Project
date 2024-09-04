import {Fragment} from "react";
import styles from "./header-home.module.css"
import LogoAgroCidade from "@/src/front-end/atoms/logo-agro-cidade";
import RegisterButton from "@/src/front-end/molecules/register-button";

export default function HeaderHome () {
    return (
        <Fragment>
            <div className={styles.containerHeaderHome}>
                <LogoAgroCidade/>
                <RegisterButton/>
            </div>
        </Fragment>
    )
}