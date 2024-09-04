"use client";

import {Fragment, useState} from "react";
import styles from "./register-form.module.css";
import Image from "next/image";
import title from "../../../../public/assets/title.urban.farm.png"
import InputEmail from "@/src/front-end/molecules/input-email";
import InputPassword from "@/src/front-end/molecules/input-password";
import ButtonSigIn from "@/src/front-end/molecules/button-sig-in";
import TextField from "../../atoms/text-field";

export default function RegisterForm() {

    const [userEmail, setuserEmail] = useState("")

    const handlerEmailChange = (newEmail : string) => {
        setuserEmail(newEmail);
        console.log("email renderizado no pai:", userEmail);
    }

    return (
        <Fragment>
            <div className={styles.containerForm}>
                    <div className={styles.title}>
                        <Image src={title} alt={"image"}/>
                    </div>
                    <div className={styles.containerInput}>
                        <InputEmail onEmailChange={handlerEmailChange}/>
                        <InputPassword typeInputPassword={"password"}/>
                        <div className={styles.containerForgotPassword}>
                            <div className={styles.ForgotPassword}>
                                <TextField label={"Esqueceu a senha?"}/>
                            </div>
                        </div>
                    </div>
                <ButtonSigIn/>
            </div>
        </Fragment>
    )
}