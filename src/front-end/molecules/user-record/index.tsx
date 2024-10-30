import {Fragment} from "react";
import styles from "./user-record.module.css"
import UserIcon from "@/src/front-end/atoms/user-icon";
import EditIcon from "@/src/front-end/atoms/edit-icon";
import TrashIcon from "@/src/front-end/atoms/trash-icon";

export default function UserRecord () {
    return (
        <Fragment>
            <div className={styles.recordUser}>
                <UserIcon fontSize={"large"}/>
                <EditIcon fontSize={"large"}/>
                <TrashIcon fontSize={"large"}/>
            </div>
        </Fragment>
    )
}