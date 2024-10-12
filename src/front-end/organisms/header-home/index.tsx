import {Fragment} from "react";
import styles from "./header-home.module.css"
import Image from "next/image";
import logo from "../../../../public/assets/agrocidade-logo.png"
import SearchField from "@/src/front-end/molecules/search-field";
import NavigationBar from "@/src/front-end/molecules/navigation-bar";

type Props = {
    statusNavigation: number
}

export default function HeaderHome ({statusNavigation} : Props) {
    return (
        <Fragment>
            <div className={styles.containerHeader}>
                <div  className={styles.containerBox}>
                    <Image height={90} width={90} src={logo} alt={"logo"}/>
                    <SearchField/>
                    <NavigationBar statusNavigation={statusNavigation}/>
                </div>
            </div>
        </Fragment>
    )
}