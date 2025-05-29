// components/MainLayout.jsx
import NavBar from '../../components/navbar.jsx';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-4">
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;
