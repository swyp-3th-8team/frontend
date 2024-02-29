//import { useState } from "react";
import styles from "./Mission.module.scss";
//import SubjectList from "./SubjectList";

export default function Mission() {
  /**
  const [showList, setShowList] = useState(false);
  {showList ? (
    <input
      className={styles.mainSubject}
      type="text"
      onClick={() => {
        setShowList(false);
      }}
      />
      ) : (
        <input
        className={styles.mainSubject}
        type="text"
        onClick={() => {
          setShowList(<SubjectList />);
        }}
        />
        )}
              <div>{showList}</div>
  */

  return (
    <>
      <div className={styles.mission}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input className={styles.mainMission} type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </>
  );
}
