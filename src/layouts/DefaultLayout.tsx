import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="my-20 mx-40 flex h-[calc(100vh-10rem)] max-w-7xl flex-col rounded-lg bg-gray-800 p-4">
      <Header />
      <Outlet />
    </div>
  )
}
