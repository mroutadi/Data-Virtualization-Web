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
  const [newTabModalStatus, setNewTabModalStatus] = useState(false);

  const closeNewTabModal = () => {
    setNewTabModalStatus(false);
  };

  const openNewTabModal = () => {
    setNewTabModalStatus(true);
  };

  const addNewTabHandler = ({ tabName, keyColTitle, valColTitle }) => {
    closeNewTabModal();
    const newTab = {
      tabName: tabName
        ? tabName
        : `New Tab${tabsData.length <= 0 ? "" : tabsData.length}`,
      tabId: uuidv4(),
      keyColTitle,
      valColTitle,
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
      {newTabModalStatus && (
        <Modal handleCloseModal={closeNewTabModal} title="New Tab">
          <NewTabInfo addNewTabHandler={addNewTabHandler} />
        </Modal>
      )}
      <Navbar
        toggleNewTabModal={openNewTabModal}
        removeTabHandler={removeTabHandler}
        activateTabHandler={activateTabHandler}
        tabs={tabsData}
        activeTabId={activeTabId}
      />
      {tabsData.length > 0 ? (
        <div>
          {tabsData.map((tabItem) => {
            return (
              <FileUploader
                isActive={tabItem.tabId === activeTabId}
                keyColTitle={tabItem.keyColTitle}
                valColTitle={tabItem.valColTitle}
                key={tabItem.tabId}
              />
            );
          })}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
