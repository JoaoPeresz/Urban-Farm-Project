import { Fragment } from "react";
import Image from "next/image";
import styles from "./banner-agrocidade.module.css";
import banner from "../../../../public/assets/Rectangle 5.png";

export default function BannerAgrocidade() {
    return (
        <Fragment>
            <div className={styles.containerBanner}>
                <Image
                    src={banner}
                    alt={"banner"}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
        </Fragment>
    );
}
