import {Fragment} from "react";
import styles from "./work-with-us-button.module.css"

type Props = {
    registerSupplier: () => void;
}

export default function WorkWithUsButton ({registerSupplier} : Props) {

    return (
        <Fragment>
            <div onClick={registerSupplier} className={styles.buttonContainer}>
                Cadastre-se
            </div>
        </Fragment>
    )
}