const ChangeElements = ({styles, crewData, selectedImg, setSelectedImg}) => {
    return (
        <div className={styles.bullets}>
            {crewData.carousel.map((data, index) => {
                return (
                    <div key={index} className={selectedImg.img === data.img ? styles.active : ''} onClick={() => setSelectedImg(data)}></div>
                )
            })}
        </div>
    )
}

export default ChangeElements