import {Fragment} from "react";
import styles from "./header-home.module.css"
import LogoAgroCidade from "@/src/front-end/atoms/logo-agro-cidade";
import RegisterButton from "../../molecules/create-account-button";
import CreateAccountButton from "../../molecules/create-account-button";

type Props = {
    createAccount : () => void
}

export default function HeaderLogin ({createAccount} : Props) {
    return (
        <Fragment>
            <div className={styles.containerHeaderHome}>
                <LogoAgroCidade/>
                <CreateAccountButton createAccount={createAccount}/>
            </div>
        </Fragment>
    )
}