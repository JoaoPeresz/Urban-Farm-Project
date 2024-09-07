"use client"

import {Fragment} from "react";
import styles from "./header-home.module.css"
import LogoAgroCidade from "@/src/front-end/atoms/logo-agro-cidade";
import RegisterButton from "@/src/front-end/molecules/register-button";

type Props = {
    createAccount : () => void
}

export default function HeaderHome ({createAccount} : Props) {
    return (
        <Fragment>
            <div className={styles.containerHeaderHome}>
                <LogoAgroCidade/>
                <RegisterButton createAccount={createAccount}/>
            </div>
        </Fragment>
    )
}