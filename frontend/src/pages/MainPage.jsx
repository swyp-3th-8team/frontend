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
  const [selectedObjectiveIndex, setSelectedObjectiveIndex] = useState(null);
  const [selectedObjectiveList, setSelectedObjectiveList] = useState(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Goal
          taskList={objectiveList[0].taskList}
          objectiveList={objectiveList[0].content}
          onClick={() => setSelectedObjectiveIndex(0)}
        />
        <Goal
          taskList={objectiveList[1].taskList}
          objectiveList={objectiveList[1].content}
          onClick={() => setSelectedObjectiveIndex(1)}
        />
        <Goal
          taskList={objectiveList[2].taskList}
          objectiveList={objectiveList[2].content}
          onClick={() => setSelectedObjectiveIndex(2)}
        />
        <Goal
          taskList={objectiveList[3].taskList}
          objectiveList={objectiveList[3].content}
          onClick={() => setSelectedObjectiveIndex(3)}
        />
        <Mission
          objectiveList={objectiveList}
          missionTitle={missionTitle}
          onClick={() => setSelectedObjectiveList()}
        />
        <Goal
          taskList={objectiveList[4].taskList}
          objectiveList={objectiveList[4].content}
          onClick={() => setSelectedObjectiveIndex(4)}
        />
        <Goal
          taskList={objectiveList[5].taskList}
          objectiveList={objectiveList[5].content}
          onClick={() => setSelectedObjectiveIndex(5)}
        />
        <Goal
          taskList={objectiveList[6].taskList}
          objectiveList={objectiveList[6].content}
          onClick={() => setSelectedObjectiveIndex(6)}
        />
        <Goal
          taskList={objectiveList[7].taskList}
          objectiveList={objectiveList[7].content}
          onClick={() => setSelectedObjectiveIndex(7)}
        />
      </div>
      {selectedObjectiveIndex !== null && (
        <GoalPanel
          uptitle={missionTitle}
          title={objectiveList?.[0]?.content}
          buttonText="저장"
          onClose={() => setSelectedObjectiveIndex(null)}
        >
          <TaskList
            objectiveList={objectiveList}
            objectiveIndex={selectedObjectiveIndex}
            setObjectiveList={setObjectiveList}
          />
        </GoalPanel>
      )}
      {selectedObjectiveList !== null && (
        <MissionPanel
          title={missionTitle}
          onTitleChange={setMissionTitle} // title 변경 시 상태 업데이트
          buttonText="저장"
          onClose={() => setSelectedObjectiveList(null)}
        >
          <ObjectiveList
            objectiveList={objectiveList}
            setObjectiveList={setObjectiveList}
          />
        </MissionPanel>
      )}
    </div>
  );
}
