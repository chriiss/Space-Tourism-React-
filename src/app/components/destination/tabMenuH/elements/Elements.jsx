const Elements = ({styles, selectedPlanet}) => {
    return (
        <>
            <div>
                <h3 className={styles.uppercase}>{selectedPlanet.name}</h3>
            </div>
            <div>
                <p>{selectedPlanet.info}</p>
            </div>
            <div className={styles.bloc_planet_info}>
                <div>
                    <h5 className={styles.uppercase}>{selectedPlanet.distanceTitle}</h5>
                    <h6 className={styles.uppercase}>{selectedPlanet.distance}</h6>
                </div>
                <div>
                    <h5 className={styles.uppercase}>{selectedPlanet.travelTimeTitle}</h5>
                    <h6 className={styles.uppercase}>{selectedPlanet.time}</h6>
                </div>
            </div>
        </>
    )
}

export default Elements;