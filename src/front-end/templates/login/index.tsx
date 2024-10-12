import {Fragment, useState} from "react";
import styles from "./login-home.module.css"
import {useRouter} from "next/navigation";
import LoginForm from "../../organisms/login-form";
import HeaderLogin from "../../organisms/header-login";

export default function Login() {

    const [userEmail, setuserEmail] = useState<string>("")
    const [password, setpassword] = useState<string>("")
    const router = useRouter();

    const handlerEmailChange = (newEmail : any) => {
        setuserEmail(newEmail);
    }

    const handlerPasswordChange = (userPassword : any) => {
        setpassword(userPassword);
    }

    const createAccount = () => {
        router.push("/register-page");
    }

    return (
        <Fragment>
            <div className={styles.containerHome}>
                <HeaderLogin createAccount={createAccount}/>
                <LoginForm handlerEmailChange={handlerEmailChange} handlerPasswordChange={handlerPasswordChange}/>
            </div>
        </Fragment>
    )
}