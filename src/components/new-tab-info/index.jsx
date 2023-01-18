import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";

export const NewTabInfo = ({ addNewTabHandler }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    addNewTabHandler({
      tabName: data.tabName,
      keyColTitle: data.keyColTitle,
      valColTitle: data.valColTitle,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.NewTabInfo}>
      <div>
        <label htmlFor="tabName">Tab Name</label>
        <input
          type="text"
          className={styles.NewTabInfo__input}
          placeholder="Tab Name"
          name="tabName"
          {...register("tabName", { required: true, maxLength: 80 })}
        />
      </div>
      <div>
        <label htmlFor="keyColTitle">Title of Keys Column</label>
        <input
          type="text"
          className={styles.NewTabInfo__input}
          placeholder="Key col title"
          name="keyColTitle"
          {...register("keyColTitle", { required: true, maxLength: 80 })}
        />
      </div>
      <div>
        <label htmlFor="keyColTitle">Title of Values Column</label>
        <input
          type="text"
          className={styles.NewTabInfo__input}
          placeholder="Value col title"
          name="valColTitle"
          {...register("valColTitle", { required: true, maxLength: 100 })}
        />
      </div>

      <button type="submit" className={styles.NewTabInfo__submit}>
        Create
      </button>
    </form>
  );
};
