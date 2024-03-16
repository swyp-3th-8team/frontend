import { useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./PreMainPagePanel.module.scss";

export function PreMainPagePanel() {
  const navigate = useNavigate();

  return (
    <div className={styles.panelWrapper}>
      <div className={styles.panelTitle}>만다라트 서비스, 만두</div>
      <div className={styles.panelContext}>만다라트 소개글</div>
      <Button
        size="regular"
        onClick={() => navigate("/signup")}
        isActive="null"
      >
        시작하기
      </Button>
    </div>
  );
}
