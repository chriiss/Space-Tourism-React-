import ChangePictures from "./changePictures/ChangePictures"
import Text from "./Elements/Text"
import Pictures from "./Elements/Picture"

const TabMenuV = ({ styles, technologyData, selectedPicture, setSelectedPicture }) => {
    return (
        <div className={styles.bg_technology_data_container}>
            <div className={styles.bg_technology_data_container_bloc}>
                <h1 className={styles.uppercase}><span>{technologyData.title.principalTitleNumber}</span>&nbsp;&nbsp;<span>{technologyData.title.principalTitle}</span></h1>
                <div className={styles.bg_technology_flex_elements}>
                    <ChangePictures styles={styles} technologyData={technologyData} selectedPicture={selectedPicture} setSelectedPicture={setSelectedPicture} />
                    <Text styles={styles} technologyData={technologyData} />
                </div>
            </div>
            <Pictures styles={styles} selectedPicture={selectedPicture} />
        </div>
    )
}

export default TabMenuV;