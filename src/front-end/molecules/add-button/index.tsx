import {Fragment} from "react";
import styles from "./add-button.module.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function AddButton () {
    return (
        <Fragment>
            <div className={styles.containerButton}>
                <AddShoppingCartIcon className={styles.icon} />
                Adicionar
            </div>
        </Fragment>
    )
}