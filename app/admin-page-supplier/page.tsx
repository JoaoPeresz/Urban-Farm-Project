"use client";

import { Fragment, useState } from "react";
import styles from "./admin-page.module.css";
import HeaderAdmin from "@/src/front-end/organisms/header-admin";
import FooterDefault from "@/src/front-end/organisms/footer-default";
import SupplierCard from "@/src/front-end/organisms/supplier-card";
import ButtonAdmin from "@/src/front-end/molecules/button-admin";
import SupplierRegister from "@/src/front-end/organisms/supplier-register-page/page";

export default function AdminPageSupplier() {
    const [showPopup, setShowPopup] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleAddSupplier = () => {
        setShowPopup(true);
        setSuccessMessage("");
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleRegisterSuccess = () => {
        setShowPopup(false);
        setSuccessMessage("Fornecedor cadastrado com sucesso!");
    };

    const suppliers = [
        { id: "----", cnpj: "123456789--" },
        { id: "----", cnpj: "123456789--" },
        { id: "----", cnpj: "123456789--" },
        { id: "----", cnpj: "123456789--" },
        { id: "----", cnpj: "123456789--" },
        { id: "----", cnpj: "123456789--" }
    ];

    return (
        <Fragment>
            <div className={styles.adminPage}>
                <HeaderAdmin/>
                <div className={styles.containerBox}>
                    <h2>Lista e Cadastro de Fornecedores</h2>
                    <ButtonAdmin onClick={handleAddSupplier} label="Adicionar" />

                    {successMessage && (
                        <p className={styles.successMessage}>{successMessage}</p>
                    )}

                    <div className={styles.supplierList}>
                        {suppliers.map((supplier, index) => (
                            <SupplierCard key={index} supplier={supplier} />
                        ))}
                    </div>
                </div>
                <FooterDefault />

                {/* Condicional para exibir a pop-up */}
                {showPopup && (
                    <div className={styles.popupOverlay}>
                        <SupplierRegister onClose={handleClosePopup} onRegisterSuccess={handleRegisterSuccess} />
                    </div>
                )}
            </div>
        </Fragment>
    );
}
