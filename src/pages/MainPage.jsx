import { useState } from "react";
import GoalPanel from "../components/Layout/GoalPanel";
import MissionPanel from "../components/Layout/MissionPanel";
import MissionList from "../components/Lists/MissionList";
import GoalList from "../components/Lists/GoalList";

import styles from "./MainPage.module.scss";
import Goal from "../components/Mandalart/Goal";
import Mission from "../components/Mandalart/Mission";
import GoalDetail from "../components/Layout/GoalDetail";

const createDefaultTask = () => ({
  content: "",
  isCompleted: false,
});
const createDefaultObject = () => ({
  content: "",
  goalList: new Array(8).fill(null).map(createDefaultTask),
});

export default function MainPage() {
  const [missionList, setMissionList] = useState(() =>
    new Array(8).fill(null).map(createDefaultObject)
  );

  const [missionTitle, setMissionTitle] = useState("");
  const [selectedObjectiveIndex, setSelectedObjectiveIndex] = useState(null);
  const [selectedMissionList, setSelectedMissionList] = useState(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Goal
          goalList={missionList[0].goalList}
          missionList={missionList[0].content}
          onClick={() => setSelectedObjectiveIndex(0)}
        />
        <Goal
          goalList={missionList[1].goalList}
          missionList={missionList[1].content}
          onClick={() => setSelectedObjectiveIndex(1)}
        />
        <Goal
          goalList={missionList[2].goalList}
          missionList={missionList[2].content}
          onClick={() => setSelectedObjectiveIndex(2)}
        />
        <Goal
          goalList={missionList[3].goalList}
          missionList={missionList[3].content}
          onClick={() => setSelectedObjectiveIndex(3)}
        />
        <Mission
          missionList={missionList}
          missionTitle={missionTitle}
          onClick={() => setSelectedMissionList()}
        />
        <Goal
          goalList={missionList[4].goalList}
          missionList={missionList[4].content}
          onClick={() => setSelectedObjectiveIndex(4)}
        />
        <Goal
          goalList={missionList[5].goalList}
          missionList={missionList[5].content}
          onClick={() => setSelectedObjectiveIndex(5)}
        />
        <Goal
          goalList={missionList[6].goalList}
          missionList={missionList[6].content}
          onClick={() => setSelectedObjectiveIndex(6)}
        />
        <Goal
          goalList={missionList[7].goalList}
          missionList={missionList[7].content}
          onClick={() => setSelectedObjectiveIndex(7)}
        />
      </div>
      <GoalDetail />
      {selectedObjectiveIndex !== null && (
        <GoalPanel
          missionTitle={missionTitle}
          title={missionList?.[selectedObjectiveIndex]?.content}
          buttonText="저장"
          onClose={() => setSelectedObjectiveIndex(null)}
        >
          <GoalList
            missionList={missionList}
            objectiveIndex={selectedObjectiveIndex}
            setMissionList={setMissionList}
          />
        </GoalPanel>
      )}
      {selectedMissionList !== null && (
        <MissionPanel
          title={missionTitle}
          onTitleChange={setMissionTitle} // title 변경 시 상태 업데이트
          buttonText="저장"
          onClose={() => setSelectedMissionList(null)}
        >
          <MissionList
            missionList={missionList}
            setMissionList={setMissionList}
          />
        </MissionPanel>
      )}
    </div>
  );
}
