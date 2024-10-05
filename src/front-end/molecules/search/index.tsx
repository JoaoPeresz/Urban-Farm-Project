import { useState, Fragment } from "react";
import styles from "./search.module.css";

interface SearchProps {
    onSearchChange: (value: string) => void;
    valueSearch: string;
}

export default function Search({ onSearchChange, valueSearch }: SearchProps) {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(e.target.value);
    };

    return (
        <Fragment>
            <input
                className={styles.searchContainer}
                type="search"
                placeholder="Pesquise aqui"
                value={valueSearch}
                onChange={handleInputChange}
            />
        </Fragment>
    );
};
