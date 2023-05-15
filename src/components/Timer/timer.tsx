import {useEffect, useState} from 'react'
import {timeToSec} from '../../common/utils/time'
import {ITask} from '../../types/ITask'
import Btn from '../Button/button'
import Clock from './Clock/clock'
import style from './timer.module.scss'

interface Props {
  selected: ITask | undefined,
  endingTask: () => void
}

function Timer({selected, endingTask} : Props) {
  const [time, setTime] = useState < number > ()

  useEffect(() => {
    if (selected ?. time) {
      setTime(timeToSec(selected.time))
    }
  }, [selected])

  function regressTime(count : number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1)
        return regressTime(count - 1)
      }
      endingTask()
    }, 1000)
  }

  return (
    <div className={
      style.cronometro
    }>
      <p className={
        style.titulo
      }>
        Escolha um card e inicie o cronômetro
      </p>
      <div className={
        style.relogioWrapper
      }>
        <Clock time={time}/>
      </div>
      <Btn onClick={
          () => regressTime(time)
        }
        type="button">
        Começar
      </Btn>
    </div>
  )
}

export default Timer
