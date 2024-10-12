import {Fragment} from "react";
import styles from "./register-button.module.css"
import TextField from "../../atoms/text-field";
import { useRouter } from 'next/navigation';


type Props = {
    createAccount : () => void
}

export default function RegisterButton ({createAccount} : Props) {

    return (
        <Fragment>
            <div onClick={createAccount} className={styles.containerButton} >
                <TextField label={"Criar conta"}/>
            </div>
        </Fragment>
    )
}