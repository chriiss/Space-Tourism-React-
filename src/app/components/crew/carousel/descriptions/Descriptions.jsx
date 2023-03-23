const Descriptions = ({styles, selectedImg}) => {
    return (
        <>
            <h1 className={styles.uppercase}><span>{selectedImg.number}</span>&nbsp;&nbsp;<span>{selectedImg.title}</span></h1>
            <h2 className={styles.uppercase}>{selectedImg.statut}</h2>
            <h3 className={styles.uppercase}>{selectedImg.name}</h3>
            <p>{selectedImg.text}</p>
        </>
    )
}

export default Descriptions;