import styles from "./empty-state.module.scss";
export function EmptyState() {
  return (
    <div className={styles.EmptyState}>
      <div className={styles.EmptyState__Container}>
        <h1 className={styles.EmptyState__title}>Welcome!</h1>
        <p className={styles.EmptyState__description}>there is no chart to view :)</p>
      </div>
    </div>
  );
}
