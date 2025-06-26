import AppNav from "./AppNav";
import FooterSidebar from "./FooterSidebar";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
        <Logo />
        <AppNav />
        <p>list of cities</p>
        <FooterSidebar />
        </div>
    );
}

export default Sidebar;
