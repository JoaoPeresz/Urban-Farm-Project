import {Fragment} from "react";
import styles from "./register-suppliers-title.module.css"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export default function RegisterSuppliersTitle () {
    return (
        <Fragment>
            <div className={styles.containerTitle}>
                <PersonAddAlt1Icon className={styles.iconUser}/>
                <h1 className={styles.titile}>Cadastro de Fornecedores</h1>
            </div>
        </Fragment>
    )
}