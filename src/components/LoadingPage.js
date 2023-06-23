
import '../styles/LoadingPage.css';
import Foggy from '../images/videos/FOGGY.mp4'
function LoadingPage()  {

    return (
       <div className="video-background">
        <div className="loading-text">Welcome Friend</div>
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src={Foggy} type="video/mp4" />
            </video>
        </div>
 
       
    );
};


export default LoadingPage;

