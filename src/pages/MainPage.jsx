import { useState } from "react";
import GoalPanel from "../components/Modal/GoalPanel";
import MissionPanel from "../components/Layout/MissionPanel";
import MissionList from "../components/Lists/MissionList";
import GoalList from "../components/Lists/GoalList";

import styles from "./MainPage.module.scss";
import Goal from "../components/Mandalart/Goal";
import Mission from "../components/Mandalart/Mission";
import GoalDetail from "../components/Modal/GoalDetail";
import Modal from "../components/Modal/Modal";

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
  const [selectedMissionIndex, setSelectedMissionIndex] = useState(null);
  const [selectedMissionList, setSelectedMissionList] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showGoalPanel, setShowGoalPanel] = useState(false);

  const openModal = (index) => {
    setSelectedMissionIndex(index);
    setIsModalOpen(true);
  };

  const closeModals = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          <Goal
            goalList={missionList[0].goalList}
            missionList={missionList[0].content}
            onClick={() => openModal(0)}
          />
          <Goal
            goalList={missionList[1].goalList}
            missionList={missionList[1].content}
            onClick={() => openModal(1)}
          />
          <Goal
            goalList={missionList[2].goalList}
            missionList={missionList[2].content}
            onClick={() => openModal(2)}
          />
          <Goal
            goalList={missionList[3].goalList}
            missionList={missionList[3].content}
            onClick={() => openModal(3)}
          />
          <Mission
            missionList={missionList}
            missionTitle={missionTitle}
            onClick={() => setSelectedMissionList()}
          />
          <Goal
            goalList={missionList[4].goalList}
            missionList={missionList[4].content}
            onClick={() => openModal(4)}
          />
          <Goal
            goalList={missionList[5].goalList}
            missionList={missionList[5].content}
            onClick={() => openModal(5)}
          />
          <Goal
            goalList={missionList[6].goalList}
            missionList={missionList[6].content}
            onClick={() => openModal(6)}
          />
          <Goal
            goalList={missionList[7].goalList}
            missionList={missionList[7].content}
            onClick={() => openModal(7)}
          />
        </div>
        {selectedMissionList !== null && (
          <MissionPanel
            title={missionTitle}
            onTitleChange={setMissionTitle} // title 변경 시 상태 업데이트
            onClose={() => setSelectedMissionList(null)}
          >
            <MissionList
              missionList={missionList}
              setMissionList={setMissionList}
            />
          </MissionPanel>
        )}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModals}>
          <div className={styles.modalWrapper}>
            <GoalDetail
              missionList={missionList}
              selectedMissionIndex={selectedMissionIndex}
              onClick={() => setShowGoalPanel(true)}
            />
            {showGoalPanel && (
              <GoalPanel
                missionTitle={missionTitle}
                title={missionList?.[selectedMissionIndex]?.content}
                buttonText="저장"
                onClose={() => setShowGoalPanel(false)}
              >
                <GoalList
                  missionList={missionList}
                  missionIndex={selectedMissionIndex}
                  setMissionList={setMissionList}
                />
              </GoalPanel>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}
