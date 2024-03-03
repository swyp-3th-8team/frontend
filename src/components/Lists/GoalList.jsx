import GoalListItem from "./GoalListItem";

export default function GoalList({
  missionList,
  objectiveIndex,
  setMissionList,
}) {
  const goalList = missionList[objectiveIndex].goalList;

  return (
    <ul>
      {goalList.map((task, taskIndex) => (
        <GoalListItem
          key={taskIndex}
          content={task.content}
          isCompleted={task.isCompleted}
          onChangeContent={(e) => {
            const objective = missionList[objectiveIndex];
            const newGoalList = [...objective.goalList];
            newGoalList[taskIndex] = {
              ...newGoalList[taskIndex],
              content: e.target.value,
            };
            const newObjective = {
              ...objective,
              goalList: newGoalList,
            };
            const newMissionList = [...missionList];
            newMissionList[objectiveIndex] = newObjective;

            setMissionList(newMissionList);
          }}
          onChangeIsCompleted={(e) => {
            const objective = missionList[objectiveIndex];
            const newGoalList = [...objective.goalList];
            newGoalList[taskIndex] = {
              ...newGoalList[taskIndex],
              isCompleted: e.target.checked,
            };
            const newObjective = {
              ...objective,
              goalList: newGoalList,
            };
            const newMissionList = [...missionList];
            newMissionList[objectiveIndex] = newObjective;

            setMissionList(newMissionList);
          }}
        />
      ))}
    </ul>
  );
}
