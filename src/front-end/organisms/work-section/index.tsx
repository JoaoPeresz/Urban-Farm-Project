import {Fragment} from "react";
import styles from "./work-section.module.css"
import ProjectsCards from "@/src/front-end/molecules/projects-cards";
import agriculture from "../../../../public/assets/agriculture.webp"
import harvest  from "../../../../public/assets/harvest.webp"
import environmentalEducation from "../../../../public/assets/environmental-education.webp"
import composting from "../../../../public/assets/composting.webp"

export default function WorkSection() {
    return (
        <Fragment>
            <div className={styles.containerWorkSection}>
                <div className={styles.containerBox}>
                    <ProjectsCards
                        imageCard={agriculture}
                        title={""}
                        description={""}
                    />
                    <ProjectsCards
                        imageCard={harvest}
                        title={""}
                        description={""}
                    />
                    <ProjectsCards
                        imageCard={environmentalEducation}
                        title={""}
                        description={""}
                    />
                    <ProjectsCards
                        imageCard={composting}
                        title={""}
                        description={""}
                    />
                </div>
            </div>
        </Fragment>
    )
}