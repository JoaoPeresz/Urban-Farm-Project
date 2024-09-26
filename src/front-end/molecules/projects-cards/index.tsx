import {Fragment} from "react";
import styles from "./projects-cards.module.css"
import Image from "next/image";

type Props = {
    imageCard: any
    title: string
    description: string
}

export default function ProjectsCards ({imageCard, title, description} : Props) {
    return (
        <Fragment>
            <div className={styles.containerProjects}>
                <Image src={imageCard} width={300}  height={300} alt={"image card"}/>
            </div>
        </Fragment>
    )
}