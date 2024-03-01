import { useState } from "react";
import SidePanel from "../components/Layout/SidePanel";
import ObjectiveList from "../components/Lists/ObjectiveList";
import TaskList from "../components/Lists/TaskList";

import styles from "./MainPage.module.scss";
import Goal from "../components/Mandalart/Goal";
import Mission from "../components/Mandalart/Mission";

const createDefaultTask = () => ({
  content: "",
  isCompleted: false,
});
const createDefaultObject = () => ({
  content: "",
  taskList: new Array(8).fill(null).map(createDefaultTask),
});

export default function MainPage() {
  const [objectiveList, setObjectiveList] = useState(() =>
    new Array(8).fill(null).map(createDefaultObject)
  );

  const [missionTitle, setMissionTitle] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Goal
          taskList={objectiveList[0].taskList}
          objectiveList={objectiveList[0].content}
        />
        <Goal objectiveList={objectiveList[1].content} />
        <Goal objectiveList={objectiveList[2].content} />
        <Goal objectiveList={objectiveList[3].content} />
        <Mission objectiveList={objectiveList} missionTitle={missionTitle} />
        <Goal objectiveList={objectiveList[4].content} />
        <Goal objectiveList={objectiveList[5].content} />
        <Goal objectiveList={objectiveList[6].content} />
        <Goal objectiveList={objectiveList[7].content} />
      </div>
      <SidePanel title={<h2>2024년도 건강하게</h2>} buttonText="저장">
        <TaskList
          objectiveList={objectiveList}
          objectiveIndex={0}
          setObjectiveList={setObjectiveList}
        />
      </SidePanel>
      <SidePanel
        title={
          <input
            placeholder="목표 입력"
            onChange={(e) => {
              setMissionTitle(e.target.value);
            }}
          />
        }
        buttonText="저장"
      >
        <ObjectiveList
          objectiveList={objectiveList}
          setObjectiveList={setObjectiveList}
        />
      </SidePanel>
    </div>
  );
}
