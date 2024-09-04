import {Fragment} from "react";
import styles from "./register-button.module.css"
import TextField from "../../atoms/text-field";

export default function RegisterButton () {
    return (
        <Fragment>
            <div className={styles.containerButton} >
                <TextField label={"Criar conta"}/>
            </div>
        </Fragment>
    )
}