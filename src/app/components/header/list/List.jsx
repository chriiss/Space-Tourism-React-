const List = ({styles, open, setOpen, navData, NavLink}) => {
    const closeEvent = () => {
        setOpen(false);
    }
    return (
        <ul className={`${styles.navbar_list} ${open ? styles.navbar_show : ""}`}>
            <button type="button" className={styles.navbar_close} onClick={closeEvent}><img src={navData.logo.close} alt={navData.logo.altClose} /></button>
            {navData.list.map((data, i) => {
                return (
                    <li key={i}><NavLink className={({ isActive }) => (isActive ? styles.navbar_list_active : "")} to={data.link}><span className={styles.bold}>{data.id}</span><span>{data.name}</span></NavLink></li>
                )
            })
            }
        </ul>

    )
}

export default List;