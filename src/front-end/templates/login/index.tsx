import { Fragment, useState } from "react";
import styles from "./login-home.module.css";
import { useRouter } from "next/navigation";
import LoginForm from "../../organisms/login-form";
import HeaderLogin from "../../organisms/header-login";
import {findUser} from "@/api/users";

export default function Login() {
    const [userEmail, setUserEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [userData, setUserData] = useState<any>(null);
    const router = useRouter();

    const handleEmailChange = (newEmail: string) => {
        setUserEmail(newEmail);
    };

    const handlePasswordChange = (userPassword: string) => {
        setPassword(userPassword);
    };

    const handleLogin = async () => {
        try {
            const token = `Bearer `;

            const user = await findUser(token);
            setUserData(user);

            router.push("/home-page");
        } catch (error) {
            setError("Failed to authenticate user");
        }
    };

    const createAccount = () => {
        router.push("/register-page");
    };

    return (
        <Fragment>
            <div className={styles.containerHome}>
                <HeaderLogin createAccount={createAccount} />
                <LoginForm
                    handlerEmailChange={handleEmailChange}
                    handlerPasswordChange={handlePasswordChange}
                />
                <button onClick={handleLogin}>Login</button>
                {userData && <p className={styles.userInfo}>Welcome, {userData.email}</p>}
            </div>
        </Fragment>
    );
}