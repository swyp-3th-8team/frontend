import { Link } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Link to="/main">Mandu</Link>
      <HeaderLogin />
    </header>
  );
}
