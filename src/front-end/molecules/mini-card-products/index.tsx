import {Fragment} from "react";
import styles from "./mini-card-products.module.css"
import Image from "next/image";
import TextField from "../../atoms/text-field"


type Props = {
    fruit: any
    nameFruit: string
}

export default function MiniCardProducts ({fruit, nameFruit} : Props) {
    return (
        <Fragment>
            <div className={styles.containerCards}>
                <Image className={styles.imageFruits} src={fruit} alt={"product image"}/>
                <TextField label={nameFruit}/>
            </div>
        </Fragment>
    )
}