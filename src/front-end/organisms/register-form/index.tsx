import {Fragment} from "react";
import styles from "./register-form.module.css";
import TextField from "@/src/front-end/atoms/text-field";

export default function RegisterForm () {
    return (
        <Fragment>
            <div className={styles.containerForm}>
                <div className={styles.title}>
                    <TextField label={"Fazenda Urbana - Agrocidade"}/>
                </div>
            </div>
        </Fragment>
    )
}