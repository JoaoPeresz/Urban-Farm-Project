import {Fragment} from "react";
import styles from "./container-fruits-cards.module.css"
import MiniCardProducts from "@/src/front-end/molecules/mini-card-products";
import strawberry from "@/public/products/strawberry.png";
import apple from "@/public/products/apple.png";
import blueberry from "@/public/products/blueberry.png";
import cabbage from "@/public/products/cabbage.png";
import eggplant from "@/public/products/eggplant.png";
import carrot from "@/public/products/carrot.png";

export default function ContainerFruitsCards() {
    return (
        <Fragment>
            <div className={styles.containerCards}>
                <div className={styles.containerBox}>
                    <MiniCardProducts fruit={strawberry} nameFruit={"morango"}/>
                    <MiniCardProducts fruit={apple} nameFruit={"morango"}/>
                    <MiniCardProducts fruit={blueberry} nameFruit={"morango"}/>
                    <MiniCardProducts fruit={cabbage} nameFruit={"morango"}/>
                    <MiniCardProducts fruit={eggplant} nameFruit={"morango"}/>
                    <MiniCardProducts fruit={carrot} nameFruit={"morango"}/>
                </div>
            </div>
        </Fragment>
    )
}