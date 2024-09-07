"use client"

import {Fragment} from "react";
import styles from "./register-page.module.css"
import HeaderRegister from "@/src/front-end/organisms/header-register";
import {useRouter} from "next/navigation";
import RegisterForm from "../../src/front-end/organisms/register-form";

export default function Page () {

    const router = useRouter();

    const goBackPage = () => {
router.push("/");
    }

    return (
        <Fragment>
            <div className={styles.containerRegister}>
                <HeaderRegister goBackPage={goBackPage}/>
                <RegisterForm/>
            </div>
        </Fragment>
    )
}