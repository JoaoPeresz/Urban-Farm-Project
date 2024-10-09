import {Fragment} from "react";
import Image from "next/image";
import logoAgro from "../../../../public/assets/agrocidade-logo.png"
import styles from "./logo-agro-cidade.module.css"

export default function LogoAgroCidade () {
    return (
        <Fragment>
            <div className={styles.containerLogo}>
                <Image width={0} height={0} src={logoAgro} alt={'logo'}/>
            </div>
        </Fragment>
    )
}