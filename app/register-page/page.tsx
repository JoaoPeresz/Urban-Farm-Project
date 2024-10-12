"use client"

import {Fragment, useEffect, useState} from "react";
import Register from "@/src/front-end/templates/register";

export default function Page() {

    const [userEmail, setuserEmail] = useState<string>("");
    const [password, setpassword] = useState<string>("");
    const [passwordConfirm, setpasswordConfirm] = useState<string>("");
    const [isSamePassword, setIsSamePassword] = useState<boolean>(true); // Inicializamos como `true` para não exibir o erro no início
    const [isConfirmPasswordDirty, setIsConfirmPasswordDirty] = useState<boolean>(false); // Verifica se o usuário já digitou algo no campo de confirmação

    const handlerEmailChange = (newEmail: string) => {
        setuserEmail(newEmail);
    };

    const handlerPasswordChange = (userPassword: string) => {
        setpassword(userPassword);
    };

    const confirmingPassword = (userPassword: string) => {
        setpasswordConfirm(userPassword);
        setIsConfirmPasswordDirty(true);
    };

    useEffect(() => {
        if (password.length > 0 && isConfirmPasswordDirty) {
            if (passwordConfirm === password) {
                setIsSamePassword(true);
            } else {
                setIsSamePassword(false);
            }
        }
    }, [password, passwordConfirm, isConfirmPasswordDirty]);


    return (
        <Fragment>
            <Register isSamePassword={isSamePassword}
                      confirmingPassword={confirmingPassword}
                      isConfirmPasswordDirty={isConfirmPasswordDirty}
                      handlerEmailChange={handlerEmailChange}
                      handlerPasswordChange={handlerPasswordChange}
            />
        </Fragment>
    )
}