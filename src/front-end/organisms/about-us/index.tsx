import {Fragment} from "react";
import styles from "./about-us.module.css";
import Image from "next/image";
import photoFounder from "../../../../public/assets/Ellipse 13.png"

export default function AboutUs() {
    return (
        <Fragment>
            <section className={styles.aboutUsSection}>
                <h1 className={styles.title}>QUEM NÓS SOMOS</h1>
                <div className={styles.contentContainer}>
                    <div className={styles.imageContainer}>
                        <Image src={photoFounder} alt={"Photo Founder"}/>
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.quote}>
                            Bem-vindo à Agrocidade: Cultivando Conexões na Cidade
                        </p>
                        <p className={styles.description}>
                            Na Agrocidade, estamos empenhados em criar laços entre a cidade e o campo,
                            trazendo a beleza e a vitalidade da agricultura para o coração urbano. Fundada
                            em [insira o ano de fundação], a Agrocidade nasceu da paixão de um grupo de
                            urbanistas e agricultores pela harmonia entre o ambiente urbano e a produção
                            sustentável de alimentos.
                        </p>
                        <p className={styles.founderName}>
                            JOÃO PEDRO PERES
                        </p>
                        <p className={styles.founderRole}>
                            Fundador
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
