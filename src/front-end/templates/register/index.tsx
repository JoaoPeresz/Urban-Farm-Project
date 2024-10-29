import {Fragment} from "react";
import HeaderRegister from "@/src/front-end/organisms/header-register";
import RegisterForm from "@/src/front-end/organisms/register-form";
import {useRouter} from "next/navigation";
import styles from "./register.module.css";

type Props = {
    handlerEmailChange: (newEmail: string) => void,
    handlerPasswordChange: (userPassword: string) => void,
    confirmingPassword: (userPassword: string) => void,
    isSamePassword: boolean,
    isConfirmPasswordDirty: boolean,
    isFinished: boolean,
    formEmailValidator: boolean,
    formPasswordValidator: boolean,
    formConfirmPasswordValidator: boolean,
    userData: any
}

export default function Register({
                                     handlerEmailChange,
                                     handlerPasswordChange,
                                     confirmingPassword,
                                     isSamePassword,
                                     isConfirmPasswordDirty,
                                     isFinished,
                                     formEmailValidator,
                                     formPasswordValidator,
                                     formConfirmPasswordValidator,
                                     userData
                                 }: Props) {

    const router = useRouter();

    const goBackPage = () => {
        router.push("/");
    }

    return (
        <Fragment>
            <div className={styles.containerRegister}>
                <HeaderRegister goBackPage={goBackPage}/>
                <RegisterForm
                    handlerEmailChange={handlerEmailChange}
                    handlerPasswordChange={handlerPasswordChange}
                    confirmingPassword={confirmingPassword}
                    isSamePassword={isSamePassword}
                    isConfirmPasswordDirty={isConfirmPasswordDirty}
                />
            </div>
        </Fragment>
    )
}