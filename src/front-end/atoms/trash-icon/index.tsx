import {Fragment} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {SvgIconProps} from "@mui/material/SvgIcon";
import styles from "./trash-icon.module.css";

type Props = {
    fontSize: SvgIconProps['fontSize'];
};

export default function TrashIcon({fontSize}: Props) {
    return (
        <Fragment>
            <div className={styles.trashIcon}>
                <DeleteIcon cursor={"pointer"} fontSize={fontSize}/>
                <p className={styles.text}>Apagar</p>
            </div>
        </Fragment>
    )
}