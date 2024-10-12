import {ChangeEvent, Fragment, useEffect, useState} from "react";
import styles from "./input-password.module.css"
import TextField from "@/src/front-end/atoms/text-field";
import ToggleVisibility from "@/src/front-end/molecules/toggle-visibility";

type Props = {
    onPasswordChange :(userPassword: string) => void
}

export default function InputPassword({onPasswordChange}: Props) {

    const [passWord, setPassWord] = useState<string>("")
    const [passwordIsVisibile, setPasswordIsVisibile] = useState<boolean>()
    const [typePassword, setTypePassword] = useState<string>("")

    const handleInputChange = (event : ChangeEvent<HTMLInputElement>) => {
        let userPassWord = event.target.value
        setPassWord(userPassWord)
        onPasswordChange(userPassWord)
    }

    const toggleVisibilityPassword = (statePassword : boolean) => {
        setPasswordIsVisibile(statePassword)
    }
    useEffect(() => {
        setTypePassword( passwordIsVisibile ? ("text") : ("password"))
    }, [passwordIsVisibile]);

    return (

        <Fragment>
            <div className={styles.containerBox}>
                <TextField label={"Senha"}/>
                <div className={styles.containerInput}>
                    <div className={styles.viewIcon}>
                        <ToggleVisibility stateOffPassword={toggleVisibilityPassword}/>
                    </div>
                    <input type={typePassword}
                           className={styles.input}
                           value={passWord}
                           onChange={handleInputChange}
                    />
                </div>
            </div>
        </Fragment>
    )
}