import "./ExploreService.css";
import video from "./Video.mp4";

function ExploreService() {
    return (
        <div id="exploreServiceContainer">
            <div id="exploreServiceRight">
                <video src={video} controls></video>
            </div>
            <div id="exploreServiceLeft">
                <h2>The ultimate platform for wellness and wellbeing</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae quasi quibusdam, repudiandae nihil debitis
                    laudantium a quia aliquam, eius nemo vero ratione
                    repellendus.
                </p>
                <button>Explore Services</button>
            </div>
        </div>
    );
}

export default ExploreService;
