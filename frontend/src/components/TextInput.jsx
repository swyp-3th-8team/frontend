import styles from "./TextInput.module.scss";

export default function TextInput({
  value,
  type,
  label,
  placeholder,
  onChange,
}) {
  return (
    <div className={styles.textInput}>
      <label>{label}</label>
      <input
        value={value}
        type={type}
        label={label}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
