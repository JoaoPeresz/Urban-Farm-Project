import {Fragment} from "react";
import styles from "./button-add-supliers.module.css"

type Props = {
    addingNewColaborator: () => void
}

export default function ButtonAddSupliers ({addingNewColaborator}: Props) {
    return (
        <Fragment>
            <div onClick={addingNewColaborator} className={styles.buttonAdd}>
                Adicionar
            </div>
        </Fragment>
    )
}