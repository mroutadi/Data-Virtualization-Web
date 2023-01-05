import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FileUploader } from "../components/file-uploader";
import { EmptyState } from "../components/empty-state";
import { Navbar } from "../components/navbar";
import { useDataBase } from "../hooks/useDataBase";
import { NewTabInfo } from "../components/new-tab-info";
import { Modal } from "../components/modal";

export default function Home() {
  const { tabsData, addTab, removeTab } = useDataBase();
  const [activeTabId, setActiveTabId] = useState(null);

  const addNewTabHandler = () => {
    const newTab = {
      tabName: `New Tab${tabsData.length <= 0 ? "" : tabsData.length}`,
      tabId: uuidv4(),
    };
    addTab({ tabData: newTab });
    setActiveTabId(newTab.tabId);
  };

  const removeTabHandler = ({ tabId, tabIndex }) => {
    if (tabsData.length === 1) {
      removeTab({ tabId });
      return;
    }
    if (tabId === activeTabId) {
      //activate another tab
      if (tabIndex === tabsData.length - 1) {
        setActiveTabId(tabsData[tabIndex - 1].tabId);
      } else {
        setActiveTabId(tabsData[tabIndex + 1].tabId);
      }
    }

    removeTab({ tabId });
  };

  const activateTabHandler = (tabId) => () => {
    setActiveTabId(tabId);
  };

  return (
    <div>
      <Modal title="New Tab">
        <NewTabInfo />
      </Modal>
      <Navbar
        addNewTabHandler={addNewTabHandler}
        removeTabHandler={removeTabHandler}
        activateTabHandler={activateTabHandler}
        tabs={tabsData}
        activeTabId={activeTabId}
      />
      {tabsData.length > 0 ? (
        <div>
          {tabsData.map((tabItem) => {
            return <FileUploader key={tabItem.tabId} />;
            // return <div key={tabItem.tabId}>{tabItem.tabName}</div>;
          })}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
