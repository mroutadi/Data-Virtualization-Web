import { useState } from "react";

export const useDataBase = () => {
  /* Init */
  const [tabsData, setTabsData] = useState([]);
  // should read from indexedDB

  const addTab = ({ tabData }) => {
    setTabsData([...tabsData, tabData]);
  };

  const removeTab = ({ tabId }) => {
    setTabsData(tabsData.filter((tabItem) => tabItem.tabId !== tabId));
  };

  return { tabsData, addTab, removeTab };
};
