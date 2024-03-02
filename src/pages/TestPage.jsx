import Goal from "../components/Mandalart/Goal";
import Mission from "../components/Mandalart/Mission";
import styles from "./TestPage.module.scss";
//import MissionList from "../components/Mandalart/MissionList";

export default function TestPage() {
  return (
    <>
      <div className={styles.testPage}>
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
      <div></div>
    </>
  );
}
