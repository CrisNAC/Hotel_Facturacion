// ReservaLayout.jsx
import { Outlet } from 'react-router-dom'
import { ReservaProvider } from './ReservaContext.jsx';
import { HabitacionProvider } from '../habitacion/HabitacionContext.jsx';

const ReservaLayout = () => {
  return (
      <ReservaProvider>
        <HabitacionProvider>
            <Outlet />
        </HabitacionProvider>
      </ReservaProvider>
  );
}

export default ReservaLayout;