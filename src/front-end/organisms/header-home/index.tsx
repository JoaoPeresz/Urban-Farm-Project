import {Fragment} from "react";
import styles from "./header-home.module.css"
import LogoAgroCidade from "@/src/front-end/atoms/logo-agro-cidade";
import SearchField from "@/src/front-end/molecules/search-field";

export default function HeaderHome () {
    return (
        <Fragment>
            <div className={styles.containerHeader}>
                <LogoAgroCidade/>
                <SearchField/>
            </div>
        </Fragment>
    )
}