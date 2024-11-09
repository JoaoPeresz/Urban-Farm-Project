import {Fragment} from "react";
import styles from "./form-register-supplier.module.css"
import CloseIcon from '@mui/icons-material/Close';
import RegisterSuppliersTitle from "@/src/front-end/molecules/register-suppliers-title";
import InputField from "@/src/front-end/molecules/input-field";
import FormSection from "@/src/front-end/organisms/form-section";

type Props = {
    closeForm: () => void;
}

export default function FormRegisterSupplier({closeForm}: Props) {
    return (
        <Fragment>
            <div className={styles.overlay}/>
            <div className={styles.containerForm}>
                <RegisterSuppliersTitle/>
                <FormSection/>
                {/*<ButtonsSection/>*/}
            </div>
                <CloseIcon className={styles.closeIcon} onClick={closeForm}/>
        </Fragment>
    )
}