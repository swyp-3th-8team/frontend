import ObjectiveListItem from "./ObjectiveListItem";

export default function ObjectiveList({ objectiveList, setObjectiveList }) {
  return (
    <ul>
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
