"use client"

import {Fragment} from "react";
import styles from "./register-page.module.css"
import HeaderRegister from "@/src/front-end/organisms/header-register";
import {useRouter} from "next/navigation";
import RegisterForm from "../../src/front-end/organisms/register-form";
import Register from "@/src/front-end/templates/register";

export default function Page () {

    return (
        <Fragment>
                <Register/>
        </Fragment>
    )
}