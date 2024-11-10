import {Fragment} from "react";
import styles from "./header-admin.module.css"
import Image from "next/image";
import logo from "../../../../public/assets/agrocidade-logo.png"
import ButtonBack from "@/src/front-end/atoms/button-back";
import {useRouter} from "next/navigation";

export default function HeaderAdmin () {
    const router = useRouter();
    const goBackPage = () => {
        router.back();
    }
    return (
        <Fragment>
            <div className={styles.containerHeader}>
                <div  className={styles.containerBox}>
                    <ButtonBack goBackPage={goBackPage}/>
                    <Image height={90} width={90} src={logo} alt={"logo"}/>
                </div>
            </div>
        </Fragment>
    )
}