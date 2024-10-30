"use client"

import {Fragment} from "react";
import styles from "@/app/who-we-are-page/who-we-are-page.module.css";
import Suppliers from "@/src/front-end/templates/suppliers";

export default function SuppliersPage() {
    return (
        <Fragment>
            <div className={styles.homePage}>
                <div className={styles.containerBox}>
                    <Suppliers/>
                </div>
            </div>
        </Fragment>
    )
}