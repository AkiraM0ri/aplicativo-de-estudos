import {useState} from 'react'
import {ITask} from '../../types/ITask'
import {v4 as uuidv4} from 'uuid'
import Btn from '../Button/button'
import style from './form.module.scss'

interface Props {
  setTasks: React.Dispatch < React.SetStateAction < ITask[] >>
}

function Form({setTasks} : Props) {
  const [input, setInput] = useState({task: '', time: '00:00'})

  function handleTimeChange(evt : React.ChangeEvent < HTMLInputElement >) {
    setInput({
      ...input,
      time: evt.target.value
    })
  }

  function handleTaskChange(evt : React.ChangeEvent < HTMLInputElement >) {
    setInput({
      ...input,
      task: evt.target.value
    })
  }

  function handleTaskName(evt : React.FormEvent < HTMLFormElement >) {
    evt.preventDefault()
    setTasks(oldTask => [
      ...oldTask, {
        ...input,
        selected: false,
        completed: false,
        id: uuidv4()
      }
    ])
    setInput({task: '', time: '00:00'})
  }

  return (
    <form className={
        style.novaTarefa
      }
      onSubmit={handleTaskName}>
      <div className={
        style.inputContainer
      }>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input type="text" name="tarefa" id="tarefa"
          value={
            input.task
          }
          onChange={handleTaskChange}
          placeholder="Digite..."
          required/>
      </div>
      <div className={
        style.inputContainer
      }>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input type="time" step="1"
          value={
            input.time
          }
          onChange={handleTimeChange}
          name="tempo"
          id="tempo"
          required/>
      </div>
      <Btn type="submit">
        Adicionar
      </Btn>
    </form>
  )
}

export default Form
