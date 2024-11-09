import {Fragment, useEffect, useState} from "react";
import styles from "./form-section.module.css";
import InputField from "@/src/front-end/molecules/input-field";
import RegisterButton from "@/src/front-end/molecules/register-button";

export default function FormSection() {
    const [formData, setFormData] = useState({
        nome: "",
        nomeEmpresa: "",
        email: "",
        telefone: "",
        cnpj: "",
        cep: "",
        rua: "",
        bairro: "",
        cidade: "",
        estado: ""
    });

    useEffect(() => {
        console.log(formData.nome);
    }, [formData]);

    const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [field]: event.target.value
        });
    };

    return (
        <Fragment>
            <div className={styles.containerInputs}>
                <InputField placeholder="Nome" value={formData.nome} onChange={handleChange("nome")} />
                <InputField placeholder="Nome da empresa" value={formData.nomeEmpresa} onChange={handleChange("nomeEmpresa")} />
                <InputField placeholder="Email" value={formData.email} onChange={handleChange("email")} />
                <InputField placeholder="Telefone" value={formData.telefone} onChange={handleChange("telefone")} />
                <InputField placeholder="CNPJ" value={formData.cnpj} onChange={handleChange("cnpj")} />
            </div>
            <p className={styles.adress}>Endereço</p>
            <div className={styles.containerAdress}>
                <InputField placeholder="CEP" value={formData.cep} onChange={handleChange("cep")} />
                <InputField placeholder="Rua" value={formData.rua} onChange={handleChange("rua")} />
                <InputField placeholder="Bairro" value={formData.bairro} onChange={handleChange("bairro")} />
                <InputField placeholder="Cidade" value={formData.cidade} onChange={handleChange("cidade")} />
                <InputField placeholder="Estado" value={formData.estado} onChange={handleChange("estado")} />
            <RegisterButton/>
            </div>
        </Fragment>
    );
}
