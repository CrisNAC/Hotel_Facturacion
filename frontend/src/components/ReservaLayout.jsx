// ReservaLayout.jsx
import { Outlet } from 'react-router-dom'
import { ReservaProvider } from '../context/ReservaContext.jsx'

const ReservaLayout = () => {
  return (
    <ReservaProvider>
      <Outlet />
    </ReservaProvider>
  )
}

export default ReservaLayout;