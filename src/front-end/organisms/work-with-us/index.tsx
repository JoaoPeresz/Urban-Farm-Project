import {Fragment} from "react";
import styles from "./work-with-us.module.css"
import WorkWithUsButton from "@/src/front-end/molecules/work-with-us-button";

type Props = {
    registerSupplier: () => void;
}

export default function WorkWithUs({registerSupplier}: Props) {
    return (
        <Fragment>
            <div className={styles.containerBanner}>
                <h1 className={styles.title}>Trabalhe Conosco e Cultive um Futuro Mais Verde!</h1>
                <h2 className={styles.description}>
                    A AgroCidade está em busca de parceiros para fortalecer ainda mais nossa cadeia
                    de produção sustentável! Se você é um fornecedor que valoriza qualidade, inovação
                    e sustentabilidade, queremos trabalhar com você. Nossa empresa está comprometida
                    em construir relacionamentos de longo prazo que gerem benefícios para ambos os lados.
                    Junte-se a nós e contribua para um futuro mais verde e produtivo!
                </h2>
                <div className={styles.button}>
                    <WorkWithUsButton registerSupplier={registerSupplier}/>
                </div>
            </div>
        </Fragment>
    )
}