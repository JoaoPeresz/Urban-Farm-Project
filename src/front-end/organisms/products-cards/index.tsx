import { Fragment } from "react";
import styles from "./products-cards.module.css";
import LargeCardProducts from "@/src/front-end/molecules/large-card-products";
import banana from "@/public/products/real-banana.jpeg";
import apple from "../../../../public/products/real-apple.jpeg";
import strawberry from "../../../../public/products/real-strawberry.jpeg";
import eggplant from "../../../../public/products/real-eggplant.jpeg";
import cabbage from "../../../../public/products/real-cabbage.jpeg";
import lettuce from "../../../../public/products/real-lettuce.jpg";
import {useRouter} from "next/navigation";

export default function ProductsCards() {

const router = useRouter()

    const handleSelectFruit = (fruit: string) => {
        localStorage.setItem("selectedFruit", fruit);
        router.push("/products/fruits");
    };

    return (
        <Fragment>
            <div className={styles.containerCards}>
                <div className={styles.containerBox}>
                    <LargeCardProducts
                        handlerInfoProducts={() => handleSelectFruit("Banana")}
                        productImage={banana}
                        name="Banana"
                        category="Frutas Tropicais"
                        description="Fruta rica em potássio e fibras, perfeita para lanches rápidos e smoothies. Clique para explorar variedades."
                    />
                    <LargeCardProducts
                        handlerInfoProducts={() => handleSelectFruit("Maçã")}
                        productImage={apple}
                        name="Maçã"
                        category="Frutas"
                        description="Fruta crocante e refrescante, rica em fibras e antioxidantes. Ideal para lanches ou em saladas. Clique para explorar variedades."
                    />
                    <LargeCardProducts
                        handlerInfoProducts={() => handleSelectFruit("Morango")}
                        productImage={strawberry}
                        name="Morango"
                        category="Frutas Vermelhas"
                        description="Fruta doce e suculenta, rica em vitamina C e antioxidantes. Perfeita para sobremesas e smoothies. Clique para explorar variedades."
                    />
                    <LargeCardProducts
                        handlerInfoProducts={() => handleSelectFruit("Berinjela")}
                        productImage={eggplant}
                        name="Beringela"
                        category="Legumes"
                        description="Legume versátil, rico em fibras e antioxidantes. Ideal para grelhar, assar ou incluir em pratos como ratatouille. Clique para explorar variedades."
                    />
                    <LargeCardProducts
                        handlerInfoProducts={() => handleSelectFruit("Repolho")}
                        productImage={cabbage}
                        name="Repolho"
                        category="Vegetais Crucíferos"
                        description="Vegetal crocante e nutritivo, rico em vitaminas e fibras. Ótimo para saladas, sopas e refogados. Clique para explorar variedades."
                    />
                    <LargeCardProducts
                        handlerInfoProducts={() => handleSelectFruit("Alface")}
                        productImage={lettuce}
                        name="Alface"
                        category="Vegetais Folhosos"
                        description="Folha fresca e crocante, rica em água e fibras. Perfeita para saladas e sanduíches. Clique para explorar variedades."
                    />
                </div>
            </div>
        </Fragment>
    );
}
