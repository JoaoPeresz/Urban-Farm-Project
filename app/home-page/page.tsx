"use client"

import {Fragment} from "react";
import styles from "./home-page.module.css"
import Home from "../../src/front-end/templates/home"
import {useRouter} from "next/navigation";

export default function HomePage() {

    const router = useRouter();

    const RedirectRegisterSuplier = () => {
        router.push("/");
    }

    return (
        <Fragment>
            <div className={styles.homePage}>
                <div className={styles.containerBox}>
                    <Home registerSupplier={RedirectRegisterSuplier}
                    />
                </div>
            </div>
        </Fragment>
    )
}