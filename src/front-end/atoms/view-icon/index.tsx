import {Fragment} from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from "./view-icon.module.css"

export default function ViewIcon () {
    return (
        <Fragment>
            <div className={styles.containerIcon}>
                <VisibilityIcon/>
            </div>
        </Fragment>
    )
}