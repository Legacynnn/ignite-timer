import React from 'react'

const STATUS_COLOR = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
  // textContent: 'Em andamento' | 'Concluído' | 'Interrompido'
}

// before:bg-${STATUS_COLOR[statusColor]}

export function StatusSpan({ statusColor }: StatusProps) {
  return (
    <span
      className={`flex items-center gap-2 before:h-2 before:w-2 before:rounded-full 
      before:bg-${STATUS_COLOR[statusColor]} before:content-['']`}
    >
      {statusColor === 'green' && <div>Concluído</div>}
      {statusColor === 'yellow' && <div>Em andamento</div>}
      {statusColor === 'red' && <div>Interrompido</div>}
    </span>
  )
}
