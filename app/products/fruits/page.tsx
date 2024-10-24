"use client";

import { Fragment, useEffect, useState } from "react";
import productsData from "../../../products.json";
import { Product } from "@/src/types/products-types";
import FoodList from "@/src/front-end/templates/food-list";
import styles from "./fruits.module.css";

export default function Fruits() {

    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        setData(productsData);
    }, []);

    return (
        <Fragment>
            <div className={styles.homePage}>
                <div className={styles.containerBox}>
                    <FoodList data={data} />
                </div>
            </div>
        </Fragment>
    );
}
