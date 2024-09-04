import {Fragment} from "react";
import Image from "next/image";
import logoAgro from "../../../../public/assets/logo-agrocidade-2.png"
import styles from "./logo-agro-cidade.module.css"

export default function LogoAgroCidade () {
    return (
        <Fragment>
            <div className={styles.containerLogo}>
                <Image width={150} src={logoAgro} alt={'logo'}/>
            </div>
        </Fragment>
    )
}