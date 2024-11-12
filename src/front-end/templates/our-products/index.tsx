import {Fragment} from "react";
import styles from "./our-products.module.css"
import HeaderHome from "@/src/front-end/organisms/header-home";
import BannerProducts from "@/src/front-end/molecules/banner-products";
import ProductsCards from "@/src/front-end/organisms/products-cards";
import FooterDefault from "@/src/front-end/organisms/footer-default";

export default function OurProducts() {
    return (
        <Fragment>
            <div className={styles.containerProducts}>
                <HeaderHome statusNavigation={75}/>
                <div className={styles.containerBox}>
                    <BannerProducts/>
                    {/*<ProductsCards/>*/}
                </div>
                    {/*<FooterDefault/>*/}
            </div>
        </Fragment>
    )
}