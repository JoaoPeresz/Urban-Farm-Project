import {Fragment} from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from "./whats-app-section.module.css"
import TextField from "../../atoms/text-field";
import Link from "next/link";

type Props = {}

export default function WhatsAppSection({}: Props) {

    const phoneNumber = "12988378166"
    const url = `https://wa.me/${phoneNumber}`;

    return (
        <Fragment>
            <Link href={url} target="_blank" rel="noopener noreferrer" className={styles.container}>
                <div className={styles.whatsApp}>
                    <WhatsAppIcon fontSize={"large"}/>
                    <TextField label={phoneNumber}/>
                </div>
            </Link>
        </Fragment>
    )
}