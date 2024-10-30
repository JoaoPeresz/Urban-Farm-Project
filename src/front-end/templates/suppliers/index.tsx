import {Fragment, useState} from "react";
import HeaderHome from "@/src/front-end/organisms/header-home";
import SuppliersList from "@/src/front-end/organisms/suppliers-list";
import styles from "./suppliers.module.css";
import FooterDefault from "@/src/front-end/organisms/footer-default";
import FormRegisterSupplier from "@/src/front-end/organisms/form-register-supplier";

export default function Suppliers() {

    const [formIsEnable, setFormIsEnable] = useState<boolean>(false)
    
    const addingNewColaborator = () => {
        setFormIsEnable(true);
    }

    const closingForm = () => {
        setFormIsEnable(false);
        console.log("formIsEnable");
    }

    return (
        <div className={styles.pageContainer}>
            <HeaderHome statusNavigation={100}/>
            <div className={styles.content}>
                <SuppliersList addingNewColaborator={addingNewColaborator}/>
            </div>
            {formIsEnable ? (
                <FormRegisterSupplier closeForm={closingForm}/>
            ) : (
                ""
            )}
            <FooterDefault/>
        </div>
    )
}
