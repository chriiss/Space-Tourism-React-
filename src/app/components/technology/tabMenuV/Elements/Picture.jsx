const Pictures = ({styles, selectedPicture}) => {
    return (
        <>
            <div className={styles.picture_portrait}>
                <img src={selectedPicture.portrait} alt={selectedPicture.name} />
            </div>
            <div className={styles.picture_landscape}>
                <img src={selectedPicture.landscape} alt={selectedPicture.name} />
            </div>
        </>
    )
}

export default Pictures;