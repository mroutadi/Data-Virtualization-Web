import styles from "./styles.module.scss";
export const Modal = ({ children, title }) => {
  return (
    <div className={styles.Modal}>
      <div className={styles.Modal__Content}>
        <div className={styles.Modal__Title}>
          <span>{title}</span>
          <div className={styles.Modal__CloseButton}>×</div>
        </div>
        <hr />
        <div className={styles.Modal__Body}>{children}</div>
      </div>
    </div>
  );
};
