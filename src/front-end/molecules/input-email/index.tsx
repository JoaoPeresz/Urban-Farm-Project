"use client";

import { Fragment, useState, ChangeEvent } from "react";
import styles from "./input-email.module.css";
import TextField from "@/src/front-end/atoms/text-field";

class EmailInputManager {
    email: string;

    constructor() {
        this.email = "";
    }

    setEmail(value: string) {
        this.email = value;
    }

    getEmail() {
        return this.email;
    }
}

type Props = {
    onEmailChange: (newEmail: string) => void;
}

export default function InputEmail({onEmailChange}:Props) {
    const [emailInputManager] = useState(new EmailInputManager());

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.currentTarget.value;
        emailInputManager.setEmail(newEmail)
        onEmailChange(newEmail)
    };

    return (
        <Fragment>
            <div className={styles.containerBox}>
                <TextField label={"Email"} />
                <input
                    className={styles.containerInput}
                    type="email"
                    onChange={handleInputChange}
                />
            </div>
        </Fragment>
    );
}
