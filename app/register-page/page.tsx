"use client"
import {Fragment, useContext, useEffect, useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import Register from "@/src/front-end/templates/register";
import {isUserInDatabase, registerNewUser} from "@/api/users";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import {UserContext} from "@/user-context";

export default function Page() {
    const router = useRouter();
    const {userData, updateUser} = useContext(UserContext);
    const [isFinished, setIsFinished] = useState(false);
    const [formEmailValidator, setFormEmailValidator] = useState(false);
    const [formPasswordValidator, setFormPasswordValidator] = useState(false);
    const [formConfirmPasswordValidator, setFormConfirmPasswordValidator] = useState(false);
    const [userEmail, setuserEmail] = useState<string>("");
    const [password, setpassword] = useState<string>("");
    const [passwordConfirm, setpasswordConfirm] = useState<string>("");
    const [isSamePassword, setIsSamePassword] = useState<boolean>(true);
    const [isConfirmPasswordDirty, setIsConfirmPasswordDirty] = useState<boolean>(false);

    const completeRegistration = async () => {
        setIsFinished(true);
        if (validateUserEmail(formEmailValidator) || validatePassword(formPasswordValidator) || validatePasswordConfirm(formConfirmPasswordValidator) ) {

            const result = await registerNewUser(
                userData.email,
                userData.password,
                userData.confirmPassword,
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
                    await router.push('/')
                }, 4000)
            }
        } else {
            console.log('error')
        }
    }
    const handlerEmailChange = (newEmail: string) => {
        setuserEmail(newEmail);
    };

    const handlerPasswordChange = (userPassword: string) => {
        setpassword(userPassword);
    };

    const confirmingPassword = (userPassword: string) => {
        setpasswordConfirm(userPassword);
        setIsConfirmPasswordDirty(true);
    };

    useEffect(() => {
        if (password.length > 0 && isConfirmPasswordDirty) {
            if (passwordConfirm === password) {
                setIsSamePassword(true);
            } else {
                setIsSamePassword(false);
            }
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

        if (!userEmail && !password && passwordConfirm) {
            try {
                const result = await
                    isUserInDatabase(userData);
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

    const validateUserEmail = (email: any) => {
        return validateUserEmail(email);
    }

    const validatePassword = (password: any) => {
        return validatePassword(password)
    }

    const validatePasswordConfirm = (passwordConfirm: any) => {
        return validatePasswordConfirm(passwordConfirm)
    }

    return (
        <Fragment>
            <Register
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
    )
}