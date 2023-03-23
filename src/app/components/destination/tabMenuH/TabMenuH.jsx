import Elements from "./elements/Elements"
import ChangeElements from "./changeElements/ChangeElements"

const TabMenuH = ({ styles, destinationData, selectedPlanet, setSelectedPlanet }) => {
    return (
        <div className={styles.bg_destination_data_container}>
            <div className={styles.bg_destination_data_container_bloc}>
                <h1 className={styles.uppercase}><span>{selectedPlanet.number}</span>&nbsp;&nbsp;<span>{selectedPlanet.title}</span></h1>
                <img src={selectedPlanet.img} alt={selectedPlanet.name} />
            </div>
            <div className={styles.bloc_planet}>
                <ChangeElements styles={styles} destinationData={destinationData} selectedPlanet={selectedPlanet} setSelectedPlanet={setSelectedPlanet} />
                <Elements styles={styles} selectedPlanet={selectedPlanet} />
            </div>
        </div>
    )
}

export default TabMenuH;