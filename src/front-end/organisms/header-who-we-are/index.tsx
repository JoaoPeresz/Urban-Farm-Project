"use client"
import { Fragment, useState } from "react";
import styles from "./header-who-we-are.module.css";
import LogoAgroCidade from "@/src/front-end/atoms/logo-agro-cidade";
import TextField from "@/src/front-end/atoms/text-field";
import Search from "@/src/front-end/molecules/search";

export default function HeaderWhoWeAre() {
    const [searchValue, setSearchValue] = useState<string>("");

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
    };

    return (
        <Fragment>
            <div className={styles.containerHeaderHome}>
                <LogoAgroCidade/>
                <div className={styles.nameCompany}>
                    <TextField
                        label={"AGROCIDADE"} title={true}
                    />
                </div>
                <Search
                    valueSearch={searchValue}
                    onSearchChange={handleSearchChange}
                />
            </div>
        </Fragment>
    );
}
