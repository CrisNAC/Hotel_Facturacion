import { Container, Skeleton } from "@mui/material";

function HuespedesSkeleton() {
    return (
        <Container>
            <div className='d-flex justify-content-center' style={{ marginTop: "50px" }}><Skeleton variant='text' animation='wave' width={180} height={60}></Skeleton></div>
            <div className='d-flex justify-content-center mb-3'><Skeleton variant='rectangular' animation='wave' width={1200} height={100}></Skeleton></div>
            <div className='d-flex justify-content-center'><Skeleton variant='rectangular' animation='wave' width={1200} height={350}></Skeleton></div>
            <div className='d-flex justify-content-center mt-2'>
                <div className='d-flex'>
                    <Skeleton variant='rectangular' animation='wave' width={100} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                    <Skeleton variant='rectangular' animation='wave' width={30} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                    <Skeleton variant='rectangular' animation='wave' width={30} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                    <Skeleton variant='rectangular' animation='wave' width={30} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                    <Skeleton variant='rectangular' animation='wave' width={100} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                </div>
            </div>
        </Container>
    );
}

export default HuespedesSkeleton;