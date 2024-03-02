import { useState } from "react";
import GoalPanel from "../components/Layout/GoalPanel";
import MissionPanel from "../components/Layout/MissionPanel";
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
      <GoalPanel
        uptitle={missionTitle}
        title={objectiveList?.[0]?.content}
        buttonText="저장"
      >
        <TaskList
          objectiveList={objectiveList}
          objectiveIndex={0}
          setObjectiveList={setObjectiveList}
        />
      </GoalPanel>
      <MissionPanel
        title={missionTitle}
        onTitleChange={setMissionTitle} // title 변경 시 상태 업데이트
        buttonText="저장"
      >
        <ObjectiveList
          objectiveList={objectiveList}
          setObjectiveList={setObjectiveList}
        />
      </MissionPanel>
    </div>
  );
}
