import { useState } from "react";
import Goal from "../components/Mandalart/Goal";
import Mission from "../components/Mandalart/Mission";
import Modal from "../components/Modal/Modal";
import PreMainPageModal from "../components/Modal/PreMainPageModal";
import styles from "./PreMainPage.module.scss";
import { PreMainPagePanel } from "../components/Mandalart/PreMainPagePanel";
import { MainPageProvider } from "./MainPageContext";

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
    <MainPageProvider>
      <div className={styles.mainWrapper}>
        <div className={styles.content} onClick={openModal}>
          {[...missionList.slice(0, 4)].map((mission, index) => (
            <Goal
              key={index}
              goalList={mission.goalList}
              missionList={mission.content}
              onClick={() => openModal(index)}
            />
          ))}
          <Mission
            missionList={missionList}
            missionTitle={missionTitle}
            onClick={() => setSelectedMissionList()}
          />
          {[...missionList.slice(4, 8)].map((mission, index) => (
            <Goal
              key={index + 4}
              goalList={mission.goalList}
              missionList={mission.content}
              onClick={() => openModal(index + 4)}
            />
          ))}
        </div>
        <PreMainPagePanel />
      </div>
      {isModalOpen && (
        <Modal onClose={closeModals} className={styles.preMainPageModal}>
          <PreMainPageModal />
        </Modal>
      )}
    </MainPageProvider>
  );
}
