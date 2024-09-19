import {Fragment} from "react";
import HeaderRegister from "@/src/front-end/organisms/header-register";
import RegisterForm from "@/src/front-end/organisms/register-form";
import {useRouter} from "next/navigation";
import styles from "./register.module.css";

export default function Register () {

    const router = useRouter();

    const goBackPage = () => {
        router.push("/");
    }

    return (
        <Fragment>
            <div className={styles.containerRegister}>
                <HeaderRegister goBackPage={goBackPage}/>
                <RegisterForm/>
            </div>
        </Fragment>
)
}