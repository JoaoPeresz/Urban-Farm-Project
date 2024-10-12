"use client";

import {Fragment, useEffect, useState} from "react";
import styles from "./register-form.module.css";
import Image from "next/image";
import title from "../../../../public/assets/banner.png";
import InputEmail from "@/src/front-end/molecules/input-email";
import InputPassword from "@/src/front-end/molecules/input-password";
import ButtonSigIn from "@/src/front-end/molecules/button-sig-in";
import ErrorMessage from "@/src/front-end/atoms/error-message";

type Props = {
    handlerEmailChange: (newEmail: string) => void
    handlerPasswordChange: (userPassword: string) => void
    confirmingPassword: (userPassword: string) => void
    isSamePassword: boolean
    isConfirmPasswordDirty: boolean
}

export default function RegisterForm({
                                         handlerEmailChange,
                                         handlerPasswordChange,
                                         confirmingPassword,
                                         isSamePassword,
                                         isConfirmPasswordDirty
                                     }: Props) {

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
                    <div className={styles.containerErrorMessage}>
                        {isSamePassword || !isConfirmPasswordDirty ? (
                            ""
                        ) : (
                            <ErrorMessage/>
                        )}
                    </div>
                    <ButtonSigIn/>
                </div>
            </div>
        </Fragment>
    );
}
