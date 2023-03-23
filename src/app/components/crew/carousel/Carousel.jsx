import Descriptions from "./descriptions/Descriptions";
import ChangeElements from "./changeElements/ChangeElements";

const carousel = ({styles, crewData, selectedImg, setSelectedImg}) => {
    return (
        <div className={styles.bg_crew_data_container}>
            <div className={styles.bg_crew_data_container_bloc}>
                <Descriptions styles={styles} selectedImg={selectedImg} />
                <ChangeElements styles={styles} crewData={crewData} selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            </div>
            <div className={styles.bloc_img}>
                <img src={selectedImg.img} alt={selectedImg.name} />
            </div>
        </div>
    )
}

export default carousel;