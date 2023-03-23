const Home = ({ styles, dataJson }) => {

    const homeData = dataJson.homeComponent;

    return(
        <section>
            <div className={styles.bg_home}>
                <div className={styles.bg_home_data_home_only}>
                    <h1 className={styles.uppercase}>{homeData.title.principalTitle}</h1>
                    <h2 className={styles.uppercase}>{homeData.title.subTitle}</h2>
                    <p>{homeData.text}</p>
                </div>
                <div className={styles.bg_home_data_home_only}>
                    <p className={styles.uppercase}>{homeData.explore}</p>
                </div>
            </div>
        </section>
    )
}

export default Home;