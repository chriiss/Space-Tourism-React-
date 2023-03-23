const ChangePictures = ({styles, technologyData, selectedPicture, setSelectedPicture}) => {
    return (
        <div>
            {technologyData.picture.map((data, index) => {
                return (
                    <div key={index} className={selectedPicture.name === data.name ? styles.active : ''} onClick={() => setSelectedPicture(data)}>{data.id}</div>
                )
            })}
        </div>
    )
}

export default ChangePictures