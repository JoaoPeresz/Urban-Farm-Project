import {Fragment} from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from "./button-back.module.css"

type Props = {
    goBackPage : () => void
}

export default function ButtonBack ({goBackPage} : Props) {
    return (
        <Fragment>
            <div onClick={goBackPage} className={styles.containerButtonBack}>
                <ArrowBackIcon fontSize="large"/>
            </div>
        </Fragment>
    )
}