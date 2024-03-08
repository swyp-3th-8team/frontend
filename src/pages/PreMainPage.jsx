import Goal from "../components/Mandalart/Goal";
import Mission from "../components/Mandalart/Mission";
import styles from "./PreMainPage.module.scss";

export default function PreMainPage() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.content}>
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Mission />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
      </div>
    </div>
  );
}
