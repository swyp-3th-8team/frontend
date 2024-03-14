import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import MainPageContext from "../../pages/MainPageContext";

const Backdrop = (props) => {
  const { isPanelEditing } = useContext(MainPageContext);

  const backdropClickHandler = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    if (isPanelEditing) {
      alert("수정 사항을 저장해 주세요.");
    } else {
      props.onClose();
    }
  };
  return <div className={styles.backdrop} onClick={backdropClickHandler} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={`${styles.modal} ${props.className}`}>{props.children}</div>
  );
};

export default function Modal(props) {
  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.className}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
