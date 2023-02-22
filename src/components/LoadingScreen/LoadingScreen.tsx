import { PacmanLoader } from "react-spinners";

const LoadingScreen = () => {
    return ( <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3rem'}}>
        <PacmanLoader color="#36d7b7" />
        </div> );
}
 
export default LoadingScreen;