import {Fragment, useState} from "react";
import styles from "./navigation-bar.module.css"
import {useRouter} from "next/navigation";
import {router} from "next/client";

type Props = {
    statusNavigation: number
}

export default function NavigationBar({statusNavigation}: Props) {

    const router = useRouter()
    const homePage = 25
    const WhoWeAre = 50
    const OurProducts = 75
    const suppliers = 100

     const SwitchToHomePage = () => {
        router.push("/home-page")
     }

     const SwitchToWhoWeArePage = () => {
        router.push("/who-we-are-page")
     }

     const SwitchToProducts = () => {
        router.push("/products")
     }

     const SwitchToSuppliers = () => {
        router.push("/register-page")
     }

    return (
        <Fragment>
            <section className={styles.containerNavigation}>
                <p onClick={SwitchToHomePage} className={`${statusNavigation === homePage ? styles.TextOnFocus : styles.TextOutFocus}`}>
                   Página inicial
                </p>
                <p onClick={SwitchToWhoWeArePage} className={`${statusNavigation === WhoWeAre ? styles.TextOnFocus : styles.TextOutFocus}`}>
                    Quem somos
                </p>
                <p onClick={SwitchToProducts} className={`${statusNavigation === OurProducts ? styles.TextOnFocus : styles.TextOutFocus}`}>
                    Nossos produtos
                </p>
                <p onClick={SwitchToSuppliers} className={`${statusNavigation === suppliers ? styles.TextOnFocus : styles.TextOutFocus}`}>
                    Fornecedores
                </p>
            </section>
        </Fragment>
    )
}