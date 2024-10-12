import {Fragment} from "react";
import AboutUs from "@/src/front-end/organisms/about-us";
import AboutFarm from "@/src/front-end/organisms/about-farm";
import styles from "./who-we-are.module.css"
import HeaderHome from "@/src/front-end/organisms/header-home";
import FooterDefault from "@/src/front-end/organisms/footer-default";

export default function WhoWeAre() {

    return (
        <Fragment>
            <div>
                <HeaderHome statusNavigation={50}/>
                <div className={styles.page}>
                    <AboutUs/>
                    <AboutFarm/>
                </div>
                <FooterDefault/>
            </div>
        </Fragment>
    );
}
