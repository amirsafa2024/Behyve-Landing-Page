import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainIntro from "./Components/MainIntro/MainIntro";
import Benefit from "./Components/Benefit/Benefit";
import ServiceOption from "./Components/ServiceOption/ServiceOption";
import ExploreService from "./Components/ExploreService/ExploreService";

let benefitsDescription = [
    {
        id: 1,
        description: "Discover the island's hidden wellness talent",
    },
    {
        id: 2,
        description: "300 curated professionals, from artists to therapists",
    },
    {
        id: 3,
        description:
            "Over 70 unique skills, including health, beauty and catering",
    },
    {
        id: 4,
        description: "Recommended by your network of friends",
    },
];
let serviceOptionsDetails = [
    {
        id: 1,
        imgSource: "./Phone.svg",
        imgDesc:
            "Share your positive experiences and see your friends' reviews. Build your network of trusted services.",
        imgHeader: "Friends recommend",
    },
    {
        id: 2,
        imgSource: "./Phone.svg",
        imgDesc:
            "Find the island's best service providers by connect with others and growing your personal network.",
        imgHeader: "Grow your own Hyve",
    },
    {
        id: 3,
        imgSource: "./Phone.svg",
        imgDesc:
            "Follow your favorite providers and stay updated on new services, events and exclusive offers.",
        imgHeader: "Receive exclusive updates",
    },
];

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <MainIntro />
            <br />
            <div className="benefitsContainer">
                {benefitsDescription.map((item, index) => (
                    <Benefit key={item.id} {...item} />
                ))}
            </div>

            <h2 className="serviceOptionTitle">It all start in the Hyve</h2>
            <div className="serviceOptionsContainer">
                {serviceOptionsDetails.map((item, index) => (
                    <ServiceOption key={item.id} {...item} />
                ))}
            </div>

            <div id="inviteFriendsDiv">
                <h2>Grow your Hype and save</h2>
                <p>Invite your friends and enjoy 15% off your first booking.</p>
                <button>Invite friends</button>
            </div>

            <ExploreService />

            <Footer />
        </div>
    );
}

export default App;
