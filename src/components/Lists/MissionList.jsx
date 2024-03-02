import MissionListItem from "./MissionListItem";
import styles from "./MissionListItem.module.scss";

export default function MissionList({ missionList, setMissionList }) {
  return (
    <ul className={styles}>
      {missionList.map(({ content, goalList }, i) => (
        <MissionListItem
          key={i}
          content={content}
          goalList={goalList}
          onChange={(e) => {
            const objective = missionList[i];
            const newObjective = {
              ...objective,
              content: e.target.value,
            };
            const newMissionList = [...missionList];
            newMissionList[i] = newObjective;

            setMissionList(newMissionList);
          }}
        />
      ))}
    </ul>
  );
}
