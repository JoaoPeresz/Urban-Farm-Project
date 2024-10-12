import {Fragment} from "react";
import styles from "./home.module.css"
import HeaderHome from "@/src/front-end/organisms/header-home";
import ContainerFruitsCards from "@/src/front-end/organisms/container-fruits-cards";
import BannerAgrocidade from "@/src/front-end/atoms/banner-agrocidade";
import WorkSection from "@/src/front-end/organisms/work-section";
import WorkWithUs from "@/src/front-end/organisms/work-with-us";
import FooterDefault from "@/src/front-end/organisms/footer-default";

type Props = {
    registerSupplier: () => void;
}

export default function Home ({registerSupplier} : Props) {
    return (
        <Fragment>
            <div className={styles.containerHome}>
                <HeaderHome statusNavigation={25}/>
                <ContainerFruitsCards/>
                <BannerAgrocidade/>
                <WorkSection/>
                <WorkWithUs registerSupplier={registerSupplier}/>
                <FooterDefault/>
            </div>
        </Fragment>
    )
}