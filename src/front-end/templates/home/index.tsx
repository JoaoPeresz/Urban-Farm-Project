import {Fragment} from "react";
import styles from "./home.module.css"
import HeaderHome from "@/src/front-end/organisms/header-home";

export default function Home () {
    return (
        <Fragment>
            <div className={styles.containerHome}>
                <HeaderHome/>
            </div>
        </Fragment>
    )
}