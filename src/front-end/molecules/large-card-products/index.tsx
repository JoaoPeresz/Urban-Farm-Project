import {Fragment} from "react";
import styles from "./large-card-products.module.css";
import Image from "next/image";

type Props = {
    productImage: any
    name: string
    category: string
    description: string
    handlerInfoProducts: () => void
}

export default function LargeCardProducts({   productImage,
                                              name,
                                              category,
                                              description,
                                              handlerInfoProducts
                                          }: Props) {

    return (
        <Fragment>
            <div onClick={handlerInfoProducts} className={styles.containerCard}>
                <div className={styles.containerBox}>
                    <Image className={styles.image} src={productImage} alt={"product-image"}/>
                    <div className={styles.description}>
                        <p>Produto: {name}</p>
                        <p>Categoria: {category}</p>
                        <p>Descrição: {description}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
