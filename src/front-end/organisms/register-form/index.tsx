"use client";

import {Fragment, useEffect, useState} from "react";
import styles from "./register-form.module.css";
import Image from "next/image";
import title from "../../../../public/assets/title.urban.farm.png"
import InputEmail from "@/src/front-end/molecules/input-email";
import InputPassword from "@/src/front-end/molecules/input-password";
import ButtonSigIn from "@/src/front-end/molecules/button-sig-in";
import TextField from "../../atoms/text-field";

export default function RegisterForm() {

    const [userEmail, setuserEmail] = useState<string>("")
    const [password, setpassword] = useState<string>("")
    const [passwordConfirm, setpasswordConfirm] = useState<string>()
    const [isSamePassword, setIsSamePassword] = useState<boolean>(false)

    const handlerEmailChange = (newEmail : string) => {
        setuserEmail(newEmail);
    }

    const handlerPasswordChange = (userPassword : string) => {
        setpassword(userPassword);
    }

    const confirmingPassword = (userPassword : string) => {
        setpasswordConfirm(userPassword)
    }

    useEffect(() => {
        if (passwordConfirm === password) {
            setIsSamePassword(true)
            console.log(isSamePassword)
        } else {
            setIsSamePassword(false)
            console.log(isSamePassword)
        }
    }, [password, passwordConfirm]);

    return (
        <Fragment>
            <div className={styles.containerForm}>
                    <div className={styles.title}>
                        <Image src={title} alt={"image"}/>
                    </div>
                    <div className={styles.containerInput}>
                        <InputEmail onEmailChange={handlerEmailChange}/>
                        <InputPassword onPasswordChange={handlerPasswordChange}/>
                        <InputPassword onPasswordChange={confirmingPassword}/>
                    </div>
                <ButtonSigIn/>
            </div>
        </Fragment>
    )
}