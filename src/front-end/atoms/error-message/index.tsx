import {Fragment} from "react";
import TextField from "../../atoms/text-field";
import styles from "./error-message.module.css"

export default function ErrorMessage () {
    return (
        <Fragment>
            <div className={styles.containerError}>
                <TextField label={"Senhas não compatíveis"}/>
            </div>
        </Fragment>
    )
}