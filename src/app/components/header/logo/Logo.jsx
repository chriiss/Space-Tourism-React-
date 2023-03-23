const Logo = ({open, setOpen, styles, navData}) => {
    const menuEvent = () => {
        setOpen(!open);
    }
    return (
        <div className={styles.navbar_logo}>
            <img src={navData.logo.path} alt={navData.logo.altLogo} />
            <span className={styles.line}></span>
            <button type="button" onClick={menuEvent}><img src={navData.logo.menu} alt={navData.logo.altMenu} /></button>
        </div>
    )
}

export default Logo;