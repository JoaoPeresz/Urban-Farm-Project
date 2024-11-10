"use client";

import {Fragment, useState} from "react";
import styles from "./supplier-register-page.module.css";
import ButtonAdmin from "@/src/front-end/molecules/button-admin";

type Props = {
    onClose: () => void,
    onRegisterSuccess: () => void
}
export default function SupplierRegister({onClose, onRegisterSuccess}: Props) {
    const [formData, setFormData] = useState({
        nome: "",
        empresa: "",
        telefone1: "",
        telefone2: "",
        cnpj: "",
        email: "",
        rua: "",
        numero: "",
        bairro: "",
        cep: "",
        complemento: "",
        estado: ""
    });

    const handleChange = (e : any) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleCancel = () => {
        console.log("Cadastro cancelado");
        onClose(); // Fecha a pop-up
    };

    const handleRegister = () => {

        const allFieldsFilled = Object.values(formData).every((value) => value !== "");

        if (allFieldsFilled) {
            console.log("Fornecedor cadastrado:", formData);
            onRegisterSuccess();
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };

    return (
        <Fragment>
            <div className={styles.popup}>
                <h2>
                    <span className={styles.icon}>👤+</span> Cadastro de Fornecedores
                </h2>
                <form className={styles.form}>
                    <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange}/>
                    <input type="text" name="empresa" placeholder="Empresa" value={formData.empresa}
                           onChange={handleChange}/>
                    <input type="tel" name="telefone1" placeholder="Telefone 1" value={formData.telefone1}
                           onChange={handleChange}/>
                    <input type="tel" name="telefone2" placeholder="Telefone 2" value={formData.telefone2}
                           onChange={handleChange}/>
                    <input type="text" name="cnpj" placeholder="CNPJ" value={formData.cnpj} onChange={handleChange}/>
                    <input type="email" name="email" placeholder="Email" value={formData.email}
                           onChange={handleChange}/>

                    <h3>Endereço</h3>
                    <div className={styles.addressGrid}>
                        <input type="text" name="rua" placeholder="Rua" value={formData.rua} onChange={handleChange}/>
                        <input type="text" name="numero" placeholder="Numero" value={formData.numero}
                               onChange={handleChange}/>
                        <input type="text" name="bairro" placeholder="Bairro" value={formData.bairro}
                               onChange={handleChange}/>
                        <input type="text" name="cep" placeholder="CEP" value={formData.cep} onChange={handleChange}/>
                        <input type="text" name="complemento" placeholder="Complemento" value={formData.complemento}
                               onChange={handleChange}/>
                        <input type="text" name="estado" placeholder="Estado" value={formData.estado}
                               onChange={handleChange}/>
                    </div>

                    <div className={styles.buttons}>
                        <ButtonAdmin onClick={handleCancel} label="Cancelar" variant="secondary"/>
                        <ButtonAdmin onClick={handleRegister} label="Cadastrar" variant="primary"/>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}