import { useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./PreMainPageModal.module.scss";

export default function PreMainPageModal() {
  const navigate = useNavigate();

  return (
    <div className={styles.preMainPageModalAlert}>
      <div>로그인을 먼저 완료해주세요</div>
      <hr />
      <Button size="regular" onClick={() => navigate("/login")} isActive="null">
        로그인 화면으로 이동하기
      </Button>
    </div>
  );
}
