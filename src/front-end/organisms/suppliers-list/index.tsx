import {Fragment} from "react";
import styles from "./suppliers-list.module.css"
import UserRecord from "@/src/front-end/molecules/user-record";
import ButtonAddSupliers from "@/src/front-end/molecules/button-add-supliers";

type Props = {
    addingNewColaborator: () => void
}

export default function SuppliersList ({addingNewColaborator} : Props) {
    return (
        <Fragment>
            <div className={styles.containerList}>
                <div className={styles.containerButton}>
                    <ButtonAddSupliers addingNewColaborator={addingNewColaborator}/>
                </div>
                {/*<UserRecord/>*/}
            </div>
        </Fragment>
    )
}