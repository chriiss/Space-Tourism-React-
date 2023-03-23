import TabMenuV from "./tabMenuV/TabMenuV"

const Technology = ({useState, styles, dataJson }) => {
    const technologyData = dataJson.technologyComponent;
    const [selectedPicture, setSelectedPicture] = useState(technologyData.picture[0]);


    return (
        <section>
            <div className={styles.bg_technology}>
               <TabMenuV styles={styles} technologyData={technologyData} selectedPicture={selectedPicture} setSelectedPicture={setSelectedPicture} />
            </div>
        </section>
    )
}

export default Technology;