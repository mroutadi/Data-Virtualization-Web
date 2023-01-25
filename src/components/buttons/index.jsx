import styles from "./styles.module.scss";

export const Buttons = ({ onAddNewTab, onExport, hasExport }) => {
  return (
    <div className={styles.Container}>
      <div onClick={onAddNewTab} className={styles.AddButton}>
        +
      </div>
      {hasExport && (
        <div onClick={onExport} className={styles.ExportButton}>
          📤
        </div>
      )}
    </div>
  );
};
