"use client"

import styles from "./our-products-page.module.css";
import {Fragment} from "react";
import OurProducts from "@/src/front-end/templates/our-products";

export default function OurProductsPage() {
    return (
        <Fragment>
            <div className={styles.homePage}>
                <div className={styles.containerBox}>
                    <OurProducts/>
                </div>
            </div>
        </Fragment>
    )
}
