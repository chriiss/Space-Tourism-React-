const ChangeElements = ({styles, destinationData, selectedPlanet, setSelectedPlanet}) => {
    return (
        <div className={styles.bloc_planet_bloc_name}>
            {destinationData.planet.map((data, index) => {
                return (
                    <div className={`${styles.uppercase} ${styles.bloc_planet_bloc_name_name} ${selectedPlanet.img === data.img ? styles.bloc_planet_bloc_name_active_name : ""}`} key={index} onClick={() => setSelectedPlanet(data)}>{data.name}</div>
                )
            })}
        </div>
    )
}

export default ChangeElements;