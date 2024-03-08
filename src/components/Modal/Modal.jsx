import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const Backdrop = (props) => {
  const backdropClickHandler = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    props.onClose();
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
