import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import mtn from "../../assets/MTN-Logo.png";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerTitleContainer}>
                        <img src={mtn} alt="MTN logo" aria-label="MTN" className={styles.mtnLogo} />
                        <h3 style={{ marginLeft: "5px" }}>FinStewardConnect</h3>
                    </div>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Ask a question
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
