import {Fragment} from "react";
import styles from "./home-page.module.css"
import ContainerFruitsCards from "@/src/front-end/organisms/container-fruits-cards";
import Home from "../../src/front-end/templates/home"

export default function HomePage() {
    return (
        <Fragment>
            <div className={styles.homePage}>
                <div className={styles.containerBox}>
                    <Home/>
                </div>
            </div>
        </Fragment>
    )
}