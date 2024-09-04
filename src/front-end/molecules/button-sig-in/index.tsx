import {Fragment} from "react";
import styles from "./button-sig-in.module.css"
import TextField from "@/src/front-end/atoms/text-field";


export default function ButtonSigIn () {
    return (
        <Fragment>
            <div className={styles.containerButton}>
                <TextField label={"Entrar"}/>
            </div>
        </Fragment>
    )
}