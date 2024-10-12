import {Fragment} from "react";
import styles from "./work-section.module.css"
import ProjectsCards from "@/src/front-end/molecules/projects-cards";
import agriculture from "../../../../public/assets/agriculture.webp"
import harvest  from "../../../../public/assets/harvest.webp"
import environmentalEducation from "../../../../public/assets/environmental-education.webp"
import composting from "../../../../public/assets/composting.webp"
import TextField from "../../atoms/text-field";

export default function WorkSection() {
    return (
        <Fragment>
            <div className={styles.containerWorkSection}>
                <div className={styles.text}>
                    <TextField label={"Ultimos trabalhos realizados"}/>
                </div>
                <div className={styles.title}>
                    <TextField label={"Explore nossos projetos"}/>
                </div>
                <div className={styles.containerBox}>
                    <ProjectsCards
                        imageCard={agriculture}
                        title={"Agricultura"}
                        description={"Práticas sustentáveis para cultivo em ambientes urbanos."}
                    />
                    <ProjectsCards
                        imageCard={harvest}
                        title={"Colheita"}
                        description={"Melhores modos para colheita que garantem a frescura dos produtos."}
                    />
                    <ProjectsCards
                        imageCard={environmentalEducation}
                        title={"Compostagem"}
                        description={"Transformação de resíduos orgânicos em adubo natural."}
                    />
                    <ProjectsCards
                        imageCard={composting}
                        title={"Educação Ambiental"}
                        description={"Programas de conscientização sobre a importância da agricultura urbana."}
                    />
                </div>
            </div>
        </Fragment>
    )
}