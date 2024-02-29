import Goal from "../components/Mandalart/Goal";
import Mission from "../components/Mandalart/Mission";
import MissionList from "../components/Mandalart/MissionList";
import styles from "./MainPage.module.scss";

export default function MainPage() {
  return (
    <>
      <div className={styles.mainPage}>
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
      <div>
        <MissionList />
      </div>
    </>
  );
}
