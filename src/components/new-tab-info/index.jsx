import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";

export const NewTabInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.NewTabInfo}>
      <div>
        <label htmlFor="keyColName">Title of Keys Column</label>
        <input
          type="text"
          className={styles.NewTabInfo__input}
          placeholder="Key col title"
          name="keyColName"
          {...register("keyColName", { required: true, maxLength: 80 })}
        />
      </div>
      <div>
        <label htmlFor="keyColName">Title of Values Column</label>
        <input
          type="text"
          className={styles.NewTabInfo__input}
          placeholder="Value col title"
          name="valueColName"
          {...register("valueColName", { required: true, maxLength: 100 })}
        />
      </div>

      <button type="submit" className={styles.NewTabInfo__submit}>
        Create
      </button>
    </form>
  );
};
