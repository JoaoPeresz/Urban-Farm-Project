import {Fragment} from "react";
import styles from "./register-form.module.css";
import Image from "next/image";
import title from "@/public/assets/banner.png";
import InputEmail from "@/src/front-end/molecules/input-email";
import InputPassword from "@/src/front-end/molecules/input-password";
import TextField from "@/src/front-end/atoms/text-field";
import ButtonSigIn from "@/src/front-end/molecules/button-sig-in";

type Props = {
    handlerEmailChange : any
    handlerPasswordChange : any
}
export default function LoginForm ({handlerEmailChange, handlerPasswordChange} : Props) {

    return (
        <Fragment>
                <div className={styles.containerForm}>
                    <div className={styles.title}>
                        <Image src={title} alt={"image"}/>
                    </div>
                    <div className={styles.containerInput}>
                        <InputEmail onEmailChange={handlerEmailChange}/>
                        <InputPassword onPasswordChange={handlerPasswordChange}/>
                        <div className={styles.containerForgotPassword}>
                            <div className={styles.ForgotPassword}>
                                <TextField label={"Esqueceu a senha?"}/>
                            </div>
                        </div>
                    <ButtonSigIn/>
                    </div>
                </div>
        </Fragment>
    )
}
