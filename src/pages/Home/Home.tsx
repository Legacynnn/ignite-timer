import React, { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { NewCycleForm } from './NewCycleForm'
import { Countdown } from './Countdown'
import { zodResolver } from '@hookform/resolvers/zod'
import { CyclesContext } from '../../context/CycleContext'
import * as zod from 'zod'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <main className="flex h-full flex-1 flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        className="flex flex-col items-center gap-14"
        action=""
      >
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <Button color={'red'} onClick={interruptCycle} />
        ) : (
          <Button color={'green'} isSubmitDisabled={isSubmitDisabled} />
        )}
      </form>
    </main>
  )
}
