import PRELOADER from "../../images/preloader.gif";
import "./loadingscreen.css";

const LoadingScreen = () => {
     return(
         <div className="loadingscreen2">
            <img src={ PRELOADER } className="loadingscreen" alt="preloader" width="50%" />
         </div>
     )

}

export default LoadingScreen