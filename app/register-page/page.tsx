"use client";
import { Fragment, useContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Register from "@/src/front-end/templates/register";
import { isUserInDatabase, registerNewUser } from "@/api/users";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { UserContext } from "@/user-context";

export default function Page() {
    const router = useRouter();
    const { userData, updateUser } = useContext(UserContext);
    const [isFinished, setIsFinished] = useState(false);
    const [formEmailValidator, setFormEmailValidator] = useState(false);
    const [formPasswordValidator, setFormPasswordValidator] = useState(false);
    const [formConfirmPasswordValidator, setFormConfirmPasswordValidator] = useState(false);
    const [userEmail, setUserEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [isSamePassword, setIsSamePassword] = useState<boolean>(true);
    const [isConfirmPasswordDirty, setIsConfirmPasswordDirty] = useState<boolean>(false);

    const completeRegistration = async () => {
        setIsFinished(true);
        if (validateUserEmail(userEmail) && validatePassword(password) && validatePasswordConfirm(passwordConfirm)) {
            const result = await registerNewUser(
                userEmail,
                password,
                passwordConfirm
            );
            if (result && result.success === false) {
                const errors = result.errors || [];
                if (errors.length > 0) {
                    errors.forEach((e: any) => {
                        console.error(e);
                        toast.error(e, {
                            position: "top-center",
                            autoClose: 4000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    });
                }
            } else {
                toast.success("Cadastro concluído com sucesso!", {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(async () => {
                    await router.push('/');
                }, 4000);
            }
        } else {
            console.log('error');
        }
    };

    const handlerEmailChange = (newEmail: string) => {
        setUserEmail(newEmail);
    };

    const handlerPasswordChange = (userPassword: string) => {
        setPassword(userPassword);
    };

    const confirmingPassword = (userPassword: string) => {
        setPasswordConfirm(userPassword);
        setIsConfirmPasswordDirty(true);
    };

    useEffect(() => {
        if (password.length > 0 && isConfirmPasswordDirty) {
            setIsSamePassword(passwordConfirm === password);
        }
    }, [password, passwordConfirm, isConfirmPasswordDirty]);

    const validateForms = async () => {
        setIsFinished(true);
        const isUserEmailValid = validateUserEmail(userEmail);
        const isPasswordValid = validatePassword(password);
        const isConfirmPasswordValid = validatePasswordConfirm(passwordConfirm);

        setFormEmailValidator(isUserEmailValid);
        setFormPasswordValidator(isPasswordValid);
        setFormConfirmPasswordValidator(isConfirmPasswordValid);

        if (isUserEmailValid && isPasswordValid && isConfirmPasswordValid) {
            try {
                const result = await isUserInDatabase(userData);
                if (result && result.success === false) {
                    const errors = [result.errors];
                    if (errors.length > 0) {
                        errors.forEach((e: any) => {
                            toast.error(e, {
                                position: "top-center",
                                autoClose: 4000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                        });
                    }
                } else {
                    router.push("/");
                }
            } catch (error: any) {
                console.log("Error:", error);
            }
        }
    };

    const validateUserEmail = (email: string) => {
        return email.includes('@') && email.includes('.');
    };

    const validatePassword = (password: string) => {
        return password.length > 0;
    };

    const validatePasswordConfirm = (passwordConfirm: string) => {
        return passwordConfirm === password;
    };

    return (
        <Fragment>
            <Register
                completeRegistration={completeRegistration}
                isFinished={isFinished}
                userData={userData}
                formEmailValidator={formEmailValidator}
                formPasswordValidator={formPasswordValidator}
                formConfirmPasswordValidator={formConfirmPasswordValidator}
                isSamePassword={isSamePassword}
                confirmingPassword={confirmingPassword}
                isConfirmPasswordDirty={isConfirmPasswordDirty}
                handlerEmailChange={handlerEmailChange}
                handlerPasswordChange={handlerPasswordChange}
            />
        </Fragment>
    );
}