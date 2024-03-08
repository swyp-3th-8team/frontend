import { useState } from "react";
import Goal from "../components/Mandalart/Goal";
import Mission from "../components/Mandalart/Mission";
import Modal from "../components/Modal/Modal";
import PreMainPageModal from "../components/Modal/PreMainPageModal";
import styles from "./PreMainPage.module.scss";
import { PreMainPagePanel } from "../components/Modal/PreMainPagePanel";

export default function PreMainPage() {
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
