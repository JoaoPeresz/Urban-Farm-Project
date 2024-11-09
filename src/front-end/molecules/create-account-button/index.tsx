import {Fragment} from "react";
import styles from "./create-account-button.module.css"
import TextField from "../../atoms/text-field";
import { useRouter } from 'next/navigation';


type Props = {
    createAccount : () => void
}

export default function CreateAccountButton ({createAccount} : Props) {

    return (
        <Fragment>
            <div onClick={createAccount} className={styles.containerButton} >
                <TextField label={"Criar conta"}/>
            </div>
        </Fragment>
    )
}