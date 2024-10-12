import {Fragment} from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styles from "./email-section.module.css"
import TextField from "../../atoms/text-field";
import Link from "next/link";

type Props = {}

export default function EmailSection({}: Props) {

    const companyEmail = "agrocidade@gmail.com"
    const email = `mailto:${companyEmail}`;

    return (
        <Fragment>
            <Link href={email} target="_blank" rel="noopener noreferrer" className={styles.container}>
                <div className={styles.email}>
                    <MailOutlineIcon fontSize={"large"}/>
                    <TextField label={companyEmail}/>
                </div>
            </Link>
        </Fragment>
    )
}