"use client"

import {Fragment} from "react";
import WhoWeAre from "@/src/front-end/templates/who-we-are";
import styles from "./who-we-are-page.module.css";

export default function WhoWeArePage() {

    return (
        <Fragment>
            <div className={styles.homePage}>
                <div className={styles.containerBox}>
                    <WhoWeAre/>
                </div>
            </div>
        </Fragment>
);
}