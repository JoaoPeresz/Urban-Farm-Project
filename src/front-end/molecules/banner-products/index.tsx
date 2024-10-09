import {Fragment} from "react";
import styles from "./banner-products.module.css"
import Image from "next/image";
import greenCircle from "../../../../public/assets/circle-green.png"

export default function BannerProducts() {
    return (
        <Fragment>
            <div className={styles.containerBanner}>
                <p className={styles.title}>
                    Nossos produtos
                </p>
                <Image className={styles.greenCircle} src={greenCircle} alt={"green-circle"}/>
            </div>
        </Fragment>
    )
}