import { HandPalm, Play } from 'phosphor-react'
import React from 'react'

interface ButtonProps {
  color: 'green' | 'red'
  isSubmitDisabled?: boolean
  onClick?: any
}

export function Button({ color, isSubmitDisabled, onClick }: ButtonProps) {
  /* function handleInterruptCycle() {
    setActiveCycleId(null)

    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  } */

  return (
    <button
      className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-0 
      p-4 text-gray-100 
      disabled:cursor-not-allowed
      disabled:opacity-70 ${
        color === 'green'
          ? 'bg-green-500 [&:not(:disabled):hover]:bg-green-700'
          : 'bg-red-500 [&:not(:disabled):hover]:bg-red-700'
      }`}
      // onClick={color === 'red' ? interrupCycleFunction() : undefined}
      type={color === 'red' ? 'button' : 'submit'}
      disabled={isSubmitDisabled}
      onClick={color === 'red' && onClick}
    >
      {color === 'green' ? (
        <span className="flex">
          Começar <Play size={24} />
        </span>
      ) : (
        <span className="flex">
          Interromper <HandPalm size={24} />
        </span>
      )}
    </button>
  )

  /* flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-0 
      bg-green-500 p-4 text-gray-100 
      disabled:cursor-not-allowed
      disabled:opacity-70 [&:not(:disabled):hover]:bg-green-700 */

  /* [&:not(:disabled):hover]:bg-green-700 bg-green-500 */
}
