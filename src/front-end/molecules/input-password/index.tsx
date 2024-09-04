import {Fragment} from "react";
import styles from "./input-password.module.css"
import TextField from "@/src/front-end/atoms/text-field";

type Props = {
    typeInputPassword : string,
}

export default function InputPassword ({typeInputPassword}:Props) {
    return (
        <Fragment>
            <div className={styles.containerBox}>
                <TextField label={"Senha"}/>
                <input  type={typeInputPassword}
                        className={styles.containerInput}
                />
            </div>
        </Fragment>
    )
}