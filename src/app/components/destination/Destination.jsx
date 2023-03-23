import TabMenuH from "./tabMenuH/TabMenuH";


const Destination = ({ useState, styles, dataJson }) => {
    const destinationData = dataJson.destinationComponent;
    const [selectedPlanet, setSelectedPlanet] = useState(destinationData.planet[0]);

    return (
        <section>
            <div className={styles.bg_destination}>
                <TabMenuH styles={styles} destinationData={destinationData} selectedPlanet={selectedPlanet} setSelectedPlanet={setSelectedPlanet} />
            </div>
        </section>
    )
}

export default Destination;