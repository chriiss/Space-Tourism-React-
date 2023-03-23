import List from "./list/List";
import Logo from "./logo/Logo";

const Navbar = ({useState, useEffect, dataJson, styles, NavLink}) => {
    const [open, setOpen] = useState(false);
    const [stickyNav, setStickyNav] = useState(false);
    const navData = dataJson.navbarComponent;

    const handleScroll = () => {
        window.pageYOffset >= 100 ? setStickyNav(true) : setStickyNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })

    return(
        <nav className={`${styles.navbar} ${styles.uppercase} ${stickyNav ? styles.navbar_active : ''}`}>
            <Logo styles={styles} open={open} setOpen={setOpen} navData={navData} />
            <List styles={styles} open={open} setOpen={setOpen} navData={navData} NavLink={NavLink} />
        </nav>
    )
}

export default Navbar;