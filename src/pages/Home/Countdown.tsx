import { differenceInSeconds } from 'date-fns'
import React, { useContext, useEffect, useState } from 'react'
import { CyclesContext } from '../../context/CycleContext'

export function Countdown() {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished } =
    useContext(CyclesContext)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()

          setAmountSecondsPassed(totalSeconds)

          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, activeCycleId, markCurrentCycleAsFinished, totalSeconds])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <div className="flex gap-4 font-robotoMono text-9xl text-gray-100">
      <span className="rounded-lg bg-gray-700 p-8">{minutes[0]}</span>
      <span className="rounded-lg bg-gray-700 p-8">{minutes[1]}</span>
      <div className="flex w-16 justify-center overflow-hidden py-8 text-green-500">
        :
      </div>
      <span className="rounded-lg bg-gray-700 p-8">{seconds[0]}</span>
      <span className="rounded-lg bg-gray-700 p-8">{seconds[1]}</span>
    </div>
  )
}
