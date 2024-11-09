import {Fragment} from "react";
import styles from "./input-field.module.css"

type Props = {
    placeholder: string,
    value: string
    onChange: any
}

export default function InputField ({placeholder, value, onChange} : Props) {
    return (
        <Fragment>
            <input className={styles.containerInput}
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}
            />
        </Fragment>
    )
}


