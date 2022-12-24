import { useState } from "react";
import uuid from "uuid";
import { FileUploader } from "../components/file-uploader";
import { EmptyState } from "../components/empty-state";
import { Navbar } from "../components/navbar";

export default function Home() {
  const [tabs, setTabs] = useState([]);
  const [activeTabId, setActiveTabId] = useState(null);

  const addNewChartHandler = () => {
    const newTab = {
      tabName: "Test",
      tabId: uuid(),
    };
    setTabs([...tabs, newTab]);
    setActiveTabId(newTab.tabId);
  };

  return (
    <div>
      <Navbar
        addNewChartHandler={addNewChartHandler}
        tabs={tabs}
        activeTabId={activeTabId}
      />
      {tabs.length > 0 ? (
        <div>
          {tabs.map((tabItem) => {
            return <FileUploader key={tabItem.tabId} />;
          })}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
