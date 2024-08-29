import {Fragment} from "react";
import styles from "./register-home.module.css"
import RegisterForm from "@/src/front-end/organisms/register-form";

export default function RegisterHome() {
    return (
        <Fragment>
            <div className={styles.containerHome}>
                {/*header*/}
                <RegisterForm/>
            </div>
        </Fragment>
    )
}