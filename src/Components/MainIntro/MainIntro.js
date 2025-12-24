import "./MainIntro.css";
import phonePic from "./Phone.svg";
import bgPic from "./Behind-the-phone.svg";
function MainIntro() {
    return (
        <div id="mainIntro">
            <div id="leftSideOfMainIntro">
                <h1>Believe The Hype</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, mollitia sed voluptas cumque, officiis quibusdam fuga
                    quia voluptatum voluptatem adipisci dolorum et velit
                    exercitationem eligendi, odio nisi numquam beatae eveniet?
                </p>
                <button className="introBtn">Download the app</button>
                <button className="introBtn">Browse services</button>
            </div>
            <div id="rightSideOfMainIntro">
                <img src={bgPic} className="bgImg" alt="" />
                <img src={phonePic} className="phoneImg" alt="" />
            </div>
        </div>
    );
}

export default MainIntro;
