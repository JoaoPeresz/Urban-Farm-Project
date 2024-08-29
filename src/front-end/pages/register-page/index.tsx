import styles from "./register-page.module.css"
import {Fragment} from "react";
import RegisterHome from "@/src/front-end/templates/register-home";

export default function RegisterPage () {
    return (
        <Fragment>
            <div className={styles.containerHome}>
                <RegisterHome/>
            </div>
        </Fragment>
    )
}