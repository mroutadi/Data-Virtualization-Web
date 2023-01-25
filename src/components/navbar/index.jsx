import { Buttons } from "../buttons";
import styles from "./navbar.module.scss";

export const Navbar = ({
  removeTabHandler,
  activateTabHandler,
  toggleNewTabModal,
  onExport,
  tabs,
  activeTabId,
}) => {
  const handleCloseTabButton =
    ({ tabId, tabIndex }) =>
    (e) => {
      e.stopPropagation();
      removeTabHandler({ tabId, tabIndex });
    };
  return (
    <div className={styles.Navbar}>
      <Buttons
        hasExport={tabs.length > 0}
        onExport={onExport}
        onAddNewTab={toggleNewTabModal}
      />
      <div className={styles.Navbar__TabsContainer}>
        {tabs.map((tabItem, index) => (
          <div
            key={tabItem.tabId}
            onClick={activateTabHandler(tabItem.tabId)}
            className={`${styles.Navbar__Tab} ${
              tabItem.tabId === activeTabId && styles["Navbar__Tab--active"]
            }`}
          >
            <span title={tabItem.tabName} className={styles.Navbar__TabTitle}>
              {tabItem.tabName}
            </span>
            <span
              onClick={handleCloseTabButton({ tabId: tabItem.tabId, tabIndex: index })}
              className={styles.Navbar__closeButton}
            >
              ×
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
