import {Fragment} from "react";
import styles from "./container-fruits-cards.module.css"
import MiniCardProducts from "@/src/front-end/molecules/mini-card-products";
import strawberry from "@/public/products/strawberry.png";
import apple from "@/public/products/apple.png";
import banana from "@/public/products/banana.png";
import cabbage from "@/public/products/cabbage.png";
import eggplant from "@/public/products/eggplant.png";
import lettuce from "@/public/products/lettuce.png";

export default function ContainerFruitsCards() {
    return (
        <Fragment>
            <div className={styles.containerCards}>
                <div className={styles.containerBox}>
                    <MiniCardProducts fruit={strawberry} nameFruit={"Maça"}/>
                    <MiniCardProducts fruit={apple} nameFruit={"Banana"}/>
                    <MiniCardProducts fruit={banana} nameFruit={"morango"}/>
                    <MiniCardProducts fruit={eggplant} nameFruit={"Beringela"}/>
                    <MiniCardProducts fruit={cabbage} nameFruit={"Repolho"}/>
                    <MiniCardProducts fruit={lettuce} nameFruit={"Alface"}/>
                </div>
            </div>
        </Fragment>
    )
}