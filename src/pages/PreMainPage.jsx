import { useState } from "react";
import Goal from "../components/Mandalart/Goal";
import Mission from "../components/Mandalart/Mission";
import Modal from "../components/Modal/Modal";
import PreMainPageModal from "../components/Modal/PreMainPageModal";
import styles from "./PreMainPage.module.scss";
import { PreMainPagePanel } from "../components/Mandalart/PreMainPagePanel";

const createDefaultTask = () => ({
  content: "",
  isCompleted: false,
});

const createDefaultObject = () => ({
  content: "",
  goalList: new Array(8).fill(null).map(createDefaultTask),
});

export default function PreMainPage() {
  const [missionList, setMissionList] = useState(() =>
    new Array(8).fill(null).map(createDefaultObject)
  );
  const [missionTitle, setMissionTitle] = useState("");
  const [selectedMissionList, setSelectedMissionList] = useState(null);
  //<Goal>, <Mission> 기능 없으나, 해당 컴포넌트에서 array 가져오는 데 오류 발생하여 임의 작성함

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModals = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.mainWrapper} onClick={openModal}>
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
        <PreMainPagePanel />
      </div>
      {isModalOpen && (
        <Modal onClose={closeModals} className={styles.preMainPageModal}>
          <PreMainPageModal />
        </Modal>
      )}
    </>
  );
}
