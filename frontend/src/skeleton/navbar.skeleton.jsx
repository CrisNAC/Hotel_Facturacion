import { Skeleton } from "@mui/material";

function NavBarSkeleton() {
    return (
        <div
            className="nav-bar fixed-top w-100 d-flex align-items-center py-2 px-4 mb-1"
            style={{ backgroundColor: "#83A3A8", height: "50px" }}
        >
            {/* Logo Skeleton */}
            <div className="d-flex align-items-center fw-bold fs-4 me-4">
                <Skeleton variant="circular" width={32} height={32} className="me-2" />
                <Skeleton variant="text" width={100} height={50} />
            </div>

            {/* Acciones de navegación Skeleton */}
            <div className="d-flex gap-4 mx-auto flex-grow-1 justify-content-center">
                <Skeleton variant="text" width={80} height={24} />
                <Skeleton variant="text" width={100} height={24} />
                <Skeleton variant="text" width={160} height={24} />
                <Skeleton variant="text" width={140} height={24} />
                <Skeleton variant="text" width={90} height={24} />
            </div>

            {/* Auth section Skeleton */}
            <div className="d-flex align-items-center rounded-2">
                <Skeleton variant="circular" width={24} height={24} className="me-2" />
                <Skeleton variant="rectangular" width={18} height={24} />
            </div>

            {/* Contenido debajo del NavBar */}
            < div style={{ marginTop: "50px" }}>
            </div >
        </div>
    );
}

export default NavBarSkeleton;
