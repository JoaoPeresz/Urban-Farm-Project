import {Fragment} from "react";
import styles from "./search-field.module.css"
import MagnifyingGlassIcon from "@/src/front-end/atoms/magnifying-glass-icon";

export default function SearchField () {
    return (
        <Fragment>
            <MagnifyingGlassIcon/>
            <input  className={styles.containerBox}
                    placeholder={"Pesquise aqui"}
            />
        </Fragment>
    )
}