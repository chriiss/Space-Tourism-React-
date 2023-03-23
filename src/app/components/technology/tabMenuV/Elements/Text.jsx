const Text = ({styles, technologyData}) => {
    return (
        <div>
            <div>
                <h6 className={styles.uppercase}>{technologyData.subTitle.hSix}</h6>
                <h3 className={styles.uppercase}>{technologyData.subTitle.hThree}</h3>
            </div>
            <div>
                <p>{technologyData.text}</p>
            </div>
        </div>
    )
}

export default Text;