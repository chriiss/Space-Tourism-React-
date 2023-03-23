import Carousel from "./carousel/Carousel"

const Crew = ({ useState, styles, dataJson }) => {
    const crewData = dataJson.crewComponent;
    const [selectedImg, setSelectedImg] = useState(crewData.carousel[0]);

    return (
        <section>
            <div className={styles.bg_crew}>
                <Carousel styles={styles} crewData={crewData} selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            </div>
        </section>
    )
}

export default Crew;