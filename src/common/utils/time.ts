export function timeToSec(time : string) {
  const [hours = '0', minutes = '0', seconds = 0] = time.split(":")

  const hrsInSecs = Number(hours) * 3600
  const minInSecs = Number(minutes) * 60

  return hrsInSecs + minInSecs + Number(seconds)
}
