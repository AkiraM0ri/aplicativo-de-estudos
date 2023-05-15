import {useState} from 'react';
import Form from '../components/Form/form'
import List from '../components/List/list'
import Timer from '../components/Timer/timer'
import style from './style.module.scss';
import {ITask} from '../types/ITask'

function App() {
  const [tasks, setTasks] = useState < ITask[] | [] > ([])
  const [selected, setSelected] = useState < ITask > ()

  function selectTask(selecionedTask : ITask) {
    setSelected(selecionedTask)
    setTasks(oldTask => oldTask.map(task => ({
      ...task,
      selected: task.id === selecionedTask.id ? true : false
    })))
  }

  function endingTask() {
    if (selected) {
      setSelected(undefined)
      setTasks(oldTask => oldTask.map(task => {
        if (task.id !== selected.id) 
          return task
        
        return {
          ...task,
          selected: false,
          completed: true
        }
      }))
    }
  }

  return (
    <div className={
      style.AppStyle
    }>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}
        selectTask={selectTask}/>
      <Timer selected={selected}
        endingTask={endingTask}/>
    </div>
  );
}

export default App;
