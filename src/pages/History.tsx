import React, { useContext } from 'react'
import { StatusSpan } from '../components/StatusSpan'
import { CyclesContext } from '../context/CycleContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <main className="flex flex-1 flex-col p-14">
      <h1 className="text-2xl text-gray-100"></h1>

      <div className="mt-8 flex-1 overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th
                className="rounded-tl-lg bg-gray-600 pr-4 pl-6 text-left text-lg
              text-gray-100"
              >
                Tarefa
              </th>
              <th className="bg-gray-600 p-4 text-left text-lg text-gray-100">
                Duração
              </th>
              <th className="bg-gray-600 p-4 text-left text-lg text-gray-100">
                Início
              </th>
              <th className="rounded-tr-lg bg-gray-600 p-4 pr-6 text-left text-lg text-gray-100">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-300">
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td className="w-1/2 border-t-4 border-gray-800 bg-gray-700 p-4 pl-6 text-sm">
                    {cycle.task}
                  </td>
                  <td className="border-t-4 border-gray-800 bg-gray-700 p-4 text-sm">
                    {cycle.minutesAmount} minutos
                  </td>
                  <td className="border-t-4 border-gray-800 bg-gray-700 p-4 text-sm">
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td className=" border-t-4 border-gray-800 bg-gray-700 p-4 pr-6 text-sm">
                    {cycle.finishedDate && <StatusSpan statusColor="green" />}
                    {cycle.interruptedDate && <StatusSpan statusColor="red" />}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <StatusSpan statusColor="yellow" />
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}
