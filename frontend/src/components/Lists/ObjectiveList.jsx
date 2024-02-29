import ObjectiveListItem from "./ObjectiveListItem";
import styles from "./ObjectiveListItem.module.scss";

export default function ObjectiveList({ objectiveList, setObjectiveList }) {
  return (
    <ul className={styles}>
      {objectiveList.map(({ content, taskList }, i) => (
        <ObjectiveListItem
          key={i}
          content={content}
          taskList={taskList}
          onChange={(e) => {
            const objective = objectiveList[i];
            const newObjective = {
              ...objective,
              content: e.target.value,
            };
            const newObjectiveList = [...objectiveList];
            newObjectiveList[i] = newObjective;

            setObjectiveList(newObjectiveList);
          }}
        />
      ))}
    </ul>
  );
}
