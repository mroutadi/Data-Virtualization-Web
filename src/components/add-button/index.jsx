import styles from "./styles.module.scss";

export const AddButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.AddButton}>
      +
    </div>
  );
};
