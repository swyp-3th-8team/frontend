import GoalListItem from "./GoalListItem";

export default function GoalList({
  missionList,
  objectiveIndex,
  setMissionList,
}) {
  const goalList = missionList[objectiveIndex].goalList;

  return (
    <ul>
      {goalList.map((goal, goalIndex) => (
        <GoalListItem
          key={goalIndex}
          content={goal.content}
          isCompleted={goal.isCompleted}
          onChangeContent={(e) => {
            const objective = missionList[objectiveIndex];
            const newGoalList = [...objective.goalList];
            newGoalList[goalIndex] = {
              ...newGoalList[goalIndex],
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
            newGoalList[goalIndex] = {
              ...newGoalList[goalIndex],
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
