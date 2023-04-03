import React, { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../context/CycleContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2 text-2xl font-bold text-gray-100">
      <label htmlFor="">Vou trabalhar em</label>
      <input
        className="baseInput flex-1 focus:shadow-none [&::-webkit-calendar-picker-indicator]:!hidden"
        type="task"
        placeholder="Dê um nome para seu projeto"
        list="task-suggestion"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestion">
        <option value="projeto 0" />
        <option value="projeto 1" />
        <option value="projeto 2" />
        <option value="projeto 3" />
      </datalist>

      <label htmlFor="">Durante</label>
      <input
        className="baseInput w-16"
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </div>
  )
}
