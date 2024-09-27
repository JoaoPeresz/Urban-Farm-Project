import {Fragment} from "react";
import styles from "./header-home.module.css"
import Image from "next/image";
import logo from "../../../../public/assets/logo-agrocidade-2.png"
import SearchField from "@/src/front-end/molecules/search-field";

export default function HeaderHome() {
    return (
        <Fragment>
            <div className={styles.containerHeader}>
                <div className={styles.contaienerBox}>
                    <Image height={80} width={80} src={logo} alt={"logo"}/>
                    <SearchField/>
                </div>
            </div>
        </Fragment>
    )
}