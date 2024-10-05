import {Fragment} from "react";
import HeaderWhoWeAre from "@/src/front-end/organisms/header-who-we-are";
import AboutUs from "@/src/front-end/organisms/about-us";
import AboutFarm from "@/src/front-end/organisms/about-farm";
import styles from "./who-we-are.module.css"
import FooterAboutUs from "@/src/front-end/organisms/footer-about-us";

export default function WhoWeAre() {

    return (
        <Fragment>
            <div>
                <HeaderWhoWeAre/>
                <div className={styles.page}>
                    <AboutUs/>
                    <AboutFarm/>
                </div>
                <FooterAboutUs/>
            </div>
        </Fragment>
    );
}
