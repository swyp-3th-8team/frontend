import { useState } from "react";
import styles from "./TextInput.module.scss";

export default function TextInput({ type, label, placeholder }) {
  const [input, setInput] = useState("");

  const handleChangeinput = (e) => {
    setInput(e.target.value);
  };

  console.log(input);
  return (
    <div className={styles.textInput}>
      <label>{label}</label>
      <input
        value={input}
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleChangeinput(e)}
      />
    </div>
  );
}
