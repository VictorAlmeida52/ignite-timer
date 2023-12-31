import { CountdownContainer, Separator } from './styles.ts'
import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../../../contexts/CyclesContext.tsx'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    finishCurrentCycle,
    secondsPassed,
    updateSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - secondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const diffInSeconds = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (diffInSeconds >= totalSeconds) {
          finishCurrentCycle()
          updateSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          updateSecondsPassed(diffInSeconds)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    finishCurrentCycle,
    updateSecondsPassed,
  ])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
