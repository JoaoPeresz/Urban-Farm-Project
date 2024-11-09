import {Fragment} from "react";
import styles from "./register-button.module.css"

export default function RegisterButton () {
    return (
        <Fragment>
            <div className={styles.containerBox}>
                <div className={styles.containerButton}>
                    <h1>Cadastrar</h1>
                </div>
            </div>
        </Fragment>
    )
}