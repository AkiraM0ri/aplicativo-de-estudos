export interface ITask {
  task: string,
  time: string,
  completed: boolean,
  selected: boolean,
  id: string
}

export interface Props extends ITask {
  selectTask: (selectedTask : ITask) => void
}
