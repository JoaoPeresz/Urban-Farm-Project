import {Fragment} from "react";
import styles from "./search-field.module.css"
import MagnifyingGlassIcon from "@/src/front-end/atoms/magnifying-glass-icon";

export default function SearchField() {
    return (
        <Fragment>
            <div className={styles.containerNavigationBar}>
                <div className={styles.containerIcon}>
                    <MagnifyingGlassIcon size={"large"}/>
                </div>
                <input className={styles.input}
                       placeholder={"Pesquise aqui"}
                />
            </div>
        </Fragment>
    )
}