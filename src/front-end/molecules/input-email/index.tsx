import { Fragment, useState, ChangeEvent } from "react";
import styles from "./input-email.module.css";
import TextField from "@/src/front-end/atoms/text-field";

type Props = {
    onEmailChange: any;
}

export default function InputEmail({onEmailChange}:Props) {

    const [userEmail, setUserEmail] = useState<string>("")

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setUserEmail(email)
        onEmailChange(email)
    };

    return (
        <Fragment>
            <div className={styles.containerBox}>
                <TextField label={"Email"} />
                <input
                    className={styles.containerInput}
                    type="email"
                    value={userEmail}
                    onChange={handleInputChange}
                />
            </div>
        </Fragment>
    );
}
