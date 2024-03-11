import GoalListItem from "./GoalListItem";

export default function GoalList({
  missionList,
  missionIndex,
  setMissionList,
  onFocusChange,
}) {
  const goalList = missionList[missionIndex].goalList;

  return (
    <ul>
      {goalList.map((goal, goalIndex) => (
        <GoalListItem
          key={goalIndex}
          content={goal.content}
          isCompleted={goal.isCompleted}
          onChangeContent={(e) => {
            const mission = missionList[missionIndex];
            const newGoalList = [...mission.goalList];
            newGoalList[goalIndex] = {
              ...newGoalList[goalIndex],
              content: e.target.value,
            };
            const newMission = {
              ...mission,
              goalList: newGoalList,
            };
            const newMissionList = [...missionList];
            newMissionList[missionIndex] = newMission;

            setMissionList(newMissionList);
          }}
          onChangeIsCompleted={(e) => {
            const mission = missionList[missionIndex];
            const newGoalList = [...mission.goalList];
            newGoalList[goalIndex] = {
              ...newGoalList[goalIndex],
              isCompleted: e.target.checked,
            };
            const newMission = {
              ...mission,
              goalList: newGoalList,
            };
            const newMissionList = [...missionList];
            newMissionList[missionIndex] = newMission;

            setMissionList(newMissionList);
          }}
          onFocusChange={() => onFocusChange(goalIndex)}
        />
      ))}
    </ul>
  );
}
