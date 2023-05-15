import {ITask} from '../../types/ITask'
import style from './list.module.scss'
import Item from './Itens/itens'

interface Props {
  tasks: ITask[],
  selectTask: (selectedTask : ITask) => void
}

function List({tasks, selectTask} : Props) {
  return (
    <aside className={
      style.listaTarefas
    }>
      <h2>
        Estudos do dia
      </h2>
      <ul> {
        tasks.map(item => (
          <Item key={
              item.id
            }
            {...item}
            selectTask={selectTask}/>
        ))
      } </ul>
    </aside>
  )
}

export default List
