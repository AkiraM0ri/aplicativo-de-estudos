import {Props} from '../../../types/ITask'
import style from './item.module.scss'

export default function Iten(props : Props) {
  const {
    task,
    time,
    completed,
    selected,
    id,
    selectTask
  } = props

  return (
    <li className={
        `${
          style.item
        } 
          ${
          selected ? style.itemSelecionado : ''
        } 
          ${
          completed ? style.itemCompletado : ''
        } 
          `
      }
      onClick={
        () => !completed && selectTask({
          task,
          time,
          completed,
          selected,
          id
        })
    }>
      <h3>{task}</h3>
      <span>{time}</span>
      {
      completed && <span className={
        style.concluido
      }></span>
    } </li>
  )
}
