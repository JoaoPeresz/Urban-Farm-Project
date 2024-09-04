import {Fragment} from "react";
import styles from "./register-home.module.css"
import RegisterForm from "@/src/front-end/organisms/register-form";
import HeaderHome from "@/src/front-end/molecules/header-home";

export default function RegisterHome() {
    return (
        <Fragment>
            <div className={styles.containerHome}>
                <HeaderHome/>
                <RegisterForm/>
            </div>
        </Fragment>
    )
}