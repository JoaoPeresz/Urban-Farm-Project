import Image from "next/image";
import styles from "./food-list.module.css";
import ProductCardTemplate from "@/src/front-end/molecules/product-card-template";
import FooterDefault from "@/src/front-end/organisms/footer-default";
import HeaderHome from "@/src/front-end/organisms/header-home";
import {Fragment, useEffect, useState} from "react";

type Product = {
    id: number;
    image: string;
    name: string;
    price: string;
    weight: string;
};

type Category = {
    category: string;
    type: Product[];
};

type Props = {
    data: Category[];
};

export default function FoodList({data}: Props) {

    const thisFruit = "Repolho";
    const [categories, setCategories] = useState<{ [key: string]: Product[] }>({});

    useEffect(() => {
        const product: { [key: string]: Product[] } = {};

        data.forEach(category => {
            product[category.category] = category.type;
        });
        setCategories(product);
    }, [data]);

    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.pageContainer}>
                        <HeaderHome statusNavigation={100}/>
                    <div className={styles.content}>
                        {categories[thisFruit] && (
                            <div className={styles.containerCards}>
                                {categories[thisFruit].map((product) => (
                                    <ProductCardTemplate
                                        cards={product}
                                        key={product.id}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <FooterDefault/>
                </div>
            </div>
        </Fragment>
    );
}
