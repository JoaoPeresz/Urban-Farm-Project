import { Fragment } from "react";
import Image from "next/image";
import styles from "./product-card-template.module.css";
import AddButton from "@/src/front-end/molecules/add-button";

type Props = {
    cards: {
        id: number;
        image: string;
        name: string;
        price: string;
        weight: string;
    };
};

export default function ProductCardTemplate({ cards }: Props) {

    return (
        <Fragment>
            <div className={styles.containerProducts}>
                <div className={styles.containerCard}>
                    <div className={styles.containerBox}>
                        <Image
                            height={150}
                            width={200}
                            src={cards.image}
                            alt={cards.name}
                        />
                        <h3 className={styles.name}>{cards.name}</h3>
                        <p className={styles.price}>Preço: {cards.price}</p>
                        <p className={styles.quantity}>Quantia: {cards.weight}</p>
                    </div>
                    <AddButton />
                </div>
            </div>
        </Fragment>
    );
}
