import TaskListItem from "./TaskListItem";

export default function TaskList({
  objectiveList,
  objectiveIndex,
  setObjectiveList,
}) {
  const taskList = objectiveList[objectiveIndex].taskList;

  return (
    <ul>
      {taskList.map((task, taskIndex) => (
        <TaskListItem
          key={taskIndex}
          content={task.content}
          isCompleted={task.isCompleted}
          onChangeContent={(e) => {
            const objective = objectiveList[objectiveIndex];
            const newTaskList = [...objective.taskList];
            newTaskList[taskIndex] = {
              ...newTaskList[taskIndex],
              content: e.target.value,
            };
            const newObjective = {
              ...objective,
              taskList: newTaskList,
            };
            const newObjectiveList = [...objectiveList];
            newObjectiveList[objectiveIndex] = newObjective;

            setObjectiveList(newObjectiveList);
          }}
          onChangeIsCompleted={(e) => {
            const objective = objectiveList[objectiveIndex];
            const newTaskList = [...objective.taskList];
            newTaskList[taskIndex] = {
              ...newTaskList[taskIndex],
              isCompleted: e.target.checked,
            };
            const newObjective = {
              ...objective,
              taskList: newTaskList,
            };
            const newObjectiveList = [...objectiveList];
            newObjectiveList[objectiveIndex] = newObjective;

            setObjectiveList(newObjectiveList);
          }}
        />
      ))}
    </ul>
  );
}
