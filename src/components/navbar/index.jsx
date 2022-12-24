import { AddButton } from "../add-button";
import styles from "./navbar.module.scss";

export const Navbar = ({ addNewChartHandler, tabs }) => {
  return (
    <div className={styles.Navbar}>
      <AddButton onClick={addNewChartHandler} />
      <div className={styles.Navbar__TabsContainer}>
        {tabs.map((tabItem) => (
          <div key={tabItem.tabId} className={styles.Navbar__Tab}>
            <span title={tabItem.tabName} className={styles.Navbar__TabTitle}>
              {tabItem.tabName}
            </span>
            <span className={styles.Navbar__closeButton}>×</span>
          </div>
        ))}
        {/*<div className={styles.Navbar__Tab}>*/}
        {/*  <span className={styles.Navbar__TabTitle}>Omid</span>*/}
        {/*  <span className={styles.Navbar__closeButton}>×</span>*/}
        {/*</div>*/}
        {/*<div className={`${styles.Navbar__Tab} ${styles["Navbar__Tab--active"]}`}>*/}
        {/*  <span className={styles.Navbar__TabTitle} title={"Ali asdf asdf as dfasd fa"}>*/}
        {/*    Ali asdf asdf as dfasd fa*/}
        {/*  </span>*/}
        {/*  <span className={styles.Navbar__closeButton}>×</span>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
