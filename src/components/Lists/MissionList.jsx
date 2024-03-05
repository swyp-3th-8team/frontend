import MissionListItem from "./MissionListItem";

export default function MissionList({ missionList, setMissionList }) {
  return (
    <ul>
      {missionList.map(({ content, goalList }, i) => (
        <MissionListItem
          key={i}
          content={content}
          goalList={goalList}
          onChange={(e) => {
            const mission = missionList[i];
            const newMission = {
              ...mission,
              content: e.target.value,
            };
            const newMissionList = [...missionList];
            newMissionList[i] = newMission;

            setMissionList(newMissionList);
          }}
        />
      ))}
    </ul>
  );
}
