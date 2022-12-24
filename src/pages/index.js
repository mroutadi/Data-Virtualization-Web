import { useState } from "react";
import { FileUploader } from "../components/file-uploader";
import { EmptyState } from "../components/empty-state";
import styles from "./styles.module.scss";

export default function Home() {
  const [tabs, setTabs] = useState([]);
  return (
    <div>
      <div className={styles.Main__addButton}>+</div>
      {tabs.length > 0 ? (
        <div>
          <FileUploader />
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
