import {Fragment} from "react";
import styles from "./projects-cards.module.css"
import Image from "next/image";
import TextField from "../../atoms/text-field";

type Props = {
    imageCard: any
    title: string
    description: string
}

export default function ProjectsCards ({imageCard, title, description} : Props) {
    return (
        <Fragment>
            <div className={styles.containerProjects}>
                <Image className={styles.image} src={imageCard} width={300}  height={300} alt={"image card"}/>
                <div className={styles.containerTitle}>
                    <TextField label={title}/>
                </div>
                <div className={styles.containerDescription}>
                    <TextField label={description}/>
                </div>
            </div>
        </Fragment>
    )
}