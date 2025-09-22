import styles from "./Header.module.css";
import Button from "./components/Button.js";
import Space from "./components/Space.js";
import Tabs from "./components/Tabs.js";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.topContaniner}>
        <div className={styles.gitName}>
          <a href="https://github.com/hyunseok9898">HyunSeokHong</a>
          <div>/</div>
          <a href="https://github.com/hyunseok9898/github-issue-ex">
            github-issue-ex
          </a>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Watch
          </Button>
          <Space />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Fork <div className={styles.circle}>5</div>
          </Button>
          <Space />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Star
          </Button>
        </div>
      </div>
      <Tabs />
    </div>
  );
}
