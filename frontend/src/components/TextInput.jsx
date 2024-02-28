import styles from "./TextInput.module.scss";

export default function TextInput({ label, placeholder }) {
  return (
    <div className={styles.textInput}>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
