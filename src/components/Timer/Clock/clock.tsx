import style from './clock.module.scss'

interface Props {
  time: number | undefined
}

export default function Clock({
  time = 0
} : Props) {
  const mins = Math.floor(time / 60)
  const secs = time % 60
  const [minsTen, minsUnit] = String(mins).padStart(2, '0')
  const [secsTen, secsUnit] = String(secs).padStart(2, '0')

  return (
    <>
      <span className={
        style.relogioNumero
      }>
        {minsTen}</span>
      <span className={
        style.relogioNumero
      }>
        {minsUnit}</span>
      <span className={
        style.relogioDivisao
      }>:</span>
      <span className={
        style.relogioNumero
      }>
        {secsTen}</span>
      <span className={
        style.relogioNumero
      }>
        {secsUnit}</span>
    </>
  )
}
