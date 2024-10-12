import {Fragment} from "react";
import styles from "./about-farm.module.css";
import Image from "next/image";
import greenhouse from "../../../../public/assets/estufa-sobre-a-fazenda.png";
import iconGrowth from "../../../../public/assets/icon-crescimento.png";
import iconProducts from "../../../../public/assets/icon-produtos.png";

export default function AboutFarm() {
    return (
        <Fragment>
            <section className={styles.productsSection}>
                <div className={styles.imageContainer}>
                    <Image src={greenhouse} alt={"greenhouse-image"}/>
                </div>
                <div className={styles.textContainer}>
                    <h4 className={styles.subtitle}>AGRICULTURA MODERNA</h4>
                    <h1 className={styles.title}>Fornecendo alta qualidade Produtos</h1>

                    <div className={styles.item}>
                        <div className={styles.iconContainer}>
                            <Image src={iconGrowth} alt={"Icon Growth"}/>
                        </div>
                        <div className={styles.textItemContainer}>
                            <h2 className={styles.itemTitle}>Nosso crescimento agrícola</h2>
                            <p className={styles.itemDescription}>
                                Na Agrocidade, nosso crescimento agrícola alimenta a cidade, nutrindo comunidades
                                e cultivando um futuro mais sustentável.
                            </p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.iconContainer}>
                            <Image src={iconProducts} alt={"Icon Products"}/>
                        </div>
                        <div className={styles.textItemContainer}>
                            <h2 className={styles.itemTitle}>Fazendo alimentos saudáveis</h2>
                            <p className={styles.itemDescription}>
                                Fazemos alimentos saudáveis crescerem, cultivando bem-estar e nutrindo a cidade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
