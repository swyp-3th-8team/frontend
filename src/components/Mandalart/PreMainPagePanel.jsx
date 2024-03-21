import { useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./PreMainPagePanel.module.scss";

export function PreMainPagePanel() {
  const navigate = useNavigate();

  return (
    <div className={styles.panelWrapper}>
      <div className={styles.panelTitle}>만다라트 서비스, 만두</div>
      <div className={styles.panelContext}>
        <>
          만다라트는 3*3칸으로 구성된 9개의 칸에 각각 목표와 세부 목표를 적어
          실천해나가는 계획표예요.
          <br />
          <br />
          가장 가운데 칸에는 <b>핵심 미션</b>을, 둘러싼 8개의 칸에는 미션을 위한{" "}
          <b>목표</b>를 적어보세요.
        </>
      </div>
      <Button
        size="regular"
        onClick={() => navigate("/pre-signup")}
        isActive="null"
      >
        시작하기
      </Button>
    </div>
  );
}
