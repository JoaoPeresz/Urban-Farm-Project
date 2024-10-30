import {Fragment} from "react";
// import {FaRegEdit} from "react-icons/fa";
import EditNoteIcon from '@mui/icons-material/EditNote';
import styles from "./edit-icon.module.css"
import {SvgIconProps} from "@mui/material/SvgIcon";

type Props = {
    fontSize: SvgIconProps['fontSize'];
};

export default function EditIcon({fontSize}: Props) {
    return (
        <Fragment>
            <div className={styles.editIcon}>
                <EditNoteIcon cursor={"pointer"} fontSize={fontSize}/>
                <p className={styles.text}>Editar</p>
            </div>
        </Fragment>
    )
}