import {Fragment} from "react";
import styles from "./button-sig-in.module.css"
import TextField from "@/src/front-end/atoms/text-field";


interface ButtonSigInProps {
    completeRegistration?: (() => Promise<void>) | undefined
}

export default function ButtonSigInRegister({completeRegistration}: ButtonSigInProps) {
    return (
        <Fragment>
            <div className={styles.containerButton} onClick={completeRegistration}>
                <TextField label={"Entrar"}/>
            </div>
        </Fragment>
    )
}